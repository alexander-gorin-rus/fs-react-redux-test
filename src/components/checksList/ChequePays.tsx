import React, { FC } from 'react'
import { IChequeProps } from './types'

const ChequePays: FC<IChequeProps> = ({ cheque: {
    pays
  } }) => {
    
  return (
    <div>
      {pays.map((item) => (
        <span className='cellItem' key={item.kioskUid}>{item.sum}</span>
      ))}
    </div>
  )
}

export default ChequePays