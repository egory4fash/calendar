import React from 'react';
import AllYear from './components/AllYear/AllYear';
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";



function App() {

    return (
        <div className='font-BOD_NBBI_BELARUS'>
            <Header/>
            <Calendar/>
            <AllYear/>
        </div>
    )
}

export default App;
