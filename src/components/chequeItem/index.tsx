import React, { FC } from 'react';
import { IGetChecks } from '../../models/IGetChecks';

interface IChequeProps {
    cheque: IGetChecks;
}

const ChequeItem: FC<IChequeProps> = ({ cheque }) => {
  return (
    <div>{JSON.stringify(cheque)}</div>
  )
}

export default ChequeItem