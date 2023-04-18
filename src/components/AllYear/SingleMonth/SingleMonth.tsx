import React from 'react'
import {CalendarType} from "../../../data/initial_state";
import SingleEvent from "./SingleEvent/SingleEvent";

type SingleMonthPropsType = {
    title?: string,
    data?: CalendarType[]
}


const SingleMonth = (props: SingleMonthPropsType) => {
    console.log(props)


    let mappedData = []

    if (props.data && props.data.length > 0) {
        props.data.map((m) => {
            mappedData.push(
                <SingleEvent key={`${m.name}+${m.date}`}
                             name={m.name}
                             date={m.date}
                             town={m.town}
                             description={m.description}/>
            )
        })
    } else {

        mappedData.push(
            <SingleEvent name={'НИХУЯ'}/>
        )
    }


    return (
        <div>
            <h2>{props.title}</h2>
            {mappedData}


        </div>
    )
}

export default SingleMonth