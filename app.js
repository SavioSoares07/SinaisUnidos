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

  // Limpar a lista antes de adicionar novos itens
  clearList();

  for (let letter of inpForm) {
    const lowercaseLetter = letter.toLowerCase();
    switch (lowercaseLetter) {
      case "a":
      case "b":
      case "c":
      case "d":
      case "e":
      case "f":
      case "g":
      case "h":
      case "i":
      case "j":
      case "k":
      case "l":
      case "m":
      case "n":
      case "o":
      case "p":
      case "q":
      case "r":
      case "s":
      case "t":
      case "u":
      case "v":
      case "w":
      case "x":
      case "y":
      case "z":
        createList(letter);
        break;
      // Adicione outros casos conforme necessário
    }
  }

  function createList(letter) {
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");

    newImg.src = `./img/${letter.toUpperCase()}.png`;
    newLi.append(newImg);

    document.getElementById("container-list").appendChild(newLi);
  }

  // Função para limpar a lista
  function clearList() {
    const containerList = document.getElementById("container-list");
    // Remover todos os elementos filhos do container-list
    while (containerList.firstChild) {
      containerList.removeChild(containerList.firstChild);
    }
  }
}
