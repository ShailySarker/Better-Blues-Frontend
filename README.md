# Project Name: Better Blues Website

# Website Link:
https://better-blues-frontend.vercel.app/

# Overview:
Better Blues Website is a Razorpay-integrated donation web application built using React.js, JavaScript, and Tailwind CSS on the frontend, and a serverless Node.js API with MongoDB on the backend. Users can submit their donation details through a modal form, securely complete payments via Razorpay, and have their transaction data stored in the backend database.

# Technologies:
JavaScript, Tailwind CSS, ReactJS, React Router, Axios, Node.js, Express.js, MongoDB, Mongoose.

# Features

- 🧾 Donation Form Modal: Users can enter their name, email, amount, and address in a sleek modal form.

- 💳 Razorpay Payment Integration: Seamless and secure payment processing using Razorpay’s test key.

- ✅ Form Validation: Ensures valid input (e.g., donation amount must be greater than 0).

- 🔄 Dynamic Razorpay Checkout: Modal opens only after valid form submission to process payments.

- 📬 Backend Integration: Donation details along with Razorpay payment ID are saved to MongoDB via a backend API.

- 🔒 Secure & Optimized: Minimal and optimized code structure with error handling and form resets.

# Run

## Clone this repository
$ git clone https://github.com/ShailySarker/Better-Blues-Frontend  

## Go into the repository
$ cd Better-Blues-Frontend

## Install dependencies
$ npm install

## Run the app
$ npm run dev