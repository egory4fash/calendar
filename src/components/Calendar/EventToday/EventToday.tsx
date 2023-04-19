import React from 'react'
import {CalendarType} from "../../../data/initial_state";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../data/store";
import s from './EventToday.module.css'
import {Links} from '../../../data/links'
import {linkMaker} from "../../../helpers/linkMaker";


const EventToday = () => {


    const eventTodayData = useSelector<AppRootStateType, CalendarType[]>(state => state.reducer.currentEvent)

    let mappedData = eventTodayData.map((m) => {


        let link = linkMaker(m.town,Links)



        return (
            <div key={`${m.name}+${m.date}`}>
                <div className={s.date}>
                    {m.date ? <span>{`${m.date}.${m.month}.2022`}</span> : ''}
                    <a href ={link} target='_blank'><span>{m.town}</span></a>
                </div>
                <div className = {s.name}>{m.name}</div>
                <div className={s.description}>
                    {m.description}
                </div>
            </div>
        )
    })


    return (
        <>
            <div className={s.container}>
                {mappedData}
            </div>
        </>
    )
}

export default EventToday