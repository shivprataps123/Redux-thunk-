//Write the ActionCreator functions here
import axios from 'axios';
import * as types from './actionTypes';

const login=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST});
    return axios.post("https://reqres.in/api/login",payload)
    .then((res)=>{
        dispatch({type:types.LOGIN_SUCCESS,payload:res.data.token})
        console.log('token',res.data.token);
    })
    .catch((error)=>{
        dispatch({type:types.LOGIN_FAILURE});
        console.log("loginaction",error);
    })
}
export default login;