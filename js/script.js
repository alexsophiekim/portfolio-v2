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
};


const about = $('.about');
const skills = $('.skills');

about.click(function(){
  console.log('clicked');
    $('.aboutText').addClass('animation').toggle();
});
  //
  // var skillSet = $('.skillSet');
  // var offset = 300;
  // var skillSetOffsetTop = skillSet.offset().top - offset;
  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > skillSetOffsetTop) {
  //     skillSet.find('graph').addClass('animateLine');
  //   }
  //   else {
  //
  //   }
  // });
