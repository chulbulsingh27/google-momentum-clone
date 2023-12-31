import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone';
import { Welcome, TimeStamp, Greeting } from './TimeStyles'


const Time = () => {
    let today = new Date();
    let greeting = ()=>{
        if(today.getHours()>5 && today.getHours()<11){
            return 'Good Morning, Client'
        }else if(today.getHours()>=5 && today.getHours()<17){
            return 'Good Afternoon, Client'
        }else if(today.getHours()>=17 && today.getHours()<24){
            return 'Good Evening, Client'
        }else{
            return 'What are you doing up at this hour'
        }

    }
  return (
    <Welcome>
        <TimeStamp><Moment style={{color:"green"}} format='hh:mm:ss'></Moment></TimeStamp>
        <Greeting style={{color:"white"}}>{greeting()}</Greeting>
    </Welcome>
  )
}

export default Time