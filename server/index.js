// import dotenv from "dotenv";
// dotenv.config();


// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

// import Connection from "./database/db.js";
// import Route from "./routes/route.js";

// const app = express();

// app.use(cors());
// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/", Route);

// const PORT = 8000;

// Connection();

// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import Connection from "./database/db.js";
import Route from "./routes/route.js";

dotenv.config(); // 👈 Load env vars

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

const PORT = process.env.PORT || 8000;

Connection(process.env.MONGO_URI); // 👈 Pass MONGO_URI from .env

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
