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