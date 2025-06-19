import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyBYXg_1JSGrczbQOqGU8TXwEko0LXURcls",
  authDomain: "timetrack-68f8f.firebaseapp.com",
  projectId: "timetrack-68f8f",
  storageBucket: "timetrack-68f8f.firebasestorage.app",
  messagingSenderId: "406194745395",
  appId: "1:406194745395:web:b75810881ceff7c92ef346"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
