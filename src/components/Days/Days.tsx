import React from "react";
import {Card} from "./Card";
import style from './Days.module.scss'
import {Tabs} from "./Tabs";
import {useAppSelector} from "../../store";


export const Days = () => {
    const days = useAppSelector(state => state.weather.daily)
    // const days: IDay[] = [
    //     {
    //         day: 'Сегодня',
    //         day_info: '28 авг',
    //         icon_id: 'sun',
    //         temp_day: '+18',
    //         temp_night: '+15',
    //         info: 'Облачно',
    //     },
    //     {
    //         day: 'Завтра',
    //         day_info: '29 авг',
    //         icon_id: 'small_rain_sun',
    //         temp_day: '+18',
    //         temp_night: '+15',
    //         info: 'небольшой дождь и солнце',
    //     },
    //     {
    //         day: 'Ср',
    //         day_info: '30 авг',
    //         icon_id: 'small_rain',
    //         temp_day: '+18',
    //         temp_night: '+15',
    //         info: 'небольшой дождь',
    //     },
    //     {
    //         day: 'Чт',
    //         day_info: '28 авг',
    //         icon_id: 'mainly_cloudy',
    //         temp_day: '+18',
    //         temp_night: '+15',
    //         info: 'Облачно',
    //     },
    //     {
    //         day: 'Пт',
    //         day_info: '28 авг',
    //         icon_id: 'rain',
    //         temp_day: '+18',
    //         temp_night: '+15',
    //         info: 'Облачно',
    //     },
    //     {
    //         day: 'Сб',
    //         day_info: '28 авг',
    //         icon_id: 'sun',
    //         temp_day: '+18',
    //         temp_night: '+15',
    //         info: 'Облачно',
    //     },
    //     {
    //         day: 'Вс',
    //         day_info: '28 авг',
    //         icon_id: 'sun',
    //         temp_day: '+18',
    //         temp_night: '+15',
    //         info: 'Облачно',
    //     },
    // ];

    return (
        <div className={style.days}>
            <Tabs/>
            <div className={style.card_wrapper}>
                {days.map((el) => (
                    <React.Fragment key={el.dt}>
                        <Card {...el} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}