const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
const server = app.listen(3000, () => { console.log('Express server   listening on port %d in %s mode', server.address().port,   app.settings.env);});

app.post('/', (req, res) => { 
    let text = req.body.text; 
    let responses = [
      { 
      response_type: 'in_channel', 
      text: 'Arnold would perfectly exectute a double knife throw', 
      attachments:[{ 
      image_url: 'https://media.giphy.com/media/sX5WCc1Mvsrdu/giphy.gif' 
      }]
    }, 
    {
      response_type: 'in_channel', 
      text: 'Arnold would stunt on pencil pushers', 
      attachments: [{
        image_url: 'https://media.giphy.com/media/BvsKJXGzqfNPq/giphy.gif'
      }]
    },
    {
      response_type: 'in_channel', 
      text: 'Arnold would puff the magic dragon', 
      attachments: [{
        image_url: 'https://media.giphy.com/media/7oMx9hEaUaMZa/giphy.gif'
      }]
    },
    {
      response_type: 'in_channel', 
      text: 'Arnold would chill', 
      attachments: [{
        image_url: 'https://media.giphy.com/media/Uf1ryQM2ZVqIE/giphy.gif'
      }]
    },
    {
      response_type: 'in_channel', 
      text: 'Arnold would feed a doe', 
      attachments: [{
        image_url: 'https://media.giphy.com/media/l0K4jyF4rcZOlbcfS/giphy.gif'
      }]
    },
    {
      response_type: 'in_channel', 
      text: 'Arnold would take a closer look', 
      attachments: [{
        image_url: 'https://media.giphy.com/media/JBuDZwKcyrENW/giphy.gif'
      }]
    },
    {
      response_type: 'in_channel', 
      text: 'Arnold would get pregnant', 
      attachments: [{
        image_url: 'https://media.giphy.com/media/D6J2RUkfM98oU/giphy.gif'
      }]
    },
    {
      response_type: 'in_channel', 
      text: 'Arnold would blend in', 
      attachments: [{
        image_url: 'https://media.giphy.com/media/9wv8qIAq9njgY/giphy.gif'
      }]
    },
    {
      response_type: 'in_channel', 
      text: 'Arnold would smile', 
      attachments: [{
        image_url: 'https://media.giphy.com/media/seb0r8ba8js8U/giphy.gif'
      }]
    }
  ]; 
  const randomNumber = Math.floor(Math.random() * responses.length);
  res.json(responses[randomNumber]);  
  });
