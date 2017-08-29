interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'YOUR-AUTH0-CLIENT-ID',
    CLIENT_DOMAIN: 'YOUR-AUTH0-DOMAIN.auth0.com',
  
    AUDIENCE: '',
    REDIRECT: 'http://localhost:4200/usuario', // crear esta ruta en la página de auth.com en Clients> Allowed Callbacks Urls
    SCOPE: 'openid'
  };