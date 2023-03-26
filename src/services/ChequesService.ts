import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IGetChecks } from '../models/IGetChecks';

export const chequeApi = createApi({
    reducerPath: 'chequeApi',
    baseQuery: fetchBaseQuery({baseUrl: '/data.json'}),
    endpoints: (build) => ({
        fetchAllCheques: build.query<IGetChecks, number>({
            query: (limit: number = 5) => ({
                url: '',
                params: {
                    _limit: limit
                }
            })
        })
    })
});

console.log('checkApi', chequeApi);

