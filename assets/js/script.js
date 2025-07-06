 $(document).ready(function () {
    // Mostrar/esconder o botão ao rolar a página
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.btnTopo').fadeIn();
      } else {
        $('.btnTopo').fadeOut();
      }
    });

    // Ao clicar, rolar suavemente para o topo
    $('.btnTopo').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });
  });

  function trocarH2porH3() {
  const heroArea = document.querySelector('.hero-aria');
  if (!heroArea) return;

  // Pega o elemento atual, seja h2 ou h3
  const currentHeading = heroArea.querySelector('h2, h3');
  if (!currentHeading) return;

  // Se for ≤1366 e for H2, troca para H3
  if (window.innerWidth <= 1366 && currentHeading.tagName === 'H2') {
    const h3 = document.createElement('h3');
    h3.innerHTML   = currentHeading.innerHTML;
    h3.className   = currentHeading.className;
    h3.style.cssText = currentHeading.style.cssText;
    heroArea.replaceChild(h3, currentHeading);
//Modificacao
  // Se for >1366 e for H3, troca para H2
  } else if (window.innerWidth > 1366 && currentHeading.tagName === 'H3') {
    const h2 = document.createElement('h2');
    h2.innerHTML     = currentHeading.innerHTML;
    h2.className     = currentHeading.className;
    h2.style.cssText = currentHeading.style.cssText;
    heroArea.replaceChild(h2, currentHeading);
  }
}

  function openVideo(button) {
    // Pega o caminho do vídeo do atributo data-video
    var videoPath = button.getAttribute('data-video');
    
    // Exibe o modal com o vídeo
    var modal = document.getElementById("videoModal");
    var videoFrame = document.getElementById("videoFrame");
    
    // Define o src do iframe com o caminho do vídeo
    videoFrame.src = videoPath;  // Agora o caminho será dinâmico

    modal.style.display = "flex";
}

function closeVideo(event) {
    var modal = document.getElementById("videoModal");

    // Se o clique for fora do vídeo, fecha o modal
    if (event.target === modal) {
        var videoFrame = document.getElementById("videoFrame");
        videoFrame.src = "";  // Para o vídeo ao fechar
        modal.style.display = "none";
    }
}

  window.addEventListener('load', trocarH2porH3);
  window.addEventListener('resize', trocarH2porH3);