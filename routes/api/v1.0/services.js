var express = require('express');
var router = express.Router();
var Neighborhood = require("../../../database/collections/neighborhood");
var Home = require("../../../database/collections/home");
var Contact=require("../../../database/collections/contact");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SERVICIOS' });
});

router.get('/homes', (req, res, next) => {
  Home.find({}).exec( (error, docs) => {
    res.status(200).json(docs);
  })
});

router.post('/homes', (req, res) => {
    if (req.body.tipo == "" && req.body.region == "") {
        res.status(400).json({
          "msn" : "formato incorrecto"
        });
        return;
      }
      var home = {
        codigo : req.body.codigo,
        status : req.body.status,
        tipo : req.body.tipo,
        oferta : req.body.oferta,
        estado : req.body.estado,
        region : req.body.region,
        ubicacion : req.body.ubicacion,
        zona : req.body.zona,
        idZona : req.body.idZona, 
        direccion : req.body.direccion,
        moneda : req.body.moneda,
        monedaIso : req.body.monedaIso,
        precio : req.body.precio,
        precioIso : req.body.precioIso,  
        descripcion : req.body.descripcion,
        fecentrega : req.body.fecentrega,
        supterreno : req.body.supterreno,
        servicios : req.body.servicios,
        amurallado : req.body.amurallado, 
        anioconstruccion : req.body.anioconstruccion
      };
      var homeData = new Home(home);
    
      homeData.save().then( () => {
        //content-type
        res.status(200).json({
          "msn" : "Propiedad Registrado con exito "
        });
    });
});

router.post('/neighborhood', (req, res) => {
    if (req.body.name == "" && req.body.region == "") {
        res.status(400).json({
          "msn" : "formato incorrecto"
        });
        return;
      }
      var neighborhood = {
        name : req.body.name,
        ubicacion : req.body.ubicacion,
        region : req.body.region,
        latitud : req.body.latitud,
        longitud : req.body.latitud,
        x1 : req.body.x1,
        x2 : req.body.x2,
        y1 : req.body.y1,
        y2 : req.body.y2
      };
      var neighborhoodData = new Neighborhood(neighborhood);
    
      neighborhoodData.save().then( () => {
        //content-type
        res.status(200).json({
          "msn" : "Zona Registrado con exito "
        });
    });
});

router.get('/neighborhood', (req, res, next) => {
  Neighborhood.find({}).exec( (error, docs) => {
  res.status(200).json(docs);
})
});

router.post('/contact', (req, res) => {
  if (req.body.email == "" && req.body.phone == "") {
      res.status(400).json({
        "msn" : "formato incorrecto"
      });
      return;
    }
    var contact = {
      name : req.body.name,
    lastname : req.body.lastname,
    phone :req.body.phone,
    phone2 : req.body.phone2,
    movil : req.body.movil,
    email : req.body.email,
    city : req.body.city,
    photo : req.body.photo,
    shortphone : req.body.shortphone
    };
    var contactData = new Contact(contact);
  
    contactData.save().then( () => {
      //content-type
      res.status(200).json({
        "msn" : "Contacto Registrado con exito "
      });
  });
});

router.get('/contact', (req, res, next) => {
  Contact.find({}).exec( (error, docs) => {
  res.status(200).json(docs);
})
});
router.get('/home', (req, res, next) => {

});

router.get('/neighbor', (req, res, next) => {

});

module.exports = router;