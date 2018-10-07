import { Carro } from './modelo/carro';
import { Publicacion } from './modelo/publicacion';
import { User } from './modelo/usuario';


export interface AppState {
carro: CarroState;
publicaciones: PublicacionState;
users: UserState;
}


export interface CarroState {
carro: Carro;
}

export interface PublicacionState {
publicaciones: Publicacion[];
load: boolean;
loading: boolean;
}

export interface UserState {
    users: User[];
    load: boolean;
    loading: boolean;
}



