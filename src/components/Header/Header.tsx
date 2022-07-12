import React, {useCallback, useContext, useEffect, useState} from "react";
import style from './Header.module.scss'
import {GlobalSvgSelector} from "../GlobalSvgSelector/GlobalSvgSelector";
import {ThemeContext} from "../../context/ThemeContext";
import {useTheme} from "../../hooks/useTheme";
import {LocationService} from "../../services/location";
import {useAppDispatch, useAppSelector} from "../../store";
import {fetchWeatherThunk} from "../../store/ducks/weather/thunk";

export const Header = () => {
    const {location} = useAppSelector(state => state.weather)
    const [locationName, setLocationName] = useState('')
    const [options, setOptions] = useState([])
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const dispatch = useAppDispatch()

    const {theme, changeTheme} = useContext(ThemeContext);
    useTheme(theme);
    const changeThemeHandler = () => {
        changeTheme(theme === "light" ? "dark" : "light")
    }


    const searchLocationHandler = async () => {
        const response = await LocationService.fetchLocationByName(locationName)
        if (response) {
            setOptions(response)
        } else {
            setOptions([])
        }
        setDropdownVisible(true)
    }
    const chooseLocationHandler = useCallback((location: any) => {
        dispatch(fetchWeatherThunk(location))
        setDropdownVisible(false)
    }, [location])

    useEffect(() => {
        dispatch(fetchWeatherThunk(location))
    }, [location])

    return (
        <div className={style.header}>
            <div className={style.halfWrapper}>
                <div className={style.logo}>
                    <GlobalSvgSelector width={120} height={120} id={'header-logo'}/>
                </div>
                <div className={style.title}>React weather</div>
            </div>
            <div className={style.halfWrapper}>
                <div onClick={changeThemeHandler}
                     className={style.changeTheme}>
                    <GlobalSvgSelector width={120} height={120} id={'theme'}/>
                </div>
                <div className={style.select}>
                    <input placeholder={'Введите название города'}
                           className={style.select_input}
                           value={locationName}
                           onChange={(e) => setLocationName(e.target.value)}/>
                    {dropdownVisible && <ul className={style.select_dropdown}>
                        {options.map((el: any) =>
                            <li key={el.name + el.state} onClick={() => chooseLocationHandler(el)}>
                                <div>{el.name} </div>
                                <div>{el.state}</div>
                            </li>)}
                        <li onClick={() => setDropdownVisible(false)}><span>Закрыть</span></li>
                    </ul>}
                </div>
                <div onClick={searchLocationHandler}>
                    <GlobalSvgSelector id={'search'} width={40} height={40}/>
                </div>
            </div>
        </div>
    )
}