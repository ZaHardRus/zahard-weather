import React from "react";
import { Days } from "../../components/Days/Days";
import { Popup } from "../../components/Popup/Popup";
import { ThisDay } from "../../components/ThisDay/ThisDay";
import { ThisDayInfo } from "../../components/ThisDayInfo/ThisDayInfo";
import style from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <div className={style.homePage}>
            <div className={style.thisDayWrapper}>
                <ThisDay/>
                <ThisDayInfo image/>
            </div>
            <div>
                <Days/>
            </div>
            {/*<Popup/>*/}
        </div>
    )
}