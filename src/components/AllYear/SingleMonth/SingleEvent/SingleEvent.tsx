import React, {useState} from 'react'
import s from './SingleEvent.module.css'

type SingleEventPropsType = {
    name: string
    date?: string | number,
    month?: number | string
    town?: string,
    description?: string
}

const SingleEvent = (props: SingleEventPropsType) => {

    const [modal, setModal] = useState(false)
    const modalHandler = (e: React.MouseEvent<HTMLHeadingElement>) => {
        setModal(!modal)
    }
    const closeModalHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setModal(false)
    }

    console.log(props)
    return (
        <div className={s.container}>
            <h3 onClick={modalHandler}>{props.name}</h3>
            <div className={s.date}>
                <div>
                    <span>{props.date}</span>
                    <span> </span>
                    <span>{props.month}</span>
                </div>
                <div>{props.town}</div>
            </div>

            {modal ? <div className = {s.description}>
                    <button className = {s.button} onClick={closeModalHandler}>Х</button>
                    <h4>{props.description}</h4>

                </div>
                : <></>}
        </div>
    )
}

export default SingleEvent