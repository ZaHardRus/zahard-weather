import React from "react";
import {Card} from "./Card";
import style from './Days.module.scss'
import {useAppSelector} from "../../store";


export const Days = ({setPopupVisible,setPopupData}:any) => {
    const days = useAppSelector(state => state.weather.daily)

    return (
        <div className={style.days}>
            {/*<Tabs/>*/}
            <div className={style.card_wrapper}>
                {days.map((el, index) => (
                    <React.Fragment key={el.dt}>
                        <Card setPopupVisible={setPopupVisible} setPopupData={setPopupData} index={index} {...el} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}