const ORDEM = [
    "index.html","patologia.html","sintomas.html","prevencao.html","vacina.html",
    "rastreio.html","tratamento.html","perguntasFrequentes.html","contactos.html",
    "saberMais.html","simulador.html","quizzintro.html","quizz.html","jogosMitos.html",
    "realidade_aumentada.html","glossario.html","noticias.html","Testemunhos.html",
    "deixarTestemunho.html","Login.html","registo.htm", "Sobre_nos", "termos.html"
];

let dados = JSON.parse(localStorage.getItem("dados")) || [];

/* FUNÇÕES */
function media(arr){
    return arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0;
}

function mediana(arr){
    if(arr.length===0) return 0;
    let s=[...arr].sort((a,b)=>a-b);
    let m=Math.floor(s.length/2);
    return s.length%2 ? s[m] : (s[m-1]+s[m])/2;
}

function limparDados(arr){
    return arr.filter(t=>t>1 && t<600);
}

function percentagem(v,t){
    return t ? ((v/t)*100).toFixed(1) : 0;
}

function nome(p){
    return p.split("/").pop().replace(".html","");
}

if(dados.length>0){

let paginas={};

dados.forEach(d=>{
    if(!paginas[d.pagina]) paginas[d.pagina]=[];
    paginas[d.pagina].push(d.tempo);
});

/* TABELA */
let tabela="";
ORDEM.forEach(file=>{
    let chave = Object.keys(paginas).find(p=>p.includes(file));
    if(!chave) return;

    tabela+=`
    <tr>
        <td>${nome(file)}</td>
        <td>${paginas[chave].length}</td>
        <td>${percentagem(paginas[chave].length,dados.length)}%</td>
        <td><button class="verBtn" onclick="ver('${chave}')">Ver</button></td>
    </tr>`;
});

document.getElementById("tabela").innerHTML=tabela;

/* RESUMO */
let todos = limparDados(dados.map(d=>d.tempo));

document.querySelector(".resumoTexto").innerHTML=`
<p>
Este resumo apresenta estatísticas descritivas do comportamento,
especialmente o tempo de permanência nas páginas do website.
</p>
`;

document.querySelector(".resumoStats").innerHTML=`
<div class="stat"><strong>Média</strong><br>${media(todos).toFixed(2)} s</div>
<div class="stat"><strong>Mediana</strong><br>${mediana(todos).toFixed(2)} s</div>
<div class="stat"><strong>Máximo</strong><br>${Math.max(...todos).toFixed(2)} s</div>
<div class="stat"><strong>Mínimo</strong><br>${Math.min(...todos).toFixed(2)} s</div>
<div class="stat" style="grid-column: span 2;"><strong>Total</strong><br>${dados.length}</div>
`;

/* GRÁFICO GERAL */
new Chart(document.getElementById("graficoGeral"),{
    type:"bar",
    data:{
        labels:Object.keys(paginas).map(nome),
        datasets:[{
            label:"Tempo médio (s)",
            data:Object.values(paginas).map(a=>media(limparDados(a))),
            backgroundColor:"#b59ad8"
        }]
    }
});

/* DETALHE */
let chart;

window.ver=function(p){

let tempos = limparDados(paginas[p]);

if(chart) chart.destroy();

chart = new Chart(document.getElementById("graficoPagina"),{
    type:"line",
    data:{
        labels:tempos.map((_,i)=>i+1), // 1,2,3,4...
        datasets:[{
            label:"Tempo de permanência (segundos)", // ✅ legenda
            data:tempos,
            borderColor:"#7B3FA8",
            fill:false
        }]
    },
    options:{
        plugins:{
            legend:{
                display:true
            }
        },
        scales:{
            x:{
                title:{
                    display:true,
                    text:"Número de registo" // ✅ eixo X
                }
            },
            y:{
                title:{
                    display:true,
                    text:"Tempo (segundos)" // ✅ eixo Y
                }
            }
        }
    }
});

document.getElementById("statsPagina").innerHTML=`
<h3>${nome(p)}</h3>
<p>Tempo de permanência ao longo dos registos</p>
<div class="stats">
<div class="stat">Média<br>${media(tempos).toFixed(2)} s</div>
<div class="stat">Mediana<br>${mediana(tempos).toFixed(2)} s</div>
<div class="stat">Max<br>${Math.max(...tempos).toFixed(2)} s</div>
<div class="stat">Min<br>${Math.min(...tempos).toFixed(2)} s</div>
</div>
`;

document.getElementById("detalhe").scrollIntoView({behavior:"smooth"});
};

/* CONCLUSÃO */
let melhor="", pior="", max=0,min=999;

for(let p in paginas){
    let m=media(limparDados(paginas[p]));
    if(m>max){max=m;melhor=p;}
    if(m<min){min=m;pior=p;}
}

document.getElementById("conclusao").innerHTML=`
<h2>Conclusão</h2>
<p><strong>Mais envolvimento:</strong> ${nome(melhor)}</p>
<p><strong>Menos envolvimento:</strong> ${nome(pior)}</p>
<p>Tempos maiores indicam maior interesse do utilizador.</p>
`;

/* DOWNLOAD */
window.download = function(){

let texto = "RELATÓRIO ESTATÍSTICO\n\n";

/* ===== RESUMO ===== */
texto += "=== RESUMO GERAL ===\n";
texto += `Média: ${media(todos).toFixed(2)} s\n`;
texto += `Mediana: ${mediana(todos).toFixed(2)} s\n`;
texto += `Máximo: ${Math.max(...todos).toFixed(2)} s\n`;
texto += `Mínimo: ${Math.min(...todos).toFixed(2)} s\n`;
texto += `Total de registos: ${dados.length}\n\n`;

/* ===== TABELA / PÁGINAS ===== */
texto += "=== VISITAS POR PÁGINA ===\n\n";

ORDEM.forEach(file => {
    let chave = Object.keys(paginas).find(p => p.includes(file));
    if(!chave) return;

    let tempos = limparDados(paginas[chave]);

    texto += `Página: ${nome(file)}\n`;
    texto += `Visitas: ${paginas[chave].length}\n`;
    texto += `% do total: ${percentagem(paginas[chave].length, dados.length)}%\n`;

    if(tempos.length > 0){
        texto += `Média: ${media(tempos).toFixed(2)} s\n`;
        texto += `Mediana: ${mediana(tempos).toFixed(2)} s\n`;
        texto += `Máximo: ${Math.max(...tempos).toFixed(2)} s\n`;
        texto += `Mínimo: ${Math.min(...tempos).toFixed(2)} s\n`;
    } else {
        texto += "Sem dados válidos de tempo\n";
    }

    texto += "-----------------------------\n";
});

/* ===== CONCLUSÃO ===== */
let melhor = "", pior = "", max = 0, min = Infinity;

for(let p in paginas){
    let tempos = limparDados(paginas[p]);
    if(tempos.length === 0) continue;

    let m = media(tempos);

    if(m > max){
        max = m;
        melhor = p;
    }

    if(m < min){
        min = m;
        pior = p;
    }
}

texto += "\n=== CONCLUSÃO ===\n";

if(melhor && pior){
    texto += `Página com mais envolvimento: ${nome(melhor)}\n`;
    texto += `Página com menos envolvimento: ${nome(pior)}\n`;
} else {
    texto += "Não existem dados suficientes para conclusão.\n";
}

texto += "Tempos maiores indicam maior interesse do utilizador.\n";

/* ===== DOWNLOAD ===== */
let blob = new Blob([texto], { type: "text/plain" });

let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "relatorio_completo.txt";
a.click();

};
}