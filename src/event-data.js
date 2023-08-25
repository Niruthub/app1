import React from "react";

function Table(){
    const data = [
        ['JavaScript',100],
        ['React',150],
        ['React Native',180],
        ['Node.js',200],
        ['VS Code',120]
    ]
}

export function EventData2(){
    const onClickStartStop = (ev) =>{
        let t = ev.target.innerText
        let s = (t === 'Start')?'Stop':'Start'
        ev.target.innerText = s
    }

    const onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }

    return(
        <div style={{textAlign:'center',marginTop:20}}>
            <button onClick={(ev) => onClickStartStop(ev)}>Start</button> <br/><br/>
            <button onClick={(ev) => onClickAdd(ev)}>10 + 20</button> <br/><br/>
            <button onClick={(ev) => onClickAdd(ev)}>30 * 40</button> <br/><br/>

        </div>
    )
}