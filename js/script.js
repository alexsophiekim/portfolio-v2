$(document).ready(function(){
  $('.ti-menu').on('click', function(){
    $('ul').toggleClass('active');
    $('.ti-menu').hide();
    $('.ti-close').show();
    $('li').click(function(){
      $('ul').removeClass('active');
      $('.ti-menu').show();
      $('.ti-close').hide();
    })
  });
  $('.ti-close').click(function(){
      $('ul').removeClass('active');
      $('.ti-menu').show();
      $('.ti-close').hide();
  });
  $(window).scroll(function(){
    var top = $(window).scrollTop() / 450;
      $('.aboutBox').css("opacity", -1 + top)
  });
});
