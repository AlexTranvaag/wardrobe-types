import { IItem } from "../model-interfaces/IItem";

export namespace Login {
    export interface Request {
        fit: number;
        type: string;
        size: string;
        color: string;
    }

    export interface Response extends IItem{
        success: boolean;
    }
}