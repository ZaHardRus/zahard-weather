import React from "react";
import {ThisDay} from "../ThisDay/ThisDay";
import style from './Popup.module.scss'
import {ThisDayInfo} from "../ThisDayInfo/ThisDayInfo";
import { GlobalSvgSelector } from "../GlobalSvgSelector/GlobalSvgSelector";

export const Popup = () => {
    return (
        <div className={style.popup}>
            <div className={style.popup_overlay}>
                <div className={style.popup_content}>
                    <ThisDay/>
                    <ThisDayInfo image={false}/>
                    <div className={style.close}>
                        <GlobalSvgSelector id={'close'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}