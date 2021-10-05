const express = require('express');
const dotenv = require('dotenv');
const  mongoose  = require('mongoose');
const app = express()

//routes
const authRoute = require('./routes/Auth');
const postRoute = require('./routes/Posts');

dotenv.config();

//connection to database
mongoose.connect(process.env.MONGO_URL).then(console.log('CONNECTED TO DATABASE')
).catch((err) =>console.log(err)); 

//Middleware
app.use(express.json());
app.use('/api/blog',authRoute);
app.use('/api/blog/posts',postRoute);



//listening to server
app.listen(5000, ()=> {

console.log('server is running');

});






