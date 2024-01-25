import React from 'react';
import { MdPauseCircleFilled, MdPlayCircleFilled } from 'react-icons/md';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  <>
    {isPlaying && activeSong?.title === song.title ? (
      <MdPauseCircleFilled
        size={40}
        className="text-blue-500 cursor-pointer"
        onClick={handlePause}
      />
    ) : (
      <MdPlayCircleFilled
        size={40}
        className="text-green-500 cursor-pointer"
        onClick={handlePlay}
      />
    )}
  </>
);

export default PlayPause;
