import React, { useState, useEffect, useRef } from 'react';

import SecondsCounter from './SecondsCounter';
import Icon from './Icon';

const App = () => {
    const [time, setTime] = useState({ counter: 0 })
    const [isPaused, setIsPaused] = useState(false);
    const [alarm, setAlarm] = useState({ isBoxHide: true, isActive: false, seconds: null })

    const inputRef = useRef();

    useEffect(() => {
        let counterInterval;

        if (!isPaused) {
            counterInterval = setInterval(() => {

                if (alarm.isActive && time.counter == alarm.seconds) {
                    alert("Ding!");
                    setAlarm({ isBoxHide: true, isActive: false, seconds: null })
                }

                setTime(prevState => ({ counter: prevState.counter + 1 }))
            }, 1000)
        }

        return () => clearInterval(counterInterval);
    }, [isPaused, time]);

    function addAlarm() {
        if (!inputRef.current.value) {
            alert("Debe ingresar un número de segundos...")
            return;
        }

        setAlarm({ isBoxHide: true, isActive: true, seconds: inputRef.current.value });
        inputRef.current.value = "";

        alert("Se agregó una alarma...");
    }
    
    return (
        <SecondsCounter seconds={time.counter}>
            <div className="actions">
                <button onClick={() => setTime({ counter: 0 })}>
                    <Icon name="redo-alt" />
                </button>
                <button onClick={() => setIsPaused(!isPaused)}>
                    {isPaused ? <Icon name="play-circle" /> : <Icon name="pause-circle" /> }
                </button>
                <button onClick={() => 
                    {!alarm.isBoxHide && inputRef.current.value ? addAlarm() : setAlarm({ isBoxHide: !alarm.isBoxHide })}
                }>
                    <Icon name="alarm-plus" />
                </button>
            </div>
            {!alarm.isBoxHide &&
                <div className="alarm">
                    <input ref={inputRef} type="number" placeholder="Segundos..." />
                </div>
            }
        </SecondsCounter>
    )

}

export default App;