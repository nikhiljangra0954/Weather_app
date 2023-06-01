// here we will make a connection to connect with the mongodb database atlas

const mongoose = require('mongoose')
require("dotenv").config()

const connection = mongoose.connect(process.env.mongourl)

// export the connection

module.exports ={
    connection
}