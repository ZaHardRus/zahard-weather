import React, {useState} from "react";
import {Days} from "../../components/Days/Days";
import {Popup} from "../../components/Popup/Popup";
import {ThisDay} from "../../components/ThisDay/ThisDay";
import {ThisDayInfo} from "../../components/ThisDayInfo/ThisDayInfo";
import style from './HomePage.module.scss';
import {weatherDaily} from "../../store/ducks/weather/slice";
import { TempChart } from "../../components/TempChart/TempChart";

export const HomePage = () => {
    const [popupData, setPopupData] = useState<weatherDaily | null>(null)
    const [popupVisible, setPopupVisible] = useState<boolean>(false)

    return (
        <div className={style.homePage}>
            <div className={style.thisDayWrapper}>
                <ThisDay dailyData={null}/>
                <ThisDayInfo dailyData={null} image/>
            </div>
            <div>
                <Days setPopupVisible={setPopupVisible} setPopupData={setPopupData}/>
                <div style={{width:'75%', margin: '0 auto'}}>
                    <TempChart/>
                </div>
            </div>
            {popupVisible &&
                <Popup popupData={popupData} setPopupData={setPopupData} setPopupVisible={setPopupVisible}/>}
        </div>
    )
}