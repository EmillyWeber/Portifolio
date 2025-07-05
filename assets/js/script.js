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
    if (window.innerWidth <= 1366) {
      const heroArea = document.querySelector('.hero-aria h2');
      if (heroArea && heroArea.tagName === 'H2') {
        const h3 = document.createElement('h3');
        h3.innerHTML = heroArea.innerHTML;
        h3.className = heroArea.className;
        h3.style.cssText = heroArea.style.cssText;
        heroArea.parentNode.replaceChild(h3, heroArea);
      }
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