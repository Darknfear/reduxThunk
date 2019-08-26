import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Main from './components/Main'
import store from './redux/store/store'

export default class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <Provider store={store}>
               <Main />
           </Provider>
        );
    }
}