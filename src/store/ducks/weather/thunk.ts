import {addCurrent, addDaily, chooseLocation} from "./slice";
import {WeatherService} from "../../../services/weather";
import {AppDispatch} from "../../index";

export const fetchWeatherThunk = (location:any) => async (dispatch:AppDispatch) => {
    dispatch(chooseLocation(location))
    const weather = await WeatherService.fetchWeather(location.lat,location.lon)
    if(weather){
        dispatch(addDaily(weather.daily))
        dispatch(addCurrent(weather.current))
    }
}