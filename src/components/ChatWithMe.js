import React, { useState } from 'react';
import ChatModal from './ChatModal';
import './ChatWithMe.scss';

export default function ChatWithMe() {

  const [isChatOpen, setChatOpen] = useState(false);

  const openChatModal = (isOpen) => {
    setChatOpen(isOpen);
  }

  return (
    <React.Fragment>
      <div className={`chat-wrp ${!isChatOpen ? '' : 'hide'}`} onClick={() => openChatModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.13 43.36"><g id="Layer_2" dataname="Layer 2"><g id="Layer_2-2" dataname="Layer 2"><path className="cls-1" d="M9.49,15.33C10.8,7.24,19.29,1,29.51,1,40.62,1,49.13,8.4,49.13,17.52c0,4-1.11,7.67-5.11,10.53h0a18.13,18.13,0,0,0,.6,8.36,1,1,0,0,1-1.3,1.22L32.51,33.81a21.44,21.44,0,0,1-3.13.24"/><path className="cls-1" d="M32.68,33.81a22.69,22.69,0,0,0,6.49-2.33"/><path className="cls-1" d="M16.18,14.06C7.55,14.06,1,19.8,1,26.88a9.52,9.52,0,0,0,4,8.17H5a11.73,11.73,0,0,1-.29,6A1,1,0,0,0,6,42.3l7.85-2.78a17.56,17.56,0,0,0,2.42.18c8.63,0,15.57-5.74,15.57-12.82S24.81,14.06,16.18,14.06Z"/><path className="cls-1" d="M13.72,39.52a17.64,17.64,0,0,1-5-1.81"/><circle cx="9.49" cy="27.33" r="1.83"/><circle cx="16.67" cy="27.33" r="1.83"/><circle cx="23.85" cy="27.33" r="1.83"/><circle cx="31.86" cy="16.83" r="1.83"/><circle cx="39.04" cy="16.83" r="1.83"/></g></g></svg>
      </div>
      {isChatOpen && <ChatModal openChatModal={openChatModal}/>}
    </React.Fragment>
  )
}
