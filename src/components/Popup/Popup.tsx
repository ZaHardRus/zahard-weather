import React, {FC} from "react";
import {ThisDay} from "../ThisDay/ThisDay";
import style from './Popup.module.scss'
import {ThisDayInfo} from "../ThisDayInfo/ThisDayInfo";
import { GlobalSvgSelector } from "../GlobalSvgSelector/GlobalSvgSelector";
import {weatherDaily} from "../../store/ducks/weather/slice";

interface PopupProps {
    setPopupVisible:(flag:boolean)=>void
    setPopupData:(data:weatherDaily | null)=>void
    popupData:weatherDaily | null
}
export const Popup:FC<PopupProps> = ({setPopupVisible,setPopupData,popupData}) => {
    const closePopupHandler = () => {
        setPopupData(null)
        setPopupVisible(false)
    }

    return (
        <div className={style.popup}>
            <div className={style.popup_overlay}>
                <div className={style.popup_content}>
                    <ThisDay dailyData={popupData}/>
                    <ThisDayInfo dailyData={popupData} image={false}/>
                    <div className={style.close} onClick={closePopupHandler}>
                        <GlobalSvgSelector width={50} height={50} id={'close'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}