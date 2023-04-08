const btn = document.querySelector(".btn");
const link = document.querySelector(".link");

function fixer(str) {
  str = str.replace(/\n/g, ''); // remove any newline characters
  str = str.replace(/[()]/g, ''); // remove any parentheses
  str = str.replace(/(https:\/\/www\.)\//g, '$1'); // replace any forward slashes after https://www with just a dot
  str = str.replace(/\/\./g, '/'); // replace any slashes before dots with just a slash
  str = str.replace(/(\.\/)/g, '.'); // replace any dot-slash sequences with just a dot
  
  var regex = /(https?:\/\/)?([\w.-]+)(\/[\w.-\/]*)?/i;
  var matches = str.match(regex);
  if (!matches) {
    return null;
  }
  var protocol = matches[1] || 'https://';
  var domain = matches[2];
  var path = matches[3] || '';
  path = path.replace(/\s/g, '').replace(/[()]/g, '');
  path = path.replace(/(\.\/)/g, '.');

  if (domain === 'www.pixiv.net') {
    // format Pixiv link
    path = path.replace(/^\/?(en\/artworks\/\d+)/, '/en/artworks/$1');
    domain = 'www.pixiv.net';
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
