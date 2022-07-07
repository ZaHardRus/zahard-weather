import axios from "axios";

export class WeatherService {
    static async fetchWeather(lat:number,lon:number) {
        const {data} = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=34ab69a39c6cf4f1676d85a38e8a9948&lang=ru&units=metric`
        )
        return data
    }
}