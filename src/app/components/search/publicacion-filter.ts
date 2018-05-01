import { Pipe, PipeTransform } from '@angular/core';
import { Publicacion } from '../../modelo/publicacion';


@Pipe({
    name: 'PublicacionFilter',
})
export class PublicacionFilter implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (publicacion: Publicacion) {
                return publicacion.titulo.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    }
}
