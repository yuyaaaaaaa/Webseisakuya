$(function() {

  AOS.init({
    duration: 1000,
  });

  $('.humberger-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-list').slideToggle();
  });
});