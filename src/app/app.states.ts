import { Carro } from './modelo/carro';
import { Publicacion } from './modelo/publicacion';


export interface AppState {
carro: CarroState;
publicaciones: PublicacionState;
}


export interface CarroState {
carro: Carro;
}

export interface PublicacionState {
publicaciones: Publicacion[];
load: boolean;
loading: boolean;
}



