import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kourifa.randa@gmail.com",
    pass: process.env.password,
  },
});

let mailOptions = {
  from: "kourifa.randa@gmail.com",
  to: "randa.kourifa@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
