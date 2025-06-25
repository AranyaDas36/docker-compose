## Manual installation 
- Install nodejs locally()
- Clone the repo
- Install dependencies (npm install)
- Start Database locally 
    - mongodb://localhost:27017/DB_name
    - docker run -p 27017:27017 mongo
- npm i express
- npm i mongoose 
- npm run build
- npm run start 

## Docker installation
- Install docker 
- Start a new newtork `docker network create my_network`
- Start mongodb `docker --name mongo --network my_network run -p 27017:27017 mongo`
    - In mongo URL: `mongodb://mongo:27017/my_db`
- Build the image `docker build -t user_project .`
- Start the image `docker --name my_app --network my_network run -p 3000:3000 user_project`

## Docker compose installation steps
- Install docker, docker compose
- Run `docker-compose up`