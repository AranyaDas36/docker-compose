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
- Start mongodb `docker run -p 27017:27017 mongo`
- Build the image `docker build -t user_project .`
- Start the image `docker run -p 3000:3000 user_project`

## Docker compose installation steps
- Install docker, docker compose
- Run `docker-compose up`