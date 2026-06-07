// ── LOGIN ──
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Guardar login com a chave correta que o quizz.js verifica
  localStorage.setItem("colosaudavel_logado", "true");

  alert("Login efetuado com sucesso!");

  // Voltar à página anterior (ou ir para o início)
  if (document.referrer && document.referrer !== window.location.href) {
    window.history.back();
  } else {
    window.location.href = "../index.html";
  }
});

// ── ESQUECI A PASSWORD ──
document.getElementById("forgotBtn").addEventListener("click", function() {
  document.getElementById("resetBox").classList.toggle("hidden");
});