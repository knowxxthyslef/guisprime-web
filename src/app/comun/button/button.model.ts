export class Button {
    buttonIcon?: boolean;
    buttonIconImg?: string;
    buttonClass?: string;
    buttonText?: string;
    buttonAling?: string;
    accion?: string;

    constructor(init?:Partial<Button>) {
        Object.assign(this, init);
    }
}