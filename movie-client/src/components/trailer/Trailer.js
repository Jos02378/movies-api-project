import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import styles from './Trailer.module.css';

const Trailer = () => {
  let params = useParams();
  let key = params.ytTrailerId;

  return (
    <div className={styles['player-container']}>
      {key && (
        <ReactPlayer
          controls='true'
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width='100%'
          height='100%'
        />
      )}
    </div>
  );
};

export default Trailer;
