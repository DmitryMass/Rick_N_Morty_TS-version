import React, { FC } from 'react';

import styles from './main.module.css';
const Main: FC = () => {
  return (
    <div className={styles.home__object}>
      <div className={styles.home__overlayer}></div>
      <div className={styles.home__fun}>FAN PAGE</div>
      <div className={styles.home__designed}>
        <h3 className={styles.home__title}>Designed by Jimmy-CO</h3>
      </div>
    </div>
  );
};

export default Main;
