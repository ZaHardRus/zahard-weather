import React, {useContext, useEffect} from "react";
import style from './Header.module.scss'
import {GlobalSvgSelector} from "../GlobalSvgSelector/GlobalSvgSelector";
import Select, {StylesConfig} from 'react-select'
import {ThemeContext} from "../../context/ThemeContext";
import {useTheme} from "../../hooks/useTheme";

export const Header = () => {
    const {theme, changeTheme} = useContext(ThemeContext);
    useTheme(theme);

    const changeThemeHandler = () => {
        changeTheme(theme === "light" ? "dark" : "light")
    }

    const selectOptions = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    const colourStyles: StylesConfig = {
        control: (styles) => (
            {
                ...styles,
                backgroundColor: theme === "light" ? 'rgba(71,147,255,.2)' : "#4F4F4F",
                color: '#000',
                width: 200,
                height: 40,
                border: 'none',
                borderRadius: 10,
                zIndex: 100
            }
        ),
        placeholder: (styles) => ({
            ...styles,
            color: theme === "dark" ? "#fff" : ''
        }),
    }

    return (
        <div className={style.header}>
            <div className={style.halfWrapper}>
                <div className={style.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <div className={style.title}>React weather</div>
            </div>
            <div className={style.halfWrapper}>
                <div onClick={changeThemeHandler} className={style.changeTheme}><GlobalSvgSelector id={'theme'}/></div>
                <Select options={selectOptions} styles={colourStyles}/>
            </div>

        </div>
    )
}