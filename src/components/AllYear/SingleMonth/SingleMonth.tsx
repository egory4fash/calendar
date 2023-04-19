import React from 'react'
import {CalendarType} from "../../../data/initial_state";
import SingleEvent from "./SingleEvent/SingleEvent";
import s from './SingleMonth.module.css'

type SingleMonthPropsType = {
    title?: string,
    data?: CalendarType[]
}


const SingleMonth = (props: SingleMonthPropsType) => {

    let mappedData = []

    if (props.data && props.data.length > 0) {
        props.data.map((m) => {
            mappedData.push(
                <SingleEvent key={`${m.name}+${m.date}`}
                             name={m.name}
                             date={m.date}
                             month={m.month}
                             town={m.town}
                             description={m.description}/>
            )
        })
    } else {

        mappedData.push(
            <SingleEvent name={'На этот месяц ничего не запланировано...'}/>
        )
    }


    return (
        <div className = {s.block}>
            <h2>{props.title}</h2>
            {mappedData}


        </div>
    )
}

export default SingleMonth