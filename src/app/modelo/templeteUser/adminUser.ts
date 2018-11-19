import { User } from './usuario';

export class AdminUser extends User {

    userName: string;
    name: string;
    lastname: string;
    email: string;
    tel: string;
    cel: string;
    city: string;
    province: string;
    cp: string;
    address: string;
    localidad: string;
    photoURL: string;
    displayName;
    phoneNumber;
    providerId;
    uid;
    constructor( fUser?: firebase.User ) {
        super();
        this.displayName = fUser.displayName;
        this.email = fUser.email;
        this.phoneNumber = fUser.phoneNumber;
        this.photoURL = fUser.photoURL;
        this.providerId = fUser.providerId;
        this.uid = fUser.uid;

    }

    setFirebaseUser(fUser: firebase.User ): any {
        this.displayName = fUser.displayName;
        this.email = fUser.email;
        this.phoneNumber = fUser.phoneNumber;
        this.photoURL = fUser.photoURL;
        this.providerId = fUser.providerId;
        this.uid = fUser.uid;
    }
}
