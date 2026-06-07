
/* BOTÃO */
const medicalButtons = document.querySelectorAll(".medical-btn");

medicalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Consulta sempre um profissional de saúde.");
  });
});

