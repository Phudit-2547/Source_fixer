const btn = document.querySelector(".btn");
const link = document.querySelector(".link");

function fixURL(str) {
  let output = "";
  let regex = /(https?:\/\/)([\w\-.]+)(\/[\w\-.\/]*)/g; // Regular expression to match URLs
  let match = regex.exec(str); // Find the first match in the input string
  
  if (match !== null) { // If a match is found, fix the URL
    let domain = match[2];
    domain = domain.replace("(", "").replace(")", ""); // Remove parentheses, if any
    output = str.replace(match[2], domain);
  }
  
  return output;
}

btn.addEventListener("click", (e) => {
  let myUrl = fixURL(link.value);
  link.value = myUrl;
  link.select();
  link.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(myUrl);
  btn.textContent = "Copied!!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
});
