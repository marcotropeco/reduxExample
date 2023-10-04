
import axios from 'axios'

export function addTask(newTask) {
    return {
      type: 'ADD_TASK',
      newTask
    }
}

export const getUsers = () => async dispatch => {
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch({
            type: 'GET_USERS',
            payload: res.data
        })
    }
    catch(error){
        dispatch({
            type: 'USERS_ERROR',
            payload: error
        })
    }
}