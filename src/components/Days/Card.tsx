import React, { FC } from "react";
import style from './Days.module.scss'
import {GlobalSvgSelector} from "../GlobalSvgSelector/GlobalSvgSelector";
import {weatherDaily} from "../../store/ducks/weather/slice";

export const Card:FC<weatherDaily> = (day) => {
    // const {day,day_info,info,icon_id,temp_day,temp_night} = props

    return (
        <div className={style.card}>
            <div className={style.day}>{new Date(day.dt * 1000).toLocaleDateString()}</div>
            {/*<div className={style.day_info}>{day.weather[0].description}</div>*/}
            <div className={style.icon}><GlobalSvgSelector width={50} height={50} id={day.weather[0].icon}/></div>
            <div className={style.temp_day}>{day.temp.day}</div>
            <div className={style.temp_night}>{day.temp.night}</div>
            <div className={style.info}>{day.weather[0].description}</div>
        </div>
    )
}