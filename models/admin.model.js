const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminschema = new schema({
    username: {
        type: String,
        required: true,
        unique: true
        
    },

    password: {
        type: String,
        required: true
    },
});

module.exports = mogoose.model("admin", adminschema);