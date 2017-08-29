import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AUTH_CONFIG } from '../auth0-variables';
import { tokenNotExpired } from 'angular2-jwt';
import * as auth0 from 'auth0-js';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class AuthService {

 
  // Create Auth0 web auth instance
  // @TODO: Update AUTH_CONFIG and remove .example extension in src/app/auth/auth0-variables.ts.example
au= new auth0.WebAuth({
    clientID: AUTH_CONFIG.CLIENT_ID,
    domain: AUTH_CONFIG.CLIENT_DOMAIN
  });


   // Create a stream of logged in status to communicate throughout app
   loggedIn: boolean;
   loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
 
   constructor(private router: Router) {
     // If authenticated, set local profile property and update login status subject
     if (this.authenticated) {
       this.setLoggedIn(true);
     }
   }
 
   setLoggedIn(value: boolean) {
     // Update login status subject
     this.loggedIn$.next(value);
     this.loggedIn = value;
   }

   login() {
    // Auth0 authorize request
    // Note: nonce is automatically generated: https://auth0.com/docs/libraries/auth0js/v8#using-nonce
    this.au.authorize({
      responseType: 'token id_token',
      redirectUri: AUTH_CONFIG.REDIRECT,
      audience: AUTH_CONFIG.AUDIENCE,
      scope: AUTH_CONFIG.SCOPE
    });
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    this.au.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
      
        window.location.hash = '';
        this._getProfile(authResult);
        this.router.navigate(['/usuario']);
      } else if (err) {
        this.router.navigate(['/']);
        console.error(`Error: ${err.error}`);
      }
    });
  }

  private _getProfile(authResult) {
    // Use access token to retrieve user's profile and set session
    this.au.client.userInfo(authResult.accessToken, (err, profile) => {
      this._setSession(authResult, profile);
    });
  }


  private _setSession(authResult, profile) {
    // Save session data and update login status subject
    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setLoggedIn(true);
  }

  logout() {
    // Remove tokens and profile and update login status subject
    localStorage.removeItem('accessToken');
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    this.router.navigate(['/bienvenida']);
    this.setLoggedIn(false);
  }

  get authenticated() {
    // Check if there's an unexpired access token
    return tokenNotExpired('token');
  }

}