export class SummaryColoredCardModel {
    description: string;
    color: string;
    secondaryColor: string;
    numericValue: number;

    constructor(init?:Partial<SummaryColoredCardModel>) {
        Object.assign(this, init);
    }
}