import React  from 'react';
import s from './Calendar.module.css'
import events from "../../data/events";
import RevoCalendar from "revo-calendar";

import {useDispatch, useSelector} from "react-redux";
import {getEvent} from "../../data/reducer";
import {AppRootStateType} from "../../data/store";
import EventToday from "./EventToday/EventToday";




const Calendar = () => {



    const dispatch = useDispatch()


    let lang = 'ru'
    let primaryColor = 'red'
    let secondaryColor = '#faf2f0'
    let indicatorColor = 'red'
    let sidebarWidth = 100
    let detailWidth = 180
    let onePanelAtATime = true
    let todayColor = 'red'




    const eventSelected = (index: number) => {
         dispatch(getEvent(index))
        const element = document.getElementById('event-today');
         if (element) {
             element.scrollIntoView({behavior: 'smooth'});
         }
    }

    let props = {events, lang, primaryColor, secondaryColor,indicatorColor, eventSelected,
        sidebarWidth,detailWidth,onePanelAtATime,todayColor}


    return (
        <>
            <div className={s.qwe}>
                <RevoCalendar {...props}/>
                <div id = 'event-today'>
                <EventToday />
                </div>

            </div>
            {/*{mappedState}*/}

            {/*<div>{data}</div>*/}


        </>
    )
}

export default Calendar