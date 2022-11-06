import { FC, PropsWithChildren } from 'react';

import './Button.scss';

type ButtonProps = {
  children: PropsWithChildren<string>;
};

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
};

export default Button;
