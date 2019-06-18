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















/*function show(data) {
  var icon = data.weather[0].icon;
  var iconURL = "https://openweathermap.org/img/w/" + icon + ".png";


  return "<h3>Current Weather for " + data.name + ", " + data.sys.country + "</h3>" +
    "<p>" + data.weather[0].description + "</p>" +
    "<p>Max: " + Math.round(data.main.temp_max) + "</p>" +
    "<p>Min: " + Math.round(data.main.temp_min) + "</p>";

    $('#icon').attr('src', iconURL);
}*/



































/*var openWeatherAppId = '6b3de6eb0de111a5fd9f861d0cc8067f',
  openWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';


var prepareData = function(units) {

  var cityName = $('#city-name').val()

  if (cityName && cityName != '') {
    cityName = cityName.trim()
    getData(openWeatherUrl, cityName, openWeatherAppId, units)
  }
  else {
    alert('please enter city name')
  }
}


$(document).ready(function() {
  $('.btn-metric').click(function() {
    prepareData('metric');
  });
  $('.btn-imperial').click(function() {
    prepareData('imperial')
  });
});

function getData(url, cityName, appId, units) {
  var request = $.ajax({
    url: url,
    dataType: "jsonp",
    data: { q: cityName, appid: appId, units: units },
    jsonpCallBack: "fetchData",
    type: "GET"
  }).fail(function(error) {
    console.error(error);
    alert('Error sending request');
  });
}

function fetchData(forecast) {
  console.log('it worked')
  var html = '',
    cityName = forecast.city.name,
    country = forecast.city.country;

  html += '<h3> Weather Forecast for ' + cityName + ', ' + country + '</h3>';
  forecast.list.forEach(function(forecastEntry, index, list) {
    html += '<p>' + forecastEntry.dt_text + ': ' + forecastEntry.main.temp + '</p>';
  });

  $('#log').html(html)

}
























/*function weatherBallon( cityName ) {
  var key = '6b3de6eb0de111a5fd9f861d0cc8067f';
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=Barcelona,Es&mode=json&appid=6b3de6eb0de111a5fd9f861d0cc8067f')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherBallon( 'Barcelona' );
};


function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = celcius + '&deg;';
  document.getElementById('location').innerHTML = d.name;
}

/*const key = '6b3de6eb0de111a5fd9f861d0cc8067f';
if(key=='6b3de6eb0de111a5fd9f861d0cc8067f') document.getElementById('temp').innerHTML = ('6b3de6eb0de111a5fd9f861d0cc8067f');

function weatherBallon( cityName ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona,Es&appid=6b3de6eb0de111a5fd9f861d0cc8067f')  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 'Barcelona, Es' );
}; */
