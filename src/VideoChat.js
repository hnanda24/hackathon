import React from 'react';
import VideoPlayer from './Components/VideoPlayer';
import Sidebar from './Components/Sidebar';
import Notifications from './Components/Notification';
import { ContextProvider } from './context';

// import './VideoChat.css'; // Import your CSS styles

const VideoChat = () => {
  return (
    <ContextProvider>

    <div className="wrapper">
      <div className="app-bar">
        <h2 className="app-title">Video Chat</h2>
      </div>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
    </ContextProvider>

  );
};

export default VideoChat;
