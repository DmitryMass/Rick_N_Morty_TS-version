import React, { FC } from 'react';
import Button from '../Button/Button';

import styles from './button-group.module.css';

interface ButtonGroupProps {
  nextClick?: () => void;
  prevClick?: () => void;
  page?: number;
  maxEpisodePage: number;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
  nextClick,
  page,
  prevClick,
  maxEpisodePage,
}) => {
  return (
    <div className={styles.character__btnGroup}>
      <Button
        modificator={page === 1 ? styles.btn__disabled : styles.character__btn}
        onClick={prevClick}
        disabled={page === 1}
      >
        Prev
      </Button>
      <Button
        modificator={
          page === maxEpisodePage ? styles.btn__disabled : styles.character__btn
        }
        onClick={nextClick}
        disabled={page === maxEpisodePage}
      >
        Next
      </Button>
    </div>
  );
};

export default ButtonGroup;
