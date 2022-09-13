import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Components/Button';
import CharacterInfo from '../Components/CharacterInfo';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import useActions from '../Hooks/actions';
import useTypedSelector from '../Hooks/typedSelector';
import { useGetOneEpisodeQuery } from '../Store/RickMortyApi/rick-morty';
import { ICharacter } from '../Types/rick-morty-types';

import styles from './PagesStyle/page-epi-item.module.css';

type PageEpisodeItemParams = {
  id?: string;
};

const PageEpisodeItem: FC = () => {
  const navigate = useNavigate();
  const { saveCharacters } = useActions();
  const { episodeCharacter } = useTypedSelector((state) => state);
  const { id } = useParams<PageEpisodeItemParams>();
  const { data, isError, isLoading } = useGetOneEpisodeQuery(`${id}`);

  useEffect(() => {
    if (!data) return;
    Promise.all(data.characters.map((url: string) => fetch(url)))
      .then((response) =>
        Promise.all<ICharacter>(response.map((res) => res.json())).then(
          (result) => {
            saveCharacters(result);
            return result;
          }
        )
      )
      .catch((e) => console.log(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={styles.episodeItem}>
      <div className={styles.episodeItem__container}>
        <div className={styles.episodeItem__head}>
          <Button
            modificator={styles.page__epi_btn}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          {isLoading && <Loading />}
          {isError && <Error />}
          <div className={styles.episodeItem__episod}>
            <h1>Episode № {data?.episode}</h1>
            <p>Series name: {data?.name}</p>
            <h3 className={styles.episodeItem__title}>
              Characters from the series:
            </h3>
          </div>
        </div>
        <div className={styles.episodeItem__wrapper}>
          {episodeCharacter.todo.map((item) => (
            <CharacterInfo key={item.id} items={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageEpisodeItem;
