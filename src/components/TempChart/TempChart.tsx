import React, {useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useAppSelector} from "../../store";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export type IChartFlag = 'temp' | 'wind_speed' | 'pressure' | 'humidity'

export const TempChart = () => {
    const flagValueMap = {
        temp: 'Температура ( °С )',
        wind_speed: 'Скорость ветра ( м/с )',
        pressure: 'Давление ( мБар )',
        humidity: 'Влажность ( % )'
    }
    const flagList: Array<IChartFlag> = ["temp", "humidity", "pressure", "wind_speed"]
    const [flag, setFlag] = useState<IChartFlag>('temp')

    const currentTime = (timeStamp: number) => {
        const hours = new Date(timeStamp * 1000).getHours().toString().split(' ').map(el => el.length === 1 ? `0${el}` : el)
        const minutes = new Date(timeStamp * 1000).getMinutes().toString().split(' ').map(el => el.length === 1 ? `0${el}` : el)
        return `${hours}:${minutes}`
    }
    const {hourly} = useAppSelector(state => state.weather.current)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Данные на ближайшие 24 часа',
            },
        },

    };

    const labels = hourly && hourly.map((el) => currentTime(el.dt)).slice(0, 23)
    const dataList = hourly && hourly.map(el => el[flag]).slice(0, 23)

    const changeFlagHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as IChartFlag
        setFlag(value)
    }
    const data = {
        labels,
        datasets: [
            {
                label: flagValueMap[flag],
                data: dataList,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return <div>
        <select value={flag} onChange={changeFlagHandler}>
            {
                flagList.map(el => <option value={el}>{el}</option>)
            }
        </select>
        <Line options={options} data={data}/>
    </div>;
}
