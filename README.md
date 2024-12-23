# fitness_buddy_app



# Project Title
- Fit Buddy

## Introduction
# 🏋️‍♀️ FitConnect - Your Fitness Buddy Finder 🌟

FitConnect is a fitness community app designed to help users achieve their fitness goals, track their progress, and connect with like-minded workout buddies. Whether you're into yoga, weightlifting, or running, FitConnect brings fitness enthusiasts together to stay motivated and achieve their goals as a team.

---

## 🚀 Project Features

### 1. **User Authentication**
   - Secure registration and login using **email/password**.
   - Social media login support via **Facebook** and **Google**.
   - Ensures only authenticated users can access the app.

### 2. **Profile Creation**
   - Users can create and customize their profiles with:
     - Name and location.
     - Preferred workouts (e.g., yoga, running, weightlifting).
     - Fitness goals (e.g., weight loss, strength training).
   - Helps in matching users with similar interests.

### 3. **Buddy Matching**
   - Smart algorithm matches users based on:
     - Fitness goals.
     - Preferred workout type.
     - Location proximity.
   - Example: A weightlifting enthusiast in the same city is matched with another user with similar goals.

### 4. **Weekly Progress Reports**
   - Automatically generates summaries at the end of each week.
   - Highlights:
     - Completed workouts.
     - Calories burned.
     - Progress toward fitness goals.
   - Keeps users motivated and focused.

### 5. **Additional Features**
   - **Map Location**: Locate nearby fitness centers or workout buddies' preferred locations.  
   - **BMI Calculator**: Quickly calculate Body Mass Index to adjust fitness plans effectively.

---


## Project Type
Fullstack

## Deplolyed App
Frontend: https://spontaneous-clafoutis-e0ec46.netlify.app
Backend: https://fitness-buddy-app.onrender.com
Database: https://cloud.mongodb.com/v2/676285206cee977168370d93#/metrics/replicaSet/676285fd26a3cf7248774c38/explorer/test/otps/find

## Directory Structure
FITNESS_BUDDY_APP/
├─ backend/main.js
├─ frontend/
│  




## Features
List out the key features of your application.

- we can track daily workouts and weekly progress
- we can match buddies which have same city and same fitness goals
- we also added BMI features in our website
- 

## design decisions or assumptions
List your design desissions & assumptions

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash forntend 
npm install frontend
cd Fitness_Buddy
npm run dev
```

## Usage
git clone https://github.com/ddhruv8824/Fitness_Buddy.git
npm i 
cd fitness buddy
npm run dev



## Credentials
username-emaail
email-emaail@gmail.com
password-emaail


## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET requests-
- /getWorkoutDataForDay
- /getProfile
- /getBuddies
- /weekProgress

POST requests-
- /signin
- /login
- /profile
- /workoutUpdate
- /forgot-password
- resetPassword
- /profile
- /workoutUpdate


## Technology Stack
- node
- express
- Atlas Mongo
- render for deploying node
- netlify for deploying frontend
- argon2 for hasing password
- jwt for tokens
- nodemailer for otp send to user
- cron-job to delete workout collection documents
- react
- css-liabraries
- javascript
- 

List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- Other libraries/modules
