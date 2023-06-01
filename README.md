# Weather_app
# Alphabin-weather-app

This project is a Weather application that provides various API endpoints for access the weather data from location.

Go and Check it Out [Deployed-link](https://weather-app-alphabin.netlify.app/).

## Instruction to Use Weather application

1. First you need to signup with email and password.
2. next it will redirect you to the login Page.
3. Fill your Login details.
4. after login it will redirect you to the weather website
5. here you can search the weather of any city
6. it will show you current weather and upcoming 6 days weather as well

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository: `git clone `
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. The application will be accessible at `http://localhost:8088`

## Environment Variables

Take 3  environment variables 
 1. API_KEY (get the key from weatherbit.io)
 2. port
 3. mongourl (Mongo db Url)

## API Endpoints

| Endpoint                    | Method | Description                               |
|-----------------------------|--------|-------------------------------------------|
| `/`                         | GET    | Start server response                     |
| `/current?city=cityname`    | GET    | Get current weather of the city           |
| `/forecast?city=cityname`   | GET    | Get current 7 days weather of the city    |
| `/user/signup`              | POST   | User can Signup                           |
| `/user/login`               | POST   | User can Login                            |
