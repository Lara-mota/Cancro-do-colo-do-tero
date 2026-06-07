const glossary = [
  { title: "Adenocarcinoma", description: "Tipo de cancro do colo do útero que se desenvolve nas células glandulares do canal cervical (endocérvix). Menos comum do que o carcinoma de células escamosas, mas com tendência crescente." },
  { title: "ADN", description: "Ácido desoxirribonucleico. Material genético presente em todas as células do organismo. O HPV integra o seu ADN nas células do colo do útero, provocando alterações que podem levar ao cancro." },
  { title: "Biópsia", description: "Remoção de uma pequena amostra de tecido do colo do útero para análise laboratorial. Realizada após resultados anormais na colposcopia para confirmar ou excluir o diagnóstico de cancro." },
  { title: "Braquiterapia", description: "Forma de radioterapia em que a fonte de radiação é colocada diretamente dentro ou muito próximo do tumor. Utilizada no tratamento do cancro do colo do útero avançado, em associação com radioterapia externa." },
  { title: "Carcinoma de células escamosas", description: "Tipo mais comum de cancro do colo do útero (cerca de 70-80% dos casos). Desenvolve-se a partir das células escamosas da superfície externa do colo do útero (ectocérvix)." },
  { title: "Carcinoma do colo do útero", description: "Cancro que se desenvolve no revestimento do colo do útero. Está fortemente associado à infeção persistente pelo HPV de alto risco." },
  { title: "CIN (Neoplasia Intraepitelial Cervical)", description: "Alterações pré-cancerosas das células do colo do útero, classificadas em graus: CIN 1 (leve), CIN 2 (moderada) e CIN 3 (grave). Detetáveis pelo Papanicolau e tratáveis antes de evoluírem para cancro." },
  { title: "Cisplatina", description: "Fármaco de quimioterapia utilizado no tratamento do cancro do colo do útero avançado, habitualmente em associação com radioterapia (quimiorradioterapia concomitante)." },
  { title: "Citologia cervical", description: "Exame laboratorial que analisa células recolhidas do colo do útero para detetar alterações celulares. Base do exame de Papanicolau e da citologia em meio líquido." },
  { title: "Citologia em meio líquido", description: "Método de rastreio em que as células do colo do útero são colocadas num frasco com líquido conservante. Permite melhor qualidade de amostra e possibilita a realização simultânea do teste de HPV." },
  { title: "Co-teste HPV", description: "Combinação do exame de Papanicolau com a pesquisa de ADN do HPV de alto risco na mesma amostra. Tem maior sensibilidade e permite aumentar o intervalo entre rastreios para 5 anos." },
  { title: "Colo do Útero", description: "Parte inferior do útero que liga ao canal vaginal. É nesta zona que se desenvolvem a maioria dos cancros cervicais, especialmente na junção escamocolunar." },
  { title: "Colposcopia", description: "Exame que permite visualizar o colo do útero com ampliação, realizado após resultados anormais no Papanicolau. Pode incluir a recolha de biópsias para análise histopatológica." },
  { title: "Conização cervical", description: "Procedimento cirúrgico que remove uma porção em forma de cone do colo do útero. Utilizado no tratamento de lesões pré-cancerosas (CIN 2 e CIN 3) e em casos iniciais de cancro invasivo." },
  { title: "Criocirurgia", description: "Técnica de tratamento de lesões pré-cancerosas que utiliza temperaturas muito baixas para destruir as células anómalas do colo do útero." },
  { title: "Cytobrush", description: "Escova cervical com cerdas finas utilizada para recolher células do canal cervical (endocérvix) durante o exame de Papanicolau. Usada em conjunto com a espátula de Ayre." },
  { title: "Diplasia", description: "Ver Displasia." },
  { title: "Displasia", description: "Alterações anómalas nas características e organização das células do colo do útero. Pode ser leve, moderada ou grave (correspondendo a CIN 1, 2 e 3). É reversível se tratada atempadamente." },
  { title: "E6 / E7", description: "Proteínas oncogénicas produzidas pelo HPV de alto risco. A proteína E6 promove a degradação do supressor tumoral p53 e a E7 inativa a proteína Rb, levando à divisão celular descontrolada." },
  { title: "Ectocérvix", description: "Superfície externa do colo do útero, revestida por células escamosas, visível durante o exame ginecológico." },
  { title: "Endocérvix", description: "Canal interno do colo do útero, revestido por células glandulares. Local onde se desenvolvem os adenocarcinomas cervicais." },
  { title: "Espátula de Ayre", description: "Instrumento plano e fino, totalmente branco, usado para raspar suavemente células da superfície externa do colo do útero durante o exame de Papanicolau." },
  { title: "Espéculo vaginal", description: "Instrumento médico introduzido na vagina para a abrir suavemente e permitir a visualização do colo do útero durante o exame ginecológico." },
  { title: "Estadiamento FIGO", description: "Sistema internacional de classificação do cancro do colo do útero em estádios (I a IV), desenvolvido pela Federação Internacional de Ginecologia e Obstetrícia. Determina a extensão da doença e orienta o tratamento." },
  { title: "Fração de ejeção", description: "No contexto ginecológico, refere-se à capacidade funcional do colo do útero. Em oncologia cervical, o estadiamento é mais relevante do que parâmetros funcionais." },
  { title: "Gardasil 9", description: "Vacina nonavalente contra o HPV disponível em Portugal no Programa Nacional de Vacinação desde 2020. Protege contra 9 tipos de HPV (6, 11, 16, 18, 31, 33, 45, 52 e 58)." },
  { title: "Genótipo HPV", description: "Tipo específico de vírus HPV. Existem mais de 200 genótipos, dos quais cerca de 14 são considerados de alto risco oncogénico. Os genótipos 16 e 18 são responsáveis por cerca de 70% dos cancros do colo do útero." },
  { title: "Histerectomia", description: "Remoção cirúrgica do útero. No tratamento do cancro do colo do útero invasivo, realiza-se a histerectomia radical modificada, que inclui a remoção do útero, parte da vagina e tecidos envolventes." },
  { title: "HPV", description: "Vírus do Papiloma Humano. Principal causa do cancro do colo do útero. Transmite-se por contacto sexual. A infeção persistente pelos genótipos de alto risco (especialmente 16 e 18) pode levar ao desenvolvimento de cancro." },
  { title: "Imunidade de grupo", description: "Proteção indireta de indivíduos não vacinados quando uma percentagem suficiente da população está imunizada, reduzindo a circulação do vírus. Para o HPV, estima-se necessária uma cobertura de pelo menos 80%." },
  { title: "Imunossupressão", description: "Redução da capacidade do sistema imunitário. Pessoas imunossuprimidas (ex: VIH) têm maior risco de infeção persistente por HPV e de desenvolver cancro do colo do útero." },
  { title: "Incidência", description: "Número de novos casos de uma doença numa população num determinado período. Em Portugal, registam-se cerca de 897 novos casos de cancro do colo do útero por ano (IARC/WHO, 2022)." },
  { title: "Junção escamocolunar", description: "Zona de transição entre o epitélio escamoso do ectocérvix e o epitélio colunar do endocérvix. É o local mais suscetível à infeção por HPV e ao desenvolvimento de lesões pré-cancerosas." },
  { title: "Lesão intraepitelial", description: "Alteração celular confinada ao epitélio do colo do útero, sem invasão dos tecidos subjacentes. Pode ser de baixo grau (LSIL) ou alto grau (HSIL). Detetável pelo Papanicolau." },
  { title: "Leucorreia", description: "Corrimento vaginal. Pode ser um dos primeiros sintomas do cancro do colo do útero em fase mais avançada, frequentemente com odor fétido ou com presença de sangue." },
  { title: "Linfadenectomia pélvica", description: "Remoção cirúrgica dos gânglios linfáticos da pelve. Realizada durante a cirurgia ao cancro do colo do útero para avaliar a disseminação da doença e orientar o tratamento." },
  { title: "LEEP (Excisão por ansa diatérmica)", description: "Procedimento cirúrgico que utiliza uma ansa com corrente elétrica para remover tecido anormal do colo do útero. Utilizado no tratamento de lesões pré-cancerosas (CIN 2 e CIN 3)." },
  { title: "Literacia em saúde", description: "Capacidade dos indivíduos para aceder, compreender e utilizar informação de saúde de forma adequada. Níveis mais elevados de literacia estão associados a maior adesão ao rastreio e à vacinação." },
  { title: "Marquesa ginecológica", description: "Cadeira/cama ajustável com apoios para os pés (estribos) utilizada durante o exame ginecológico. Permite ao médico aceder corretamente ao colo do útero." },
  { title: "Metástase", description: "Disseminação do cancro para outras partes do corpo através dos vasos sanguíneos ou linfáticos. No cancro do colo do útero avançado, as metástases mais comuns ocorrem nos pulmões, fígado e ossos." },
  { title: "Neoplasia", description: "Crescimento anormal e descontrolado de células que forma um tumor. Pode ser benigna (não cancerosa) ou maligna (cancerosa)." },
  { title: "NT-proBNP", description: "Biomarcador usado principalmente em cardiologia. No contexto deste glossário, é referido para distinguir biomarcadores cervicais dos cardíacos abordados noutros projetos da área." },
  { title: "OMS / WHO", description: "Organização Mundial de Saúde. Lançou em 2020 a estratégia global 90-70-90 para eliminar o cancro do colo do útero até 2030: 90% das raparigas vacinadas, 70% das mulheres rastreadas e 90% das doentes tratadas." },
  { title: "Oncogénico", description: "Que tem capacidade de causar cancro. Os genótipos de HPV oncogénicos (como o 16 e o 18) produzem proteínas que interferem com os mecanismos de controlo do crescimento celular." },
  { title: "Papanicolau", description: "Exame de rastreio do cancro do colo do útero que recolhe células do colo do útero para análise. Desenvolvido pelo médico grego Georgios Papanikolaou. Em Portugal, recomendado de 3 em 3 anos para mulheres entre os 25 e os 64 anos." },
  { title: "Patologia", description: "Área da medicina que estuda as doenças e as suas causas, desenvolvimento e efeitos no organismo." },
  { title: "PCR", description: "Reação em cadeia da polimerase. Técnica laboratorial utilizada na deteção do ADN do HPV de alto risco nas amostras cervicais, com elevada sensibilidade e especificidade." },
  { title: "Péptidos natriuréticos", description: "Biomarcadores cardíacos (BNP e NT-proBNP). Não diretamente relacionados com o cancro do colo do útero, mas referenciados na plataforma para distinguir patologias." },
  { title: "PNV", description: "Programa Nacional de Vacinação. Em Portugal, inclui a vacina Gardasil 9 para raparigas e rapazes entre os 9 e os 14 anos, administrada em 2 doses com intervalo de 6 meses." },
  { title: "Quimiorradioterapia", description: "Combinação simultânea de quimioterapia e radioterapia. Tratamento padrão para o cancro do colo do útero localmente avançado (estádio IIB e superior), habitualmente com cisplatina semanal." },
  { title: "Quimioterapia", description: "Tratamento com fármacos que destroem ou inibem o crescimento das células cancerosas. No cancro do colo do útero avançado ou recorrente, utiliza-se frequentemente a combinação de cisplatina e paclitaxel." },
  { title: "Radioterapia", description: "Tratamento que utiliza radiação ionizante para destruir células cancerosas. No cancro do colo do útero, inclui radioterapia externa e braquiterapia intracavitária." },
  { title: "Rastreio", description: "Realização de exames em pessoas assintomáticas para detetar doenças em fase precoce. O rastreio do cancro do colo do útero em Portugal é recomendado para mulheres entre os 25 e os 64 anos." },
  { title: "Rb (Retinoblastoma)", description: "Proteína supressora de tumores envolvida no controlo do ciclo celular. A proteína E7 do HPV inativa a proteína Rb, contribuindo para a transformação maligna das células cervicais." },
  { title: "Traquelectomia radical", description: "Cirurgia que remove o colo do útero preservando o corpo uterino. Opção para mulheres jovens com cancro cervical precoce que desejam preservar a fertilidade." },
  { title: "Útero", description: "Órgão reprodutor feminino onde se desenvolve o feto durante a gravidez. O colo do útero é a sua parte inferior, que liga à vagina." },
  { title: "Vacina bivalente", description: "Vacina contra o HPV que protege contra dois genótipos: 16 e 18. Foi utilizada em Portugal antes de ser substituída pela vacina nonavalente (Gardasil 9)." },
  { title: "Vacina nonavalente", description: "Ver Gardasil 9. Protege contra 9 tipos de HPV e é a vacina atualmente disponível no PNV em Portugal." },
  { title: "Vacina tetravalente", description: "Vacina contra o HPV que protege contra quatro genótipos: 6, 11, 16 e 18 (Gardasil). Precursora da vacina nonavalente, progressivamente substituída." },
  { title: "Vagina", description: "Canal que liga o útero ao exterior do corpo. O colo do útero é visível através da vagina durante o exame ginecológico com espéculo." },
  { title: "VIH", description: "Vírus da Imunodeficiência Humana. A infeção por VIH causa imunossupressão, aumentando significativamente o risco de infeção persistente por HPV e de desenvolvimento de cancro do colo do útero." },
  { title: "Vírus do Papiloma Humano", description: "Ver HPV." },
  { title: "Zona de transformação", description: "Área do colo do útero onde o epitélio escamoso se transforma em epitélio colunar (metaplasia). É o local mais suscetível à infeção por HPV e ao desenvolvimento de lesões pré-cancerosas." },
];

const termsDiv = document.getElementById("terms");
const searchInput = document.getElementById("searchInput");
const alphabetDiv = document.getElementById("alphabet");

function renderTerms(filterText = "", filterLetter = "all") {
  termsDiv.innerHTML = "";
  const filtered = glossary
    .filter(item =>
      item.title.toLowerCase().includes(filterText.toLowerCase()) &&
      (filterLetter === "all" || item.title[0].toUpperCase() === filterLetter)
    )
    .sort((a, b) => a.title.localeCompare(b.title, "pt"));

  if (filtered.length === 0) {
    termsDiv.innerHTML = '<p style="color:#914AC8;padding:20px 0;">Nenhum termo encontrado.</p>';
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "term";
    div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
    termsDiv.appendChild(div);
  });
}

"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
  const btn = document.createElement("button");
  btn.textContent = letter;
  btn.dataset.letter = letter;
  alphabetDiv.appendChild(btn);
});

alphabetDiv.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    document.querySelectorAll(".alphabet button").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    renderTerms(searchInput.value, e.target.dataset.letter);
  }
});

searchInput.addEventListener("input", () => {
  const active = document.querySelector(".alphabet .active").dataset.letter;
  renderTerms(searchInput.value, active);
});

renderTerms();