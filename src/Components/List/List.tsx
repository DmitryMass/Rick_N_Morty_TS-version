import React from 'react';

import styles from './list.module.css';

interface ListProps<T> {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItems }: ListProps<T>) {
  return <div className={styles.grid__container}>{items.map(renderItems)}</div>;
}

export default List;
