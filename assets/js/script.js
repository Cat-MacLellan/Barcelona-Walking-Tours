// Page scrolls to top when logo is clicked.
// Logo shrinks as the page moves down.
window.onscroll = function() { scrollFunction() };
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
        scrollTop: $(hash).offset().top - 200
      }, 1000, function() {
     //   window.location.hash = hash;
      });
    }
  });
});
//Burger menu collapses when user clicks link.
$('a').click(function() {
  $('.navbar-collapse').collapse('hide');
});
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
//Sumbits booking enquiry and displays alert message
function submit_by_id() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var tourName = document.getElementById("tourName").value;
  var datepicker = document.getElementById("datepicker").value; {
    if (firstName === '' || email === '' || tourName === '' || datepicker === '' || lastName === '' || number === '') {
      alert("You forgot to fill in the form!");
    }
    else {
      document.getElementById("form_id").submit();
      alert("Thank you, " + firstName + ", for sending us a booking enquiry. One of our team will be in touch with you at " + email + " soon!");
    }
  }
}
