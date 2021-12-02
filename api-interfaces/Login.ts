import { IApiResponse } from './IApiResponse';

export namespace Login {
    export interface Request {
        email: string;
        authToken: string;
    }

    export interface Response extends IApiResponse{
        jwt: string;
    }
}