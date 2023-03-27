import React from 'react';

import RevoCalendar from "revo-calendar";

import {initialState} from "../data/initial_state";

const Calendar = () => {

    let events = [
        {
            name: "Buyout",
            date: 1594422992000,
            allDay: true,
        },
        {
            name: "123",
            date: 1679851330000,
            allDay: true,
        }


    ];
    let lang = 'ru'
    let primaryColor = '#32a852'
    let secondaryColor = '#ffffff'
    let allowDeleteEvent=true
    let allowAddEvent=true

    const eventSelected=(index:number) => {
        console.log(initialState[index].test)
    }

    let props = {events, lang,primaryColor,secondaryColor,allowDeleteEvent,allowAddEvent,eventSelected}



    return (
        <>
            <div className='qwe'>
                <RevoCalendar {...props}/>
            </div>
        </>
    )
}

export default Calendar