export const COUNTER_CHANGE = 'COUNTER_CHANGE'


export function changeCount(count) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}


export const ACTION_DEVIDE = 'ACTION_DEVIDE'
export function devideCount(count) {
    return {
        type: ACTION_DEVIDE,
        payload: count
    }
}