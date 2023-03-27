import React, { FC, memo } from 'react';
import { IButtonProps } from './types';
import './styles.css'

const Button: FC<IButtonProps> = memo(({
  disabled,
  isLoading,
  children,
  ...anyProps
}) => {
  return (
    <div className='buttonWrapper'>
      <button
        className={disabled ? 'buttonDisabled' : 'button'}
        disabled={disabled}
        {...anyProps}
      >
        {children}
      </button>
    </div>
  )
});

export default Button;
