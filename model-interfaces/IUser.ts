export class IUser {
    id: string;
    netId: string;
    firstName: string;
    lastName: string;
    termsAccepted: boolean;
    permissions: number;

    constructor(
        id: string,
        netId: string,
        firstName: string,
        lastName: string,
        termsAccepted: boolean,
        permissions: number,
    ) {
        this.id = id;
        this.netId = netId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.termsAccepted = termsAccepted;
        this.permissions = permissions;
    }
}