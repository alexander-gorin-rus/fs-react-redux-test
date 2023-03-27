import React, { FC } from 'react';
import './styles.css'
import { IChequeProps } from './types';

const ChequeItem: FC<IChequeProps> = ({ cheque: {
  dateReg,
  kioskName,
  chequeType,
  pays,
  sum,
  positions,
} }) => {

  const PaymentStatus: FC<{ item: { sum: number } }> = ({ item }) => {
    if (item.sum === sum) {
      return <div>Оплачено</div>;
    } else if (item.sum < sum && item.sum !== 0) {
      return <div>Недоплата</div>;
    } else {
      return <div>Нет оплаты</div>;
    }
  };

  return (
    <div className='chequeItemWrapper'>
      <div className='chequeItem'>
      <span className='headerItem'>Дата покупки</span>
        {dateReg}
      </div>
      <div className='chequeItem'>{kioskName}</div>
      <div className='chequeItem'>{chequeType === 0 ? 'Продажа' : 'Возврат'}</div>
      {pays.map((item) => (
        <div className='chequeItem' key={item.uid}>
          <PaymentStatus item={item} />
        </div>
      ))}
      <div className='chequeItem'>{sum}</div>
      <div className='goodsWrapper'>
        {positions.map((item) => (
          <div className='itemWrapper'>
            <div className='item' key={item.goodUid}>
              {item.quantity}
            </div>
            <div className='item' key={item.goodUid}>
              {item.name},  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChequeItem