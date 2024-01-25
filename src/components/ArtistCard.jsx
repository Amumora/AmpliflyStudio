import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-gray-800/50 backdrop-blur-md rounded-md cursor-pointer hover:bg-gray-800/70 transition duration-300 transform hover:scale-105 slideup"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img alt="song_img" src={`${track?.images?.coverart}`} className="w-full h-56 rounded-md object-cover" />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
