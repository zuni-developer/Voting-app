# Voting App (Firebase + Vanilla JS)

A simple web-based voting system built using **HTML, CSS, JavaScript, and Firebase**.  
This project allows students/users to log in, view candidates, and cast votes in a structured voting system.

---

## Features

- Student login system (Firebase Authentication)
- Vote casting for candidates/politicians/universities
- Dynamic vote storage using Firebase Firestore / Realtime Database
- Multiple voting categories (e.g., politicians, universities)
- Simple multi-page web interface
- Firebase backend integration

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Firebase Authentication
- Firebase Firestore / Realtime Database

---

## Project Structure

Voting-app/

├── public/                # HTML pages  
├── assets/  
│   ├── styles/           # CSS files  
│   └── images/           # Project images  
│  
├── src/  
│   ├── App.js  
│   ├── firebase_config.js  
│   ├── politicians.js  
│   └── university.js  
│  
├── package-lock.json  
├── package.json  
└── README.md  

---

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/Ammarzahid000/Voting-app.git

### 2. Open project folder
cd Voting-app

### 3. Configure Firebase
Edit:
src/firebase_config.js

Enable:
- Authentication
- Firestore / Realtime Database

### 4. Run project
Open:
index.html

---

## 🔐 Firebase Rules (Testing only)
allow read, write: if true;

⚠️ Do NOT use in production.

---

## Pages

- index.html → Home
- login.html → Login
- student_login.html → Student auth
- vote.html → Voting page
- politicians.html → Politicians voting
- university_voting.html → University voting

---

## Future Improvements

- Admin dashboard
- Prevent duplicate voting
- Better UI/UX
- Role-based access
- Live results dashboard

---
