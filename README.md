# Project-2 

Title: Find Info.now

2nd Coding Project: User-Centric Frontend Development - Code Institute
This is my 2nd coding project. In this project I have created 2 user interactive tools, a Currency Converter that translates major international currency to Singapore dollars (vice versa) and a Weather Forecast tool that displays latest weather forecast in cities around the world.

This website caters to anyone who is based in Singapore and planning to travel abroad to major cities and foreigners who are travelling to/from Singapore.

In this project, I have created a responsive website and the design is simple and easy to use. At the same time, the tools that I have created will respond to the user’s actions and displays most-up-to-date information using APIs.


UX

1. Strategy

The key intention of this project is to create 2 search tools using 2 APIs in one website for users who are looking for information relating to latest currency exchange rates and current weather forecasts in any cities around the world. Users can utilise these tools to input any amounts to retrieve the latest currency values and search for weather forecast in any of their desired cities.
As part of the design process, I have saved the wireframes in folder: ‘imagewireframes’.  To view the jpg images, please change size view to 20%.


2. User Stories

This website caters to members of public who are searching for information relating to currency exchanges and weather forecasts.

Key intention is to attract users who are planning for their next holiday and may wish to find out about the currency exchange and weather forecast for the countries that they are visiting.


3. Scope

Based on above project strategy, I identified the following requirements:

The website must provide users with ease of navigation and displays information that is clear and easy to read.


ii)Content Requirements

The website includes a simple introductory page and search tools are displayed in 2 separate pages for easy navigation . I included simple user instructions for each search tool.


iii)Structure

The website pages included:

Find.Info.now - Introduction

Find Currency Converter - A page that contains a currency converter that allows to translate major currencies to Singapore dollars (vice versa). The list of currencies available for conversion are EUR,GBP,USD,AUD,CAD,CNY,HKD,INR,IDR,JPY,KRW,MYR,NZD,PHP,CHF,THB,TWD,VND,AED,QAR,SAR.

Whenever the users select the currency of their choice, I included the national anthem audio and country map to enhance users experience. 

Find Weather Forecast - A page that contains a search tool in which users can enter any cities around the world to retrieve latest weather forecast in their desired cities.

The weather forecasts includes Current Temperature, Current Weather, Current Humidity , Current Weather Speed and Current Weather Direction. 

The project uses a flat structure and is only a click away from each page.

iv)Skeleton

As part of the design process, I saved the wireframes in folder: ‘imagewireframes’. To view the jpg images, please change size view to 20%.

v)Surface

Colors:

The main colors used are black and white since it is an information website.

vi)Background Images

Performing an image search for globe led me to use the background image in my website.

vii)Typeface

Throughout the site I used Arial for a more formal read.

viii)Iteractions

Included simple user instructions in the page and easy to use dropdown currency list when users are using the currency converter. I have included multimedia elements i.e national anthem audio and country map to enhance users experience. 

Created a simple layout for users to search the weather forecasts in any cities. Included an error message whenever the 'city' field is empty to notify the users.


4.Features

All Page Features:

Up To Date External Data

Currency Converter uses an API from the Monetary Authority of Singapore to get daily end of day currency exchanges vs. Singapore Dollars.

The list of currencies available for conversion are EUR,GBP,USD,AUD,CAD,CNY,HKD,INR,IDR,JPY,KRW,MYR,NZD,PHP,CHF,THB,TWD,VND,AED,QAR,SAR.
This is a free API. However, the API is subject to occassional weekly website maintenance.

API for Exchange Rates - End of Period, Daily
The Resource ID for this resource is 95932927-c8bc-4e7a-b484-68a66a24edfe.
Return the first five results
https://eservices.mas.gov.sg/api/action/datastore/search.json?resource_id=95932927-c8bc-4e7a-b484-68a66a24edfe&limit=5


Weather Forecast uses a simple, lightweight jQuery plugin used to display the current weather of any city using the free OpenWeatherMap API.

This plugin allows to display the location, the current temperature, the current low temperature, the current high temperature, a description of the current weather, a weather icon, the humidity level, the wind speed, the time the sun will rise, and the time the sun will set.

I registered for an API Key . Typicallly, an API key is reccomended.  Free users can make 60 requests per minute.

API call:
http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

Parameters:
APPID {APIKEY} is your unique API key


Search Currency Converter
Users can enter local amount and select currency denomination from the list of currencies that are available for conversion and the corresponding SGD equivalent value will appear in the Singapore amount placeholder (vice versa).

Search Weather Forecast 
Users can search for any weather forecast by entering city name . 
An error message will appear above search placeholder if the user did not enter city's name.

All pages have been written with semantic HTML in mind.

Fixed Scroll to Top: Each page has a fixed scroll to top, for ease of navigation.

Responsive Design: Site pages are designed to work on all sizes of device.

If you try to click on the social media icons in the footer, it will open in a new tab using "target=_blank"


Features Left to Implement

a.To include currency conversion for all worldwide currencies (vice versa). 

Currently , the currency conversion only converts major currencies to Singapore dollars (as a base currency). 
This is because i used a local API from the Central Bank of Singapore to retrieve the latest exchange rates.

b.To include the change of background image according to current weather's description in each search result.
This can be done by including an exception in the javascript function using 'switch and case'

I did not create actual social media accounts for the website, hence the social media links are fictitious.

5.Technologies Used

In this project the following technologies have been used:

JQuery.ajax (Exchange rates and Weather Forecast can be easily accessed by using jQuery to make an AJAX call.)

Acessing Real-time Exchange rates and Weather Forecast 

Javascript

Bootstrap 4

HTML

CSS

Inline html styling 

6.Testing

Throughout this project I have done regular testing and reloaded the pages a number of times after each addition and modification.

My first round of testing was functionality testing in which I performed the following actions.

Testing the navigation links to ensure the pages are linked.

Below are the tests for each of the search tools. My tests are mainly to test if the free APIs are working well.

Test 1
Testing currency converter to ensure that each country's currency conversion is correct.

Issues
A few of the currencies needed attention as the keys differed from each other. eg. eur_sgd vs vnd_sgd_100.
The javascript did not capture the exception and all currency conversions were calculated as 1:1. 

Solution
Amended the script to include exception for keys that includes "100" eg ( key.includes("100")) and applying the currency conversion : value /100. The issue was resolved.

Test 2
Testing currency converter to ensure that each country's currency display the correct country's flag 

Issues
A few of the currencies needed attention as the keys differed from each other. eg. eur_sgd vs vnd_sgd_100.
The javascript did not capture the exception and couldn't display the correct flag.

Solution
Amended the script to include the exception for keys that includes "100" eg ( key.includes("100")).
All flag images must be named using 1st 3 characters in the currency key eg. EUR.png
The issue was resolved.

Test 3
Testing currency converter to ensure that for each country's currency selection, it is playing the correct country's National Anthem Audio and the Country Map was displayed correctly.

Issues
A few of the currencies needed attention as the keys differed from each other. eg. eur_sgd vs vnd_sgd_100.
The javascript did not capture the exception and couldn't play the correct audio.

Solution
Amended the script to include the exception for keys that includes "100" eg ( key.includes("100")).
All audio files and Country map images must be named using 1st 3 characters in the currency key eg. EUR.mp3 and EUR.png
The issue was resolved.

Search for Weather Forecast 
Test 1
Testing weather forecast to ensure that each country's weather is displayed according to the API.


Issues
The weather description was capturing the longer description. eg. Broken Clouds instead of Cloudy
The temperature was not reflected as Celsius.


Solution
Amended the script to fetch from data.weather[0].main and added &deg;C.The issue was resolved.

Test 2
Testing weather forecast to ensure that each country's weather description icon is displayed correctly.


Issues
The icon did not appear according to weather description.


Solution
Amended the script to extract the correct icons from url : http://openweathermap.org/img/wn/. The issue was resolved.


The Results of this testing:

To test the functionality and usability of the site, I did a class presentation. Their feedback was the website was too plain and needed 
an introduction to the website. However, all the APIs were working fine.

I tested the compatibility of my site by viewing the website on my phone to check responsive settings.

I checked if the images all scaled and maintained aspect ratio instead of stretching (except for country map).

7.Deployment

The site has been deployed using github pages in the usual way.

The app live at https://howyjane.github.io/Project-2


8.Credits

Content & Media
All content on this site is taken from MAS and OpenWeatherMap through the use of APIs. All copyrights of images and text belong to their respective owners.

API documentation links:

OpenWeatherMap API documentation: https://openweathermap.org/guide#api

MAS API: https://www.mas.gov.sg/Statistics/APIs/API-Documentation.aspx

Images

Country Map images downloaded from : https://commons.wikimedia.org/wiki/Main_Page

National Flag images downloaded from :https://img.geonames.org/flags/l/

Europe Map: https://en.wikipedia.org/wiki/File:Flag_of_Europe.svg

Background images
https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80

Audio
National Anthem downloaded from https://www.anthemworld.com/

-Social Media Links

https://sg.linkedin.com

https://www.instagram.com/accounts/login/


9.Acknowledgements

My website was inspired by https://finance.yahoo.com/currency-converter/ and https://openweathermap.org/city
