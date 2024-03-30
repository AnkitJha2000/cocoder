const express = require("express");
const app = express();
const {connectToDatabase} = require("./db/MongoDB");
const { authRouter } = require("./routes/AuthRouter");
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*', // Replace with the origin of your React app
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  },
});

const {connectToSocket} = require("./socket/SocketController");
const { codeEditorRouter } = require("./routes/CodeEditorRouter");

const PORT = process.env.PORT || 5000;

// setup middlewares
app.use(express.urlencoded({ extended: true})); // parse incoming requests with urlencoded payloads
app.use(express.json());
app.use(cors())

connectToSocket(io);

// handle user routes (login , sign up, get all users).
app.use('/api/user' , authRouter);
app.use('/api/Editor/' , codeEditorRouter);

// connect to database
connectToDatabase()

server.listen(PORT, () => {
  console.log('listening on 5000');
});
