const mongoose = require("../connect");
var contactSchema = {
    name : String,
    lastname : String,
    phone : Number,
    phone2 : Number,
    movil : Number,
    email : String,
    city : String,
    photo : String,
    shortphone : Number
};
var contact = mongoose.model("contact", contactSchema);
module.exports = contact;