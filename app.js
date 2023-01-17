const btn = document.querySelector(".btn")
const link = document.querySelector(".link")

function fixer(str) {
  str = str.replace(/.*(https:\/\/)/, "https://"); // remove any text before https://
  if (!str.match(/^https:\/\//)) { // if input don't have https: add it
    str = 'https://' + str;
  }
  return str.replace(/\s/g, '').replace(/[()]/g, '');
}

btn.addEventListener("click", (e) => {
    let myUrl = fixer(link.value);
    link.value = myUrl;
    link.select()
    link.setSelectionRange(0, 999999)
    navigator.clipboard.writeText(myUrl)
    btn.textContent = "Copied!!"
    setTimeout(() => {
        btn.textContent = "Copy"
    }, 3000)
})
