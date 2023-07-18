const mongoose = require("mongoose");
const schema = mongoose.Schema;

const dealerschema = new schema({
    dealership_email:{
        type: String,
        required: true,
        unique: true
    },

    dealership_id: {
        type: String,
        required: true,
        unique: true
    },

    dealership_name: {
        type: String,
        required: true,
        unique: true
    },

    dealership_location:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    },

    dealership_info: {
        type: JSON,
        required: true
    }

    
});

module.exports = mogoose.model("dealership", dealerschema);