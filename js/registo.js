document.addEventListener('DOMContentLoaded', function() {

  /* ── HAMBURGER ── */
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    });
  }

  /* ── ACESSIBILIDADE ── */
  const accBtn   = document.getElementById("accessibility-btn");
  const accPanel = document.getElementById("accessibility-panel");
  const closeBtn = document.getElementById("close-panel");
  if (accBtn)   accBtn.addEventListener("click",  () => accPanel.classList.add("open"));
  if (closeBtn) closeBtn.addEventListener("click", () => accPanel.classList.remove("open"));

  const range    = document.getElementById("rangeText");
  const btnPlus  = document.getElementById("btnPlus");
  const btnMinus = document.getElementById("btnMinus");
  const btnReset = document.getElementById("btnReset");
  let scale = 100;

  if (range)    range.addEventListener("input",  () => { scale = Number(range.value); document.documentElement.style.fontSize = scale + "%"; scale !== 100 ? localStorage.setItem("textScale", scale) : localStorage.removeItem("textScale"); });
  if (btnPlus)  btnPlus.addEventListener("click",  () => { scale = Math.min(scale+10,150); range.value=scale; document.documentElement.style.fontSize=scale+"%"; localStorage.setItem("textScale",scale); });
  if (btnMinus) btnMinus.addEventListener("click", () => { scale = Math.max(scale-10,80);  range.value=scale; document.documentElement.style.fontSize=scale+"%"; localStorage.setItem("textScale",scale); });
  if (btnReset) btnReset.addEventListener("click", () => { scale=100; range.value=100; document.documentElement.style.fontSize="100%"; localStorage.removeItem("textScale"); });

  const dark = document.getElementById("dark-btn");
  const gray = document.getElementById("grayscale-btn");
  if (dark) dark.addEventListener("click", () => document.body.classList.toggle("dark-mode"));
  if (gray) gray.addEventListener("click", () => document.body.classList.toggle("grayscale"));

  let aLer=false, pausado=false;
  const btnOuvir = document.getElementById("btnOuvir");
  if (btnOuvir) btnOuvir.addEventListener("click", () => {
    if (!aLer) { const u=new SpeechSynthesisUtterance(document.body.innerText); u.lang="pt-PT"; u.rate=0.8; speechSynthesis.speak(u); aLer=true; pausado=false; }
    else if (!pausado) { speechSynthesis.pause(); pausado=true; }
    else { speechSynthesis.resume(); pausado=false; }
  });

  window.addEventListener("load", () => {
    const saved = localStorage.getItem("textScale");
    if (saved && range) { scale=Number(saved); range.value=scale; document.documentElement.style.fontSize=scale+"%"; }
  });

  /* ── PREENCHER ANOS (1940 a 2010) ── */
  const selectAno = document.getElementById("selectAno");
  if (selectAno) {
    const anoAtual = new Date().getFullYear();
    for (let a = anoAtual - 13; a >= 1940; a--) {
      const opt = document.createElement("option");
      opt.value = a;
      opt.textContent = a;
      selectAno.appendChild(opt);
    }
  }

  /* ── CARREGAR DADOS GUARDADOS ── */
  const campos = ["regNome","regApelido","regEmail","regDia","regMes","regAno"];
  campos.forEach(id => {
    const el = document.getElementById(id);
    const saved = localStorage.getItem("registo_" + id);
    if (el && saved) el.value = saved;
  });

  /* ── GUARDAR ENQUANTO ESCREVE ── */
  campos.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input",  () => localStorage.setItem("registo_" + id, el.value));
      el.addEventListener("change", () => localStorage.setItem("registo_" + id, el.value));
    }
  });

  /* ── SUBMETER REGISTO ── */
  document.getElementById("registoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome    = document.getElementById("regNome").value.trim();
    const apelido = document.getElementById("regApelido").value.trim();
    const email   = document.getElementById("regEmail").value.trim();
    const pass    = document.getElementById("regPass").value;
    const dia     = document.getElementById("regDia").value;
    const mes     = document.getElementById("regMes").value;
    const ano     = document.getElementById("regAno").value;

    if (!nome || !apelido || !email || !pass || !dia || !mes || !ano) {
      alert("Por favor preenche todos os campos.");
      return;
    }

    // Guardar dados do utilizador
    const utilizador = { nome, apelido, email, dataNasc: `${dia}/${mes}/${ano}` };
    localStorage.setItem("colosaudavel_utilizador", JSON.stringify(utilizador));
    localStorage.setItem("colosaudavel_logado", "true");

    // Limpar dados temporários do formulário
    campos.forEach(id => localStorage.removeItem("registo_" + id));

    alert(`Bem-vindo(a), ${nome}! Registo efetuado com sucesso.`);
    window.location.href = "../index.html";
  });

});