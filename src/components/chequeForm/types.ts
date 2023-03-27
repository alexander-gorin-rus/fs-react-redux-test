export interface IChequeForm {
    pays: IPays;
    positions: IPositions;
    uid: string;
    sum: number;
    payType: number;
    info: string;
    chequeStatus: number;
    selectedQRCODE: string;
    clientUID: string;
    clientInfo: string;
    chequeType: number;
    dateReg: Date;
    dateClose: Date;
    kioskUid: string;
    kioskName: string;
    photos: number;
    num: string;
    videoState: number;
}

interface IPays {
    kioskUid: string;
    uid: string;
    chequeHeadUid: string;
    sum: number;
    payType: number;
    info: string;
    datePay: Date;
}

interface IPositions {
    qRCode: string;
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
    order: string;
    chequeId: string;
    photos: number;
    goodUid: string;
}

export interface IChequeFormProps {
    toggle: () => void
}
