import { useEffect, useState } from "react"
import "./CountDown.css"



export const CountDown  = ()=>{

    const [second,setSecond] = useState(59);
    const [minute,setMinute] = useState(1);
    
    var timer;
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer =setInterval(()=>{
            setSecond(second-1);
            if(second===0){
               setMinute(minute-1);
               setSecond(59);
            };
            if(minute===0 && second===0){
                setMinute(4);
                setSecond(59)
            }
        },1000);
   
        return()=>clearInterval(timer)

        
    });


    const restart =()=>{
        setMinute(0);
        setSecond(0)
    };

    const stop =()=>{
        clearInterval(timer)
    }
    const start  = ()=>{
        setSecond(second-1)
    }

    return(
        <div className="showtimerdiv">
         <p className="showtimer">{minute<10 ?"0"+minute:minute}:{second<10?"0"+second:second}</p>
         <button className="button-21" onClick={restart}>Restart</button>
         <button className="button-21" onClick={stop}>Stop</button>
         <button className="button-21" onClick={start}>Start</button>
        </div>
    )
}