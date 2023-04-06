import React, {useState} from 'react';
import s from './Calendar.module.css'


import RevoCalendar from "revo-calendar";

import {initialState} from "../../data/initial_state";

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
        },
        // {
        //     name: "456",
        //     date: 1679851330001,
        //     allDay: true,
        // }


    ];
    let lang = 'ru'
    let primaryColor = '#32a852'
    let secondaryColor = '#ffffff'
    let allowDeleteEvent = true
    let allowAddEvent = true
    let indicatorColor = 'red'

    const [data,setData] = useState('')



    const eventSelected = (index: number) => {
       setData( initialState[index].description)
       // return data
    }
    const dateSelected = (date: { day:string,month:string,year:string, }) => {
        console.log(date.month)
    }


    const mappedState = initialState.map( (m) => {
return(
    <div key={m.name}>
    <div>{m.town}</div>
    <div>{m.date}</div>
    <div>{m.description}</div>
    </div>
    )

    })


    let props = {events, lang, primaryColor, secondaryColor, allowDeleteEvent, allowAddEvent,indicatorColor, eventSelected,dateSelected}


    return (
        <>
            <div className={s.qwe}>
                <RevoCalendar {...props}/>
            </div>
            {mappedState}
            <div>{data}</div>


        </>
    )
}

export default Calendar