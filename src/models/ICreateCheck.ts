export interface ICreateCheck {
    dateReg: Date;
    kioskName: string;
    chequeType: 1 | 2;
    payStatus: boolean;
    paySum: number;
    sum: number;
    positionQuantity: number;
    positions: number;
}