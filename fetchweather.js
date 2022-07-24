import axios from "axios";

const API_KEY='335daef954f70f5dd21728713cccb652';
const URL='https://api.openweathermap.org/data/2.5/weather?lat=';


export const fetchWeather = async (query)=>{
    const {data} =await axios.get(URL,{
         
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    })
    return data;
}
