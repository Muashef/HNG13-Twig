### TicketZen
A PHP based ticket management application built with Twig templating engine, featuring authentication, ticket CRUD operations, and real-time statistics.

---

## Installation & Setup

### Step 1: Install Dependencies

- clone: https://github.com/Muashef/HNG13-Twig.git
- Navigate to the `twig/` folder and install Twig via Composer:
- cd twig
- composer install

### Step 2: Start PHP Development Server

- Run the PHP built-in development server:

- php -S localhost:8080 -t public

- The app will be available at: `http://localhost:8080`

### Step 3: Access the Application

- **Landing Page**: `http://localhost:8000/`
- **Login**: `http://localhost:8000/login`
- **Signup**: `http://localhost:8000/signup`
- **Dashboard**: `http://localhost:8000/dashboard` (requires login)

## Features

- **Authentication**: User signup and login with email/password
- **Ticket Management**: Create, read, update, and delete tickets
- **Status Tracking**: Filter tickets by status (Open, In Progress, Closed)
- **Priority Levels**: Assign priority to tickets (Low, Medium, High)
- **Real-time Statistics**: Dashboard shows ticket counts by status
- **localStorage Persistence**: All data stored in browser's localStorage
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Modern UI**: Dark theme with cyan/blue accents

## Usage

### Creating an Account

1. Click "Sign Up" on the landing page
2. Enter your name, email, and password
3. Click "Create Account"
4. You'll be automatically logged in and redirected to the dashboard
