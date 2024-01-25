import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error || !artistData) return <Error />;

  const topSongs = artistData?.data[0]?.views['top-songs']?.data || [];

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />

      <div className="mt-8">
        <h2 className="text-white text-2xl font-bold">Top Songs:</h2>
        <RelatedSongs
          data={topSongs}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </div>
    </div>
  );
};

export default ArtistDetails;
