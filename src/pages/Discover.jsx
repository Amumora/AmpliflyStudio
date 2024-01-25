import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery, useGetTopChartsQuery } from '../redux/services/shazamCore'; // Update the import
import { genres } from '../assets/constants';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = genreListId === '' ? useGetTopChartsQuery() : useGetSongsByGenreQuery(genreListId || 'POP'); // Update the hook usage

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.value;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        {genreTitle === '' ? (
          <h2 className="text-3xl font-bold text-left text-gray-800 dark:text-white">Discover</h2>
        ) : (
          <h2 className="text-3xl font-bold text-left text-gray-800 dark:text-white">Discover {genreTitle}</h2>
        )}
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'Pop'}
          className="bg-black text-gray-400 p-3 text-sm rounded-2xl outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
