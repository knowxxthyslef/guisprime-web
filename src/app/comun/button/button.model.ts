export class Button {
    buttonIcon?: boolean;
    buttonUrl?: string;
    buttonClass?: string;
    buttonText?: string;
    buttonAling?: string;
    accion?: string;

    constructor(init?:Partial<Button>) {
        Object.assign(this, init);
    }
}