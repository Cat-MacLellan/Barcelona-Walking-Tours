
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("logo").style.height= "50px";
  } else {
    document.getElementById("logo").style.height = "80px";
  }
}