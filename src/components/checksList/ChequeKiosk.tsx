import React, { FC } from 'react'
import { IChequeProps } from './types'

const ChequeKiosk: FC<IChequeProps> = ({ cheque: {
    kioskName,
  } }) => {
    
  return (
    <span className='cellItem'>{kioskName}</span>
  )
}

export default ChequeKiosk