// import json-server
const jsonServer = require('json-server')
// create server for media player app
const MPServer = jsonServer.create()
//create middleware used by JSON Server
const middleware = jsonServer.defaults()
//set up route for json file in server
const route = jsonServer.router('db.json')
//setup port for running server app
const PORT = 3000 || process.env.PORT


MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Media Player Server Started at port ${PORT} and waiting for client request`);
})