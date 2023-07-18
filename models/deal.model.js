const mongoose = require("mongoose");
const schema = mongoose.Schema;

const deal = new schema({
    deal_id: {
        type: String,
        required: true,
        unique: true
    },

    car_id: {
        type: String,
        required: true
    },

    deal_info: {
        type: JSON,
        required: true 
    }
});

module.exports = mongoose.model("deal", deal);
