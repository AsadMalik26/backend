# backend
 Node Js - Express - Prisma - Backend

 ## installs
 ```npm i cors```
 ```npm i nodemon```
 ```npm install node-cron```

 ```npm install prisma --save-dev```
 ```npx prisma```
 ```npm install @prisma/client```
 ```npx prisma init --datasource-provider mysql```
 https://www.prisma.io/docs/static/a3179ecce1bf20faddeb7f8c02fb2251/42cbc/mysql-connection-string.png

 ```npx prisma migrate dev --name init```
 ```npx prisma studio```

 ```npm i express-rate-limit```
 
 Cron Job -- using node-cron
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
