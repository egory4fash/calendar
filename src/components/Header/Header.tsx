import React from 'react'
import s from './Header.module.css'
import img from '../../Assets/arnamient-2.png'

const Header = () => {


    return (
        <>
            <div className={s.container}>
                <img className={s.img} src={img}/>
                <div className={s.title}>ЭвентВандроўка</div>

            </div>
        </>
    )
}

export default Header