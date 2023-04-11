import React from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../data/store";
import {InitialStateType} from "../../data/initial_state";
import s from './AllYear.module.css'

 const AllYear = () => {

    let allYear = useSelector<AppRootStateType,InitialStateType>(state => state.reducer)

    let data = allYear.map( (m) => {
        return(
            <div key={m.name}>
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