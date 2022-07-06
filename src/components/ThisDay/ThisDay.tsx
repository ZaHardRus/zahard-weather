import React from "react";
import { GlobalSvgSelector } from "../GlobalSvgSelector/GlobalSvgSelector";
import style from './ThisDay.module.scss'

export const ThisDay = () => {
    return (
        <div className={style.thisDay}>
            <div className={style.topInfo}>
                <div className={style.leftSide}>
                    <div className={style.temperature}>20°</div>
                    <div className={style.day}>Сегодня</div>
                </div>
                <div className={style.image}>
                    <GlobalSvgSelector id={'sun'} />
                </div>
            </div>
            <div className={style.bottomInfo}>
                <div className={style.time}>Время: 21:54</div>
                <div className={style.city}>Город: Санкт-Петербург</div>
            </div>
        </div>
    )
}