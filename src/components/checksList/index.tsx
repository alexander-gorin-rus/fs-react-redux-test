import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchChecks } from '../../store/reducers/ActionCreator';

const ChecksList = () => {
    const dispatch = useAppDispatch()
    const { checks } = useAppSelector(state => state.checkReducer);

    useEffect(() => {
        dispatch(fetchChecks())
    }, [])

  return (
    <div>{JSON.stringify(checks, null, 2)}</div>
  )
}

export default ChecksList