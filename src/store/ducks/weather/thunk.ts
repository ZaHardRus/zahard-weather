import {addCurrent, addCurrentHourly, addDaily, chooseLocation, ILocation} from "./slice";
import {WeatherService} from "../../../services/weather";
import {AppDispatch} from "../../index";

export const fetchWeatherThunk = (location: ILocation) => async (dispatch: AppDispatch) => {
    dispatch(chooseLocation(location))
    const weather = await WeatherService.fetchWeather(location.lat, location.lon)
    if (weather) {
        dispatch(addDaily(weather.daily))
        dispatch(addCurrent(weather.current))
        dispatch(addCurrentHourly(weather.hourly))
    }
}