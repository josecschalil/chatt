const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on('sendMessage', (msg) => {
    socket.broadcast.emit('newMessage', msg)
  })
});

app.get("/main.js", (req, res) => {
  res.sendFile(__dirname + "/public/main.js");
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
