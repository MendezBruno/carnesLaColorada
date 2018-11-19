import { User } from './usuario';

export class GoogleUser extends User {
    uid: string;
    displayname: string;

    constructor(user?: firebase.User) {
        super();
        this.uid = user.uid;
        this.username = user.displayName;
        this.email = user.email;
        this.displayname = user.displayName;
        this.telefonoCel = user.phoneNumber;
        this.fotoPerfil = user.photoURL;
    }

}
