import { INCREMENT, DECREMENT } from './constant'
const initState = 100;
export default function countReducer(preState = initState, action){

    const {type, data} = action;
    console.log("run countReducer");
    switch(type){
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default :
            return preState;
    }
}