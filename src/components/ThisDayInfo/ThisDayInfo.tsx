import React, {FC} from "react";
import style from './ThisDayInfo.module.scss'
import {ThisDayInfoItem} from "./ThisDayInfoItem";
import cloud from '../../assets/images/bg-cloud.png'

interface ThisDayInfoProps{
    image:boolean
}
export const ThisDayInfo:FC<ThisDayInfoProps> = ({image=true}) => {
    const items = [
        {
            'icon-id': 'temperature',
            name: "Температура",
            value: '20° - ощущается как 17°'
        },
        {
            'icon-id': 'pressure',
            name: "Давление",
            value: '765 мм ртутного столба - нормальное°'
        },
        {
            'icon-id': 'precipitation',
            name: "Осадки",
            value: 'Без осадков°'
        },
        {
            'icon-id': 'wind',
            name: "Ветер",
            value: '3 м/с юго-запад - легкий ветер'
        }
    ]
    console.log(image)
    return (
        <div className={style.thisDayInfo}>
            {
                items.map(el => <ThisDayInfoItem item={el}/>)
            }
            {image && <div className={style.image}>
                <img src={cloud} alt=""/>
            </div>}
        </div>
    )
}