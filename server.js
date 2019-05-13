//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/profile', (req,res)=> {
    const user = {
      username : 'saifsadi',
      password : 'pak786'
    };

    res.send(user);
});

app.get('/', (req,res)=> {
//readFile
  fs.readFile('file.txt', (err, data) => {
    if(err) {
      console.log('errrrrrrrrrorr', err);
    }
    console.log('Async', (data).toString());
    res.send(data);
  });
});

//append File
fs.appendFile('./file.txt', ' Some more text goes here in file 1', err => {
  if(err) {
    console.log(err);
  }

});

fs.writeFile('bye.txt', 'Sorry you are going :(', err => {
  if(err) {
    console.log(err);
  }
});

const file = fs.readFileSync('./file.txt');
console.log('Sync', (file).toString());

app.post('/profile', (req,res)=> {
  console.log('username :', req.body.username);
  console.log('password :', req.body.password);
  const user = {
    username : req.body.username,
    password : req.body.password
  };

  res.send(user);
});

app.listen(3000, () => console.log('App is running on server'));
