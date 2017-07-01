module.exports = {
  startApp: function (name, age, sex) {

    var fs = require('fs');
    var playerData = name + "-" + age + "-" + sex + "\n";

    // file append
    fs.appendFile('./app/evaluation.txt', playerData, function (err) {
      if (err) throw err;
      console.log('player data saved');
    });

    // email
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vr.in.the.past@gmail.com',
        pass: 'abcdefgh123456'
      }
    });

    var mailOptions = {
      from: 'prakash.uday.bayas@gmail.com',
      to: 'prakash.uday.bayas@gmail.com',
      subject: 'VR in the Past - Evaluation',
      text: playerData
    };

    /*transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });*/
  }
};
