# Weather_app
# Alphabin-weather-app

This project is a Weather application that provides various API endpoints for access the weather data from location.

Go and Check it Out [Deployed-link](https://alphabin-technology-weather-app.netlify.app/).

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository: `git clone `
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. The application will be accessible at `http://localhost:8000`

## Environment Variables

Take 3  environment variables 
 1. API_KEY (get the key from weatherbit.io)
 2. PORT
 3. mongo_url (Mongo db Url)

## API Endpoints

| Endpoint                    | Method | Description                               |
|-----------------------------|--------|-------------------------------------------|
| `/`                         | GET    | Start server response                     |
| `/current?city=cityname`    | GET    | Get current weather of the city           |
| `/forecast?city=cityname`   | GET    | Get current 5 days weather of the city    |
| `/user/register`            | POST   | User can Signup                           |
| `/user/login`               | POST   | User can Login                            |
| `/save`                     | POST   | User can save their location preference   |
| `/delete`                   | DELETE | User can delete their location preference |
| `/savedCity`                | GET    | User can see all saved cities             |

