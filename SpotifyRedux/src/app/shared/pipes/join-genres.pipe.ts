import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'joinGenres'
})
export class JoinGenresPipe implements PipeTransform {
    transform(genres: string[]): any {
        return genres.slice(0, 3).join(', ') || '[no genre specified]';
    }
}
