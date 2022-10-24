const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add router in the Express app.
app.use("/", router);

router.post("/operations", (req, res) => {
  console.log(req.body)
  const values = req.body.values;
  try {
    values[0] = eval(`${values[0]} ${req.body.operation} ${values[1]}`);
  } catch (e) {
    values[0] = req.body.values[0];
  }
  values[1] = 0;
  console.log({values})
  res.send({values})
});

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
