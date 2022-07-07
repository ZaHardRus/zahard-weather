import React from "react";
import { GlobalSvgSelector } from "../GlobalSvgSelector/GlobalSvgSelector";
import style from './ThisDay.module.scss'
import {useAppSelector} from "../../store";

export const ThisDay = () => {
    const [currentDay] = useAppSelector(state => state.weather?.daily)
    const {location,current} = useAppSelector(state => state.weather)

    const currentTemp = Math.round(current.temp)
    const icon = current && current.weather ? current?.weather[0].icon : ''

    const currentTime = (timeStamp:number) => {
        const time = `${new Date(timeStamp*1000).getHours()}:${new Date(timeStamp*1000).getMinutes()}`
        return time
    }
    return (
        <div className={style.thisDay}>
            <div className={style.topInfo}>
                <div className={style.leftSide}>
                    <div className={style.temperature}>{currentTemp || ''}°С</div>
                    <div className={style.day}>Сегодня</div>
                </div>
                <div className={style.image}>
                    {icon && <GlobalSvgSelector height={120} width={120} id={icon}/>}
                </div>
            </div>
            <div className={style.bottomInfo}>
                <div className={style.time}>Время: {currentTime(current.dt)}</div>
                <div className={style.city}>Город: {location?.name} ({location?.state})</div>
            </div>
        </div>
    )
}