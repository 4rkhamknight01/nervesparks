const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cars = new schema({
    car_id: {
        type: String,
        required: true,
        unique: true
    },

    Type: {
        type: String,
        required: true
    },


    name: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    car_info: {
        type: JSON,
        required: true
    }
});

module.exports = mongoose.model("cars", cars);