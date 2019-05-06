window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("logo").style.height = "50px";
  }
  else {
    document.getElementById("logo").style.height = "80px";
  }
}

$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        window.location.hash = hash;
      });
    }
  });
});
$('a').click(function() {
  $('.navbar-collapse').collapse('hide');
});


$('.tour-one').mouseenter(function() {
  $('.tour-one-txt').fadeIn('slow')
    .css('display', 'block');
});
$('.tour-one').mouseleave(function() {
  $('.tour-one-txt').fadeOut('slow');
});
$('.tour-two').mouseenter(function() {
  $('.tour-two-txt').fadeIn('slow')
    .css('display', 'block');
});
$('.tour-two').mouseleave(function() {
  $('.tour-two-txt').fadeOut('slow');
});
$('.tour-three').mouseenter(function() {
  $('.tour-three-txt').fadeIn('slow')
    .css('display', 'block');
});
$('.tour-three').mouseleave(function() {
  $('.tour-three-txt').fadeOut('slow');
});
$('.tour-four').mouseenter(function() {
  $('.tour-four-txt').fadeIn('slow')
    .css('display', 'block');
});
$('.tour-four').mouseleave(function() {
  $('.tour-four-txt').fadeOut('slow');
});
$('.tour-five').mouseenter(function() {
  $('.tour-five-txt').fadeIn('slow')
    .css('display', 'block');
});
$('.tour-five').mouseleave(function() {
  $('.tour-five-txt').fadeOut('slow');
});
