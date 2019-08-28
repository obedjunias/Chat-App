const express = require('express')
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http);

app.set('view engine','ejs');
//middlewares
app.use(express.static('public'));
// The function is executed every time the app receives a request.
app.use(function (req, res,next) {
    console.log('Time:', new Date());
    next();
  })

app.get("/",(req,res)=>{
    res.render('index')
    //console.log("Check your browser!!")
});

io.on('connection',(socket)=>{
    console.log("A User got Connected on your App")
    socket.on('disconnect',()=>{
        console.log("User Disconnected")
    })
 });
http.listen(3000);


