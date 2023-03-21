import React, {useState} from 'react';

import './App.css';
import logo from './Assets/logo192.png'
import RevoCalendar from "revo-calendar";

function App() {

    let events = [
        {
            name: "<a href = 'google.com'>Buyout</a>",
            date: 1594422992000,
            allDay: true,
        }

    ];
    let lang = 'ru'
    let primaryColor = '#32a852'
    let secondaryColor = '#ffffff'
    let allowDeleteEvent=true
    let allowAddEvent=true

    const dateSelected=() => {
        alert('wer')
    }

    let props = {events, lang,primaryColor,secondaryColor,allowDeleteEvent,allowAddEvent,dateSelected}



    return (
        <>
            <div className='qwe'>
                <RevoCalendar {...props}/>
            </div>
        </>
    );
}

export default App;
