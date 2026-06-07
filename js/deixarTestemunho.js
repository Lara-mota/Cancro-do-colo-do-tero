/* ================================================================
   deixarTestemunho.js  –  Colo Saudável | Submeter Testemunho
   ================================================================ */

// DISTRITOS + CONCELHOS
const dados = {
  Aveiro: ["Águeda", "Albergaria-a-Velha", "Anadia", "Arouca", "Aveiro", "Castelo de Paiva", "Espinho", "Estarreja", "Ílhavo", "Mealhada", "Murtosa", "Oliveira de Azeméis", "Oliveira do Bairro", "Ovar", "Santa Maria da Feira", "São João da Madeira", "Sever do Vouga", "Vagos", "Vale de Cambra"],
  Beja: ["Aljustrel", "Almodôvar", "Alvito", "Barrancos", "Beja", "Castro Verde", "Cuba", "Ferreira do Alentejo", "Mértola", "Moura", "Odemira", "Ourique", "Serpa", "Vidigueira"],
  Braga: ["Amares", "Barcelos", "Braga", "Cabeceiras de Basto", "Celorico de Basto", "Esposende", "Fafe", "Guimarães", "Póvoa de Lanhoso", "Terras de Bouro", "Vieira do Minho", "Vila Nova de Famalicão", "Vila Verde", "Vizela"],
  Bragança: ["Alfândega da Fé", "Bragança", "Carrazeda de Ansiães", "Freixo de Espada à Cinta", "Macedo de Cavaleiros", "Miranda do Douro", "Mirandela", "Mogadouro", "Torre de Moncorvo", "Vila Flor", "Vimioso", "Vinhais"],
  Castelo_Branco: ["Belmonte", "Castelo Branco", "Covilhã", "Fundão", "Idanha-a-Nova", "Oleiros", "Penamacor", "Proença-a-Nova", "Sertã", "Vila de Rei", "Vila Velha de Ródão"],
  Coimbra: ["Arganil", "Cantanhede", "Coimbra", "Condeixa-a-Nova", "Figueira da Foz", "Góis", "Lousã", "Mira", "Miranda do Corvo", "Montemor-o-Velho", "Oliveira do Hospital", "Pampilhosa da Serra", "Penacova", "Penela", "Soure", "Tábua", "Vila Nova de Poiares"],
  Évora: ["Alandroal", "Arraiolos", "Borba", "Estremoz", "Évora", "Montemor-o-Novo", "Mora", "Mourão", "Portel", "Redondo", "Reguengos de Monsaraz", "Vendas Novas", "Viana do Alentejo", "Vila Viçosa"],
  Faro: ["Albufeira", "Alcoutim", "Aljezur", "Castro Marim", "Faro", "Lagoa", "Lagos", "Loulé", "Monchique", "Olhão", "Portimão", "São Brás de Alportel", "Silves", "Tavira", "Vila do Bispo", "Vila Real de Santo António"],
  Guarda: ["Aguiar da Beira", "Almeida", "Celorico da Beira", "Figueira de Castelo Rodrigo", "Fornos de Algodres", "Gouveia", "Guarda", "Manteigas", "Meda", "Pinhel", "Sabugal", "Seia", "Trancoso", "Vila Nova de Foz Côa"],
  Leiria: ["Alcobaça", "Alvaiázere", "Ansião", "Batalha", "Bombarral", "Caldas da Rainha", "Castanheira de Pera", "Figueiró dos Vinhos", "Leiria", "Marinha Grande", "Nazaré", "Óbidos", "Pedrógão Grande", "Peniche", "Pombal", "Porto de Mós"],
  Lisboa: ["Alenquer", "Amadora", "Arruda dos Vinhos", "Azambuja", "Cadaval", "Cascais", "Lisboa", "Loures", "Lourinhã", "Mafra", "Odivelas", "Oeiras", "Sintra", "Sobral de Monte Agraço", "Torres Vedras", "Vila Franca de Xira"],
  Portalegre: ["Alter do Chão", "Arronches", "Avis", "Campo Maior", "Castelo de Vide", "Crato", "Elvas", "Fronteira", "Gavião", "Marvão", "Monforte", "Nisa", "Ponte de Sor", "Portalegre", "Sousel"],
  Porto: ["Amarante", "Baião", "Felgueiras", "Gondomar", "Lousada", "Maia", "Marco de Canaveses", "Matosinhos", "Paços de Ferreira", "Paredes", "Penafiel", "Porto", "Póvoa de Varzim", "Santo Tirso", "Trofa", "Valongo", "Vila do Conde", "Vila Nova de Gaia"],
  Santarém: ["Abrantes", "Alcanena", "Almeirim", "Alpiarça", "Benavente", "Cartaxo", "Chamusca", "Constância", "Coruche", "Entroncamento", "Ferreira do Zêzere", "Golegã", "Mação", "Ourém", "Rio Maior", "Salvaterra de Magos", "Santarém", "Sardoal", "Tomar", "Torres Novas", "Vila Nova da Barquinha"],
  Setúbal: ["Alcácer do Sal", "Alcochete", "Almada", "Barreiro", "Grândola", "Moita", "Montijo", "Palmela", "Santiago do Cacém", "Seixal", "Sesimbra", "Setúbal", "Sines"],
  Viana_do_Castelo: ["Arcos de Valdevez", "Caminha", "Melgaço", "Monção", "Paredes de Coura", "Ponte da Barca", "Ponte de Lima", "Valença", "Viana do Castelo", "Vila Nova de Cerveira"],
  Vila_Real: ["Alijó", "Boticas", "Chaves", "Mesão Frio", "Mondim de Basto", "Montalegre", "Murça", "Peso da Régua", "Ribeira de Pena", "Sabrosa", "Santa Marta de Penaguião", "Valpaços", "Vila Pouca de Aguiar", "Vila Real"],
  Viseu: ["Armamar", "Carregal do Sal", "Castro Daire", "Cinfães", "Lamego", "Mangualde", "Moimenta da Beira", "Mortágua", "Nelas", "Oliveira de Frades", "Penalva do Castelo", "Penedono", "Resende", "Santa Comba Dão", "São João da Pesqueira", "São Pedro do Sul", "Sátão", "Sernancelhe", "Tabuaço", "Tarouca", "Tondela", "Vila Nova de Paiva", "Viseu", "Vouzela"]
}

const distritoSelect = document.getElementById("distrito");
const concelhoSelect = document.getElementById("concelho");
const anoSelect      = document.getElementById("ano");

// Preencher distritos
Object.keys(dados).forEach(d => {
  const op = document.createElement("option");
  op.value = d;
  op.textContent = d.replace(/_/g, " ");
  distritoSelect.appendChild(op);
});

// Atualizar concelhos
distritoSelect.addEventListener("change", () => {
  concelhoSelect.innerHTML = "<option value=''>Selecionar concelho</option>";
  const lista = dados[distritoSelect.value];
  if (lista) {
    lista.forEach(c => {
      const op = document.createElement("option");
      op.value = c; op.textContent = c;
      concelhoSelect.appendChild(op);
    });
  }
});

// Preencher anos
const anoAtual = new Date().getFullYear();
for (let i = anoAtual; i >= 1950; i--) {
  const op = document.createElement("option");
  op.value = i; op.textContent = i;
  anoSelect.appendChild(op);
}

// ── GUARDAR TESTEMUNHO ──
document.getElementById("formTestemunho").addEventListener("submit", function(e) {
  e.preventDefault();

  const campos    = this.querySelectorAll("input, select, textarea");
  const nome      = campos[0].value.trim();
  const idade     = campos[1].value.trim();
  const sexo      = campos[2].value;
  const email     = campos[3].value.trim();
  const distrito  = distritoSelect.value;
  const concelho  = concelhoSelect.value;
  const ano       = anoSelect.value;
  const partilha  = this.querySelector('input[name="tipo"]:checked');
  const texto     = this.querySelector("textarea").value.trim();
  const termos    = this.querySelector('input[type="checkbox"]').checked;

  // Validações
  if (!nome || !idade || !sexo || !email || !distrito || !concelho || !ano) {
    alert("Por favor preenche todos os campos obrigatórios.");
    return;
  }
  if (!partilha) {
    alert("Indica como queres que o teu nome apareça.");
    return;
  }
  if (texto.length < 20) {
    alert("O testemunho deve ter pelo menos 20 caracteres.");
    return;
  }
  if (!termos) {
    alert("Tens de aceitar os Termos e Condições.");
    return;
  }

  // Criar objeto do testemunho
  const testemunho = {
    id:        Date.now(),
    data:      new Date().toLocaleDateString("pt-PT"),
    nome:      partilha.nextSibling.textContent.trim().includes("fictício") ? "Anónimo" : nome,
    idade,
    sexo,
    email,
    distrito:  distrito.replace(/_/g, " "),
    concelho,
    anoDiagnostico: ano,
    partilha:  partilha.nextSibling.textContent.trim(),
    texto,
    estado:    "pendente"
  };

  // Guardar no localStorage
  const existentes = JSON.parse(localStorage.getItem("colosaudavel_testemunhos") || "[]");
  existentes.push(testemunho);
  localStorage.setItem("colosaudavel_testemunhos", JSON.stringify(existentes));

  // Feedback ao utilizador
  mostrarSucesso();
  this.reset();
  concelhoSelect.innerHTML = "<option value=''>Selecionar concelho</option>";
});

function mostrarSucesso() {
  // Remover mensagem anterior se existir
  const anterior = document.getElementById("msg-sucesso");
  if (anterior) anterior.remove();

  const msg = document.createElement("div");
  msg.id = "msg-sucesso";
  msg.style.cssText = `
    background: #D4EDDA;
    border: 1.5px solid #28A745;
    color: #155724;
    border-radius: 12px;
    padding: 18px 24px;
    margin-top: 24px;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Abhaya Libre', serif;
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  msg.innerHTML = `✅ <span>Testemunho enviado com sucesso! Obrigada por partilhares a tua história.</span>`;
  document.getElementById("formTestemunho").after(msg);

  setTimeout(() => msg.remove(), 5000);
}