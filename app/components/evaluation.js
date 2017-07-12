// Evaluation/Records Keeping

module.exports = {
  recordPreTest: function (query, playerCount) {

    var fs = require('fs');
    var data = '\n';

    // Player data
    data += "@player " + playerCount +"\n";
    data += query.name + "*" + query.age + "*" + query.sex + "\n";

    // pre test data
    data += query.q1 + "*" + query.q2 + "*" + query.q3 +"*" + query.q4 + "*" + query.q5 + "\n";

    // file append
    fs.appendFile('./app/evaluation.txt', data, function (err) {
      if (err) throw err;
      console.log('pre test data saved');
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
      subject: 'VR in the Past - Pretest (Player ' + playerCount + ')',
      text: data
    };

    /*transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });*/
  },
  recordSummary: function (query, playerCount) {

    var fs = require('fs');
    var data = '';

    // post test data
    data += query.sitesExplored + "*"
            + query.daysSpentLearning + "*"
            + query.daysSpentInTotal + "*"
            + query.exploredByDay + "*"
            + query.firstSiteExcavatedByDay + "*"
            + query.secondSiteExcavatedByDay
             + "\n";

    // file append
    fs.appendFile('./app/evaluation.txt', data, function (err) {
      if (err) throw err;
      console.log('summary data saved');
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
      subject: 'VR in the Past - Summary (Player ' + playerCount + ')',
      text: data
    };

    /*transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });*/
  },
  recordPostTest: function (query, playerCount) {

    var fs = require('fs');
    var data = '';

    // post test data
    data += query.q1 + "*" + query.q2 + "*" + query.q3 + "*" + query.q4 + "*" + query.q5 + "\n";

    // file append
    fs.appendFile('./app/evaluation.txt', data, function (err) {
      if (err) throw err;
      console.log('post test data saved');
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
      subject: 'VR in the Past - Posttest (Player ' + playerCount + ')',
      text: data,
      attachments: [
        {   // file on disk as an attachment
          filename: 'evaluation.txt',
          path: "./app/evaluation.txt" // stream this file
        }
      ]
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
