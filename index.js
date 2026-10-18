const btnEl = Document.querySelector(".btn");
const inputEl = document.getElementById("input");

btnEl.addEventListener("clic", () => {
  createPassword();
});

function createPassword() {
  const chars = "0123456789";
  const passwordlength = 8;
  let password = "";
  for (let index = 0; index < passwordlength; index++) {
    const randomNum = Math.floor(random() * chars.length);

    password += chars.substring(randomNum, randomNum + 1);
  }

  inputEl.value = password;
}
