var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pnayak1501@gmail.com',
    pass: 'Xpsm@1330'
  }
});

var mailOptions = {
  from: 'pnayak1501@gmail.com',
  to: 'parag.cs18@bmsce.ac.in, saisriram.cs18@bmsce.ac.in',
  subject: 'mailed using node',
  text: 'bhaissab maza aagaya'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});