import { REGISTER_SUCCESS, REGISTER_FAIL } from './type'
import axios from 'axios'
import {setAlert} from '../actions/alert'

//This is an action/event  to register users,it will be get dispatched to the reducer in the reducer/auth.js

export const register = ({ name, email, password }) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('api/users', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }// Next thing to do is to display the errors if the input field text was not conforming to the validation,
    //the errors at the backend which is an array of errors.So lets us import the setAlert action in the action folder
    catch (err) {
        const errors = err.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))) // so go and integrate this into the 
                                                                              //signup component
        }

        dispatch({
            type: REGISTER_FAIL,

        })

        
    }
    
}