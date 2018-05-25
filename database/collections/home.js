const mongoose = require("../connect");
var homeSchema = {
    codigo : String,
    status : String,
    tipo : String,
    oferta : String,
    estado : String,
    region : String,  
    ubicacion : String,
    zona : String,
    idZona : Number,  
    direccion : String,
    moneda : String,
    monedaIso : String,
    precio : String,
    precioIso : String,  
    descripcion : String,
    fecentrega : String,  
    supterreno : String,
    servicios : String,
    amurallado : String,
    anioconstruccion : Number
};
var home = mongoose.model("home", homeSchema);
module.exports = home;