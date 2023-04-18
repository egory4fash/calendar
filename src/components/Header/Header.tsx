import React from 'react'
import s from './Header.module.css'
import img from '../../Assets/arnamient-4.png'

const Header = () => {


    return (
        <>
            <div className={s.title}>
                <img src={img}/>
                <div>ТУТ БУДЕТ НАЗВАНИЕ</div>
                <img src={img}/>
            </div>
        </>
    )
}

export default Header