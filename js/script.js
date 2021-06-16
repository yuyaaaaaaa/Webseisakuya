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

  $('.sitecreate-btn').on('click', function() {
    $('.sitecreate-modal').slideDown();
  });
  $('.sitecreate-close-btn').on('click', function() {
    $('.sitecreate-modal').slideUp();
  });

  $('.marketing-btn').on('click', function() {
    $('.marketing-modal').slideDown();
  });
  $('.marketing-close-btn').on('click', function() {
    $('.marketing-modal').slideUp();
  });

  $('.support-btn').on('click', function() {
    $('.support-modal').slideDown();
  });
  $('.support-close-btn').on('click', function() {
    $('.support-modal').slideUp();
  });
});