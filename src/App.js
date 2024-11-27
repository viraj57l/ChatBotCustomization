import { useState } from 'react';
import './App.css';
import Chatbot from './components/Chatbot';
import ChatIcon from './assets/cbot.svg'
import Customize from './components/Customize';

function App() {
  const [isChatbotOpen,setIsChatbotOpen]=useState(false);

  const toggleChatbot= () =>{
    setIsChatbotOpen((prev)=>!prev);
  };

    // State for customization options
    const [customizations, setCustomizations] = useState({
      headerBgColor: "#1E293B",
      botMessageColor: "#000",
      userMessageColor: "#fff",
      botBgColor:"#d1d5db",
      userBgColor:"#0f172a",
      bColor:"none",
      bRadius:"0.75rem",
      fontFamily:"Open Sans,serif",
      buttonIcon:ChatIcon,
    });


    // Function to update customization
  const updateCustomization = (key, value) => {
    setCustomizations((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
 
  return (
    <div className="App flex w-full justify-between ">
      <div className=''>
        <Customize customizations={customizations} updateCustomization={updateCustomization}/>
      </div>
      
      
      {
        isChatbotOpen && <Chatbot closeChatbot={toggleChatbot} customizations={customizations}/>
      }

      {
        !isChatbotOpen && (
          <div 
           className='fixed bottom-6 right-6 bg-blue-500 p-3 rounded-full cursor-pointer shadow-lg'
           onClick={toggleChatbot}
          >
          <img 
          src={customizations.buttonIcon} 
          alt='icon'
          className='h-8 w-8'
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = ChatIcon; 
          }}
          />
         </div>
        )
      }
      
    </div>
  );
}

export default App;
