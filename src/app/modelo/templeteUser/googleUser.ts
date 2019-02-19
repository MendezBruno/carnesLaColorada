import { User } from './usuario';

export class GoogleUser extends User {
    uid: string;
    displayname: string;

    constructor(user?: firebase.User) {
        super();
        if (user) {
            this.initialize(user);
         }
    }

    initialize(user) {
        this.uid = user.uid;
        this.username = user.displayName;
        this.email = user.email;
        this.displayname = user.displayName;
        this.cel = user.phoneNumber;
        this.photoURL = user.photoURL;
    }

}
