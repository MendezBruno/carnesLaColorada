
export class User {

    id: string;
    uid: string;
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

    setParameters(fUser: firebase.User): any {
        this.username = fUser.displayName;
        this.email = fUser.email;
        this.telefonoCasa = fUser.phoneNumber;
        this.fotoPerfil = fUser.photoURL;
        this.uid = fUser.uid;
    }

    isAdmin(): boolean { 
        return false;
    }
}
