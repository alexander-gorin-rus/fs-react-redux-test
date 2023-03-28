import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IChequeForm } from '../components/chequeForm/types';
import { IGetChecks } from '../models/IGetChecks';

export const chequeApi = createApi({
    reducerPath: 'chequeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    endpoints: (build) => ({
        fetchAllCheques: build.query<IGetChecks[], number>({
            query: (limit: number = 5) => ({
                url: 'cheques',
                params: {
                    _limit: limit
                }
            })
        }),
        createCheque: build.mutation<IChequeForm, Partial<IChequeForm>>({
            query: (cheque) => ({
                url: 'cheques',
                method: 'POST',
                cheque
            })
        }),
        getCheque: build.query<IChequeForm, number>({
            query: (id) => `cheques/${id}`,
          }),
    })
});

