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
      $(this).toggle('slow');
    }
    else {
      $(this).hide('slow');
    }
  });
}


function hideMap() {
      $('#map').hide('slow') 
      console.log('hide map');
    }

function showMap() {
  $('#map').show('slow')
  console.log('show map');
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
  console.log('changed section');
}


  
  
 