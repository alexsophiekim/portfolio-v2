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

var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    // easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0.8,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
