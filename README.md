## Quick starting with MongoDB
 
 Install Node.js MongoDB driver
 ```
 npm install mongodb --save
 ```
 
 #### Start a MongoDB Server
 ```
 # mongod --dbpath=<path to folder DB storage>
 mongod --dbpath=data
 ```
  ##### Start a MongoDB Server in background
  ```
  mongod --fork
  ```
  
   ##### Start a MongoDB Server with [config file](https://docs.mongodb.com/manual/reference/configuration-options/)
   ```
   mongod --config /etc/mongodb.conf
   ```
   
   #### Start app.js script
   ```
   nodemon app.js
   ```
   (install **nodemon** globally if you haven't it yet)
