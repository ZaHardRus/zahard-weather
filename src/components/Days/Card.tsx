import React, {FC} from "react";
import style from './Days.module.scss'
import {GlobalSvgSelector} from "../GlobalSvgSelector/GlobalSvgSelector";
import {weatherDaily} from "../../store/ducks/weather/slice";

interface CardProps extends weatherDaily {
    index:number
    setPopupVisible:()=>void
    setPopupData:()=>void
}
export enum dayDict {
    'Воскресенье',
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
}
export const Card:FC<CardProps> = ({setPopupData,setPopupVisible,index,...day}: any) => {


    const thisDay = () => {
        return dayDict[new Date(day.dt * 1000).getDay()]
    }
    const getRoundedTemperature = (temp: number): string => {
        const result = Math.round(temp)
        return result >= 0 ? `+${result}` : `-${result}`
    }

    const openPopupHandler = () => {
        setPopupData(day)
        setPopupVisible(true)
    }
    return (
        <div className={style.card} onClick={openPopupHandler}>
            <div className={style.day}>{new Date(day.dt * 1000).toLocaleDateString()}</div>
            <div className={style.day_info}>{day.index === 0 ? 'Сегодня' : thisDay()}</div>
            <div className={style.icon}><GlobalSvgSelector width={50} height={50} id={day.weather[0].icon}/></div>
            <div className={style.temp_day}>Днем: {getRoundedTemperature(day.temp.day)}</div>
            <div className={style.temp_night}>Ночью: {getRoundedTemperature(day.temp.night)}</div>
            <div className={style.info}>{day.weather[0].description}</div>
        </div>
    )
}