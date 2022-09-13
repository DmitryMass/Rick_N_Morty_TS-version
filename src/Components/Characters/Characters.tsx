import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCharactersQuery } from '../../Store/RickMortyApi/rick-morty';

import { ICharacter } from '../../Types/rick-morty-types';
import { ROUTE } from '../Constant/routes-constant';
import Error from '../Error';
import List from '../List';
import Loading from '../Loading';
import CharacterItem from './CharacterItem';
import useScroll from '../ScrollHook/useScroll';

import styles from './character.module.css';
import ButtonGroup from '../ButtonGroup';

const Characters: FC = () => {
  const {
    ref: scroll,
    page,
    paginationNextClick,
    paginationPrevClick,
  } = useScroll();
  const navigate = useNavigate();
  const { data = [], isLoading, isError } = useGetCharactersQuery(page);

  return (
    <div className={styles.character__wrapper}>
      <h1 ref={scroll} className={styles.character__title}>
        Characters from all episodes
      </h1>
      {isLoading && <Loading />}
      {isError && <Error />}
      <List
        items={data}
        renderItems={(character: ICharacter) => (
          <CharacterItem
            key={character.id}
            character={character}
            handleClick={(character) =>
              navigate(`${ROUTE.CHARACTERS}/${character.id}`)
            }
          />
        )}
      />
      <ButtonGroup
        maxEpisodePage={42}
        nextClick={paginationNextClick}
        page={page}
        prevClick={paginationPrevClick}
      />
    </div>
  );
};

export default Characters;
