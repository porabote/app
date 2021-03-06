import {SHOW_BALLOON, HIDE_BALLOON} from './balloon-types'

export function showBalloon(text)
{
    return dispatch => {
        dispatch({
            type: SHOW_BALLOON,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideBalloon())
        }, 3000)
    }
}

export function hideBalloon()
{
    return {
        type: HIDE_BALLOON
    }
}