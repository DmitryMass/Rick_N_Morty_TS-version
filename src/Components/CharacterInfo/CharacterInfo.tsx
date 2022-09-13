import React, { FC } from 'react';
import { ICharacter } from '../../Types/rick-morty-types';

import styles from './character-info.module.css';

interface CharacterInfoProps {
  items: ICharacter;
}

const CharacterInfo: FC<CharacterInfoProps> = ({ items }) => {
  const {
    name: character,
    location: { name },
    image,
  } = items;

  return (
    <div className={styles.info__wrapper}>
      <div className={styles.info__image}>
        <img src={image} alt='' />
      </div>
      <div className={styles.info__text}>
        <p>Character: {character}.</p>
        <p>Location: {name}</p>
      </div>
    </div>
  );
};

export default CharacterInfo;
