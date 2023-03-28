import React, { FC } from 'react'
import { IChequeProps } from './types';

const ChequeDate: FC<IChequeProps> = ({ cheque: {
    dateReg,
  } }) => {

  const formattedDate = typeof dateReg === "string" ? dateReg.replace("T", ",").slice(0, 19) : dateReg;

  return (
    <span className='cellItem'>{formattedDate}</span>
  )
}

export default ChequeDate