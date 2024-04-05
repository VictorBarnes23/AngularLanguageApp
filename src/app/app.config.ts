import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { secretgooglecode } from './secret';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideHttpClient(),
       //We are building a provider. Version 2.2.0 of package doesn't provide one.
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,

        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              //Remove the .apps.googleusercontent.com from the client id
              //MAKE SURE TO HIDE IT FROM GITHUB
              secretgooglecode
            ),
          },
        ],
        onError: (err) => {
          debugger;
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    }, provideAnimationsAsync(),
    //more providers can go here
  ]
  
};
