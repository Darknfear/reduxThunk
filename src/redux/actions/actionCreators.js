import getTemp from '../../networking/gettemp'

export function startFetch(){
    return {
        type : "START_FETCH"
    }
}
export function successFetch(cityName,temp){
    return {
        type : "FETCH_SUCCESS",
        cityName,
        temp
    }
}
export function errFetch(){
    return {
        type : "FETCH_ERR"
    }
}

export function fetchDataThunk(cityName){
    return dispatch => {
        dispatch(startFetch())
        getTemp(cityName)
        .then(res => dispatch(successFetch(cityName,res)))
        .catch(err => dispatch(errFetch()));
    }
}