const mongoose = require("mongoose");

const BirthdaySchema = new mongoose.Schema({
    name: String,
    birthday: Date
});

const Birthdays = mongoose.model('Birthday', BirthdaySchema);

module.exports = Birthdays;