// TODO: Add this component

import { FC } from 'react';

import './NumericInput.scss';

type NumericInputType = {
  name: string;
};

const NumericInput: FC<NumericInputType> = ({ name }) => {
  return <input type="number" name={name} className="input" />;
};

export default NumericInput;
