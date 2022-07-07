import React, {FC} from "react";
import style from './ThisDayInfo.module.scss'
import {ThisDayInfoItem} from "./ThisDayInfoItem";
import cloud from '../../assets/images/bg-cloud.png'
import {useAppSelector} from "../../store";

interface ThisDayInfoProps {
    image: boolean
}

export const ThisDayInfo: FC<ThisDayInfoProps> = ({image = true}) => {
    const current = useAppSelector(state => state.weather.current)
    const description = current && current.weather ? current?.weather[0].description : ''
    const items = [
        {
            'icon-id': 'temperature',
            name: "Температура",
            value: `${current.temp}° - ощущается как ${current.feels_like}°`
        },
        {
            'icon-id': 'pressure',
            name: "Давление",
            value: `${current.pressure} мБар`
        },
        {
            'icon-id': 'precipitation',
            name: "Осадки",
            value: `влажность : ${current.humidity}%,   ${description}`
        },
        {
            'icon-id': 'wind',
            name: "Ветер",
            value: `${current.wind_speed} м/с`
        }
    ]
    return (
        <div className={style.thisDayInfo}>
            {
                items.map(el => <React.Fragment key={el.name}><ThisDayInfoItem item={el}/></React.Fragment>)
            }
            {image && <div className={style.image}>
                <img src={cloud} alt=""/>
            </div>}
        </div>
    )
}