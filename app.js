const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  console.log("CLickado");
});

const btnSend = document
  .getElementById("btn-send")
  .addEventListener("click", () => {
    generatorHands();
  });

function generatorHands() {
  const inpForm = document.getElementById("inpForm").value;

  if (inpForm == "") {
    alert("Por favor informe algum valor");
    return;
  }

  for (let letter of inpForm) {
    console.log(letter);
  }
}
