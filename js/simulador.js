
const utensilios = [
  {
    tema: "Proteção",
    nome: "Luvas médicas",
    img: "../img/sim_luvas.jpg",
    desc: "Luvas esterilizadas usadas pela profissional de saúde durante todo o exame para garantir higiene e segurança de ambas.",
    uso: "São sempre de uso único e descartadas após o exame. A sua utilização é obrigatória em todos os procedimentos clínicos."
  },
  {
    tema: "Instrumento de visualização",
    nome: "Espéculo vaginal",
    img: "../img/sim_especulo.jpg",
    desc: "Instrumento em forma de pato que abre suavemente a vagina, permitindo ao médico visualizar o colo do útero durante o exame.",
    uso: "Pode estar aquecido para maior conforto. Pode sentir uma ligeira pressão mas não é doloroso. É de uso único e esterilizado."
  },
  {
    tema: "Recolha de células",
    nome: "Espátula de Ayre",
    img: "../img/sim_espatula.jpg",
    desc: "Instrumento plano e fino, totalmente branco, com uma ponta alongada. Usada para raspar suavemente células da superfície externa do colo do útero (ectocérvix).",
    uso: "Usada em conjunto com a escova cervical para garantir que são recolhidas células de toda a zona de transformação."
  },
  {
    tema: "Recolha de células",
    nome: "Escova cervical (Cytobrush)",
    img: "../img/sim_especulo_escova.jpg",
    desc: "Pequena escova com cerdas finas usada para recolher células do canal cervical — a parte interior do colo do útero.",
    uso: "A recolha demora apenas alguns segundos. Pode sentir uma ligeira sensação de pressão ou cócegas — é completamente normal."
  },
  {
    tema: "Análise laboratorial",
    nome: "Lâmina de microscópio",
    img: "../img/sim_lamina.jpg",
    desc: "No método tradicional (Papanicolau), as células recolhidas são espalhadas diretamente numa lâmina de vidro, fixadas e enviadas ao laboratório.",
    uso: "Hoje muitos centros utilizam a citologia em meio líquido que dá amostras de maior qualidade e permite também testar HPV."
  },
  {
    tema: "Conservação da amostra",
    nome: "Frasco fixador",
    img: "../img/sim_fixador.jpg",
    desc: "Frasco com líquido conservante especial onde a amostra é colocada no método de citologia em meio líquido. Preserva as células durante o transporte.",
    uso: "Com este frasco, a mesma amostra pode ser usada tanto para o Papanicolau como para o teste de HPV de alto risco."
  },
  {
    tema: "Equipamento da sala",
    nome: "Marquesa ginecológica",
    img: "../img/sim_sala_exame.png",
    desc: "Cadeira/cama ajustável onde a paciente se deita durante o exame. Tem apoios para os pés chamados estribos e é ajustável em altura e inclinação.",
    uso: "A paciente deita-se e coloca os pés nos estribos. Tente relaxar — quanto mais relaxada estiver, mais confortável será o exame."
  }
];

const passos = [
  {
    titulo: "Antes do exame",
    descricao: "Chegue à consulta sem relações sexuais nas 48h anteriores e, se possível, fora do período menstrual. Não utilize cremes ou pensos vaginais no dia do exame. Não precisa de preparação especial — o exame é simples e rápido.",
    img: "../img/sim_antes_exame.png",
    dica: "O exame dura apenas 5 a 10 minutos. Pode sentir um ligeiro desconforto, mas não é doloroso."
  },
  {
    titulo: "A sala de exame",
    descricao: "Vai ser conduzida a uma sala equipada com uma marquesa ginecológica, uma luz direcionável e uma mesa de instrumentos. O ambiente é limpo, discreto e privado. A profissional de saúde estará presente para a acompanhar.",
    img: "../img/sim_sala_exame.png",
    dica: "Pode e deve fazer todas as perguntas que tiver antes de começar."
  },
  {
    titulo: "Posicionamento",
    descricao: "Será pedido que se deite na marquesa e coloque os pés nos apoios (estribos). Esta posição permite ao médico aceder corretamente ao colo do útero. Tente relaxar o máximo possível.",
    img: "../img/sim_posicionamento.png",
    dica: "Respirar fundo e devagar ajuda o corpo a relaxar durante o exame."
  },
  {
    titulo: "Introdução do espéculo",
    descricao: "O médico introduz cuidadosamente um espéculo vaginal — um instrumento que abre suavemente a vagina para visualizar o colo do útero. Pode estar aquecido para maior conforto. Pode sentir uma ligeira pressão.",
    img: "../img/sim_especulo.jpg",
    dica: "O espéculo é esterilizado e de uso único. Não causa danos."
  },
  {
    titulo: "Recolha de células",
    descricao: "Com a espátula de Ayre e a escova cervical, o médico recolhe suavemente células do colo do útero. O processo demora menos de um minuto. As células são colocadas numa lâmina ou num frasco com líquido.",
    img: "../img/sim_especulo_escova.jpg",
    dica: "Pode sentir uma ligeira sensação de raspagem — é completamente normal e não causa danos."
  },
  {
    titulo: "Fim do exame",
    descricao: "O espéculo é retirado suavemente e o exame termina. Pode retomar as suas atividades normais de imediato. Pode haver um pequeno corrimento rosado nas horas seguintes — é normal.",
    img: "../img/sim_depois_exame.png",
    dica: "Se sentir dor intensa ou corrimento abundante após o exame, contacte o seu médico."
  },
  {
    titulo: "O resultado",
    descricao: "Os resultados demoram geralmente 2 a 4 semanas. Um resultado normal significa que as células estão saudáveis. Se houver alterações, o médico explicará os próximos passos — na maioria dos casos são alterações ligeiras e tratáveis.",
    img: "../img/sim_antes_exame.png",
    dica: "O rastreio regular (de 3 em 3 anos) é a melhor forma de detetar alterações cedo, quando o tratamento é mais eficaz."
  }
];

let passoAtual = 0;

function mostrarInfo(index) {
  const u = utensilios[index];
  document.getElementById("infoTema").textContent = u.tema;
  document.getElementById("infoNome").textContent = u.nome;
  document.getElementById("infoDesc").textContent = u.desc;
  document.getElementById("infoUso").textContent  = u.uso;
  document.getElementById("infoImg").src          = u.img;
  document.getElementById("infoImg").alt          = u.nome;
  document.getElementById("infoPopup").classList.add("aberto");
  document.getElementById("infoOverlay").classList.add("aberto");
}

function fecharInfo() {
  document.getElementById("infoPopup").classList.remove("aberto");
  document.getElementById("infoOverlay").classList.remove("aberto");
}

function iniciarSimulacao() {
  passoAtual = 0;
  document.getElementById("modalSim").classList.add("aberto");
  renderPasso();
}

function fecharModal(id) {
  document.getElementById(id).classList.remove("aberto");
}

function renderPasso() {
  const p = passos[passoAtual];
  const total = passos.length;
  document.getElementById("simStepLabel").textContent   = `Passo ${passoAtual + 1} de ${total}`;
  document.getElementById("simProgressBar").style.width = `${((passoAtual + 1) / total) * 100}%`;
  document.getElementById("simTitulo").textContent      = p.titulo;
  document.getElementById("simDescricao").textContent   = p.descricao;
  document.getElementById("simDica").textContent        = p.dica;
  document.getElementById("simImg").src                 = p.img;
  document.getElementById("simImg").alt                 = p.titulo;
  document.getElementById("btnSimPrev").disabled = passoAtual === 0;

  const btnNext = document.getElementById("btnSimNext");
  if (passoAtual === total - 1) {
    btnNext.textContent = "Concluir ✓";
    btnNext.onclick = () => fecharModal("modalSim");
  } else {
    btnNext.textContent = "Seguinte →";
    btnNext.onclick = proximoPasso;
  }
}

function proximoPasso() {
  if (passoAtual < passos.length - 1) { passoAtual++; renderPasso(); }
}

function passoAnterior() {
  if (passoAtual > 0) { passoAtual--; renderPasso(); }
}

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("aberto");
  });
});