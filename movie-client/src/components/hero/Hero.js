import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import styles from './Hero.module.css';

const Hero = ({ movies }) => {
  return (
    <div className={styles['carousel-container']}>
      <Carousel>
        {movies &&
          movies.map((movie) => {
            return (
              <Paper>
                <div className={styles['card-container']}>
                  <div className={styles.card}>
                    <div className={styles.card__content}>
                      <div className={styles.card__poster}>
                        <img src={movie.poster} alt='' />
                      </div>
                      <div className={styles.card__title}>
                        <h4>{movie.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Hero;
