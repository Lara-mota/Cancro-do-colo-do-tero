document.addEventListener('DOMContentLoaded', function() {
/* ── DADOS POR NÍVEL ── */
const NIVEIS = {
  1: {
    titulo: "Nível 1 — Fundamentos",
    cor: "#7B3FA8",
    perguntas: [
      {
        pergunta: "O HPV pode ser transmitido através de:",
        opcoes: ["a) Abraços", "b) Contacto sexual", "c) Água contaminada", "d) Picadas de insetos"],
        correta: 1,
        explicacao: "O HPV transmite-se principalmente através do contacto sexual, incluindo contacto íntimo pele com pele.",
        dyk: "Lesões pré-cancerosas podem ser tratadas antes de se desenvolverem em cancro, prevenindo a doença.",
        pagina: "rastreio"
      },
      {
        pergunta: "Qual é a principal causa do cancro do colo do útero?",
        opcoes: ["a) Bactéria Staphylococcus", "b) Vírus HPV de alto risco", "c) Exposição solar excessiva", "d) Consumo excessivo de açúcar"],
        correta: 1,
        explicacao: "A infeção persistente por HPV de alto risco (principalmente HPV 16 e 18) é responsável por mais de 99% dos casos.",
        dyk: "Existem mais de 100 tipos de HPV, mas apenas cerca de 14 são de alto risco para o cancro do colo do útero.",
        pagina: "patologia"
      },
      {
        pergunta: "A vacina contra o HPV protege contra que tipos?",
        opcoes: ["a) Apenas HPV tipo 6", "b) HPV 6, 11, 16 e 18 (entre outros)", "c) Todos os tipos de HPV", "d) Nenhum tipo específico"],
        correta: 1,
        explicacao: "A vacina nonavalente protege contra 9 tipos de HPV, cobrindo os responsáveis pela maioria dos cancros cervicais.",
        dyk: "Em Portugal, a vacinação contra o HPV está incluída no Programa Nacional de Vacinação para raparigas e rapazes.",
        pagina: "prevencao"
      },
      {
        pergunta: "Com que frequência deve ser feito o rastreio do colo do útero?",
        opcoes: ["a) A cada 6 meses", "b) Apenas uma vez na vida", "c) De 3 em 3 anos (ou 5 em 5 com co-teste HPV)", "d) Só quando há sintomas"],
        correta: 2,
        explicacao: "As guidelines recomendam citologia a cada 3 anos para mulheres entre 25–64 anos, ou co-teste a cada 5 anos.",
        dyk: "O rastreio regular permite detetar alterações celulares antes de se tornarem cancro.",
        pagina: "rastreio"
      },
      {
        pergunta: "Quais são os sintomas mais comuns em fase avançada?",
        opcoes: ["a) Tosse e febre", "b) Hemorragia vaginal anormal e dor pélvica", "c) Perda de cabelo", "d) Visão turva"],
        correta: 1,
        explicacao: "Hemorragia vaginal anormal e dor pélvica são os sintomas mais comuns e requerem avaliação médica imediata.",
        dyk: "Nas fases iniciais, o cancro do colo do útero frequentemente não apresenta sintomas — daí a importância do rastreio.",
        pagina: "sintomas"
      },
      {
        pergunta: "A partir de que idade se recomenda iniciar o rastreio em Portugal?",
        opcoes: ["a) 18 anos", "b) 21 anos", "c) 25 anos", "d) 35 anos"],
        correta: 2,
        explicacao: "Em Portugal, o rastreio organizado começa aos 25 anos e vai até aos 64 anos, com periodicidade de 3 anos.",
        dyk: "O Programa Nacional de Rastreio convoca automaticamente as mulheres elegíveis.",
        pagina: "rastreio"
      },
      {
        pergunta: "O cancro do colo do útero afeta que parte do sistema reprodutor?",
        opcoes: ["a) O ovário", "b) A porção inferior do útero que se liga à vagina", "c) As trompas de Falópio", "d) O endométrio"],
        correta: 1,
        explicacao: "O colo do útero (cérvix) é a parte inferior do útero que se abre para a vagina. É aí que se desenvolvem a maioria dos cancros cervicais.",
        dyk: "Existem dois tipos principais: carcinoma de células escamosas (mais comum) e adenocarcinoma.",
        pagina: "patologia"
      },
      {
        pergunta: "Qual fator NÃO aumenta o risco de cancro do colo do útero?",
        opcoes: ["a) Tabagismo", "b) Múltiplos parceiros sexuais", "c) Consumo de vegetais e frutas", "d) Sistema imunitário debilitado"],
        correta: 2,
        explicacao: "Uma dieta rica em frutas e vegetais está associada a menor risco. Tabagismo, múltiplos parceiros e imunossupressão são fatores de risco.",
        dyk: "O tabagismo aumenta o risco porque agentes carcinogénicos do tabaco concentram-se nas secreções cervicais.",
        pagina: "prevencao"
      },
      {
        pergunta: "O exame de Papanicolau serve para:",
        opcoes: ["a) Diagnosticar infeções urinárias", "b) Detetar células anómalas no colo do útero", "c) Avaliar a fertilidade", "d) Medir hormónios"],
        correta: 1,
        explicacao: "O Papanicolau recolhe células do colo do útero para análise laboratorial, identificando células pré-cancerosas antes de causarem sintomas.",
        dyk: "O exame foi desenvolvido pelo médico grego Georgios Papanikolaou e revolucionou a deteção precoce do cancro cervical.",
        pagina: "rastreio"
      },
      {
        pergunta: "Qual a taxa de prevenção com vacinação e rastreio regulares?",
        opcoes: ["a) Cerca de 30%", "b) Cerca de 50%", "c) Mais de 90%", "d) É impossível prevenir"],
        correta: 2,
        explicacao: "Com vacinação contra o HPV e rastreio regular, mais de 90% dos casos de cancro do colo do útero podem ser prevenidos.",
        dyk: "A OMS lançou a estratégia global para eliminar o cancro do colo do útero até 2030.",
        pagina: "prevencao"
      }
    ]
  },
  2: {
    titulo: "Nível 2 — Aprofundamento",
    cor: "#4E0586",
    perguntas: [
      {
        pergunta: "Qual a diferença entre citologia tradicional e citologia em meio líquido?",
        opcoes: ["a) Não há diferença", "b) Na tradicional as células são espalhadas numa lâmina; na líquida são colocadas num frasco conservante", "c) A citologia líquida é menos precisa", "d) A tradicional usa mais tecnologia"],
        correta: 1,
        explicacao: "Na citologia tradicional as células são espalhadas numa lâmina de vidro. Na citologia líquida são colocadas num frasco com líquido conservante, permitindo melhor qualidade de amostra.",
        dyk: "A citologia em meio líquido permite também fazer o teste de HPV com a mesma amostra.",
        pagina: "rastreio"
      },
      {
        pergunta: "Os tipos HPV 16 e 18 são responsáveis por aproximadamente que percentagem dos cancros do colo?",
        opcoes: ["a) 30%", "b) 50%", "c) 70%", "d) 90%"],
        correta: 2,
        explicacao: "Os tipos HPV 16 e 18 são responsáveis por cerca de 70% dos cancros do colo do útero, sendo considerados os de maior risco oncogénico.",
        dyk: "O HPV 16 está também associado a cancros da orofaringe, vulva, vagina, pénis e canal anal.",
        pagina: "patologia"
      },
      {
        pergunta: "Qual o principal mecanismo pelo qual o HPV causa cancro?",
        opcoes: ["a) Destruição direta das células", "b) Integração no ADN celular e inativação de supressores tumorais", "c) Bloqueio do sistema imunitário", "d) Produção de toxinas"],
        correta: 1,
        explicacao: "O HPV integra-se no ADN das células epiteliais e produz proteínas (E6 e E7) que inativam os supressores tumorais p53 e Rb, levando à divisão celular descontrolada.",
        dyk: "A maioria das infeções por HPV é eliminada naturalmente pelo sistema imunitário em 1 a 2 anos.",
        pagina: "patologia"
      },
      {
        pergunta: "Qual é o período recomendado entre a última relação sexual e o exame de Papanicolau?",
        opcoes: ["a) 6 horas", "b) 24 horas", "c) 48 horas", "d) 1 semana"],
        correta: 2,
        explicacao: "Recomenda-se evitar relações sexuais nas 48 horas anteriores ao exame, para garantir que a amostra não está contaminada com células ou fluidos que dificultem a análise.",
        dyk: "Também se recomenda não usar cremes vaginais, pensos ou duches vaginais nas 48h antes do exame.",
        pagina: "rastreio"
      },
      {
        pergunta: "A displasia cervical é:",
        opcoes: ["a) Um cancro em fase terminal", "b) Uma alteração pré-cancerosa das células do colo do útero", "c) Uma infeção bacteriana", "d) Um tipo de HPV"],
        correta: 1,
        explicacao: "A displasia cervical refere-se a alterações anómalas nas células do colo do útero que, se não tratadas, podem evoluir para cancro. É detetável pelo Papanicolau.",
        dyk: "A displasia pode ser classificada como leve (CIN 1), moderada (CIN 2) ou grave (CIN 3), sendo as formas mais graves tratadas para evitar progressão.",
        pagina: "patologia"
      },
      {
        pergunta: "Qual é o nome do exame que confirma lesões após um Papanicolau alterado?",
        opcoes: ["a) Biopsia hepática", "b) Colposcopia", "c) Mamografia", "d) Ecografia pélvica"],
        correta: 1,
        explicacao: "A colposcopia é um exame que permite examinar o colo do útero com ampliação, sendo realizada quando o Papanicolau apresenta alterações, podendo incluir biopsia.",
        dyk: "Durante a colposcopia pode ser aplicado ácido acético no colo do útero, que torna as lesões mais visíveis.",
        pagina: "tratamento"
      },
      {
        pergunta: "A imunização contra o HPV em Portugal inclui que grupos?",
        opcoes: ["a) Apenas raparigas dos 9-14 anos", "b) Raparigas e rapazes dos 9-14 anos", "c) Todas as mulheres até 45 anos", "d) Apenas adultos"],
        correta: 1,
        explicacao: "Em Portugal, o Programa Nacional de Vacinação inclui a vacina contra o HPV para raparigas e rapazes entre os 9 e os 14 anos, preferencialmente antes do início da atividade sexual.",
        dyk: "Desde 2020, os rapazes passaram a ser incluídos no programa de vacinação em Portugal.",
        pagina: "prevencao"
      },
      {
        pergunta: "Qual das seguintes afirmações sobre o cancro do colo do útero é VERDADEIRA?",
        opcoes: ["a) É hereditário", "b) Afeta apenas mulheres com muitos parceiros", "c) Pode ser prevenido com vacinação e rastreio", "d) Não tem tratamento eficaz"],
        correta: 2,
        explicacao: "O cancro do colo do útero é um dos cancros mais preveníveis graças à combinação de vacinação contra HPV e rastreio regular com Papanicolau.",
        dyk: "Se detetado precocemente, as taxas de sobrevivência a 5 anos ultrapassam os 90%.",
        pagina: "prevencao"
      },
      {
        pergunta: "O que é o co-teste HPV?",
        opcoes: ["a) Um teste de gravidez", "b) A combinação do Papanicolau com pesquisa de ADN do HPV", "c) Uma vacina combinada", "d) Um exame de sangue"],
        correta: 1,
        explicacao: "O co-teste combina a citologia cervical (Papanicolau) com a pesquisa de ADN do HPV de alto risco, permitindo um rastreio mais completo e intervalo de 5 anos entre rastreios.",
        dyk: "O co-teste tem maior sensibilidade para detetar lesões de alto grau do que a citologia isolada.",
        pagina: "rastreio"
      },
      {
        pergunta: "Qual tratamento é usado para lesões pré-cancerosas do colo do útero (CIN)?",
        opcoes: ["a) Quimioterapia sistémica", "b) Excisão por ansa diatérmica (LEEP) ou crioterapia", "c) Radioterapia total", "d) Antibióticos"],
        correta: 1,
        explicacao: "As lesões pré-cancerosas (CIN 2 e CIN 3) são tratadas com procedimentos locais como a excisão por ansa diatérmica (LEEP) ou crioterapia, que removem ou destroem as células anómalas.",
        dyk: "Após tratamento de lesões pré-cancerosas, o seguimento com citologia e/ou teste HPV é essencial para confirmar a cura.",
        pagina: "tratamento"
      }
    ]
  },
  3: {
    titulo: "Nível 3 — Expert",
    cor: "#2D0050",
    perguntas: [
      {
        pergunta: "Qual proteína viral do HPV é responsável pela degradação do supressor tumoral p53?",
        opcoes: ["a) E1", "b) E6", "c) L1", "d) E2"],
        correta: 1,
        explicacao: "A oncoproteína E6 do HPV de alto risco promove a degradação do p53 através do complexo ubiquitina-proteassoma, impedindo a apoptose celular e favorecendo a transformação maligna.",
        dyk: "A proteína E7 do HPV inativa a proteína Rb (retinoblastoma), outro supressor tumoral crucial no controlo do ciclo celular.",
        pagina: "patologia"
      },
      {
        pergunta: "O que é a zona de transformação do colo do útero?",
        opcoes: ["a) A zona entre o endocérvix e o ectocérvix onde ocorre a maioria das lesões", "b) O local de inserção do útero na vagina", "c) A zona de crescimento do endométrio", "d) A área de vascularização cervical"],
        correta: 0,
        explicacao: "A zona de transformação é a área onde o epitélio colunar do endocérvix se transforma em epitélio escamoso do ectocérvix (metaplasia). É o local mais suscetível à infeção por HPV e ao desenvolvimento de lesões pré-cancerosas.",
        dyk: "A colposcopia foca-se especialmente na avaliação da zona de transformação para identificar lesões de alto grau.",
        pagina: "patologia"
      },
      {
        pergunta: "Qual é a sensibilidade aproximada do Papanicolau convencional para detetar CIN 2+?",
        opcoes: ["a) 95-99%", "b) 80-90%", "c) 50-60%", "d) 30-40%"],
        correta: 2,
        explicacao: "A sensibilidade do Papanicolau convencional para CIN 2+ é de aproximadamente 50-60%, o que justifica a realização periódica do rastreio e a complementação com o teste de HPV.",
        dyk: "A citologia em meio líquido tem sensibilidade ligeiramente superior e permite o teste reflexo de HPV com a mesma amostra.",
        pagina: "rastreio"
      },
      {
        pergunta: "Qual é o estadiamento FIGO para cancro do colo do útero limitado ao colo, com invasão estromal >5mm?",
        opcoes: ["a) Estádio IA1", "b) Estádio IA2", "c) Estádio IB1", "d) Estádio IIA"],
        correta: 2,
        explicacao: "Segundo a classificação FIGO (2018), o estádio IB1 corresponde a tumores invasivos com dimensão máxima ≤2cm, limitados ao colo. A invasão estromal >5mm já não se enquadra no estádio IA.",
        dyk: "O estadiamento FIGO é o sistema internacional de estadiamento do cancro do colo do útero, fundamental para orientar o tratamento.",
        pagina: "tratamento"
      },
      {
        pergunta: "Qual vacina contra HPV está disponível em Portugal no PNV?",
        opcoes: ["a) Cervarix (bivalente)", "b) Gardasil 4 (tetravalente)", "c) Gardasil 9 (nonavalente)", "d) Cervarix 9"],
        correta: 2,
        explicacao: "Desde 2020, Portugal utiliza a Gardasil 9 (nonavalente) no Programa Nacional de Vacinação, substituindo a anterior Cervarix. Protege contra 9 tipos de HPV: 6, 11, 16, 18, 31, 33, 45, 52 e 58.",
        dyk: "A Gardasil 9 previne cerca de 90% dos cancros do colo do útero, comparado com os ~70% da vacina bivalente anterior.",
        pagina: "prevencao"
      },
      {
        pergunta: "Qual é o tratamento padrão para cancro do colo do útero em estádio IIB?",
        opcoes: ["a) Histerectomia radical isolada", "b) Quimiorradioterapia concomitante com cisplatina", "c) Apenas braquiterapia", "d) Imunoterapia exclusiva"],
        correta: 1,
        explicacao: "Para doença localmente avançada (estádio IIB e acima), o tratamento padrão é a quimiorradioterapia concomitante com cisplatina semanalmente, seguida de braquiterapia.",
        dyk: "A adição de cisplatina à radioterapia aumentou significativamente as taxas de sobrevivência em cancro do colo do útero avançado.",
        pagina: "tratamento"
      },
      {
        pergunta: "O que é a imunidade de grupo (herd immunity) no contexto do HPV?",
        opcoes: ["a) A imunidade adquirida após infeção natural", "b) A proteção indireta de não vacinados quando a maioria da população está vacinada", "c) A proteção conferida por anticorpos maternos", "d) A resistência natural ao HPV em certas populações"],
        correta: 1,
        explicacao: "A imunidade de grupo ocorre quando uma proporção suficiente da população está vacinada, reduzindo a circulação do vírus e protegendo indiretamente quem não foi vacinado.",
        dyk: "Estima-se que é necessário vacinar pelo menos 80% da população-alvo para atingir imunidade de grupo contra o HPV.",
        pagina: "prevencao"
      },
      {
        pergunta: "Qual marcador molecular é usado na pesquisa de HPV de alto risco?",
        opcoes: ["a) CA-125", "b) ADN do HPV por PCR ou captura de híbridos", "c) HER2", "d) PSA"],
        correta: 1,
        explicacao: "O teste de HPV de alto risco deteta o ADN viral por técnicas como PCR (reação em cadeia da polimerase) ou captura de híbridos (Hybrid Capture 2), identificando os genótipos oncogénicos.",
        dyk: "O teste de HPV tem sensibilidade superior à citologia para CIN 2+ mas menor especificidade, sendo mais útil como triagem ou co-teste.",
        pagina: "rastreio"
      },
      {
        pergunta: "Em que situação clínica é indicada a traquelectomia radical?",
        opcoes: ["a) Cancro avançado com metástases", "b) Cancro cervical precoce em mulheres que desejam preservar a fertilidade", "c) Displasia leve (CIN 1)", "d) Cancro do endométrio"],
        correta: 1,
        explicacao: "A traquelectomia radical (remoção do colo do útero preservando o corpo uterino) é uma opção cirúrgica para mulheres jovens com cancro cervical precoce (IA2-IB1) que desejam preservar a fertilidade.",
        dyk: "A traquelectomia radical permite gestações subsequentes, embora com risco aumentado de parto prematuro.",
        pagina: "tratamento"
      },
      {
        pergunta: "Qual é a meta da OMS para a vacinação contra HPV até 2030?",
        opcoes: ["a) 50% das raparigas vacinadas", "b) 70% das raparigas vacinadas com esquema completo até aos 15 anos", "c) 100% de vacinação universal", "d) 40% de cobertura global"],
        correta: 1,
        explicacao: "A estratégia global da OMS 90-70-90 prevê: 90% das raparigas vacinadas até aos 15 anos, 70% das mulheres elegíveis rastreadas duas vezes na vida, e 90% das mulheres com doença a receber tratamento adequado.",
        dyk: "Se estas metas forem atingidas, estima-se que mais de 40 milhões de vidas poderão ser salvas nas próximas décadas.",
        pagina: "prevencao"
      }
    ]
  }
};

/* ── MAPEAMENTO DAS PÁGINAS ── */
const PAGINAS = {
  "rastreio":    "../html/rastreio.html",
  "patologia":   "../html/patologia.html",
  "prevencao":   "../html/prevencao.html",
  "sintomas":    "../html/sintomas.html",
  "tratamento":  "../html/tratamento.html"
};

/* ── ESTADO ── */
let nivelAtual = 1;
let current = 0;
let answered = [];
let score = 0;

function perguntasDoNivel() { return NIVEIS[nivelAtual].perguntas; }
function totalPerguntas()   { return perguntasDoNivel().length; }

/* ── DOM ── */
const progressLabel       = document.getElementById("progressLabel");
const progressBar         = document.getElementById("progressBar");
const questionText        = document.getElementById("questionText");
const optionsContainer    = document.getElementById("optionsContainer");
const feedback            = document.getElementById("feedback");
const feedbackIcon        = document.getElementById("feedbackIcon");
const feedbackTitle       = document.getElementById("feedbackTitle");
const feedbackText        = document.getElementById("feedbackText");
const btnPrev             = document.getElementById("btnPrev");
const btnNext             = document.getElementById("btnNext");
const radialFill          = document.getElementById("radialFill");
const radialText          = document.getElementById("radialText");
const progressWidgetLabel = document.getElementById("progressWidgetLabel");
const dykText             = document.getElementById("dykText");
const dykLink             = document.querySelector(".dyk-link");
const questionArea        = document.getElementById("questionArea");
const scoreScreen         = document.getElementById("scoreScreen");
const quizNav             = document.getElementById("quizNav");
const scoreBig            = document.getElementById("scoreBig");
const scoreLabel          = document.getElementById("scoreLabel");
const scoreMessage        = document.getElementById("scoreMessage");
const scoreBarFill        = document.getElementById("scoreBarFill");

/* ── RENDER NÍVEL SELECTOR ── */
function mostrarSeletorNivel() {
  // Esconder área de pergunta e navegação
  questionArea.style.display = "none";
  quizNav.style.display      = "none";
  scoreScreen.classList.remove("show");

  // Usar div separado para o seletor
  let seletor = document.getElementById("nivelSeletor");
  if (!seletor) {
    seletor = document.createElement("div");
    seletor.id = "nivelSeletor";
    questionArea.parentNode.insertBefore(seletor, questionArea);
  }

  seletor.style.display = "block";
  seletor.innerHTML = `<div class="nivel-selector">
    <h2>Escolhe o teu nível</h2>
    <p>Completa o Nível 1 para desbloquear os seguintes</p>
    <div class="niveis-grid">
      ${[1,2,3].map(n => {
        const nivel = NIVEIS[n];
        const bloqueado = n > 1 && !estaLogado();
        return `<div class="nivel-card ${bloqueado ? 'bloqueado' : ''}" id="nivelCard${n}">
          <div class="nivel-num" style="background:${nivel.cor}">${n}</div>
          <h3>${nivel.titulo}</h3>
          <p>${nivel.perguntas.length} perguntas</p>
          ${bloqueado
            ? `<div class="nivel-lock">🔒 Requer login</div>`
            : `<button class="nivel-free" id="btnNivel${n}">▶ Jogar</button>`}
        </div>`;
      }).join('')}
    </div>
  </div>`;

  // Adicionar event listeners depois de inserir no DOM
  [1,2,3].forEach(n => {
    const btn = document.getElementById(`btnNivel${n}`);
    if (btn) btn.addEventListener("click", () => iniciarNivel(n));
    const bloqueadoCard = document.getElementById(`nivelCard${n}`);
    if (bloqueadoCard && bloqueadoCard.classList.contains("bloqueado")) {
      bloqueadoCard.addEventListener("click", () => pedirLogin(n));
    }
  });
}

/* ── VERIFICAR LOGIN ── */
function estaLogado() {
  return localStorage.getItem("colosaudavel_logado") === "true";
}

function pedirLogin(nivel) {
  if (confirm(`Para aceder ao Nível ${nivel} precisas de fazer login.\n\nPretends ir para a página de Login?`)) {
    window.location.href = "../html/Login.html";
  }
}

/* ── INICIAR NÍVEL ── */
function iniciarNivel(n) {
  nivelAtual = n;
  current    = 0;
  score      = 0;
  answered   = new Array(totalPerguntas()).fill(null);

  // Esconder seletor de nível
  const seletor = document.getElementById("nivelSeletor");
  if (seletor) seletor.style.display = "none";

  // Atualizar cor do hero-title
  const heroSpan = document.querySelector(".hero-title span");
  if (heroSpan) heroSpan.style.color = NIVEIS[n].cor;

  questionArea.style.display = "block";
  quizNav.style.display      = "flex";
  scoreScreen.classList.remove("show");

  // Mostrar indicador de nível
  progressLabel.innerHTML = `<span style="background:${NIVEIS[n].cor};color:white;padding:2px 10px;border-radius:20px;font-size:0.7rem;margin-right:8px;">Nível ${n}</span> Pergunta 1 de ${totalPerguntas()}`;

  renderQuestion();
}

/* ── RENDER PERGUNTA ── */
function renderQuestion() {
  const q     = perguntasDoNivel()[current];
  const total = totalPerguntas();

  progressLabel.innerHTML = `<span style="background:${NIVEIS[nivelAtual].cor};color:white;padding:2px 10px;border-radius:20px;font-size:0.7rem;margin-right:8px;">Nível ${nivelAtual}</span> Pergunta ${current + 1} de ${total}`;
  progressBar.style.width   = `${((current + 1) / total) * 100}%`;
  questionText.textContent  = q.pergunta;

  // Sabias que — com link para a página correta
  dykText.textContent = q.dyk;
  if (dykLink) {
    const nomePagina = q.pagina.charAt(0).toUpperCase() + q.pagina.slice(1);
    dykLink.textContent = nomePagina;
    dykLink.href        = PAGINAS[q.pagina] || "#";
  }

  // Opções
  optionsContainer.innerHTML = "";
  q.opcoes.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className      = "option";
    div.dataset.index  = i;
    div.innerHTML      = `<span class="radio-circle"></span><span>${opt}</span>`;
    div.addEventListener("click", () => selectOption(i));
    optionsContainer.appendChild(div);
  });

  const chosen = answered[current];
  if (chosen !== null) {
    showResult(chosen, false);
  } else {
    feedback.className = "feedback";
    btnNext.disabled   = true;
  }

  btnPrev.disabled    = current === 0;
  btnNext.textContent = current === total - 1 ? "Ver resultado" : "Próxima";
  updateRadial();
}

/* ── SELECIONAR OPÇÃO ── */
function selectOption(index) {
  if (answered[current] !== null) return;
  answered[current] = index;
  if (index === perguntasDoNivel()[current].correta) score++;
  showResult(index, true);
  btnNext.disabled = false;
  updateRadial();
}

/* ── MOSTRAR RESULTADO ── */
function showResult(chosen, animate) {
  const q       = perguntasDoNivel()[current];
  const correct = q.correta;
  const opts    = optionsContainer.querySelectorAll(".option");

  opts.forEach(o => {
    o.classList.add("disabled");
    const i = parseInt(o.dataset.index);
    if (i === correct) o.classList.add("correct");
    else if (i === chosen && chosen !== correct) o.classList.add("wrong");
  });

  const isCorrect = chosen === correct;
  feedback.className        = `feedback ${isCorrect ? "correct-fb" : "wrong-fb"} show`;
  feedbackIcon.textContent  = isCorrect ? "✅" : "❌";
  feedbackTitle.textContent = isCorrect ? "Correto!" : "Incorreto!";
  feedbackText.textContent  = q.explicacao;
}

/* ── RADIAL ── */
function updateRadial() {
  const answeredCount = answered.filter(a => a !== null).length;
  const pct           = answeredCount / totalPerguntas();
  const circumference = 314.16;
  radialFill.style.strokeDashoffset = circumference - circumference * pct;
  radialText.textContent            = Math.round(pct * 100) + "%";
  progressWidgetLabel.textContent   = `${answeredCount} de ${totalPerguntas()} perguntas respondidas`;
}

/* ── NAVEGAÇÃO ── */
function prevQuestion() {
  if (current > 0) { current--; renderQuestion(); }
}

function nextQuestion() {
  if (current < totalPerguntas() - 1) {
    current++;
    renderQuestion();
  } else {
    showScore();
  }
}

/* ── PONTUAÇÃO ── */
function showScore() {
  questionArea.style.display = "none";
  quizNav.style.display      = "none";
  progressBar.style.width    = "100%";
  progressLabel.innerHTML    = `<span style="background:${NIVEIS[nivelAtual].cor};color:white;padding:2px 10px;border-radius:20px;font-size:0.7rem;margin-right:8px;">Nível ${nivelAtual}</span> Quizz concluído!`;
  scoreScreen.classList.add("show");

  const total = totalPerguntas();
  scoreBig.textContent   = `${score}/${total}`;
  scoreLabel.textContent = `${Math.round((score / total) * 100)}% de respostas corretas`;

  let msg = "";
  if (score === total)        msg = "🏆 Perfeito! Dominas este nível!";
  else if (score >= total * 0.7) msg = "🌟 Muito bem! Ótimo conhecimento sobre este tema.";
  else if (score >= total * 0.5) msg = "👍 Bom esforço! Continua a aprender.";
  else                           msg = "📚 Não desanimes! Explora o nosso site para aprenderes mais.";
  scoreMessage.textContent = msg;

  // Desbloquear próximo nível se passou com ≥ 50%
  if (nivelAtual < 3 && score >= Math.ceil(total * 0.5)) {
    if (!estaLogado()) {
      setTimeout(() => {
        const nextBtn = document.createElement("button");
        nextBtn.className   = "btn btn-primary";
        nextBtn.style.marginTop = "12px";
        nextBtn.textContent = `🔓 Nível ${nivelAtual + 1} desbloqueado — fazer login para jogar`;
        nextBtn.onclick     = () => pedirLogin(nivelAtual + 1);
        scoreScreen.appendChild(nextBtn);
      }, 300);
    }
  }

  setTimeout(() => { scoreBarFill.style.width = `${(score / total) * 100}%`; }, 200);
  updateRadial();
}

/* ── REINICIAR ── */
function restartQuiz() {
  scoreScreen.classList.remove("show");
  scoreBarFill.style.width = "0%";
  mostrarSeletorNivel();
}

  // Expor funções globais para os onclick do HTML
  window.prevQuestion    = prevQuestion;
  window.nextQuestion    = nextQuestion;
  window.restartQuiz     = restartQuiz;
  window.iniciarNivel    = iniciarNivel;
  window.pedirLogin      = pedirLogin;


/* ── INIT ── */
mostrarSeletorNivel();

});