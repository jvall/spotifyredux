import { InjectionToken } from '@angular/core';
import { AppConfig } from './app-config.interface';

export const SPOTIFY_DI_CONFIG: AppConfig = {
    spotifyUrl: 'https://api.spotify.com/v1',
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
