$(document).ready(function(){
  $('.ti-menu').on('click', function(){
    $('ul').toggleClass('active');
    $('li').click(function(){
      $('ul').removeClass('active');
    })
  });
});
