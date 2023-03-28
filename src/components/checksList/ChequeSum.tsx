import React, { FC } from 'react'
import { IChequeProps } from './types'

const ChequeSum: FC<IChequeProps> = ({ cheque: {
    sum,
  } }) => {
    
  return (
    <span className='cellItem'>{sum}</span>
  )
}

export default ChequeSum