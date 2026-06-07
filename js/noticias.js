/* ═══════════════════════════════════════════════
   COLO SAUDÁVEL — JavaScript Principal
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ─────────────────────────────────────────────
     CARROSSEL DE NOTÍCIAS (sem avanço automático)
  ───────────────────────────────────────────── */
  const faixa            = document.getElementById('faixa-carrossel');
  const btnAnterior      = document.getElementById('btn-anterior');
  const btnProximo       = document.getElementById('btn-proximo');
  const contenedorPontos = document.getElementById('indicadores-carrossel');

  if (!faixa || !btnAnterior || !btnProximo || !contenedorPontos) return;

  const slides      = faixa.querySelectorAll('.slide-carrossel');
  const totalSlides = slides.length;
  let indiceAtual   = 0;

  /* ── Cria os pontos indicadores ── */
  function criarIndicadores () {
    contenedorPontos.innerHTML = '';
    slides.forEach(function (_, indice) {
      const ponto = document.createElement('button');
      ponto.classList.add('ponto-indicador');
      ponto.setAttribute('aria-label', 'Ir para o slide ' + (indice + 1));
      if (indice === 0) ponto.classList.add('ativo');
      ponto.addEventListener('click', function () {
        irParaSlide(indice);
      });
      contenedorPontos.appendChild(ponto);
    });
  }

  /* ── Actualiza qual ponto está activo ── */
  function actualizarIndicadores () {
    const pontos = contenedorPontos.querySelectorAll('.ponto-indicador');
    pontos.forEach(function (ponto, indice) {
      ponto.classList.toggle('ativo', indice === indiceAtual);
    });
  }

  /* ── Move a faixa para o slide indicado ── */
  function irParaSlide (novoIndice) {
    indiceAtual = novoIndice;
    if (indiceAtual < 0)            indiceAtual = totalSlides - 1;
    if (indiceAtual >= totalSlides) indiceAtual = 0;
    faixa.style.transform = 'translateX(-' + (indiceAtual * 100) + '%)';
    actualizarIndicadores();
    slides.forEach(function (slide, indice) {
      slide.setAttribute('aria-hidden', indice !== indiceAtual);
    });
  }

  /* ── Eventos dos botões de navegação ── */
  btnAnterior.addEventListener('click', function () {
    irParaSlide(indiceAtual - 1);
  });

  btnProximo.addEventListener('click', function () {
    irParaSlide(indiceAtual + 1);
  });

  /* ── Suporte a gestos tácteis (swipe) ── */
  let posicaoInicialX = null;
  let posicaoAtualX   = null;
  const LIMIAR_SWIPE  = 50;

  faixa.addEventListener('touchstart', function (evento) {
    posicaoInicialX = evento.touches[0].clientX;
    posicaoAtualX   = null;
  }, { passive: true });

  faixa.addEventListener('touchmove', function (evento) {
    posicaoAtualX = evento.touches[0].clientX;
  }, { passive: true });

  faixa.addEventListener('touchend', function () {
    if (posicaoInicialX === null || posicaoAtualX === null) return;
    const diferenca = posicaoInicialX - posicaoAtualX;
    if (diferenca > LIMIAR_SWIPE) {
      irParaSlide(indiceAtual + 1);
    } else if (diferenca < -LIMIAR_SWIPE) {
      irParaSlide(indiceAtual - 1);
    }
    posicaoInicialX = null;
    posicaoAtualX   = null;
  });

  /* ── Navegação por teclado (acessibilidade) ── */
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'ArrowLeft')  irParaSlide(indiceAtual - 1);
    if (evento.key === 'ArrowRight') irParaSlide(indiceAtual + 1);
  });

  /* ── Inicialização ── */
  criarIndicadores();
  irParaSlide(0);

});