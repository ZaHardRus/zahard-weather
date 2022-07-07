import {createSlice} from "@reduxjs/toolkit";

export interface weatherDaily {
    dt: number,
    "sunrise": number,
    "sunset": number,
    "moonrise": number,
    "moonset": number,
    "moon_phase": number,
    "temp": {
        "day": number,
        "min": number,
        "max": number,
        "night": number,
        "eve": number,
        "morn": number
    },
    "feels_like": {
        "day": number,
        "night": number,
        "eve": number,
        "morn": number
    },
    "pressure": number,
    "humidity": number,
    "dew_point": number,
    "wind_speed": number,
    "wind_deg": number,
    "wind_gust": number,
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "clouds": number,
    "pop": number,
    "uvi": number
}

export interface weatherCurrent {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
}

export interface weatherState {
    location: { name: string, lon: number, lat: number , state:string },
    daily: Array<weatherDaily>
    current: weatherCurrent
}

const initialState: weatherState = {
    location: {name: "Москва", lat: 55.7504461, lon: 37.6174943, state:'Moscow'},
    current: {} as weatherCurrent,
    daily: []
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        chooseLocation(state, action: any) {
            state.location = action.payload
        },
        addDaily(state, action: any) {
            state.daily = action.payload
        },
        addCurrent(state, action: any) {
            state.current = action.payload
        }
    },
})

export const {reducer: weatherReducer} = weatherSlice
export const {chooseLocation, addDaily, addCurrent} = weatherSlice.actions