import React, { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ROUTE } from './Constant/routes-constant';

import PageHome from '../Pages/PageHome';
import PageCharacters from '../Pages/PageCharacters';
import PageEpisodes from '../Pages/PageEpisodes';
import PageCharacterItem from '../Pages/PageCharacterItem';

import '../Styles/reset.css';
import '../Styles/vars.css';
import styles from './app.module.css';
import PageEpisodeItem from '../Pages/PageEpisodeItem';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
        <header className={styles.app__header}>
          <Link className={styles.nav__link} to={ROUTE.HOME}>
            Rk & Mty
          </Link>
          <nav className={styles.app__nav}>
            <Link className={styles.nav__link} to={ROUTE.CHARACTERS}>
              Characters
            </Link>
            <Link className={styles.nav__link} to={ROUTE.EPISODES}>
              Episodes
            </Link>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path={ROUTE.HOME} element={<PageHome />} />
        <Route path={ROUTE.CHARACTERS} element={<PageCharacters />} />
        <Route path={ROUTE.CHARACTERS_ITEM} element={<PageCharacterItem />} />
        <Route path={ROUTE.EPISODES} element={<PageEpisodes />} />
        <Route path={ROUTE.EPISODES_ITEM} element={<PageEpisodeItem />} />
      </Routes>
    </div>
  );
};

export default App;
