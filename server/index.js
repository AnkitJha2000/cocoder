const express = require("express");
const app = express();
const PORT = 5000
const {connectToDatabase} = require("./db/MongoDB");
const { authRouter } = require("./routes/AuthRouter");
const cors = require('cors');


app.use(express.urlencoded({ extended: true})); // parse incoming requests with urlencoded payloads
app.use(express.json());
app.use(cors())

// handle user routes (login , sign up, get all users).
app.use('/api/user' , authRouter);


connectToDatabase()

app.listen(PORT , () => {
  console.log(`server is running on port : ${PORT}`);
})