import React from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../data/store";
import {CalendarType} from "../../data/initial_state";
import s from './AllYear.module.css'

 const AllYear = () => {

    let allYear = useSelector<AppRootStateType,Array<CalendarType>>(state => state.reducer.data)

     const onClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
         alert(e.currentTarget.id)
     }

    let data = allYear.map( (m) => {
        return(
            <div key={`${m.name}+${m.date}`} id ={m.index.toString()} onClick = {onClickHandler}>
                <div>{m.town}</div>
                <div>{m.date}</div>
                <div>{m.description}</div>
            </div>)})



    return (
        <>
            <div className={s.all}>
                {data}
            </div>

        </>
    )
}

export default AllYear