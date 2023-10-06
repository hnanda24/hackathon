import React, { useContext } from 'react';

import { SocketContext } from '../context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall} style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px' }}>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
