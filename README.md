# CA4
This is class task 4 attempted by the group The Plagiarizers. 

Members:

Muhammad Rohaan Atique - 20I-0410 (Member 2) <br>
Ahmed Moiz - 20I-2603 (Member 1) <br>
Zubair Fawad - 20I-1755 (Member 3) <br>

Instructions to build and run the web service:

1. Download the image from dockerhub:
  `docker pull theplagiarizers/ca4-web` <br>
  `docker pull theplagiarizers/ca4-db`
2. Run the docker image
   `docker-compose up`
3. Visit the main page of the website after image is running
   `Visit localhost:3500`


Optimizations:

- We used .gitignore and .dockerignore to ignore the files that were not needed in the docker image. 
   This helped us reduce the size of the image and also helped us to avoid any unnecessary files to be copied into the image.

Unfortunately, we weren't able to connect react with the backend server. I am not sure why, our attempt code is available in Login.js (inside the src folder of the react app). However we tested the backend server independently, and confirmed that it is able to connect with the db. 

Logging in using the login endpoint: 
<img width="1440" alt="Screenshot 2021-05-17 at 12 38 38 AM" src="https://i.imgur.com/ZBaPsGx.png">

