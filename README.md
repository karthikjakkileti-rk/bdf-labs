
# Lab 1: Node.js and Express Server

**Name:** J. Karthik  
**Registration Number:** 252U1R8030  
**Section:** CSE-QE-2A

## Live Link
Not deployed yet.

## Objective
To create a basic web server using Node.js and Express.js.

## How to Run

1. Install Node.js.
2. Open a terminal in this folder.
3. Install dependencies:

   npm install

4. Run the plain Node.js server:

   node server.js

5. Stop it using Ctrl+C.
6. Run the Express server:

   node express-server.js

## Endpoints

| Method | Path | Description | Status |
|---|---|---|---|
| GET | / | Welcome message | 200 |
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
![404 Route](screenshots/404.png)

## Notes
Created a plain Node.js server and an Express server.
Tested the routes and verified their status codes.
