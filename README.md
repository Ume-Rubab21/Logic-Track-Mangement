# LogiTrack – Fleet and Delivery Management Platform

## Overview

LogiTrack is a full-stack logistics management platform designed to streamline fleet operations and delivery management. The system enables dispatchers to manage vehicles, assign delivery tasks, monitor delivery progress, and oversee logistics operations through a centralized dashboard.

## Features

### Authentication & Authorization

* JWT Authentication
* Secure Login and Registration
* Protected Routes
* Role-Based Access Control (RBAC)

### Delivery Task Management

* Create Tasks
* Update Tasks
* Delete Tasks
* Assign Drivers
* Track Delivery Status

### Vehicle Management

* Add Vehicles
* Update Vehicle Details
* Delete Vehicles
* Manage Fleet Status

### Dashboards

#### Dispatcher Dashboard

* Total Deliveries
* Pending Deliveries
* Completed Deliveries
* Active Vehicles

#### Driver Dashboard

* Assigned Tasks
* Delivery Progress
* Vehicle Information

### Validation

* Client-side Validation
* Server-side Validation
* Business Rule Enforcement

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Vitest

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### Testing

* Vitest
* React Testing Library
* Supertest

## Project Structure

frontend/
backend/
screenshots/

## Installation

### Clone Repository

git clone <repository-url>

### Install Frontend Dependencies

cd frontend
npm install

### Install Backend Dependencies

cd ../backend
npm install

### Configure Environment Variables

Create a .env file inside backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### Run Backend

npm run dev

### Run Frontend

npm run dev

## Future Enhancements

* Real-time GPS Tracking
* Route Optimization
* Interactive Maps
* Push Notifications
* Analytics Dashboard
* Mobile Application Support

## Author

BSCS Student – FAST NUCES
