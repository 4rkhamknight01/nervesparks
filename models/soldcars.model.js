const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Sold_Cars = new schema({
    vehicle_id: {
        type: String,
        required: true,
        unique: true
    },

    car_id: {
        type: String,
        required: true,
        unique: true
    },

    vehicle_info: {
        type: JSON,
        required: true
    }
});

module.exports = mongoose.model("sold_cars", Sold_Cars);
