(function () {
  var header = $('.page_header');
  var sticky = $('.page_topline').height();

  $(function () {
    $('.nav-item').click(function (e) {
      $('.nav-item.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  $(window).scroll(function () {
    if (window.pageYOffset > sticky) {
      header.addClass("affix");
    } else {
      header.removeClass("affix");
    }

    if ($(this).scrollTop()) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
})();
