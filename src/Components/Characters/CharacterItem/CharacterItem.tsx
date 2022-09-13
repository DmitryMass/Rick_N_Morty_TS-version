import React, { FC } from 'react';
import { ICharacter } from '../../../Types/rick-morty-types';

import styles from './character-item.module.css';

interface CharacterItemProps {
  character: ICharacter;
  handleClick: (character: ICharacter) => void;
}

const CharacterItem: FC<CharacterItemProps> = ({ character, handleClick }) => {
  const { id, name, image } = character;
  return (
    <div className={styles.character} onClick={() => handleClick(character)}>
      <div className={styles.character__img}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.character__info}>
        <h5>
          Name: {id}. {name}
        </h5>
      </div>
    </div>
  );
};

export default CharacterItem;
