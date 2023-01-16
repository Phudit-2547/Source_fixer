const btn = document.querySelector(".btn")
const link = document.querySelector(".link")

function fixer(str) {
  if (!str.match(/^[a-zA-Z]+:///)) {
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
