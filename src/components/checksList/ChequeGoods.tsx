import React, { FC } from 'react'
import { IChequeProps } from './types'

const ChequeGoods: FC<IChequeProps> = ({ cheque: {
    positions,
  } }) => {
    
  return (
    <div className='chequeItem'>
        {positions.map((item) => (
            <span key={item.chequeUid} className='cellItem'>{item.name}</span>
        ))}
    </div>
  )
}

export default ChequeGoods