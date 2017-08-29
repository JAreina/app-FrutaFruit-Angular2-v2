'use strict';

const express = require('express');
const app = express();
//auth0
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(cors());


// We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header
const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/.well-known/jwks.json"
      }),
      // This is the identifier we set when we created the API
      audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',  // mi app por ejemplo 'frutafruit'
      issuer: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/",
    algorithms: ['RS256']
});

app.get('/api/frutas',(req,res)=>{
  let frutas = [
    {
   id: 1,
   nombre: 'Manzana',
   descripcion: '',
   preciokg: 1.99,
   variedad:"Gold",
   origen: "España",
   calibre:"4/6"
},
{
  id: 2,
  nombre: 'Pera',
  descripcion: '',
  preciokg: 0.99,
  variedad:"Mediterránea",
  origen: "España",
  calibre:"3/6"
},
{
  id: 3,
  nombre: "Patatas",
  descripcion: '',
  preciokg: 0.89,
  variedad:"Nueva",
  origen: "España",
  calibre:"6/6"
}
  ];
  res.json(frutas);
})

app.listen(9999);
console.log('SERVIDOR EN --> localhost:9999');
