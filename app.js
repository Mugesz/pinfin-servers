const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5030;


app.use(cors());
app.use(express.json())

const applicants = require("./routes/applicants")
app.use("/",applicants)

const reporting = require("./routes/reporting")
app.use("/report",reporting)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});