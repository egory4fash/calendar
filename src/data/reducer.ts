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
            let filtered = state.filter ( f => f.index === action.payload.index)
            console.log(filtered)
            return state


        default:
            return state
    }
}





export type ActionsType = GetStateType |
    GetEventType

export type GetStateType = ReturnType<typeof getState>
export type GetEventType = ReturnType<typeof getEvent>

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