import {CalendarType, initialState, InitialStateType} from "./initial_state";
import {EventsType} from "./events";


export const Reducer = (state:InitialStateType = initialState,action:ActionsType):InitialStateType => {
    switch (action.type) {
        case 'GET-STATE':
            return state
        case 'GET-EVENT' :
            // let newState = structuredClone(state)
            // console.log(newState)
            // // return newState
// alert('asdasda')
            console.log(action.payload.index)
            let filtered = state.data.filter ( f => f.index === action.payload.index)
            console.log(filtered)
let smth = {...state,currentEvent:filtered[0].description}
            // console.log(smth)
            return smth
        case "SET-CURRENT-EVENT":
            return {...state,currentEvent:action.payload.text}
        default:
            return state
    }
}


export const getState = () => {
    return {
        type: "GET-STATE",
    } as const
}

export const getEvent = (index:number) => {
    return {
        type: "GET-EVENT",
        payload: {
            index
        }
    } as const
}

export const setCurrentEvent = (text:string) => {
    return {
        type: "SET-CURRENT-EVENT",
        payload: {
            text
        }
    } as const
}

export type ActionsType = GetStateType |
    GetEventType |
    SetCurrentEventType

export type GetStateType = ReturnType<typeof getState>
export type GetEventType = ReturnType<typeof getEvent>
export type SetCurrentEventType = ReturnType<typeof setCurrentEvent>