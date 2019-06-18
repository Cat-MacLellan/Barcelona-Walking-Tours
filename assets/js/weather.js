$(document).ready(function() {

  $('#submitWeather').click(function() {

    var city = $('#city').val();

    if (city != '') {

      $.ajax({

        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=6b3de6eb0de111a5fd9f861d0cc8067f",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          var weather = show(data);
          console.log(data);
          $('#show').html(weather);

          $('#city').val('');
        }
      });
    }
    else {
      $("#error").html("That city doesn't exist!");
    }
  });
});

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function show(data) {
  var name = data.name;
  var tempMin = Math.round(data.main.temp_min);
  var tempMax = Math.round(data.main.temp_max);
  var desc = data.weather[0].description.capitalize();
  var icon = data.weather[0].icon;
  var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";

  $('#name').html(name);
  $('#tempMin').html(tempMin + '&#176');
  $('#tempMax').html(tempMax + '&#176');
  $('#desc').html(desc);
  $('#icon').attr('src', iconURL);

}