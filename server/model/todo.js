var {mongoose} = require('../db/mongoose')

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: false,
        minlenght: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAT:{
        type: Number,
        default: null
    }

});

module.exports={Todo};