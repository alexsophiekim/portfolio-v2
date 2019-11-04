$(document).ready(function(){
  $('.ti-menu').on('click', function(){
    $('ul').toggleClass('active');
    $('li').click(function(){
      $('ul').removeClass('active');
    })
  });
});

element = document.getElementById("about");

// reset the transition by...
element.addEventListener("click", function(e) {
  e.preventDefault;
  element.classList.remove("run-animation");
  void element.offsetWidth;
  element.classList.add("run-animation");
}, true);
