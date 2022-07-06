import style from "./ThisDayInfo.module.scss";
import {GlobalSvgSelector} from "../GlobalSvgSelector/GlobalSvgSelector";
import React from "react";


interface ThisDayInfoItemProps {
    item: {
        'icon-id': string,
        name: string,
        value: string
    }
}

export const ThisDayInfoItem: React.FC<ThisDayInfoItemProps> = ({item}) => {
    return (
        <div className={style.info__item}>
            <div className={style.icon}><GlobalSvgSelector id={item["icon-id"]}/></div>
            <div className={style.title}>{item.name}</div>
            <div className={style.description}>{item.value}</div>
        </div>
    )
}