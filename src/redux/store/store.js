import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const defaultState = {
    cityName : null,
    temp : null,
    isLoading : false,
     err : false
};

const reducer = (state = defaultState ,action) => {
    switch(action.type){
        case "START_FETCH" : 
            return {
                cityName : null,
                temp : null,
                isLoading : true,
                err :false
            };
        case "FETCH_SUCCESS" :
            return {
                isLoading : false,
                err :false,
                cityName : action.cityName,
                temp : action.temp
            };
        case "FETCH_ERR" :
            return {
                cityName : null,
                temp : null,
                isLoading : false,
                err : true
            }        
        default : 
            break;    
    }
    return state;
};

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
export default store;