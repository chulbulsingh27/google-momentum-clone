import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {WeatherContainer, Temp, City} from './WeatherStyles'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=imperial&appid=fdb82e3e92294e4d37ff512bc9ea9c48'

const Weather = () => {
    const [data, setData] = useState(0);
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error);
        })

    }, [])
    // console.log(data);
    if (!data) return null;
    return (
        <WeatherContainer>
            <Temp style={{color:"white"}}>{data.main.temp.toFixed(0)}&#176;</Temp>
            <City style={{color:"white"}}>Delhi, INDIA</City>

        </WeatherContainer>
    )
}

export default Weather