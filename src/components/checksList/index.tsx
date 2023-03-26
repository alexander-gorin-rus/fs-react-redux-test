import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchChecks } from '../../store/reducers/ActionCreator';
import Error from '../error';
import Spinner from '../spinner';
import './styles.css';

const ChecksList = () => {
    const dispatch = useAppDispatch()
    const { checks, isLoading, error } = useAppSelector(state => state.checkReducer);

    //const {dateReg} = checks

    useEffect(() => {
        dispatch(fetchChecks())
    }, [])

  return (
    <div>
        {isLoading && <Spinner />}
        {error && <Error />}
        <div className='checksTableWrapper'>
            {JSON.stringify(checks)}
            {/* {checks && checks.map((key, item) => (
                <div>{item}</div>
            ))} */}
        </div>
        
    </div>
  )
}

export default ChecksList