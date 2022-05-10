import { useEffect, useState } from "react"
import "./Time.css"



export const Time  = ()=>{


    const [second,setSecond] =useState(0);
    const [minute,setMinute] =   useState(0);

    var timer ;
    useEffect(()=>{
     // eslint-disable-next-line react-hooks/exhaustive-deps
     timer =setInterval(()=>{
         setSecond(second+1);
         if(second===59){
            setMinute(minute+1);
            setSecond(0);
         };
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
        setSecond(second+1)
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