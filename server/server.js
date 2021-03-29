const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const transporter = require('./contact/config');
const users = require("./routes/api/users");
const dotenv = require('dotenv');
dotenv.config();


const app = express();

// Bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

//post request for email sending
app.post('/send', (req, res) => {
    try {
      const mailOptions = {
        from: req.body.email, // sender address
        to: process.env.email, // list of receivers
        subject: req.body.subject, // Subject line
        html: `
        <p> You have a new contact request. </p>
        <h3> Contact Details </h3>
        <ul>
          <li> Name: ${req.body.name}</li>
          <li> Email: ${req.body.email}</li>
          <li> Subject: ${req.body.subject}</li>
          <li> Message: ${req.body.message}</li>
        </ul>
        `
      };
  
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
          });
        } else {
          res.send({
            success: true,
            message: 'Thank you for your interest in GatorTPED!'
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later'
      });
    }
  });

//Connection
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


