import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IGetChecks } from '../../models/IGetChecks';
import { chequeApi } from '../../services/ChequesService';
import { fetchChecks } from '../../store/reducers/ActionCreator';
import ChequeItem from '../chequeItem';
import Error from '../error';
import Spinner from '../spinner';
import './styles.css';

const ChecksList = () => {
  const { data: cheques, isLoading, error } = chequeApi.useFetchAllChequesQuery(30)

  return (
    <div className='checksTableWrapper'>
      {/* <div className='chequeHeader'>
        <span className='headerItem'>Дата покупки</span>
        <span className='headerItem'>Киоск</span>
        <span className='headerItem'>Тип</span>
        <span className='headerItem'>Статус оплаты</span>
        <span className='headerItem'>Оплата</span>
        <span className='headerItem'>Сумма</span>
        <span className='headerItem'>Кол-во товара</span>
        <span className='headerItem'>Товары</span>
      </div> */}
      <div className='chequesList'>
        {isLoading && <Spinner />}
        {error && <Error />}
        {cheques?.map((cheque: IGetChecks) => (
          <ChequeItem key={cheque.uid} cheque={cheque} />
        ))}
      </div>
    </div>
  )
}

export default ChecksList