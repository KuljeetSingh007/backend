const mongoose = require('mongoose');
const url = "mongodb://localhost:27017"

const connect = () => {
    mongoose.connect(url);
        console.log('Connected successfully');
  

}
module.exports = connect;