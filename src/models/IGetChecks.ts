interface ICheck {
    dateReg: Date;
    kioskName: string;
    chequeType: number;
}

interface IPay {
    payStatus: boolean;
    paySum: number;
    sum: number;
}

interface IPositions {
    positionQuantity: number;
    positions: number;
}

export interface ITableData {
    check: ICheck;
    pay: IPay;
    positions: IPositions;
}

// export interface GetTableDataPayload {
//     data?: ITableData
// }

export interface IGetChecks {
    dateReg: Date;
    kioskName: string;
    chequeType: number;
    payStatus: boolean;
    paySum: number;
    sum: number;
    positionQuantity: number;
    positions: number;
}
