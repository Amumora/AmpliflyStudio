import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around w-48 md:w-56 lg:w-64 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={40} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={40} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="cursor-pointer" />
  </div>
);

export default Controls;
