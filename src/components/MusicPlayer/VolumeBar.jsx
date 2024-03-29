import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <div className="hidden lg:flex flex-1 items-center justify-end">
    {value > 0.5 && <BsFillVolumeUpFill size={20} color="#FFF" onClick={() => setVolume(0)} className="cursor-pointer" />}
    {value > 0 && value <= 0.5 && <BsVolumeDownFill size={20} color="#FFF" onClick={() => setVolume(0)} className="cursor-pointer" />}
    {value === 0 && <BsFillVolumeMuteFill size={20} color="#FFF" onClick={() => setVolume(1)} className="cursor-pointer" />}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="w-40 h-1 ml-2"
    />
  </div>
);

export default VolumeBar;
