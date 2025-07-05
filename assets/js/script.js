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

  window.addEventListener('load', trocarH2porH3);
  window.addEventListener('resize', trocarH2porH3);