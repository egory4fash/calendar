import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../data/store";
import {CalendarType, monthsInRussian} from "../../data/initial_state";
import s from './AllYear.module.css'
import SingleMonth from "./SingleMonth/SingleMonth";
import img from '../../Assets/arnamient-2.png'


const AllYear = () => {

    let allYear = useSelector<AppRootStateType, Array<CalendarType>>(state => state.reducer.data)

    const [toggle, setToggle] = useState<boolean>(true)


    let mappedAllYear = []
    for (let i = 0; i < 12; i++) {
        let title = monthsInRussian[i]
        let filteredMonth = allYear.filter((f) => +f.month === i + 1)
        mappedAllYear.push(
            <SingleMonth key={`${title}+${i.toString()}`} title={title} data={filteredMonth}/>
        )
    }

    const toggleHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setToggle(!toggle)
    }


    return (
        <>
            {toggle ?
                <div className={s.container} onClick={toggleHandler}>
                    <img className={s.img} src={img}/>
                    <div className={s.title}>{'\u2193'} ВЕСЬ КАЛЕНДАРЬ {'\u2193'}</div>
                </div>
                : <>


                    <div className={s.all}>
                        {mappedAllYear}
                    </div>
                    <div className={s.container}>
                        <img className={s.img} src={img}/>
                        <div className={s.title} onClick={toggleHandler}>{'\u2191'} ВЕСЬ КАЛЕНДАРЬ {'\u2191'}</div>
                    </div>
                </>
            }
        </>
    )
}

export default AllYear