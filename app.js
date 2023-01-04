const btn = document.querySelector(".btn")
const link = document.querySelector(".link")

function removeSpacesAndParentheses(str) {
  if (str.charAt(0).toLowerCase() === "x") {
    str = str.substring(1);
  }
  return str.replace(/\s/g, '').replace(/[()]/g, '');
}

btn.addEventListener("click", (e) => {
    let couponValue = removeSpacesAndParentheses(link.value);
    link.value = couponValue;
    link.select()
    link.setSelectionRange(0, 999999)
    navigator.clipboard.writeText(couponValue)
    btn.textContent = "Copied!!"
    setTimeout(() => {
        btn.textContent = "Copy"
    }, 3000)
})
