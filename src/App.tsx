import React from 'react';
import AllYear from './components/AllYear/AllYear';
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";



function App() {

    return (
        <div className='a_BosaNovaCps_BELARUS'>
            <Header/>
            <Calendar/>
            <AllYear/>
            <Contacts/>
        </div>
    )
}

export default App;
