import React from 'react';
import './styles.css';
import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = ({ size = 120 }) => (
  <div className="spinner" style={{ width: size, height: size }}>
    <div className="spinner-inner" />
  </div>
);

export default Spinner;