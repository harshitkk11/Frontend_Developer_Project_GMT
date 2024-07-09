# Frontend Developer Assignment

## Overview
This project is a web application developed using ReactJS. It includes the following features:

1. Login and Authentication
2. Tracking/Post-Login Screen with:
- An Analog clock running anticlockwise, counting down from the current time to 120 minutes earlier.
- A slider to control the speed of the clock hands.
- A share button that generates a unique URL for sharing the current state of the clock and slider.
- An optional feature to display random quotes fetched from an open API every 5 seconds.

## Features
1. Login and Authentication
- Email and Password Login: Allows users to log in using their email and password.
- Google Login: Provides the option for users to log in with Google.
- Email and Password Sign-Up: Allows users to sign up and create an account using email and password.
- Google Sign-Up: Enables users to sign up and create an account using Google.
2. Tracking/Post-Login Screen
This screen is designed based on the UI provided for previous screens, maintaining the same style, colors, and overall look and feel.

### Components:
- **Analog Clock:**
Runs anticlockwise and counts down from the current time to 120 minutes earlier.
- **Speed Slider:**
Controls the speed of the clock hands, allowing users to increase or decrease the speed.
- **Share Button:**
Generates a unique URL when clicked, allowing another user to view the clock and slider on the same page with the exact same slider configuration.
- **Random Quotes (Optional):**
Uses an open API to show random quotes on the tracking screen, changing every 5 seconds.

## Deployment
The project is deployed on GitHub and hosted on Vercel.

- GitHub Repository: [Github Link](https://github.com/harshitkk11/Frontend_Developer_Project_GMT)
- Hosted Application: [Hosted Application Link](https://gmt-assignment.vercel.app/)

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
```
git clone [[Your GitHub Repository Link]](https://github.com/harshitkk11/Frontend_Developer_Project_GMT)
cd Frontend_Developer_Project_GMT
```

2. Install dependencies:
```
npm install
```

3. Run the application:
```
npm start
```

4. Build the application for production:
```
npm run build
```

## Usage
- **Login:** Users can log in using their email and password or through Google.
- **Sign-Up:** Users can create a new account using their email and password or through Google.
- **Tracking Screen:** Users can interact with the analog clock, adjust the speed using the slider, and share the current state using the share button.
- **Random Quotes:** The tracking screen displays random quotes fetched from an open API every 5 seconds.

