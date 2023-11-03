import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';
export default function App() {
    const [ticks, setTicks] = useState(0);

    const [time, setTime] = useState(new Date);

    console.log(time.getHours());
    useEffect(() => {
        setInterval(() => {
            /* 시간 */
            setTicks(ticks+1);
            setTime(new Date());
        }, 1000);
    }, []);

    return (
        <>
            <span>{ticks}</span>
            <Clock
                message={`ex04: ticks ${ticks}`}
                hours={time.getHours()}
                minutes={time.getMinutes()}
                seconds={time.getSeconds()}/>
        </>        
    );
}