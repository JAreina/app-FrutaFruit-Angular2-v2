# app-FrutaFruit-Angular2-v2
app angular 2 + express + rutas + auth0



[DEMO YouTube](https://www.youtube.com/watch?v=tjyIqIOivVM)


 # CREAR CUENTA EN AUTH0
    
       https://auth0.com/

# INSTALACIÓN SERVER EXPRESS
      
      npm install
      
   
      Modificar el archivo server.js las siguientes líneas. Los datos a rellenar los proporciona la cuenta free creada en  auth.com
      
      jwksUri: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/.well-known/jwks.json"
      audience: '',
      issuer: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/",
      
  ARRANCAR EL SERVIDOR
      
      node server
      
# APP
     
      
      
    Modificar el archivo auth0.variables.ts las siguientes líneas
    
    CLIENT_ID: 'YOUR-AUTH0-CLIENT-ID',
    CLIENT_DOMAIN: 'YOUR-AUTH0-DOMAIN.auth0.com',
    AUDIENCE: '',
    REDIRECT: 'http://localhost:4200/usuario', // crear esta ruta en la página de auth.com en Clients> Allowed Callbacks Urls
    
     
      
      npm install
      
    LANZAR LA APLICACIÓN
    
      ng serve --open
      
      
    
