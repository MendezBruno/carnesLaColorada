export class User {
    id: string;
    username: string;
    email: string;
    nombre: string;
    apellido: string;
    direccion: string;
    telefonoCasa: string;
    telefonoCel: string;
    password: string;
    fotoPerfil: string;
    habilitado: boolean;

    constructor() {
        this.habilitado = false;
    }
}
