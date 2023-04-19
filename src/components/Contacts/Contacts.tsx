import React from 'react'
import {Links} from "../../data/links";
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className = {s.container}>
            <h1>КОНТАКТЫ:</h1>
            <ul>
                <a href={Links.Verhn} target='_blank'><li>Отдел спорта и туризма Верхнедвинского райисполкома</li></a>
                <a href={Links.Miory} target='_blank'><li>Отдел спорта и туризма Миорского райисполкома</li></a>
                <a href={Links.Glub} target='_blank'><li>Отдел спорта и туризма Глубокского райисполкома</li></a>
                <a href={Links.Shark} target='_blank'><li>Отдел спорта и туризма Шарковщинского райисполкома</li></a>
            </ul>
        </div>
    )
}

export default Contacts