import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import styles from './Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div className={styles['carousel-container']}>
      <Carousel>
        {movies &&
          movies.map((movie) => {
            return (
              <Paper key={movie.imdbId}>
                <div className={styles['card-container']}>
                  <div
                    className={styles.card}
                    style={{ '--img': `url(${movie.backdrops[0]})` }}
                  >
                    <div className={styles.card__content}>
                      <div className={styles.card__poster}>
                        <img src={movie.poster} alt='' />
                      </div>
                      <div className={styles.card__title}>
                        <h4>{movie.title}</h4>
                      </div>
                      <div className={styles['buttons-container']}>
                        <Link
                          to={`/Trailer/${movie.trailerLink.substring(
                            movie.trailerLink.length - 11
                          )}`}
                        >
                          <div className={styles['button-wrapper']}>
                            <FontAwesomeIcon
                              className={styles['play-button-icon']}
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>

                        <div>
                          <Button
                            variant='info'
                            onClick={() => reviews(movie.imdbId)}
                          >
                            Reviews
                          </Button>
                        </div>
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
