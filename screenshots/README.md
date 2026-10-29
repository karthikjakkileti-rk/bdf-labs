
# Lab 1: Node.js and Express Server

**Name:** Your Name  
**Registration Number:** Your Registration Number  
**Section:** Your Section

## Live Link
Not deployed yet.

## Objective
To create a basic web server using Node.js and Express.js.

## How to Run

1. Install Node.js.
2. Open the project folder in VS Code.
3. Install dependencies:

   npm install

4. Run the plain Node.js server:

   node server.js

5. Stop the server using Ctrl+C.
6. Run the Express server:

   node express-server.js

## Endpoints

| Method | Path | Description | Status Code |
|---|---|---|---|
| GET | / | Returns welcome text | 200 |
| GET | /about | Returns name and section as JSON | 200 |
| GET | /time | Returns current date and time | 200 |
| GET | /unknown | Returns a 404 message | 404 |

## Screenshots

### Home Route
![Home Route](screenshots/home.png)

### About Route
![About Route](screenshots/about.png)

### Time Route
![Time Route](screenshots/time.png)

### 404 Route
![404 Route](screenshots/not-found.png)

## Notes
Created a plain Node.js server and an Express server.
Tested all routes and checked their status codes.
