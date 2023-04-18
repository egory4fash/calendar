import React from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../data/store";
import {CalendarType, monthsInRussian} from "../../data/initial_state";
import s from './AllYear.module.css'
import SingleMonth from "./SingleMonth/SingleMonth";


const AllYear = () => {

    let allYear = useSelector<AppRootStateType, Array<CalendarType>>(state => state.reducer.data)

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        alert(e.currentTarget.id)
    }

    // let data = allYear.map( (m) => {
    //     return(
    //         <div key={`${m.name}+${m.date}`} id ={m.index.toString()} onClick = {onClickHandler}>
    //             <div>{m.town}</div>
    //             <div>{m.date}</div>
    //             <div>{m.description}</div>
    //         </div>)})

    let global = []
    for (let i = 0; i < 12; i++) {
        let title = monthsInRussian[i]
        let filteredMonth = allYear.filter((f) => +f.month === i+1)
        global.push(
            <SingleMonth key={`${title}+${i.toString()}`}  title={title} data={filteredMonth}/>
        )

    }


    return (
        <>
            <div className={s.all}>
                {global}
            </div>

        </>
    )
}

export default AllYear