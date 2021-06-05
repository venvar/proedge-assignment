# proedge-assignment

Given Task

1. A frontend which accepts a comma separated list of roll numbers (front end must be in React or Nextjs)

2. On entering the value and pressing submit, a request should be sent to the backend (write a backend API in nodejs to accept this from frontend)

3. From the backend, you have to call an external API to get the pass/fail result, as follows:
http://proedge.me/test.php?rollnumber=123

In the above, rollnumber is the value to be passed, and it will return pass or fail results. This external API only accepts 1 rollnumber per call.

4. From the backend, when all the rollnumber results are known, return the results to the frontend

5. On frontend, display the roll numbers and their result in a tabular format.

# Installation

Run the server npm start
The server is running at localhost:3000

# Components of code

This is the homepage which consists of the form through which we will pass the values to the API.
![image](https://user-images.githubusercontent.com/81376452/120895494-c3c80300-c63a-11eb-8a1e-ae5d4fcbb7c7.png)

# Test-Cases
for this input: 5,6,9,12,18,20,25,30,32,36,37,38,40,42,45,47,49,50
![image](https://user-images.githubusercontent.com/81376452/120895546-0be72580-c63b-11eb-8c04-42de9c7515ac.png)

# Result

![image](https://user-images.githubusercontent.com/81376452/120895568-2ae5b780-c63b-11eb-8243-4000203133c8.png)

# Libraries and Plugins
Node.js
Expressjs
Pug
body-parser
node-fetch

