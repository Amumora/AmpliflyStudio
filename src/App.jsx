import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi';
import Login from './pages/Login';
import Register from './pages/Register';
import NavbarR from './components/Header';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';


const App = () => {
  const { activeSong } = useSelector((state) => state.player);


  const [navi,setNavi] =useState(false);

  return (

<>
    {!navi ?  (
      <div>
        <NavbarR />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/LogIn/" element={<Login setNavi={setNavi} />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Wrapper>
      </div>
    )  : (
      <div className="flex h-screen overflow-hidden bg-gradient-to-br from-black to-#1d1e22">
        <Sidebar setNavi={setNavi}/>
  
        <div className="flex-1 flex flex-col overflow-hidden">
          <Searchbar />
  
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col overflow-y-scroll hide-scrollbar p-4">
              <Routes>
                <Route path="/Login/Discover" element={<Discover />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </div>
  
            <div className="hidden xl:flex xl:flex-col xl:sticky top-0 h-full p-4">
              <TopPlay />
            </div>
          </div>
        </div>
  
        {activeSong?.title && (
          <div className="absolute bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-black to-#1d1e22 backdrop-blur-lg rounded-t-3xl z-10 p-4">
            <MusicPlayer />
          </div>
        )}
      </div>)   }
      </>
  );
};

export default App;
