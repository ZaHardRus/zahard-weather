import axios from "axios";

export class LocationService {
    static async fetchLocationByName(inputValue: string) {
        const keywordStr = encodeURIComponent(inputValue)
        const {data} = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${keywordStr}&appid=34ab69a39c6cf4f1676d85a38e8a9948&lang=ru&limit=10`
        )
        const result = data.filter((el:any)=>el.country === "RU").map((el: any) => {
            return {name:el.name,lat: el.lat,lon: el.lon,state:el.state}
        })
        return result
    }
}