const btn = document.querySelector(".btn");
const link = document.querySelector(".link");

function fixer(str) {
  var regex = /^(https?:\/\/)?([\w.-]+)(.*)$/;
  var matches = str.match(regex);
  if (!matches) {
    return null; // return null if the input string doesn't contain a valid URL
  }
  var protocol = matches[1] || 'https://'; // if protocol is missing, assume https://
  var domain = matches[2].replace(/\//g, ''); // remove any forward slashes in the domain name
  var path = matches[3].replace(/\s/g, '').replace(/[()]/g, ''); // remove any whitespace and parentheses from the path
  path = path.replace(/(\.\/)/g, '.'); // replace any dot-slash sequences with just a dot
  
  if (domain === 'www.pixiv.net') {
    // format Pixiv link
    path = path.replace(/^\/?(en\/artworks\/\d+)/, '/en/artworks/$1');
    domain = 'www.pixiv.net'; // replace "www/" with "www."
  } else if (domain === 'www.twitter.com') {
    // format Twitter link
    path = path.replace(/^\/?(.*?)\/status\/(\d+)/, '/$1/status/$2');
    domain = 'www.twitter.com';
  }
  
  return protocol + domain + path;
}

btn.addEventListener("click", (e) => {
  let myUrl = fixer(link.value);
  link.value = myUrl;
  link.select();
  link.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(myUrl);
  btn.textContent = "Copied!!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
});
