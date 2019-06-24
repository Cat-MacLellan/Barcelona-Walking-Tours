// Page scrolls to top when logo is clicked.
// Logo shrinks as the page moves down.
window.onscroll = function() { scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("logo").style.height = "50px";
  }
  else {
    document.getElementById("logo").style.height = "80px";
  }
}
//Page scrolls to relevant ID when anchor tag is clicked.
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
//Burger menu collapses when user clicks link.
$('a').click(function() {
  $('.navbar-collapse').collapse('hide');
});
//Chages section when relevant link is clicked.
function changeSection(section) {
  $('.section').each(function(index) {
    if ($(this).attr("id") == section) {
      $(this).show('slow');
    }
    else {
      $(this).hide('slow')
    }
  });
  console.log('changed section');
}
//Shows map for sections one and two.
function hideMap() {
  $('.map').hide('slow')
  console.log('hide map');
}
//Hides Map for weather section.
function showMap() {
  $('.map').show('slow')
  console.log('show map');
}
//Displays relevant tour info when tour button is clicked. 
function showTourInfo(tourName) {
  $('.tour-info').each(function(index) {
    if ($(this).attr("id") == tourName) {
      $(this).toggle('slow');
    }
    else {
      $(this).hide('slow');
    }
  });
}
//Displays date picker calender
$(function() {
  $("#datepicker").datepicker();
});
//Displays booking verification message
function onSubmit() {
  var text = "Your booking enquiry has been sent!";
  document.getElementsByClassName("enquiry")[0].innerHTML = text;
}
