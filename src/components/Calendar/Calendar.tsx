import React  from 'react';
import s from './Calendar.module.css'
import events from "../../data/events";
import RevoCalendar from "revo-calendar";

import {useDispatch, useSelector} from "react-redux";
import {getEvent} from "../../data/reducer";
import {AppRootStateType} from "../../data/store";
import EventToday from "./EventToday/EventToday";




const Calendar = () => {

// const dataTest = useSelector<AppRootStateType,InitialStateType>(state => state.reducer)
//     console.log(dataTest)

    const dispatch = useDispatch()


    let lang = 'ru'
    let primaryColor = 'red'
    let secondaryColor = '#faf2f0'
    let indicatorColor = 'red'
    let sidebarWidth = 100
    let detailWidth = 180
    let onePanelAtATime = true
    let todayColor = 'red'

    // const [currentEvent,setCurrentEvent,] = useState(text)



    const eventSelected = (index: number) => {
       // setData( initialState[index].description)
       // // return data
        console.log(index)
         dispatch(getEvent(index))


    }
    const dateSelected = (date: { day:string,month:string,year:string, }) => {

    }


//     const mappedState = dataTest.map( (m) => {
// return(
//     <div key={m.name}>
//     <div>{m.town}</div>
//     <div>{m.date}</div>
//     <div>{m.description}</div>
//     </div>
//     )
//
//     })

// useEffect( () => {
//     setCurrentEvent(text)
//     console.log(text)
// },[text])


    let props = {events, lang, primaryColor, secondaryColor,indicatorColor, eventSelected,dateSelected,
        sidebarWidth,detailWidth,onePanelAtATime,todayColor}


    return (
        <>
            <div className={s.qwe}>
                <RevoCalendar {...props}/>
                <EventToday />

            </div>
            {/*{mappedState}*/}

            {/*<div>{data}</div>*/}


        </>
    )
}

export default Calendar