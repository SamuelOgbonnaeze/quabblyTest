import uuid from 'uuid' // unique unviersal id - for generating auto-increment id
import { SET_ALERT, REMOVE_ALERT } from './type';


export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }// we are dispatching this action to the reducer
    });
    setTimeout(() => dispatch({  // and setting timeout for the alert component to expire after setting alert
        type: REMOVE_ALERT,
        payload: id
    }), 5000)
}