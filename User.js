const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    Name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    
})
module.exports=mongoose.model('User',UserSchema)