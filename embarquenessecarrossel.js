document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll(".carrossel figure img");
    const btnAnterior = document.querySelector(".nav.anterior");
    const btnProximo = document.querySelector(".nav.proximo");
    let indiceAtual = 0;
  
    function mostrarImagem(indice) {
      imagens.forEach((img) => img.classList.remove("active"));
      imagens[indice].classList.add("active");
    }
  
    function alternarImagem(direcao) {
      indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;
      mostrarImagem(indiceAtual);
    }
    btnAnterior.addEventListener("click", () => alternarImagem(-1));
    btnProximo.addEventListener("click", () => alternarImagem(1));

  });
  