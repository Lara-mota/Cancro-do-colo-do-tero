document
  .getElementById("formContacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    alert(" Mensagem enviada com sucesso!");

    this.reset();
  });

