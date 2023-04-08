const btn = document.querySelector(".btn");
const link = document.querySelector(".link");

function fixer(str) {
  str = str.replace(/.*(https:\/\/)/, "https://"); // remove any text before https://
  if (!str.match(/^https:\/\//)) { // if input don't have https: add it
    str = 'https://' + str;
  }
  str = str.replace(/\s/g, ''); // remove any whitespace
  str = str.replace(/[()]/g, ''); // remove any parentheses
  str = str.replace(/\/\./g, '/'); // replace any slashes before dots with just a slash
  str = str.replace(/(\.\/)/g, '.'); // replace any dot-slash sequences with just a dot
  return str;
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
