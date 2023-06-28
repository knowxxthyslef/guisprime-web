export class Button {
    buttonIcon?: boolean;
    buttonUrl?: string;
    buttonClass?: string;
    buttonText?: string;

    constructor(init?:Partial<Button>) {
        Object.assign(this, init);
    }
}