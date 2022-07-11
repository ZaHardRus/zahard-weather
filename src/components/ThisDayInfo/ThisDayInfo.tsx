import React, {FC} from "react";
import style from './ThisDayInfo.module.scss'
import {ThisDayInfoItem} from "./ThisDayInfoItem";
import cloud from '../../assets/images/bg-cloud.png'
import {useAppSelector} from "../../store";
import {weatherDaily} from "../../store/ducks/weather/slice";

interface ThisDayInfoProps {
    image: boolean
    dailyData:weatherDaily | null
}

export const ThisDayInfo: FC<ThisDayInfoProps> = ({dailyData,image = true}) => {
    const current = useAppSelector(state => state.weather.current)
    const description = current && current.weather ? current?.weather[0].description : ''

    const items = [
        {
            'icon-id': 'temperature',
            name: "Температура",
            value: `${dailyData?.temp.eve || current.temp}° - ощущается как ${dailyData?.feels_like.eve || current.feels_like}°`
        },
        {
            'icon-id': 'pressure',
            name: "Давление",
            value: `${dailyData?.pressure ||current.pressure} мБар`
        },
        {
            'icon-id': 'precipitation',
            name: "Осадки",
            value: `влажность : ${dailyData?.humidity || current.humidity}%,   ${dailyData?.weather[0].description ||description}`
        },
        {
            'icon-id': 'wind',
            name: "Ветер",
            value: `${dailyData?.wind_speed || current.wind_speed} м/с`
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