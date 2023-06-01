// 
const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    cityname:String,
    temp : Number,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
},{
    versionKey : false
})

const cityModel = mongoose.model("SavedCity", citySchema)

// now export the model 
module.exports ={
    cityModel
}