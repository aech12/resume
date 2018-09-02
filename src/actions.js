import { 
    CHANGE_SEARCHBAR,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';


export const setSearchbar = (text) => ({
    type: CHANGE_SEARCHBAR,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> dispatch({ 
        type: REQUEST_ROBOTS_SUCCESS, 
        payload: data}))
    .catch(error=> dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: error
    }))
}