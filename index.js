document.addEventListener('DOMContentLoaded', () => {
    alert('Bem-vindo ao site da Doceria Luvi!');
});

function logSubmit(event) {
    event.preventDefault();
  
    const nome = event.target[0].value;
    const email = event.target[1].value;
    const contato = event.target[2].value;
  
    if (!nome || !email || !contato) {
      log.textContent = "Preencha todos os campos.";
    } else {
      log.textContent = "Seu nome é: " + nome;
    }  
  }
  
  const form = document.getElementById("form");
  const log = document.getElementById("log");
  form.addEventListener("submit", logSubmit);