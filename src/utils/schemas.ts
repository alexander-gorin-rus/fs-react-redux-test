import Joi from 'joi';

export const joiPays = Joi.object({
    kioskUid: Joi.string().allow(''),
    uid: Joi.string().allow(''),
    chequeHeadUid: Joi.string().allow(''),
    sum: Joi.number(),
    payType: Joi.number().allow(''),
    info: Joi.string().allow(''),
    datePay: Joi.date()
})

export const joiPositions = Joi.object({
    qRCode: Joi.string().allow(''),
    name: Joi.string(),
    quantity: Joi.number(),
    price: Joi.number().allow(''),
    sum: Joi.number().allow(''),
    nds: Joi.number().allow(''),
    nsp: Joi.number().allow(''),
    discount: Joi.number().allow(''),
    discountType: Joi.number().allow(''),
    img: Joi.string().allow(''),
    parentUid: Joi.string().allow(''),
    prototypeUid: Joi.string().allow(''),
    prototypeType: Joi.number().allow(''),
    order: Joi.string().allow(''),
    chequeId: Joi.string().allow(''),
    photos: Joi.number().allow(''),
    goodUid: Joi.string().allow(''),
})

export const createChequeSchema = Joi.object({
    pays: joiPays,
    positions: joiPositions,
    uid: Joi.string().allow(''),
    sum: Joi.number().allow(''),
    payType: Joi.number().allow(''),
    info: Joi.string().allow(''),
    chequeStatus: Joi.number().allow(''),
    selectedQRCODE: Joi.string().allow(''),
    clientUID: Joi.string().allow(''),
    clientInfo: Joi.string().allow(''),
    chequeType: Joi.number(),
    dateReg: Joi.date().allow(''),
    dateClose: Joi.date().allow(''),
    kioskUid: Joi.string().allow(''),
    kioskName: Joi.string(),
    photos: Joi.number().allow(''),
    num: Joi.string().allow(''),
    videoState: Joi.number().allow(''),
});
