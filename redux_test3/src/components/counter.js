import React, { Component, useState } from 'react'
import store from '../redux/store'
import {createIncreamentAction, createDecreamentAction} from '../redux/count_action'

export default function Counter() {
    const [selectNumber, setSelectNumber] = useState(1);
    const increment = ()=>{
       const {value} = selectNumber
        console.log("click increase");
        store.dispatch(createIncreamentAction(value*1))
    }

    const  decrement = ()=>{
        const {value} = selectNumber
        store.dispatch(createDecreamentAction(value*1))
    }
    
    return (
        <div>
             <h3>current sum value is: {store.getState()}</h3>
             <select ref={c=>setSelectNumber(c)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
             <button onClick={increment}>+</button>
        </div>
    )
}