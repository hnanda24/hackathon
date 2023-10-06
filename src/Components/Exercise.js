import '../assets/exercise.css'; // Import the CSS file
import React, { useState, useEffect, useRef } from 'react';

const Exercise = (props) => {
    // if(props === 'undefined') console.log("bad news");
    // var d = document.getElementById
    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };
    // console.log(props.audio)
    // console.log(2);

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeChange = (event) => {
    const audio = audioRef.current;
    const newTime = event.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="AudioPlayer">
      <audio ref={audioRef} src={props.audio} />
      <button className="PlayButton" onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="SliderContainer">
        <input
          type="range"
          min="0"
          max={duration}
          step="0.01"
          value={currentTime}
          onChange={handleTimeChange}
          className="DurationSlider"
        />
        <div className="TimeInfoContainer">
          <p className="TimeInfo">Current Time: {currentTime.toFixed(2)} seconds</p>
          <p className="TimeInfo">Duration: {duration.toFixed(2)} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
