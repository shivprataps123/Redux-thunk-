//Write the ActionCreator functions here
import * as types from './actionType';
import axios from 'axios';

export const getDataRequest=()=>{
    return {
        type:types.GET_SHOES_DATA_REQUEST
    }
}
export const getDataSuccess=(payload)=>{
    return {
        type:types.GET_SHOES_DATA_SUCCESS,
        payload
    }
}
export const getDataFailure=()=>{
    return {
        type:types.GET_SHOES_DATA_FAILURE
    }
}

export const getShoeData=(params)=>(dispatch)=>{
    dispatch(getDataRequest());
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes`,params)
    .then((res)=>{
        console.log("data",res.data)
        dispatch(getDataSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getDataFailure());
    })
}

