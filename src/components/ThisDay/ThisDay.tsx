import React, { FC } from "react";
import { GlobalSvgSelector } from "../GlobalSvgSelector/GlobalSvgSelector";
import style from './ThisDay.module.scss'
import {useAppSelector} from "../../store";
import {weatherDaily} from "../../store/ducks/weather/slice";
import {dayDict} from "../Days/Card";

interface ThisDayProps {
    dailyData:weatherDaily | null
}
export const ThisDay:FC<ThisDayProps> = ({dailyData}:any) => {

    const {location,current} = useAppSelector(state => state.weather)

    const currentTemp = Math.round(dailyData?.temp.day || current.temp)
    const icon = dailyData?.weather ? dailyData?.weather[0].icon :current.weather ? current?.weather[0].icon :''


    const currentTime = (timeStamp:number) => {
        const time = `${new Date(timeStamp*1000).getHours()}:${new Date(timeStamp*1000).getMinutes()}`
        return time
    }
    return (
        <div className={style.thisDay}>
            <div className={style.topInfo}>
                <div className={style.leftSide}>
                    <div className={style.temperature}>{currentTemp || ''}°С</div>
                    <div className={style.day}>{dayDict[new Date(dailyData?.dt*1000).getDay() || new Date(current?.dt*1000).getDay()]}</div>
                </div>
                <div className={style.image}>
                    {icon && <GlobalSvgSelector height={120} width={120} id={icon}/>}
                </div>
            </div>
            <div className={style.bottomInfo}>
                <div className={style.time}>{!dailyData && `Время: ${currentTime(current.dt)}`}</div>
                <div className={style.city}>Город: {location?.name} ({location?.state})</div>
            </div>
        </div>
    )
}