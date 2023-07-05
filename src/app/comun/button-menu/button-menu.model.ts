export class ButtonMenu {
    idOpcionMenu: number;
    icon: string;
    url: string;
    desOpcionMenu: string;
    color?: string;
    secondaryColor?: string;

    constructor(init?:Partial<ButtonMenu>) {
        Object.assign(this, init);
    }
}