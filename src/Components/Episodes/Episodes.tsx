import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetEpisodesQuery } from '../../Store/RickMortyApi/rick-morty';
import { IEpisodes } from '../../Types/episodes';
import ButtonGroup from '../ButtonGroup';
import { ROUTE } from '../Constant/routes-constant';
import Error from '../Error';
import List from '../List';
import Loading from '../Loading';

import useScroll from '../ScrollHook/useScroll';
import EpisodeItem from './EpisodeItem';

import styles from './episodes.module.css';

const Episodes: FC = () => {
  const {
    ref: scroll,
    page,
    paginationNextClick,
    paginationPrevClick,
  } = useScroll();
  const navigate = useNavigate();
  const { data = [], isError, isLoading } = useGetEpisodesQuery(page);

  return (
    <div className={styles.episodes__wrapper}>
      <h1 className={styles.episodes__title} ref={scroll}>
        All episodes from series
      </h1>
      {isLoading && <Loading />}
      {isError && <Error />}
      <div className={styles.episodes__overlayer}>
        <List
          items={data}
          renderItems={(episode: IEpisodes) => (
            <EpisodeItem
              key={episode.id}
              episode={episode}
              handleClick={(episode) =>
                navigate(`${ROUTE.EPISODES}/${episode.id}`)
              }
            />
          )}
        />
      </div>
      <ButtonGroup
        maxEpisodePage={3}
        page={page}
        nextClick={paginationNextClick}
        prevClick={paginationPrevClick}
      />
    </div>
  );
};

export default Episodes;
