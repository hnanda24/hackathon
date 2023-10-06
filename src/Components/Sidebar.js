import React, { useState, useContext } from 'react';

import { SocketContext } from '../context';
// import { Link } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="container">
      <div className="paper">
        <form className="root" noValidate autoComplete="off">
          <div className="gridContainer">
            <div className="padding">
              <h6>Account Info</h6>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              <button type="button" onClick={() => navigator.clipboard.writeText(me)}>Copy Your ID</button>
            </div>
            <div className="padding">
              <h6>Make a call</h6>
              <input type="text" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} placeholder="ID to call" />
              {callAccepted && !callEnded ? (
                <button type="button" onClick={leaveCall}>Hang Up</button>
              ) : (
                <button type="button" onClick={() => callUser(idToCall)}>Call</button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
