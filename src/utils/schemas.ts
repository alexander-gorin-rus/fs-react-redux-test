import Joi from 'joi';

export const joiPays = Joi.object({
    kioskUid: Joi.string(),
    uid: Joi.string(),
    chequeHeadUid: Joi.string(),
    sum: Joi.number(),
    payType: Joi.number(),
    info: Joi.string(),
    datePay: Joi.date()
})

export const joiPositions = Joi.object({
    qRCode: Joi.string(),
    name: Joi.string(),
    quantity: Joi.number(),
    price: Joi.number(),
    sum: Joi.number(),
    nds: Joi.number(),
    nsp: Joi.number(),
    discount: Joi.number(),
    discountType: Joi.number(),
    img: Joi.string(),
    parentUid: Joi.string(),
    prototypeUid: Joi.string(),
    prototypeType: Joi.number(),
    order: Joi.string(),
    chequeId: Joi.string(),
    photos: Joi.number(),
    goodUid: Joi.string(),
})

export const createChequeSchema = Joi.object({
    pays: joiPays,
    positions: joiPositions,
    uid: Joi.string(),
    sum: Joi.number(),
    payType: Joi.number(),
    info: Joi.string(),
    chequeStatus: Joi.number(),
    selectedQRCODE: Joi.string(),
    clientUID: Joi.string(),
    clientInfo: Joi.string(),
    chequeType: Joi.number(),
    dateReg: Joi.date(),
    dateClose: Joi.date(),
    kioskUid: Joi.string(),
    kioskName: Joi.string(),
    photos: Joi.number(),
    num: Joi.string(),
    videoState: Joi.number(),
});
