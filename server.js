const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/api/art")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lookBook",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);
// define middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api',routes)

// Send every reques to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
