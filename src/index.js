const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/get.routes");

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
