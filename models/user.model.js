const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userschema = new schema({
    user_email: {
        type: String,
        required: true,
        unique: true
        
    },

    password: {
        type: String,
        required: true
    },

    user_id: {
        type: String,
        required: true,
        unique: true

    },

    user_location: {
        type: String,
        required: true    
    },


    user_info: {
        type: JSON,
        required: true
    },

    vehicle_info: {
        type: String,
        reqiured: true
    },

    
});

module.exports = mogoose.model("user", userschema);