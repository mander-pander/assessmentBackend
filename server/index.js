const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {
  getCompliments,
  getFortune,
} = require('./controller.js')

app.get("/api/compliment", getCompliments);
app.get("/api/fortune", getFortune);

///////////////////////////////////////////////

const {
  getCandies,
  addCandy,
  updateCandy,
  deleteCandy
} = require('./candiesController.js');

app.get('/api/candy', getCandies);
app.post('/api/candy', addCandy);
app.put('/api/candy/:id', updateCandy);
app.delete('/api/candy/:id', deleteCandy)



app.listen(4000, () => console.log("Server running on 4000"));
