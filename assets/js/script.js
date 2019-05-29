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


function showTourInfo(tourName) {
  $('.tour-info').each(function(index) {
    if ($(this).attr("id") == tourName) {
      $(this).toggle(2000);
    }
    else {
      $(this).hide(1000);
    }
  });
}

function changeSection(section) {
  $('.section').each(function(index) {
    if ($(this).attr("id") == section) {
      $(this).show('slow');
    }
    else {
      $(this).hide('slow')
    }
  });
}
