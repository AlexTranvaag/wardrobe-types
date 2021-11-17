export class IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    permissions: number;

    constructor(
        id: string,
        email: string,
        firstName: string,
        lastName: string,
        permissions: number
    ) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.permissions = permissions;
    }
}