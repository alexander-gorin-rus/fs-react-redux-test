import React, { FC } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { Controller, useForm } from 'react-hook-form';
import { IChequeForm } from './types';
import { createChequeSchema } from '../../utils/schemas';
import InputComponent from '../inputComponent';
import Button from '../button';
import { chequeApi } from '../../services/ChequesService';

const ChequeFom: FC = () => {
    const {
        control,
        handleSubmit,
        formState: { isDirty, isValid }
    } = useForm<IChequeForm>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: joiResolver(createChequeSchema),
        defaultValues: {
            pays: {
              kioskUid: '',//
              uid: '',//
              chequeHeadUid: '',//?????????????
              sum: 0,//
              payType: 0,//
              info: '',//
              datePay: new Date()
            },
            positions: {
              qRCode: '',//
              name: '',//
              quantity: 0,//
              price: 0,//
              sum: 0,//
              nds: 0,//
              nsp: 0,
              discount: 0,
              discountType: 0,
              img: '',
              parentUid: '',
              prototypeUid: '',
              prototypeType: 0,
              order: '',
              chequeId: '',
              photos: 0,
              goodUid: '',
            },
            uid: '',
            sum: 0,
            payType: 0,
            info: '',
            chequeStatus: 0,
            selectedQRCODE: '',
            clientUID: '',
            clientInfo: '',
            chequeType: 0,
            dateReg: new Date(),
            dateClose: new Date(),
            kioskUid: '',
            kioskName: '',
            photos: 0,
            num: '',
            videoState: 0, 
        }
    });

    const [createCheque, {}] = chequeApi.useCreateChequeMutation();

    const onSubmit = async (cheque: IChequeForm) => {
        const data = { ...cheque }
        await createCheque(data);
      }
    
  return (
    <div>
        <form
          className='chequeForm'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller 
            name='kioskName'
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                type='text'
                {...field}
                placeholder='kioskName'
                title='kioskName'
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller 
            name='chequeType'
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type='number'
                placeholder='chequeType'
                title='chequeType'
                error={fieldState.error?.message}
                value={field.value.toString()}
              />
            )}
          />
          <Controller 
            name='pays.sum'
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type='number'
                placeholder="pays.sum"
                title="pays.sum"
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller 
            name='positions.quantity'
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type='number'
                placeholder='positions.quantity'
                title='positions.quantity'
                error={fieldState.error?.message}
                value={field.value.toString()}
              />
            )}
          />
          
          <Controller 
            name='positions.name'
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type='string'
                placeholder='positions.name'
                title='positions.name'
                error={fieldState.error?.message}
                value={field.value.toString()}
              />
            )}
          />
          <Button
            disabled={!isValid || !isDirty}
          >Отправить</Button>
        </form>
    </div>
  )
}

export default ChequeFom