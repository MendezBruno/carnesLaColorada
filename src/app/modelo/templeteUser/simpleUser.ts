import { User } from './usuario';
// Simple refer to a user login by Email and password

export class SimpleUser extends User {
    uid: string;
    displayname: string;


    constructor(user: firebase.User) {
        super();
        this.uid = user.uid;
        this.username = user.displayName;
        this.email = user.email;
        this.displayname = user.displayName;
        this.cel = user.phoneNumber;
        this.photoURL = user.photoURL;
    }

}
