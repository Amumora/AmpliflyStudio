import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex flex-col items-center justify-center text-center">
    <div className="w-full h-40 bg-gradient-to-l from-transparent to-black" />

    <div className="absolute inset-0 flex items-center flex-col">
      <img
        alt="profile"
        src={
          artistId ? artistData?.attributes?.artwork?.url
            .replace('{w}', '800')
            .replace('{h}', '800')
            : songData?.images?.coverart
        }
        className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white shadow-lg"
      />

      <div className="mt-3">
        <p className="font-bold text-white text-2xl sm:text-3xl">
          {artistId ? artistData?.attributes?.name : songData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-sm text-gray-300 hover:text-white transition duration-300 mt-1">
              {songData?.subtitle}
            </p>
          </Link>
        )}

        <p className="text-sm text-gray-300 mt-1">
          {artistId
            ? artistData?.attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>

    <div className="w-full h-20" />
  </div>
);

export default DetailsHeader;
