const mongoose = require("../connect");
var neighborhoodSchema = {
    name : String,
    ubicacion : String,
    region : String,
    latitud : String,
    longitud : String,
    x1 : String,
    x2 : String,
    y1 : String,
    y2 : String

};
var neighborhood = mongoose.model("neighborhood", neighborhoodSchema);
module.exports = neighborhood;