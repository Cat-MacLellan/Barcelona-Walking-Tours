# Barcelona Walking Tours

### Overview 

For my second milestone project, I decided to create a website to encourage sustainable tourism and an environmentally friendly way to explore a new city, 
by promoting walking tours. I have decided to focus on one city that has a large influx of tourists, including myself, which is Barcelona in Spain. 

The aims of sustainable tourism is to increase the benefits and to reduce the negative impacts caused by tourism for destinations. This can be achieved by: 

- Providing authentic tourist experiences that celebrate and conserve heritage and culture. 
- Creating socio-economic benefits for communities through employment and income earning opportunities. 

 
The website is split into four sections. The first being the ‘home’ section which acts as a menu summarising each section and allows the user to navigate to the three other sections. 
These remaining sections are titled Walking Tours, Plan Your Trip and Check The Weather. 

#### Walking Tours

The walking tours have been inspired by Barcelona’s famous architecture. By exploring the city on a walking tour and being educated by a guide provides an authentic tourist experience - which is the first aim one of sustainable tourism. Walking Tours are also eco-friendly and allows tourist to avoid the use of public transportation. 

A user can click on a tour, read the information and see the different landmarks included in the tour displayed on the Google Map. The can also send a booking enquiry for a specific tour. 

#### Plan Your Trip 

This section of the website also utilizes the use of a Google Map. This allows a user to search for eco-friendly accommodation, restaurants and shops, and see where they are located in the city by the markers on the Google map. 
Referring to the second aim of sustainable tourism, this promotes local businesses and creates opportunities for the growth of environmentally friendly establishments. 

#### Check The Weather

Check The Weather allows the user to input any city name and search for the current weather. The purpose for this section is to encourage the user to plan their attire for the day based on the weather i.e. take an umbrella or pack an anorak. It provides the playful example that the world throws away enough umbrellas to rebuild the eiffel tower 25 times. 
However, this carries the serious message of the impact of purchasing cheap umbrellas and single use plastic cagoule, which are designed to end up in the bin. 

#### The Website's Future Potential

Presently, the website focuses on one city that experience a high level of tourism. However, with some further research, it has the potential to grow and provide walking tours and information for  
multiple cities using the Google Map and weather finder. 

# UX

The overall aim for this single page website is to look clean, clear and straightforward to use. This has been achieved by using a simple colour scheme throughout the site and creating a lot of space between the sections with padding. The site also uses some Jquery show/hide to avoid over cluttering the page and providing an interactive element.

The user should have the feeling that they are able to ‘flow’ through the different sections of the site. The use of smooth scrolling by from the navbar or using the ‘explore’ buttons provides this effect.

The UX design is explained further in the wireframes below. NB: there are some differences between the wireframes and the finished design.

### Wireframes

The site using a static navbar on both mobile and desktop which allows the user to move around the different sections of the website easily. The navbar shrinks 
as the user moves down the page allowing the logo to be more noticable when the site has first loaded. 

There is an eye-catching masthead showing a birds-eye view of Barcelona and a button allowing the user to "Explore" further. 

![Wireframe 1](https://i.ibb.co/VQ3TKZ6/Header-Desktop.png)
![Wireframe 2](https://i.ibb.co/j46FnBG/Header-mobile.png)

This "Explore" button moves the site to the home section. This section is acts as a clean introduction to the site and another point of navigation that the user 
can easily return to. 

![Wireframe 3](https://i.ibb.co/BGY53B1/Home-Desktop.png)
![Wireframe 4](https://i.ibb.co/bdcKL7H/Home-Mobile.png)

When a user clicks one of the tours, text descibing the tour will appear below the buttons and google markers will appear on the map showing the landmarks that
specific tour will pass. The text is hidden to avoid having a high amount of text on the page and makes it clear which information applies to which tour. The colour
of the buttons also matches the google map icons providing a clear correllation between the tour and it's landmarks. This provides an interactive and visualling 
pleasing way to present the information to the user.

![Wireframe 5](https://i.ibb.co/tCQmqJf/Tours-Desktop.png)
![Wireframe 6](https://i.ibb.co/SVHfPGJ/Tours-Mobile.png)

Both the walking tours and plan your trip sections are similar with the differences being the text and buttons. 

![Wireframe 7](https://i.ibb.co/RhgqkWH/Sustainable-Tourism-Desktop.png)
![Wireframe 8](https://i.ibb.co/4snXsX8/Sustainable-Tourism-Mobile.png)

The booking enquiry modal for desktop is straightforward and easy to use. This will be full screen on mobile with the ability to close the modal. 

![Wireframe 9](https://i.ibb.co/4V9sYCp/Booking-Enquiry-Modal.png)

The check The weather section is simple and clear. There is a placeholder image and text which will change to the details of the valid city that the user has inputted. 

![Wireframe 10](https://i.ibb.co/VpsvGCF/Check-The-Weather-desktop.png)
![Wireframe 11](https://i.ibb.co/Fb8cKkR/Check-The-Weather-mobile.png)



## User Stories
- As a user, I want to learn about sustainable tourism. I can do so by clicking the ‘Explore’ button in the masthead or ‘home’ in the navbar. From the ‘home’ section, I can read the info for the sections and chose one by clicking on the chosen sections ‘Explore’ button. I can read the info of that section and navigate to the other by using the navigation bar. I can also decide to return home on the navigation bar and ‘Explore’ another section. 
- As a user, I want to find information about walking tours in Barcelona. I can do this by clicking walking tours on the navigation bar or clicking home and the explore button for walking tours. I can then click the different walking tour buttons to see information about the tour and the locations included on the map. 
- As a user, I want to book a walking tour.  I can do this by clicking walking tours on the navigation bar or clicking home and the explore button for walking tours. I can click the ‘Book Tour’ button to open the modal and fill in the details in the booking form. I can click send enquiry and receive a confirmation message on the webpage.
- As a user I want to find eco-friendly establishments in Barcelona.  I can do this by clicking Plan Your Trip on the navigation bar or clicking home and the explore button for splan your trip. I can then click the button for type of establishment I wish to find and see the location on the map. I can click on the map marker to see the name of the business in the info window.
- As a user, I want to check the current weather of a specific city.  I can do this by clicking check the weather on the navigation bar or clicking home and the explore button for check the weather. I can then input which city I would like to find the weather for and click the button to ‘find weather’. I can then see the weather description with a weather icon, and the min and max temperatures of the day. 

# Features

## Existing Features
- Fixed and reponsive navbar
- Navbar shrinks on scroll
- Click logo to return to top of page 
- Smooth scrolling
- Eye-catching masthead image with text overlay
- Google Map API with changing markers to display data
- Ability to click on Google Map marker to open infowindow
- Buttons using JQuery to show/hide text
- Modal using Javascript to respond to user.
- Open Weather Map API displaying the current weather of the inputted city
- Fully responsive features

## Features To Be Implemented 
- Email confirmation to user when booking enquiry is sent.
- Polyline on Google Map to show the route of each tour and the tour starting point. 
- Five day weather forecast as well as displaying the current weather of the inputted city

## Tech Used

### Tech used includes: 
- **HTML**, **CSS**, **JQuery**, **Javascript**
- [Bootstrap](http://getbootstrap.com/)
- Used for styling, conponents and buliding a responsive layout. 
- [Google Fonts](https://fonts.google.com/)
- Used for webiste font. 
- [Googe Map Api](https://developers.google.com/maps/documentation/)
- Used to implement the Google Map. 
- [Open Weather Api](https://openweathermap.org/api)
- Used to find data for Check The Weather section.

# Testing 

## Testing User Stories

1. Find information on sustainable tourism:
    1. Click Explore button in masthead or home button in nav bar
    2. Click the explore button for section in home or select from nav bar
    3. Browse through the different sections using the nav bar
    4. Or return home using nav bar and select explore button for a different section

2. Find information about walking tours
    1. Click Explore in masthead or home in nav bar.
    2. Select Explore for walking tours sections or click on walking tours in nav bar. 
    3. Press the tour buttons to see info about tour
    4. Press the tour buttons to see the relevant markers for the tour appear on map
    5. Press the marker to display the info-window with the name and picture of the landmark positioned at that marker.

3. Book a walking tour: 
    1. Click Explore in masthead or home in nav bar.
    2. Select Explore for walking tours sections or click on walking tours in nav bar. 
    3. Click on ‘Book’ button to display modal
    4. Press ‘send enquiry’ without filling in detail returns a 'please fill in this field' message.
    5. Press ‘send enquiry’ with fields filled in correctly closes the modal and returns the message ‘your enquiry has been sent’ next to the book button.

4. find eco-friendly establishments in barcelona: 
    1. Click Explore in masthead or home in nav bar.
    2. Select Explore for Plan Your Trip section or click on Plan Your Trip in nav bar. 
    3. Press the business type buttons to see the relevant markers appear on the map
    4. Press the marker to display the info-window with the name of the business positioned at that marker.

5. Find the current weather of a city:
    1. Click Explore in masthead or home in nav bar.
    2. Select Explore for Check the Weather section or click on Check The Weather in nav bar. 
    3. Click ‘Check Weather’ button with field empty returns “please enter a city name message”. 
    4. Click ‘Check Weather’ button with city name that doesn’t exist returns “please enter a city name message”. 
    5. Click ‘Check Weather’ button with a correct city name displays the city name below and weather description appears. 

## Code and Browser Testing 

- HTML and CSS validatiors used to check for syntax errors.
- External users tested all features to ensure all working correctly. 
- Tested on mobile, tablet and desktop devices to ensure full website is responsive. 
- Browers tested:
    - Google Chrome
    - Safari
    - IE
    - Firefox

# Deployment

### Github pages
- Find the website's repository here: https://github.com/Cat-MacLellan/Barcelona-Walking-Tours
- In settings, find GitHub Pages
- Change source in the dropdown menu to master branch 
- Add in domain name
- save and then open published web page. 

### Creating a local copy
- Find the website's repository here: https://github.com/Cat-MacLellan/Barcelona-Walking-Tours
- under the repository name, click clone or download
- Copy the repository URL
- Open Git Bash
- Change the location of the working directory to where the cloned one will be made
- Type git clone and paste the directory URL
- press enter

# Credits 

## Media 
- Masthead image:
    - https://www.reddit.com/r/Damnthatsinteresting/comments/8syrx2/birds_eye_view_of_barcelona_spain/
- Tour Landmark Images
    - https://www.pinterest.co.uk/pin/482940760014462654/
    - https://en.wikiarquitectura.com/building/park-gueell/
    - https://basilicadelpi.cat/en/home/
    - https://barcelonasecreta.com/curiosidades-la-catedral-barcelona-guarda-tras-muros/
    - http://www.elperfildelatostada.com/2018/01/apolo-75.html
    - http://travel-with-us.site/barcelona/main-landmarks/palau-de-la-musica-catalana/
    - https://www.attraction-tickets-direct.co.uk/barcelona-attraction-tickets/barcelona-highlights-tour-montjuic-cable-car
    - https://www.flickr.com/photos/mgilbert/3871679204
    - https://www.forcadelloficina.com/es/oficinas-luminosas-en-alquiler-en-el-distrito-22-barcelona-cod-18913.html
- Weather Icons
    - https://openweathermap.org/weather-conditions

## Acknowledgements
- I found inspiration for the site from https://barcelonarchitecturewalks.com/
- I would like to thank my mentor and the Interactive Frontend Slack channel for their help and advice.