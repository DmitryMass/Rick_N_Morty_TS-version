import React, { FC } from 'react';
import { IEpisodes } from '../../../Types/episodes';

import styles from './episode-item.module.css';

interface EpisodeItemProps {
  episode: IEpisodes;
  handleClick: (episode: IEpisodes) => void;
}

const EpisodeItem: FC<EpisodeItemProps> = ({ episode, handleClick }) => {
  const { id, episode: seria, name, air_date } = episode;
  return (
    <div className={styles.episode} onClick={() => handleClick(episode)}>
      <div className={styles.episode__img}>
        <img src='' alt='' />
      </div>
      <div className={styles.episode__info}>
        <p>
          {id}. Name: {name}
        </p>
        <p>Episode: {seria}</p>
        <p>Name: {name}</p>
        <p>Date: {air_date}</p>
      </div>
    </div>
  );
};

export default EpisodeItem;
