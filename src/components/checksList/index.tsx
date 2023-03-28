import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { IGetChecks } from '../../models/IGetChecks';
import { chequeApi } from '../../services/ChequesService';
import Error from '../error';
import Spinner from '../spinner';
import ChequeDate from './ChequeDate';
import ChequeKiosk from './ChequeKiosk';
import './styles.css';
import ChequeType from './ChequeTypes';
import ChequeStatus from './ChequeStatus';
import ChequePays from './ChequePays';
import ChequeSum from './ChequeSum';
import ChequeQuantity from './ChequeQuantity';
import ChequeGoods from './ChequeGoods';

const ChecksList = () => {
  const { data: cheques, isLoading, error } = chequeApi.useFetchAllChequesQuery(30);
  //const { data: cheque } = chequeApi.useGetChequeQuery();
  
  return (
    <div className='checksTableWrapper'>
      <p>Таблица чеков</p>
      {isLoading && <Spinner />}
      {error && <Error />}
      <table>
        <thead>
          <tr>
            <th className='chequesHeader'>Дата покупки</th>
            <th className='chequesHeader'>Киоск</th>
            <th className='chequesHeader'>Тип</th>
            <th className='chequesHeader'>Статус оплаты</th>
            <th className='chequesHeader'>Оплата</th>
            <th className='chequesHeader'>Сумма</th>
            <th className='chequesHeader'>Кол-во товара</th>
            <th className='chequesHeader'>Товары</th>
          </tr>
        </thead>
        <tbody>
          {cheques?.map((cheque: IGetChecks) => (
            <tr key={cheque.uid}>
              <td><ChequeDate cheque={cheque} /></td>
              <td><ChequeKiosk key={cheque.uid} cheque={cheque} /></td>
              <td><ChequeType cheque={cheque} /></td>
              <td><ChequeStatus cheque={cheque} /></td>
              <td><ChequePays cheque={cheque} /></td>
              <td><ChequeSum cheque={cheque} /></td>
              <td><ChequeQuantity cheque={cheque} /></td>
              <td><ChequeGoods cheque={cheque} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ChecksList;
