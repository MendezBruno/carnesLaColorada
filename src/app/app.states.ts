import { Carro } from './modelo/carro';


export interface AppState {
carro: CarroState;
}


export interface CarroState {
carro: Carro;
}

