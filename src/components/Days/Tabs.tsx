import React from "react";
import style from './Days.module.scss'

export const Tabs = () => {
    const tabs = [
        {value: 'На неделю'},
        {value: 'На 10 дней'},
        {value: 'На месяц'},
    ]
    return (
        <div className={style.tabs}>
            <div className={style.tabs_wrapper}>
                {tabs.map(el =>
                    <div key={el.value} className={style.tab_item}>
                        {el.value}
                    </div>
                )}
            </div>
            <div className={style.tab_item}>
                Отменить
            </div>
        </div>
    )
}