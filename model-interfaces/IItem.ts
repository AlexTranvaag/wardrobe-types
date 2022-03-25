export class IItem {
    id: string;
    fit: number;
    type: string;
    size: string;
    color: string;
    status: number;
    userId: string;

    constructor(
        id: string,
        fit: number,
        type: string,
        size: string,
        color: string,
        status: number,
        userId: string
    ) {
        this.id = id;
        this.fit = fit;
        this.type = type;
        this.size = size;
        this.color = color;
        this.status = status;
        this.userId = userId;
    }
}