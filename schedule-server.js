const http = require('http');
const express = require('express');

const twilio = require('twilio');
const accountSid = 'AC1c91a6495d887c64e89d6b44e040c6d6'; // Your Account SID from www.twilio.com/console
const authToken = '84252d06d9e17b1be0a4841dd3d61843';   // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);
const app = express();
const schedule = require('node-schedule');

var date = new Date(2017, 11, 6, 15, 42, 0);

var j = schedule.scheduleJob(date, function(){
  client.messages.create({
      body: 'Please rate the content of the xxx program by responding with 5 (awesome), 4 (good), 3 (ok), 2 (not helpful), 1 (waste of time)',
      to: '+13035793384', // Text this number
      from: '+17205730412' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
