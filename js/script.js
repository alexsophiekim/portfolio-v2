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
  })
});

function scrollDown() {
  window.scrollTo(0, 680);
}
