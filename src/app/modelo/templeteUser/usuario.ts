
export class User {

    id: string;
    uid: string;
    username: string;
    email: string;
    name: string;
    lastName: string;
    address: string;
    tel: string;
    cel: string;
    password: string;
    photoURL: string;
    enabled: boolean;

    constructor() {
        this.enabled = false;
    }

    setParameters(fUser: firebase.User): any {
        this.username = fUser.displayName;
        this.email = fUser.email;
        this.tel = fUser.phoneNumber;
        this.photoURL = fUser.photoURL;
        this.uid = fUser.uid;
    }

    isAdmin(): boolean { 
        return false;
    }
}
