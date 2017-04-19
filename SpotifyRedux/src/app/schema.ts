import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
    version: 1,
    name: 'wmp_spotify_app',
    stores: {
        artists: {
            autoIncrement: true,
            primaryKey: 'id'
        }
    }
};
