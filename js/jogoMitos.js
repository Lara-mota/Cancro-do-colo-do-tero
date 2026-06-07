
/* ── BANCO DE PERGUNTAS ── */
const BANCO = [
  { tipo:"mito", tema:"Rastreio",
    q:"O exame de Papanicolau é suficiente — não é preciso vacinação.",
    opts:["Mito","Verdade"], a:0,
    explicacao:"MITO ✅ O rastreio deteta lesões mas não previne a infeção por HPV. A estratégia mais eficaz combina vacinação com rastreios regulares." },
  { tipo:"mito", tema:"Segurança",
    q:"A vacina contra o HPV é recente e não é segura.",
    opts:["Mito","Verdade"], a:0,
    explicacao:"MITO ✅ A vacina tem mais de 25 anos de investigação e a sua segurança é amplamente comprovada pela OMS." },
  { tipo:"mito", tema:"Segurança",
    q:"A vacina contra o HPV pode causar infertilidade ou falência ovárica.",
    opts:["Mito","Verdade"], a:0,
    explicacao:"MITO ✅ Estudos de grande dimensão não demonstram qualquer associação entre a vacinação e insuficiência ovárica." },
  { tipo:"mito", tema:"Vacinação",
    q:"Os rapazes não precisam da vacina contra o HPV.",
    opts:["Mito","Verdade"], a:0,
    explicacao:"MITO ✅ O HPV está associado a cancros do canal anal, pénis e orofaringe. A vacinação de ambos os sexos promove a imunidade de grupo." },
  { tipo:"mito", tema:"Vacinação",
    q:"A vacina do HPV deixa de funcionar após a primeira relação sexual.",
    opts:["Mito","Verdade"], a:0,
    explicacao:"MITO ✅ A vacina continua a oferecer proteção significativa mesmo após o início da atividade sexual." },
  { tipo:"mito", tema:"Transmissão",
    q:"A infeção natural pelo HPV protege o organismo como uma vacina.",
    opts:["Mito","Verdade"], a:0,
    explicacao:"MITO ✅ A infeção natural não induz resposta imunitária robusta. A vacinação induz uma resposta forte e duradoura." },
  { tipo:"mito", tema:"Cuidado Contínuo",
    q:"A vacina do HPV promove comportamentos sexuais de risco.",
    opts:["Mito","Verdade"], a:0,
    explicacao:"MITO ✅ Os estudos não demonstram qualquer aumento de comportamentos de risco após a vacinação." },
  { tipo:"verdade", tema:"Rastreio",
    q:"O cancro do colo do útero é quase sempre silencioso nas fases iniciais.",
    opts:["Mito","Verdade"], a:1,
    explicacao:"VERDADE ✅ Na maioria dos casos não há sintomas nas fases iniciais — daí a importância crucial do rastreio regular." },
  { tipo:"verdade", tema:"Vacinação",
    q:"A vacinação é mais eficaz quando feita antes do início da atividade sexual.",
    opts:["Mito","Verdade"], a:1,
    explicacao:"VERDADE ✅ A resposta imunitária é mais forte na adolescência e a vacina protege antes do contacto com o vírus." },
  { tipo:"verdade", tema:"Segurança",
    q:"Os efeitos secundários mais comuns da vacina contra o HPV são ligeiros, como dor no local da injeção.",
    opts:["Mito","Verdade"], a:1,
    explicacao:"VERDADE ✅ Os ensaios clínicos confirmam que os efeitos secundários são maioritariamente ligeiros e passageiros." },
  { tipo:"verdade", tema:"Rastreio",
    q:"O exame de Papanicolau permite detetar lesões antes de se tornarem cancro.",
    opts:["Mito","Verdade"], a:1,
    explicacao:"VERDADE ✅ O Papanicolau deteta alterações celulares pré-cancerosas, permitindo tratamento atempado." },
  { tipo:"verdade", tema:"Transmissão",
    q:"O HPV é o principal responsável pelo desenvolvimento do cancro do colo do útero.",
    opts:["Mito","Verdade"], a:1,
    explicacao:"VERDADE ✅ A infeção persistente por HPV de alto risco é responsável por mais de 99% dos casos." },
  { tipo:"curiosidade", tema:"Curiosidade",
    q:"Qual a percentagem de casos de cancro do colo do útero que podem ser prevenidos com vacinação e rastreio?",
    opts:["Cerca de 50%","Mais de 90%"], a:1,
    explicacao:"🌟 Com vacinação e rastreio regulares, mais de 90% dos casos de cancro do colo do útero podem ser prevenidos." },
  { tipo:"curiosidade", tema:"Curiosidade",
    q:"Em Portugal, a partir de que idade é recomendado iniciar o rastreio do colo do útero?",
    opts:["18 anos","25 anos"], a:1,
    explicacao:"🌟 Em Portugal, o rastreio organizado começa aos 25 anos e vai até aos 64 anos, com periodicidade de 3 em 3 anos." },
  { tipo:"curiosidade", tema:"Curiosidade",
    q:"A vacina nonavalente protege contra quantos tipos de HPV?",
    opts:["4 tipos","9 tipos"], a:1,
    explicacao:"🌟 A vacina nonavalente (Gardasil 9) protege contra 9 tipos de HPV — os responsáveis pela maioria dos cancros cervicais." }
];

/* ── TABULEIRO: 13 casas — SÓ casas com conteúdo, sem casas brancas excessivas ── */
const CASAS = [
  { tipo:"inicio",      cor:"#4E0586", emoji:"🏁", label:"Início" },
  { tipo:"mito",        cor:"#CBB9F9", emoji:"❓", label:"Mito" },
  { tipo:"verdade",     cor:"#B9F9DC", emoji:"✓",  label:"Verdade" },
  { tipo:"curiosidade", cor:"#F9DBB9", emoji:"⭐", label:"Saber+" },
  { tipo:"mito",        cor:"#CBB9F9", emoji:"❓", label:"Mito" },
  { tipo:"verdade",     cor:"#B9F9DC", emoji:"✓",  label:"Verdade" },
  { tipo:"mito",        cor:"#CBB9F9", emoji:"❓", label:"Mito" },
  { tipo:"curiosidade", cor:"#F9DBB9", emoji:"⭐", label:"Saber+" },
  { tipo:"verdade",     cor:"#B9F9DC", emoji:"✓",  label:"Verdade" },
  { tipo:"mito",        cor:"#CBB9F9", emoji:"❓", label:"Mito" },
  { tipo:"curiosidade", cor:"#F9DBB9", emoji:"⭐", label:"Saber+" },
  { tipo:"verdade",     cor:"#B9F9DC", emoji:"✓",  label:"Verdade" },
  { tipo:"mito",        cor:"#CBB9F9", emoji:"❓", label:"Mito" },
  { tipo:"chegada",     cor:"#FFD700", emoji:"🏆", label:"Meta" }
];

const TOTAL_CASAS = CASAS.length - 1;

/* ── CONQUISTAS ── */
const CONQUISTAS = [
  { id:"cq1", emoji:"🌱", titulo:"Primeira resposta certa!", desc:"Acertaste na tua primeira pergunta. O conhecimento começa aqui!", threshold:1 },
  { id:"cq2", emoji:"⭐", titulo:"Meio caminho andado!", desc:"Acertaste em 5 respostas. Estás a tornar-te um(a) especialista!", threshold:5 },
  { id:"cq3", emoji:"🏆", titulo:"Expert em prevenção!", desc:"Acertaste em todas as perguntas. Dominas a prevenção do cancro do colo do útero!", threshold:10 }
];

/* ── COORDENADAS: percurso em U ocupando todo o SVG 760x380 ── */
function obterCoordenadas() {
  // Margem e espaçamento
  const mx = 55, my = 60;
  const largura = 650, step = largura / 6; // 6 colunas

  return [
    // Linha BAIXO esquerda→direita (casas 0-6)
    { x: mx,            y: 320 }, // 0 Início
    { x: mx + step*1,   y: 320 }, // 1
    { x: mx + step*2,   y: 320 }, // 2
    { x: mx + step*3,   y: 320 }, // 3
    { x: mx + step*4,   y: 320 }, // 4
    { x: mx + step*5,   y: 320 }, // 5
    { x: mx + step*6,   y: 320 }, // 6

    // Coluna DIREITA desce→sobe (casa 7)
    { x: mx + step*6,   y: 190 }, // 7

    // Linha CIMA direita→esquerda (casas 8-13)
    { x: mx + step*6,   y: my  }, // 8
    { x: mx + step*5,   y: my  }, // 9
    { x: mx + step*4,   y: my  }, // 10
    { x: mx + step*3,   y: my  }, // 11
    { x: mx + step*2,   y: my  }, // 12
    { x: mx + step*1,   y: my  }, // 13 Meta
  ];
}

/* ── ESTADO ── */
let pos = 0, gameOver = false, waiting = false, acertos = 0;
let perguntasUsadas = { mito:[], verdade:[], curiosidade:[] };
let conquistasDesbloqueadas = [];

/* ── DRAW BOARD ── */
function drawBoard() {
  const svg = document.getElementById("board-svg");
  svg.innerHTML = "";
  const coords = obterCoordenadas();

  // Gradiente
  const defs = document.createElementNS("http://www.w3.org/2000/svg","defs");
  defs.innerHTML = `<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:#914AC8;stop-opacity:1"/>
    <stop offset="100%" style="stop-color:#4E0586;stop-opacity:1"/>
  </linearGradient>`;
  svg.appendChild(defs);

  // Trilho — desenhar segmentos
  const segmentos = [
    [0,6],[6,7],[7,8],[8,13]
  ];
  segmentos.forEach(([de,ate]) => {
    for (let i = de; i < ate; i++) {
      const c1 = coords[i], c2 = coords[i+1];
      const line = document.createElementNS("http://www.w3.org/2000/svg","line");
      line.setAttribute("x1", c1.x); line.setAttribute("y1", c1.y);
      line.setAttribute("x2", c2.x); line.setAttribute("y2", c2.y);
      line.setAttribute("stroke", "url(#grad1)");
      line.setAttribute("stroke-width", "5");
      line.setAttribute("stroke-linecap", "round");
      svg.appendChild(line);

      // Seta de direção no meio do segmento
      const mx = (c1.x + c2.x) / 2, my = (c1.y + c2.y) / 2;
      const dx = c2.x - c1.x, dy = c2.y - c1.y;
      const ang = Math.atan2(dy, dx) * 180 / Math.PI;
      const arr = document.createElementNS("http://www.w3.org/2000/svg","text");
      arr.setAttribute("x", mx); arr.setAttribute("y", my + 5);
      arr.setAttribute("text-anchor","middle");
      arr.setAttribute("font-size","12");
      arr.setAttribute("fill","#4E0586");
      arr.setAttribute("transform",`rotate(${ang},${mx},${my})`);
      arr.textContent = "▶";
      svg.appendChild(arr);
    }
  });

  // Casas
  coords.forEach((coord, i) => {
    const casa = CASAS[i];
    const g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g.style.cursor = "default";

    // Sombra
    const sh = document.createElementNS("http://www.w3.org/2000/svg","rect");
    sh.setAttribute("x", coord.x-26); sh.setAttribute("y", coord.y-22);
    sh.setAttribute("width","52"); sh.setAttribute("height","52");
    sh.setAttribute("rx","12"); sh.setAttribute("fill","rgba(78,5,134,0.12)");
    g.appendChild(sh);

    // Casa principal
    const rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
    rect.setAttribute("x", coord.x-24); rect.setAttribute("y", coord.y-24);
    rect.setAttribute("width","48"); rect.setAttribute("height","48");
    rect.setAttribute("rx","12");
    rect.setAttribute("fill", casa.cor);
    rect.setAttribute("stroke", i === pos ? "#4E0586" : "#fff");
    rect.setAttribute("stroke-width", i === pos ? "4" : "2.5");
    g.appendChild(rect);

    // Emoji
    const txt = document.createElementNS("http://www.w3.org/2000/svg","text");
    txt.setAttribute("x", coord.x); txt.setAttribute("y", coord.y + 6);
    txt.setAttribute("text-anchor","middle");
    txt.setAttribute("font-size","18");
    txt.textContent = casa.emoji;
    g.appendChild(txt);

    // Label abaixo (tipo da casa)
    const lbl = document.createElementNS("http://www.w3.org/2000/svg","text");
    lbl.setAttribute("x", coord.x); lbl.setAttribute("y", coord.y + 36);
    lbl.setAttribute("text-anchor","middle");
    lbl.setAttribute("font-size","9");
    lbl.setAttribute("fill","#6B3FA0");
    lbl.setAttribute("font-weight","600");
    lbl.textContent = casa.label;
    g.appendChild(lbl);

    svg.appendChild(g);
  });

  // Legenda
  const legenda = [
    { cor:"#CBB9F9", txt:"❓ Mito",        x:30  },
    { cor:"#B9F9DC", txt:"✓ Verdade",      x:140 },
    { cor:"#F9DBB9", txt:"⭐ Curiosidade", x:250 }
  ];
  legenda.forEach(item => {
    const gr = document.createElementNS("http://www.w3.org/2000/svg","g");
    const rc = document.createElementNS("http://www.w3.org/2000/svg","rect");
    rc.setAttribute("x", item.x); rc.setAttribute("y","8");
    rc.setAttribute("width","12"); rc.setAttribute("height","12");
    rc.setAttribute("rx","3"); rc.setAttribute("fill", item.cor);
    rc.setAttribute("stroke","#D8BFF0"); rc.setAttribute("stroke-width","1");
    gr.appendChild(rc);
    const lt = document.createElementNS("http://www.w3.org/2000/svg","text");
    lt.setAttribute("x", item.x+16); lt.setAttribute("y","19");
    lt.setAttribute("font-size","10"); lt.setAttribute("fill","#4E0586");
    lt.textContent = item.txt;
    gr.appendChild(lt);
    svg.appendChild(gr);
  });

  // Dado no centro (zona vazia entre as duas linhas)
  const dadoG = document.createElementNS("http://www.w3.org/2000/svg","g");
  dadoG.setAttribute("id","dado-svg");

  const dadoRect = document.createElementNS("http://www.w3.org/2000/svg","rect");
  dadoRect.setAttribute("x","310"); dadoRect.setAttribute("y","158");
  dadoRect.setAttribute("width","130"); dadoRect.setAttribute("height","54");
  dadoRect.setAttribute("rx","27"); dadoRect.setAttribute("fill","#4E0586");
  dadoRect.setAttribute("filter","drop-shadow(0 4px 8px rgba(78,5,134,0.4))");
  dadoRect.style.cursor = "pointer";
  dadoRect.onclick = rollDice;
  dadoG.appendChild(dadoRect);

  const dadoTxt = document.createElementNS("http://www.w3.org/2000/svg","text");
  dadoTxt.setAttribute("x","375"); dadoTxt.setAttribute("y","192");
  dadoTxt.setAttribute("text-anchor","middle");
  dadoTxt.setAttribute("font-size","18");
  dadoTxt.setAttribute("fill","white");
  dadoTxt.setAttribute("font-weight","700");
  dadoTxt.setAttribute("font-family","Abhaya Libre, serif");
  dadoTxt.style.cursor = "pointer";
  dadoTxt.onclick = rollDice;
  dadoTxt.textContent = "🎲 Lançar dado";
  dadoG.appendChild(dadoTxt);

  svg.appendChild(dadoG);

  drawPawn();
}

/* ── PEÃO ── */
function drawPawn() {
  const old = document.getElementById("pawn");
  if (old) old.remove();
  const coords = obterCoordenadas();
  const c = coords[Math.min(pos, TOTAL_CASAS)];
  const svg = document.getElementById("board-svg");
  const g = document.createElementNS("http://www.w3.org/2000/svg","g");
  g.setAttribute("id","pawn");

  // Brilho
  const glow = document.createElementNS("http://www.w3.org/2000/svg","circle");
  glow.setAttribute("cx", c.x); glow.setAttribute("cy", c.y);
  glow.setAttribute("r","22"); glow.setAttribute("fill","rgba(78,5,134,0.2)");
  g.appendChild(glow);

  const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
  circle.setAttribute("cx", c.x); circle.setAttribute("cy", c.y);
  circle.setAttribute("r","16"); circle.setAttribute("fill","#4E0586");
  circle.setAttribute("stroke","#fff"); circle.setAttribute("stroke-width","3");
  g.appendChild(circle);

  const t = document.createElementNS("http://www.w3.org/2000/svg","text");
  t.setAttribute("x", c.x); t.setAttribute("y", c.y+6);
  t.setAttribute("text-anchor","middle"); t.setAttribute("font-size","15");
  t.textContent = "👤";
  g.appendChild(t);

  svg.appendChild(g);
}

/* ── LANÇAR DADO ── */
function rollDice() {
  if (gameOver || waiting) return;

  // Animar botão no SVG
  const dadoTxt = document.querySelector("#dado-svg text");
  if (dadoTxt) dadoTxt.textContent = "🎲 ...";

  const steps = Math.floor(Math.random() * 2) + 1;

  setTimeout(() => {
    const faces = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣"];
    if (dadoTxt) dadoTxt.textContent = `${faces[steps-1]} Lançar dado`;

    pos = Math.min(pos + steps, TOTAL_CASAS);
    drawBoard();

    const casa = CASAS[pos];
    if (pos >= TOTAL_CASAS) { endGame(); return; }

    if (casa.tipo !== "inicio") {
      document.getElementById("log").textContent =
        `Avançaste ${steps} casa${steps>1?"s":""}! Casa de ${
          casa.tipo==="curiosidade"?"Curiosidade":
          casa.tipo==="mito"?"Mito":"Verdade"} — responde!`;
      abrirQuiz(casa.tipo);
    } else {
      document.getElementById("log").textContent =
        `Avançaste ${steps} casa${steps>1?"s":""}! Casa livre — lança novamente.`;
    }
  }, 450);
}

/* ── ABRIR QUIZ ── */
function abrirQuiz(tipo) {
  waiting = true;
  document.getElementById("roll-btn").disabled = true;

  const pool = BANCO.filter(m => m.tipo===tipo && !perguntasUsadas[tipo].includes(m.q));
  const disponiveis = pool.length > 0 ? pool : BANCO.filter(m => m.tipo===tipo);
  const pergunta = disponiveis[Math.floor(Math.random() * disponiveis.length)];

  const temaLabel = {
    mito: "❓ É Mito ou Verdade?",
    verdade: "✓ É Mito ou Verdade?",
    curiosidade: "⭐ Curiosidade — Sabes a resposta?"
  };

  document.getElementById("quiz-theme").textContent = temaLabel[tipo] + "  •  " + pergunta.tema;
  document.getElementById("quiz-q").textContent = pergunta.q;

  const explicacaoDiv = document.getElementById("quiz-explicacao");
  explicacaoDiv.textContent = "";
  explicacaoDiv.classList.remove("visivel");

  const optsDiv = document.getElementById("quiz-opts");
  optsDiv.innerHTML = "";
  pergunta.opts.forEach((opcao, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(idx, pergunta.a, optsDiv, pergunta, tipo);
    optsDiv.appendChild(btn);
  });

  document.getElementById("quiz-box").classList.add("visible");
  document.getElementById("quiz-box").scrollIntoView({ behavior:"smooth", block:"nearest" });
}

/* ── VERIFICAR RESPOSTA ── */
function verificarResposta(escolhido, correto, optsDiv, pergunta, tipo) {
  Array.from(optsDiv.children).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correto) btn.classList.add("correct");
    else if (idx === escolhido && idx !== correto) btn.classList.add("wrong");
  });

  const explicacaoDiv = document.getElementById("quiz-explicacao");
  explicacaoDiv.textContent = pergunta.explicacao;
  explicacaoDiv.classList.add("visivel");
  perguntasUsadas[tipo].push(pergunta.q);

  if (escolhido === correto) {
    acertos++;
    atualizarPerfil();
    document.getElementById("log").textContent = "✅ Correto! Muito bem!";
  } else {
    document.getElementById("log").textContent = "❌ Incorreto! Lê a explicação e continua.";
  }

  setTimeout(() => {
    document.getElementById("quiz-box").classList.remove("visible");
    explicacaoDiv.classList.remove("visivel");
    waiting = false;
    document.getElementById("roll-btn").disabled = false;
  }, 4000);
}

/* ── PERFIL E CONQUISTAS ── */
function atualizarPerfil() {
  const pct = (acertos / 10) * 100;
  document.getElementById("xp-fill").style.width = `${Math.min(pct,100)}%`;
  document.getElementById("xp-text").textContent = `${acertos} / 9 mitos`;

  CONQUISTAS.forEach(cq => {
    if (acertos >= cq.threshold && !conquistasDesbloqueadas.includes(cq.id)) {
      conquistasDesbloqueadas.push(cq.id);
      desbloquearConquista(cq);
    }
  });
}

function desbloquearConquista(cq) {
  // Atualizar ícone na barra lateral
  const el = document.getElementById(cq.id);
  if (el) { el.textContent = cq.emoji; el.classList.add("active"); }

  // Notificação no ecrã
  const notif = document.createElement("div");
  notif.className = "conquista-notif";
  notif.innerHTML = `
    <div class="conquista-notif-inner">
      <span class="conquista-notif-emoji">${cq.emoji}</span>
      <div>
        <strong>Conquista desbloqueada!</strong>
        <p>${cq.titulo}</p>
        <small>${cq.desc}</small>
      </div>
      <button onclick="this.parentElement.parentElement.remove()">✕</button>
    </div>`;
  document.body.appendChild(notif);

  // Auto-remover após 5 segundos
  setTimeout(() => { if (notif.parentElement) notif.remove(); }, 5000);
}

/* ── FIM ── */
function endGame() {
  gameOver = true;
  document.getElementById("roll-btn").disabled = true;
  const banner = document.getElementById("winner");
  banner.innerHTML = `🏆 Parabéns! Chegaste à meta com <strong>${acertos}</strong> respostas certas!<br>Dominas a prevenção do Cancro do Colo do Útero! 🎗️`;
  banner.classList.add("visible");
}

/* ── REINICIAR ── */
function resetGame() {
  pos=0; acertos=0; gameOver=false; waiting=false;
  perguntasUsadas={mito:[],verdade:[],curiosidade:[]};
  conquistasDesbloqueadas=[];
  document.getElementById("roll-btn").disabled = false;
  document.getElementById("winner").classList.remove("visible");
  document.getElementById("quiz-box").classList.remove("visible");
  document.getElementById("xp-fill").style.width = "0%";
  document.getElementById("xp-text").textContent = "0 / 9 mitos";
  document.getElementById("log").textContent = "Lança o dado, responde corretamente e avança no tabuleiro!";
  ["cq1","cq2","cq3"].forEach(id => {
    const c = document.getElementById(id);
    c.textContent = "🔒"; c.classList.remove("active");
  });
  drawBoard();
}

/* ── INIT ── */
drawBoard();
