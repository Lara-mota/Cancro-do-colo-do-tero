// ===== MENU HAMBURGER =====
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  document.body.style.overflow = mobileMenu.classList.contains("open")
    ? "hidden"
    : "";
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  });
});

/* Acessibilidade */
const btn = document.getElementById("accessibility-btn");
const panel = document.getElementById("accessibility-panel");
const closeBtn = document.getElementById("close-panel");


// ===== ABRIR =====
btn.addEventListener("click", () => {
  panel.classList.add("open");
  closeBtn.focus(); // foco no painel
});

// fechar
closeBtn.addEventListener("click", () => {
  panel.classList.remove("open");
});

const range = document.getElementById("rangeText");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnReset = document.getElementById("btnReset");

let scale = 100;

// ===== SLIDER =====
range.addEventListener("input", () => {
  scale = Number(range.value); 
  document.documentElement.style.fontSize = scale + "%";

  if (scale !== 100) {
    localStorage.setItem("textScale", scale);
  } else {
    localStorage.removeItem("textScale");
  }
});

// ===== BOTÃO + =====
btnPlus.addEventListener("click", () => {
  scale = Number(scale) + 10;

  if (scale > 150) scale = 150;

  range.value = scale;
  document.documentElement.style.fontSize = scale + "%";
  localStorage.setItem("textScale", scale);
});

// ===== BOTÃO - =====
btnMinus.addEventListener("click", () => {
  scale = Number(scale) - 10;

  if (scale < 80) scale = 80;

  range.value = scale;
  document.documentElement.style.fontSize = scale + "%";
  localStorage.setItem("textScale", scale);
});

// ===== RESET =====
btnReset.addEventListener("click", () => {
  scale = 100;
  range.value = 100;
  document.documentElement.style.fontSize = "100%";
  localStorage.removeItem("textScale"); 
});

// ===== CARREGAR =====
window.addEventListener("load", () => {
  const saved = localStorage.getItem("textScale");

  if (saved) {
    scale = Number(saved); 

    if (scale >= 80 && scale <= 150) {
      range.value = scale;
      document.documentElement.style.fontSize = scale + "%";
    } else {
      localStorage.removeItem("textScale");
      scale = 100;
    }
  } else {
    // garantir estado inicial correcto
    range.value = 100;
    document.documentElement.style.fontSize = "100%";
  }
});

// ===== FUNCIONALIDADES =====

// modo escuro
document.getElementById("dark-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// monocromático
document.getElementById("grayscale-btn").addEventListener("click", () => {
  document.body.classList.toggle("grayscale");
});

// ===== LEITOR DE TEXTO =====
const btnOuvir = document.getElementById("btnOuvir");
let aLer = false;
let pausado = false;
let utterance;

btnOuvir.addEventListener("click", () => {
  if (!aLer) {
    const texto = document.body.innerText;
    utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-PT";
    utterance.rate = 0.8;

    speechSynthesis.speak(utterance);
    aLer = true;
    pausado = false;
  } else if (!pausado) {
    speechSynthesis.pause();
    pausado = true;
  } else {
    speechSynthesis.resume();
    pausado = false;
  }
});

/* 
Estatisticas de tempo gasto */
let inicio = Date.now();

window.addEventListener("beforeunload", () => {
    let fim = Date.now();
    let tempo = (fim - inicio) / 1000;

    let dados = JSON.parse(localStorage.getItem("dados")) || [];

    dados.push({
        pagina: window.location.pathname,
        tempo: tempo
    });

    localStorage.setItem("dados", JSON.stringify(dados));
});
