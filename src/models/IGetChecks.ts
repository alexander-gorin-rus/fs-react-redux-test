import { ReactNode } from "react";

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
    uid: string;
    dateReg: ReactNode;
    sum: number;
    kioskName: string;
    pays: Pays[];
    positions: Position[];
    chequeType: 0 | 1;
    data: {
      cheques: Cheque[];
    };
  }

  interface Position {
    qRcode: string;
    name: string;
    quantity: number;
    price: number;
    sum: number;
    nds: number;
    nsp: number;
    discount: number;
    discountType: number;
    img: null | string;
    parentUid: null | string;
    prototypeUid: null | string;
    prototypeType: number;
    order: number;
    chequeUid: string;
    photos: number;
    goodUid: string;
  }
  interface Pays {
    kioskUid: null | string;
    uid: string;
    chequeHeadUid: string;
    sum: number;
    payType: number;
    info: null | string;
    datePay: string;
  }

  export interface Cheque {

    positions: ICheckPositions;
  }

export interface IChecksData {
    dateReg: Date;
    kioskName: string;
    chequeType: number;
    payStatus: boolean;
    paySum: number;
    sum: number;
    positionQuantity: number;
    positions: number;
}
interface ICheckPositions {
    qRcode: string;
    name: string;
    quantity: number;
    price: number;
    sum: number;
    nds: number;
    nsp: number;
    discount: number;
    discountType: number;
    img: string;
    parentUid: string;
    prototypeUid: string;
    prototypeType: number;
    order: number;
    chequeUid: string;
    photos: number;
    goodUid: string;
}

// export interface IGetChecks {
//     dateReg: Date;
//     kioskName: string;
//     chequeType: number;
//     payStatus: boolean;
//     paySum: number;
//     sum: number;
//     positionQuantity: number;
//     positions: number;
// }
