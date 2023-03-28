import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IGetChecks } from '../../models/IGetChecks';
import { chequeApi } from '../../services/ChequesService';
import ChequeItem from '../chequeItem';
import Error from '../error';
import Spinner from '../spinner';
import './styles.css';

const ChecksList = () => {
  const { data: cheques, isLoading, error } = chequeApi.useFetchAllChequesQuery(30)

  return (
    <div className='checksTableWrapper'>
      {isLoading && <Spinner />}
      {error && <Error />}
      {cheques?.map((cheque: IGetChecks) => (
        <ChequeItem key={cheque.uid} cheque={cheque} />
      ))}
    </div>
  )
}

export default ChecksList;
