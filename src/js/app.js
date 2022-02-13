jQuery(function () {
  $(document).on('click', '.header__burger', function() {
    $('.header__burger, .header__controls').toggleClass('active');
  });
});