
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const nome = card.querySelector("p").textContent;
    alert("Informações sobre: " + nome);
  });
});

document.getElementById("btnAjuda").addEventListener("click", () => {
  alert("A redirecionar para contactos médicos...");
});

