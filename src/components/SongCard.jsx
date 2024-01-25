import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i,showYoutubeButton }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
  }, [song]);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const openYoutube = () => {
    const youtubeLink=song?.hub.providers?.find(provider=>provider.type==='YOUTUBEMUSIC')?.actions?.find(action=>action.name==='hub:youtubemusic:androiddeeplink')?.uri;
    if (youtubeLink) {
      window.open(youtubeLink, '_blank');

    }else{
      setErrorMessage('No Youtube link found');
    }
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-gray-800 bg-opacity-90 backdrop-blur-md animate-slideup rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 border border-gray-700 shadow-md">
      <div className="relative w-full h-56 group overflow-hidden rounded-lg">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`} className="hover:underline">
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'} className="hover:underline">
            {song.subtitle}
          </Link>
        </p>

{showYoutubeButton && (<button
  className="mt-2 text-blue-500 bg-blue-100 px-2 py-1 rounded-md hover:bg-blue-200 transition duration-300 focus:outline-none"
  onClick={openYoutube}
>
  Open in YouTube Music
</button>)}

        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default SongCard;
