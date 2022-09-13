import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Components/Button';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import { useGetOneCharacterQuery } from '../Store/RickMortyApi/rick-morty';

import styles from './PagesStyle/page-ch-item.module.css';

type PageCharacterItemParams = {
  id?: string;
};

const PageCharacterItem: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<PageCharacterItemParams>();
  const { data, isLoading, isError } = useGetOneCharacterQuery(`${id}`);

  return (
    <div className={styles.page__item}>
      <div className={styles.page__character}>
        <div className={styles.page__head}>
          <Button modificator={styles.page__btn} onClick={() => navigate(-1)}>
            Back
          </Button>
          <h1 className={styles.page__title}>{data?.name}</h1>
        </div>
        <div className={styles.page__img}>
          <img src={data?.image} alt={data?.name} />
        </div>
        <div className={styles.page__info}>
          {isLoading && <Loading />}
          {isError && <Error />}
          <p>
            {data?.id}. {data?.name}
          </p>
          <p>Gender:{data?.gender}</p>
          <p>Status:{data?.status}</p>
          <p>Species:{data?.species}</p>
          <p>Planet:{data?.origin.name}</p>
          <p>Location: {data?.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PageCharacterItem;
