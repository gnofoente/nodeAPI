let mongoose = require('mongoose');

let schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Contact = module.exports = mongoose.model('contact', schema);

module.exports.get = (callback, limit) => {
    Contact.find(callback).limit(limit);
}