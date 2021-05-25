# NYC Property Violations: HousingApp


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## User Story

```
AS a homeowner/investor/realtor 
WHEN I use NYC Property Violations: HousingApp
I WANT to be able to look up NYC property information about a home's record on housing violations I have received or that I am interested in buying. 
```


### Demo-Screenshots of the App

![alt text](assets/images/final-page-1.png)
![alt text](assets/images/final-page-2.png)
![alt text](assets/images/final-page-3.png)
![alt text](assets/images/final-page-4.png)
![alt text](assets/images/final-page-5.png)


### Deployed Application URL

[NYC Property Violations: HousingApp](https://property-violations-housingapp.herokuapp.com/)


## Description


## Installations & Usage

Given you already have Node.js and MySQL Workbench installed on your computer, clone the repository on your local machine. On your local repository, create a .env file that contains 

```
DB_NAME=property_violationDB
DB_USER=
DB_PASSWORD=
```
Then open the terminal and naviagte to your local repo. Run this command to install all the dependencies. 

```
npm i 
```
Next open MySQL Workbench and run this lines of code 
```
DROP DATABASE IF EXISTS property_violationDB;
CREATE DATABASE property_violationDB;
```
Finally run any one of these commands on your terminal to start the server. 
```
npm run start
npm start
node server.js
```

Now you can type the following line on your browser and you would be able to use the app
```
localhost:3001
```

## Navigating the Repository

Once you open the repository, you will find

* server.js 
* package.json
* package-lock.json
* README.md
* ProjectGuide.md
* .gitignore

and various folders that contain 

- assets
  - images (app screenshots)

- config 
  - connection.js
- controller 
  - api
    - houseRoutes.js
    - index.js
    - userRoutes.js
  - homeRoutes.js
  - index.js
  - profileRoutes.js
- db
  - schema.sql
- models
  - House.js
  - index.js
  - User.js
- public 
  - css
    - main.css 
  - js 
    - homeScripts.js
    - login.js
    - logout.js
    - profile.js
    - save.js
- seeds
  - houseData.json
  - seed.js
  - userData.json 
- utils 
  - auth.js
  - helpers.js
- views
  - layouts
    - main.handlebars
  - homepage.handlebars
  - house.handlebars
  - login.handlebars
  - profile.handlebars
  - zip.handlebars


### Technologies Used

- Bootstrap 
- Sequelize 
- Express
- Node
- Handlebars 
- Axios 
- Express-sessions 
- dotenv
- MySQL
- MySQL Workbench 
- Bcrypt 
- Heroku
- <a href="https://data.cityofnewyork.us/resource/wvxf-dwi5.json">NYC Open Data API</a>


Copyright (c) [2021] [Justin Ng, Sabrina Sharmin]
