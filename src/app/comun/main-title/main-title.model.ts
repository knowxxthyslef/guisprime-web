export class MainTitle {
    title: string;
    url: string;
    salir?: boolean;

    constructor(init?:Partial<MainTitle>) {
        Object.assign(this, init);
    }
}