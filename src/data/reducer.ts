import {CalendarType, initialState, InitialStateType} from "./initial_state";
import {EventsType} from "./events";


export const Reducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET-STATE':
            return state
        case 'GET-EVENT' :
            let filtered = state.data.filter(f => f.index === action.payload.index)
            console.log(filtered)
            let data = {...state, currentEvent: filtered}
            return data
        case "SET-CURRENT-EVENT":
            return {...state, currentEvent: action.payload.data}
        default:
            return state
    }
}


export const getState = () => {
    return {
        type: "GET-STATE",
    } as const
}

export const getEvent = (index: number) => {
    return {
        type: "GET-EVENT",
        payload: {
            index
        }
    } as const
}

export const setCurrentEvent = (data: CalendarType[]) => {
    return {
        type: "SET-CURRENT-EVENT",
        payload: {
            data
        }
    } as const
}

export type ActionsType = GetStateType |
    GetEventType |
    SetCurrentEventType

export type GetStateType = ReturnType<typeof getState>
export type GetEventType = ReturnType<typeof getEvent>
export type SetCurrentEventType = ReturnType<typeof setCurrentEvent>