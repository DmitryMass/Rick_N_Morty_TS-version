import React, { FC } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  modificator?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  modificator,
}) => {
  return (
    <button className={modificator} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
