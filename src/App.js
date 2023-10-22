
import React from 'react'
import './index.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {
  return (
    <Provider store={store}>
    <div >
    
     <Head/>
     <Body/>
     {/* 
     
     * Head
     *Body
       * Sidebar
         *MenuItems
        *MainContainer
          *ButtonList
          *Video container
            * video card
              
     */}
    
    </div>
    </Provider>
    
  );
}

export default App;
