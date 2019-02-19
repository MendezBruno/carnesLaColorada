import { User } from './usuario';
import { initializeApp } from 'firebase';

export class FacebookUser extends User {
    uid: string;
    displayname: string;

    constructor(user?: firebase.User) {
        super();
        if (user) {
            this.initialize(user);
        }
    }

    initialize(user: firebase.User): any {
        this.uid = user.uid;
        this.username = user.displayName;
        this.email = user.email;
        this.displayname = user.displayName;
        this.cel = user.phoneNumber;
        this.photoURL = user.photoURL;
    }

}
