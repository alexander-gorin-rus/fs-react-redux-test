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

  const formattedDate = typeof dateReg === "string" ? dateReg.replace("T", ",").slice(0, 19) : dateReg;

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
    <div className='gridContainer'>
      {/* <div className='chequeHeader'>
        <span className='cell'>Дата покупки</span>
        <span className='cell'>Киоск</span>
        <span className='cell'>Тип</span>
        <span className='cell'>Статус оплаты</span>
        <span className='cell'>Оплата</span>
        <span className='cell'>Сумма</span>
        <span className='cell'>Кол-во товара</span>
        <span className='cell'>Товары</span>
      </div> */}
     
          <div className='cell'>{formattedDate}</div>
          <div className='cell'>{kioskName}</div>
          <div className='cell'>{chequeType === 0 ? 'Продажа' : 'Возврат'}</div>
          {pays.map((item) => (
            <>
              <div className='cell' key={item.uid}>
                <PaymentStatus item={item} />
              </div>
              <div className='cell' key={item.uid}>
                {pays.map((item) => (
                  <span key={item.kioskUid}>{item.sum}</span>
                ))}
              </div>
            </> 
          ))}
          <div className='cell'>{sum}</div>
          <div className='cell'>
            {positions.map((item) => (
              <div className='quantity'>
                {item.quantity}
              </div>
            ))}
          </div>
          <div className='cell'>
            {positions.map((item) => (
              <div className='itemWrapper'>
                {item.name}
              </div>
            ))}
          </div>
    </div>
  );
};

export default ChequeItem