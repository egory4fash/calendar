import React from 'react'
import {CalendarType} from "../../../data/initial_state";

type SingleMonthPropsType = {
    title?:string,
    data?:CalendarType[]
}


const SingleMonth = (props:SingleMonthPropsType) => {

    console.log(props.data)

    return (
        <div>
            <span>{props.title}</span>
            <span>{props.data&&props.data.length>0?props.data[0].town:'none'}</span>


        </div>
    )
}

export default SingleMonth