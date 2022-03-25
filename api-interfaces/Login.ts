export namespace Login {
    export interface Request {
        email: string;
        authToken: string;
    }

    export interface Response{
        reason?: string;
        success: boolean;
        jwt: string;
    }
}