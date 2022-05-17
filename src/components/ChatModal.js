import React, { useEffect, useState } from 'react';
import './ChatModal.scss';
import ContactForm from './ContactForm';

export default function ChatModal({openChatModal}) {

    const [isSuggestion, setSuggestion] = useState(false);
    const [chatList, setChatList] = useState([]);
    const [isHire, setHireOptions] = useState(false);
    const [isContact, setIsContact] = useState(false);
    
    useEffect(() => {
        setTimeout(()=> {
            setSuggestion(true);
        },4000);
    },[]);

    const changeThemeHandler = () => {
        setSuggestion(false);
        setChatList([...chatList, <ChangeHumanTheme/>]);
        setTimeout(() => {
            setChatList((prevChatList)=> ([...prevChatList, <ChangeBotTheme/>]));
        },3000);
        setTimeout(()=> {
            const isOsDark = document.querySelector('html').dataset.theme;
            document.querySelector('html').dataset.theme = `${isOsDark==='theme-dark' ? 'theme-light' : 'theme-dark'}`;
            
        },6000);
        setTimeout(()=> {
            setSuggestion(true);
        },8000);
    }

    const SayHelloHuman = () => {
        return (
            <div className="message-human-wrp">
                <div className="message-human">I just wanted to say hello!</div>
            </div>
        );
    }

    const SayHelloBot = () => {
        return (
            <div className="message-bot-wrp">
                <div className="message-bot">Well hello there!</div>
                <div className="message-bot">Thank you for saying hi</div>
                <div className="message-bot">I hope you are having fun browsing my site</div>
                <div className="message-bot">Can I help you with anything else?</div>
            </div>
        );
    }

    const ChangeHumanTheme = () => {
        return (
            <div className="message-human-wrp">
                <div className="message-human">I'd like to change the theme</div>
                <div className="message-human">It's not according to my preference</div>
            </div>
        );
    }

    const ChangeBotTheme = () => {
        return (
            <div className="message-bot-wrp">
                <div className="message-bot">You are lucky as you have dark and light theme options!</div>
                <div className="message-bot">Here you go! Theme changed!</div>
                <div className="message-bot">Can I help you with anything else?</div>
            </div>
        );
    }

    const sayHelloHandler = () => {
        setSuggestion(false);
        setChatList([...chatList, <SayHelloHuman/>]);
        setTimeout(() => {
            setChatList((prevChatList)=> ([...prevChatList, <SayHelloBot/>]));
        },3000);
        setTimeout(()=> {
            setSuggestion(true);
        },9000);
    }

    const SayHireHuman = () => {
        return (
            <div className="message-human-wrp">
                <div className="message-human">I'd like to hire you!</div>
            </div>
        )
    }

    const SayHireChat = () => {
        return (
            <div className="message-bot-wrp">
                <div className="message-bot">Good to hear that!</div>
                <div className="message-bot">Excited!</div>
                <div className="message-bot">Send me a message and let's chat further!</div>
            </div>
        )
    }

    const hireHandler = () => {
        setSuggestion(false);
        setChatList([...chatList, <SayHireHuman/>]);
        setTimeout(() => {
            setChatList((prevChatList)=> ([...prevChatList, <SayHireChat/>]));
        },2000);
        setTimeout(()=> {
            setHireOptions(true);
        },7000);
    }

    const showSuggestion = () => {
        setHireOptions(false);
        setSuggestion(true);
    }

    const closeContactForm = () => {
        setIsContact(false);
        setChatList([]);
        setHireOptions(false);
        setTimeout(()=> {
            setSuggestion(true);
        },4000);
    }

    return (
        <div className="chat-modal-wrp">
            <div className="chat-header">
                <div className="profile">
                    <img src={`${process.env.PUBLIC_URL}./profile-small.png`} alt="profile"/>
                </div>
                <div className="header-content-wrp">
                    <h6>Dikshita Bot</h6>
                    <p>Ask me a question!</p>
                </div>
                <div className="close-modal" onClick={() => openChatModal(false)}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.41425 6.00025L11.7072 1.70725C12.0982 1.31625 12.0982 0.68425 11.7072 0.29325C11.3162 -0.09775 10.6843 -0.09775 10.2933 0.29325L6.00025 4.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L4.58625 6.00025L0.29325 10.2933C-0.09775 10.6843 -0.09775 11.3162 0.29325 11.7072C0.48825 11.9022 0.74425 12.0002 1.00025 12.0002C1.25625 12.0002 1.51225 11.9022 1.70725 11.7072L6.00025 7.41425L10.2933 11.7072C10.4883 11.9022 10.7442 12.0002 11.0002 12.0002C11.2562 12.0002 11.5122 11.9022 11.7072 11.7072C12.0982 11.3162 12.0982 10.6843 11.7072 10.2933L7.41425 6.00025Z" fill="white"></path>
                    </svg>
                </div>
            </div>
            {!isContact && (
                <div className="chat-message clearfix">
                    <div className="message-bot-wrp">
                        <div className="message-bot">Hey, I'm Dikshita Bot<span role="img" aria-label="hi">👋</span></div>
                        <div className="message-bot">How can I help you?</div>
                    </div>
                    {chatList.map((list,index) => { return <div key={index}>{list}</div> })}
                    {isSuggestion && (<div className="suggestions-wrp">
                        <div className="suggestions" onClick={changeThemeHandler}><span role="img" aria-label="theme">🚀</span> &nbsp;&nbsp; Change the current theme</div>
                        <div className="suggestions" onClick={sayHelloHandler}><span role="img" aria-label="hi">👋</span> &nbsp;&nbsp; I’d like to say hello!</div>
                        <div className="suggestions" onClick={hireHandler}><span role="img" aria-label="hire">💼</span> &nbsp;&nbsp; I’d like to hire you!</div>
                    </div>)}
                    {isHire && (<div className="suggestions-wrp">
                        <div className="suggestions" onClick={() => setIsContact(true)}><span role="img" aria-label="message">💌 </span> &nbsp;&nbsp; Send a message</div>
                        <div className="suggestions" onClick={showSuggestion}><span role="img" aria-label="options">📮</span> &nbsp;&nbsp; Other options?</div>
                    </div>)}
                </div>
            )}
            {isContact && <ContactForm closeContactForm={closeContactForm}/>}
            
        </div>
    )
}
