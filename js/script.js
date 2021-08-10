jQuery(function() {

  AOS.init({
    duration: 700,
  });

  $('.humberger-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-list').slideToggle();
  });

  $('.href-btn').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 100;
    $("html,body").animate({scrollTop: position});
  });

  // サービスモーダル
  $('.service-btn').click(function() {
    $(this).parents('.service-item').find('.service-modal').slideDown();
  });
  $('.modal-close-btn').click(function() {
    $(this).parents('.service-modal').slideUp();
  });
});