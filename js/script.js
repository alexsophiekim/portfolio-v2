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

  $(window).scroll(function() {
			$('.animation').each(function(){
			var offSet = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
				if (offSet > topOfWindow +100) {
					$(this).addClass("animated fadeInUp");
				}
			var topOfWindow = $(window).scrollTop();
				if (topOfWindow < offSet -900) {
					$(this).removeClass("animated fadeInUp");
				}
			})
  });

});
