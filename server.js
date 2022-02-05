const express = require('express');
require('dotenv').config();
const pug = require('pug');

const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');

const PORT = process.env.PORT || '3000';

const app = express();

app.set('view engine','pug');

//is required when you are submitting a form with post method
app.use(express.urlencoded({ extended:true }));
/*
app.get('/', (req, res) => {
	res.send('Hello World!');
});
*/
console.log(process.env.DB_HOST);

//register user
app.get('/', newUserController);
app.post('/', storeUserController);

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});