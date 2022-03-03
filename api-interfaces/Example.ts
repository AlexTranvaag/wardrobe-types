import { IApiResponse } from './IApiResponse';

export namespace Example {
    export interface Request {
        counter: number;
    }

    export interface Response extends IApiResponse{
        newCounter: number;
    }
}