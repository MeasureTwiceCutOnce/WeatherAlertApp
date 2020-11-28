#!/usr/bin/env node

let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ProjectTestingEmailAddress",
    pass: "thisisonlyatest"
  }
});

let mailOptions = {
  from: "Projectestingemailaddress",
  to: "projecttestingemailaddress",
  subject: "Rain is Expected Tomorrow",
  text: "Looks like rain"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent " + info.response);
  }
});

