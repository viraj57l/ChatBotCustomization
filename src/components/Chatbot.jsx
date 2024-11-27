 import React, { useState } from 'react'
 import Icon from '../assets/cbot.svg'
 import Close from '../assets/closeicon.svg'
 import SendIcon from '../assets/send_Icon.svg'


 
 const Chatbot = ({closeChatbot,customizations}) => {

    const[messages,setMessages] =useState([]);
    const [input,setInput]=useState("");

    const handleSend = () =>{
        if(input.trim()==="") return; //if messages are empty

        //user's message
        const newMessages =[
            ...messages,
            { sender :"user",
                text:input
            }];

        //bot's message
        newMessages.push({
            sender:"bot",
            text:"Hello Anurag! How can I help you today? "
        });

        setMessages(newMessages);
        setInput("");

    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSend(); 
        }
    };


   return (
     <div className='chatbot h-full w-[350px]  border-none rounded-xl relative'
     style={{ 
        borderColor:customizations.bColor,
        borderRadius:customizations.bRadius,
        fontFamily: customizations.fontFamily,
     }}
     >
        {/* header */}
       <div 
       className=' flex gap-3 h-16 w-[350px]   bg-slate-900  rounded-t-xl p-1'
       style={{backgroundColor:customizations.headerBgColor,borderTopRightRadius:customizations.bRadius,borderTopLeftRadius:customizations.bRadius   }}
       >
        <img 
        src={Icon}
        alt="bot" 
        className=' p-[2px] bg-white rounded-full'
          />
        {/* title of bot */}
        
        <div className='flex flex-col justify-center'>
           <h2 
           className='text-white'
           >
            Jinn Live
            </h2> 
           <p className='text-slate-400'>Demo Bot</p>
        </div>
        <div className='ml-auto my-auto '>
            <img 
            src={Close}
             alt="closeicon" 
             className='h-[40px] w-[40px] cursor-pointer'
             onClick={closeChatbot}
             />
        </div>
       </div>


       {/* chatbody */}
       <div className='flex-grow p-4 overflow-auto h-[calc(100%-120px)] bg-white border-2 '
        style={{ 
          borderColor:customizations.bColor,
       }}
       >
        <div className='space-y-4'>
            {/* mapping messages */}
            {
                messages.map((message,index)=>(
                   <div
                    key={index}
                    className={`flex ${message.sender ==="bot"? "justify-start" : "justify-end"}`}
                   >
                    {message.sender === "bot" && (
                <img
                  src={Icon} 
                  alt="boticon"
                  className="h-6 w-6 rounded-full mr-2" 
                />
              )}
                     <div
                className={`p-2 max-w-[75%] rounded-lg ${
                  message.sender === "bot" ? "bg-gray-300 text-black rounded-tl-none" : "bg-slate-900 text-white rounded-br-none"
                }`}
              style={{
                backgroundColor:
                message.sender === "bot"? customizations.botBgColor:customizations.userBgColor,
                color:message.sender ==="bot"?customizations.botMessageColor:customizations.userMessageColor,
              }}
              >
                {message.text}
              </div>
                   </div> 
                ))
            }
        </div>
        
       </div>


       {/* input box */}
       <div className='flex absolute w-full bottom-0 p-2  border-t-2 bg-white '
       style={{borderBottomRightRadius:customizations.bRadius ,borderBottomLeftRadius:customizations.bRadius}}
       >
        <input
        type='text'
        placeholder='Ask us anything..'
        className=' w-full pr-10 p-2 focus'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        alt='send'
        />
        <img src={SendIcon}
        alt="send-icon"
        className='h-[40px] w-[40px] cursor-pointer'
        onClick={handleSend}
        />
       </div>
     </div>
   )
 }
 
 export default Chatbot
 