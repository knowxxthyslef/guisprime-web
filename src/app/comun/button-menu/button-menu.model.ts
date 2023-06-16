export class ButtonMenu {
    id: number;
    icon: string;
    url: string;
    description: string;
    color: string;
    secondaryColor: string;

    constructor(init?:Partial<ButtonMenu>) {
        Object.assign(this, init);
    }
}