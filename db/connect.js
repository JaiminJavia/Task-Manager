const mongoose = require('mongoose');

//here url = link to connect application with mongodb atlas that we will pass using .env file
const conectDb = (url)=>{
  return  mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
module.exports = conectDb

