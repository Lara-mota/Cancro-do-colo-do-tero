
let testemunhos = [];

function carregar() {
  return JSON.parse(localStorage.getItem("colosaudavel_testemunhos") || "[]");
}

function guardar() {
  localStorage.setItem("colosaudavel_testemunhos", JSON.stringify(testemunhos));
}

function carregarTabela() {
  testemunhos = carregar();
  const pesquisa = document.getElementById("pesquisa").value.toLowerCase();

  const filtrados = pesquisa
    ? testemunhos.filter(t =>
        t.nome.toLowerCase().includes(pesquisa) ||
        t.texto.toLowerCase().includes(pesquisa))
    : testemunhos;

  document.getElementById("statTotal").textContent     = testemunhos.length;
  document.getElementById("statPendente").textContent  = testemunhos.filter(t => t.estado === "pendente").length;
  document.getElementById("statAprovado").textContent  = testemunhos.filter(t => t.estado === "aprovado").length;
  document.getElementById("statRejeitado").textContent = testemunhos.filter(t => t.estado === "rejeitado").length;

  const tbody = document.getElementById("tabelaBody");
  tbody.innerHTML = "";

  if (filtrados.length === 0) {
    document.getElementById("vazio").style.display = "block";
    return;
  }
  document.getElementById("vazio").style.display = "none";

  filtrados.forEach((t, i) => {
    const idx = testemunhos.findIndex(x => x.id === t.id);
    const badgeClass = {pendente:"badge-pendente", aprovado:"badge-aprovado", rejeitado:"badge-rejeitado"}[t.estado] || "badge-pendente";
    tbody.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${t.data || "—"}</td>
        <td><strong>${t.nome}</strong><br><small style="color:#914AC8">${t.email || ""}</small></td>
        <td>${t.idade || "—"}</td>
        <td>${t.distrito || "—"}</td>
        <td>${t.anoDiagnostico || "—"}</td>
        <td><div class="texto-prev" title="${t.texto}">${t.texto}</div></td>
        <td><span class="badge ${badgeClass}">${t.estado}</span></td>
        <td>
          <div class="acoes">
            <button class="btn-ap" onclick="alterarEstado(${idx},'aprovado')">✓ Aprovar</button>
            <button class="btn-rj" onclick="alterarEstado(${idx},'rejeitado')">✗ Rejeitar</button>
            <button class="btn-vr" onclick="verTestemunho(${idx})">👁 Ver</button>
            <button class="btn-dl" onclick="apagar(${idx})">🗑</button>
          </div>
        </td>
      </tr>`;
  });
}

function alterarEstado(idx, estado) {
  testemunhos[idx].estado = estado;
  guardar();
  carregarTabela();
}

function apagar(idx) {
  if (confirm("Tens a certeza que queres apagar este testemunho?")) {
    testemunhos.splice(idx, 1);
    guardar();
    carregarTabela();
  }
}

function verTestemunho(idx) {
  const t = testemunhos[idx];
  document.getElementById("modalNome").textContent = t.nome + ", " + t.idade + " anos";
  document.getElementById("modalMeta").textContent = `${t.distrito} · ${t.data} · Diagnóstico: ${t.anoDiagnostico}`;
  document.getElementById("modalTexto").textContent = t.texto;
  document.getElementById("modalVer").classList.add("aberto");
}

function fecharModal() {
  document.getElementById("modalVer").classList.remove("aberto");
}

function exportarJSON() {
  const dados = JSON.stringify(testemunhos, null, 2);
  const blob  = new Blob([dados], {type:"application/json"});
  const url   = URL.createObjectURL(blob);
  const a     = document.createElement("a");
  a.href = url; a.download = "testemunhos_colosaudavel.json";
  a.click(); URL.revokeObjectURL(url);
}

function limparTudo() {
  if (confirm("Tens a certeza que queres apagar TODOS os testemunhos?")) {
    localStorage.removeItem("colosaudavel_testemunhos");
    carregarTabela();
  }
}

document.getElementById("pesquisa").addEventListener("input", carregarTabela);
document.getElementById("modalVer").addEventListener("click", function(e) {
  if (e.target === this) fecharModal();
});

carregarTabela();