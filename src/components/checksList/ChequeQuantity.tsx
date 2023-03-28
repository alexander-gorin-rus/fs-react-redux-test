import React, { FC } from 'react'
import { IChequeProps } from './types'

const ChequeQuantity: FC<IChequeProps> = ({ cheque: {
    positions,
  } }) => {
    
  return (
    <div className='chequeItem'>
      {positions.map((item) => (
        <span key={item.chequeUid} className='cellItem'>{item.quantity}</span>
      ))}
    </div>
  )
}

export default ChequeQuantity