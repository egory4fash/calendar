import React, {useState} from 'react'

type SingleEventPropsType = {
    name:string
    date?:string | number,
    town?:string,
    description?:string
}

const SingleEvent = (props:SingleEventPropsType) => {

    const [modal,setModal] = useState(false)
    const modalHandler = (e:React.MouseEvent<HTMLHeadingElement>) => {
        setModal(!modal)
    }
    const closeModalHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        setModal(false)
    }

    console.log(props)
    return (
        <div>
            <h3 onClick={modalHandler}>{props.name}</h3>
            <div>{props.date}</div>
            <div>{props.town}</div>
            <div>-------------</div>
            {modal?<div>
            <h4>{props.description}</h4>
                <button onClick={closeModalHandler}>X</button>
                </div>
            :<span></span>}
        </div>
    )
}

export default SingleEvent