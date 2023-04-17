import React from 'react'
import {CalendarType, InitialStateType} from "../../../data/initial_state";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../data/store";
import s from './EventToday.module.css'



const EventToday=() => {



    const eventTodayData = useSelector<AppRootStateType,CalendarType[]>( state => state.reducer.currentEvent)

    let mappedData = eventTodayData.map( (m) => {
        return (
            <div key ={`${m.name}+${m.date}`} >
            <div className = {s.date}>
                {m.date?<span>{`${m.date}.${m.month}.2022`}</span>:''}
                <span>{m.name}</span>
            </div>
        <div className = {s.description}>
            {m.description}
        </div>
                </div>
        )
    })


    return (
        <>
            <div className = {s.container}>
                {mappedData}
            </div>
        </>
    )
}

export default EventToday