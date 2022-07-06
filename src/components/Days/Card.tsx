import React, { FC } from "react";
import style from './Days.module.scss'
import {IDay} from "./Days";
import {GlobalSvgSelector} from "../GlobalSvgSelector/GlobalSvgSelector";

export const Card:FC<IDay> = (props) => {
    const {day,day_info,info,icon_id,temp_day,temp_night} = props

    return (
        <div className={style.card}>
            <div className={style.day}>{day}</div>
            <div className={style.day_info}>{day_info}</div>
            <div className={style.icon}><GlobalSvgSelector id={icon_id}/></div>
            <div className={style.temp_day}>{temp_day}</div>
            <div className={style.temp_night}>{temp_night}</div>
            <div className={style.info}>{info}</div>
        </div>
    )
}