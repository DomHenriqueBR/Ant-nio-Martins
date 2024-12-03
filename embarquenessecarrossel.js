document.addEventListener("DOMContentLoaded", () => {
    const carrossel = document.querySelector(".carrossel_fotos");
    const imagens = carrossel.querySelectorAll("img");
    let indiceAtual = 0;
  
    function alternarImagem() {
      imagens[indiceAtual].classList.remove("active");
      indiceAtual = (indiceAtual + 1) % imagens.length;
      imagens[indiceAtual].classList.add("active");
    }
    setInterval(alternarImagem, 3000);
  });
  