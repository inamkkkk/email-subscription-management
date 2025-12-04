# Email Subscription Management Backend

A Node.js backend for managing email subscribers and sending out mass emails.

## Features

-   Subscriber management (create, read, update, delete)
-   Mass email sending
-   Authentication with JWT

## Technologies Used

-   Node.js
-   Express.js
-   Mongoose
-   MongoDB
-   Nodemailer
-   JSON Web Tokens (JWT)
-   Bcrypt

## Installation

1.  Clone the repository:

    
    git clone <repository-url>
    cd <repository-directory>
    

2.  Install dependencies:

    
    npm install
    

3.  Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

    
    PORT=3000
    MONGODB_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    EMAIL_USER=<your_email_address>
    EMAIL_PASS=<your_email_password>
    

    Replace the placeholders with your actual values.

4.  Run the application:

    
    npm start
    

## API Endpoints

### Authentication

-   `POST /auth/register`: Register a new user
-   `POST /auth/login`: Log in and get a JWT

### Subscribers

-   `POST /subscribers`: Create a new subscriber (requires authentication)
-   `GET /subscribers`: Get all subscribers (requires authentication)
-   `GET /subscribers/:id`: Get a subscriber by ID (requires authentication)
-   `PUT /subscribers/:id`: Update a subscriber (requires authentication)
-   `DELETE /subscribers/:id`: Delete a subscriber (requires authentication)

### Emails

-   `POST /emails/send`: Send a mass email to all subscribers (requires authentication)

## Authentication

All subscriber and email endpoints require authentication using a JWT.  The JWT should be included in the `Authorization` header as a Bearer token.

## Nodemailer Configuration

The email sending functionality uses Nodemailer with Gmail.  You'll need to configure your Gmail account to allow less secure apps or use an App Password if you have 2-Step Verification enabled.
