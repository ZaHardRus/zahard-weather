import React, {useState} from "react";
import { Days } from "../../components/Days/Days";
import { Popup } from "../../components/Popup/Popup";
import { ThisDay } from "../../components/ThisDay/ThisDay";
import { ThisDayInfo } from "../../components/ThisDayInfo/ThisDayInfo";
import style from './HomePage.module.scss';
import {useAppSelector} from "../../store";
import {weatherDaily} from "../../store/ducks/weather/slice";

export const HomePage = () => {
    const [popupData,setPopupData]=useState<weatherDaily|null>(null)
    const [popupVisible,setPopupVisible]=useState(false)
    const {daily} = useAppSelector(state => state.weather)
    return (
        <div className={style.homePage}>
            <div className={style.thisDayWrapper}>
                <ThisDay dailyData={null} />
                <ThisDayInfo dailyData={null} image/>
            </div>
            <div>
                <Days setPopupVisible={setPopupVisible} setPopupData={setPopupData}/>
            </div>
            {popupVisible && <Popup popupData={popupData} setPopupData={setPopupData} setPopupVisible={setPopupVisible}/>}
        </div>
    )
}