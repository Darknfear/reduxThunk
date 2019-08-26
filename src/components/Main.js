import React, { Component } from 'react';
import { View,Text,TextInput,TouchableOpacity } from 'react-native';
import styles from '../style/StyleInMain'
import getTemp from '../networking/gettemp'
import { connect } from 'react-redux'
import { startFetch,errFetch,successFetch,fetchDataThunk } from '../redux/actions/actionCreators'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            cityName : ""
        }
    }

    getWeatherMessage(){
        const { err,isLoading,temp,cityName } = this.props;
        if(isLoading) return "...Loading";
        if(err) return "Vui long nhap lai";
        if(!cityName) return "Nhap ten thanh pho cua ban";
        return `${cityName} hien tai nhiet do la ${temp}`;
    }

    getTempInVn = () =>{
        // this.props.startFetch();
        // getTemp(this.state.cityName)
        // .then(res => {
        //     if(res != "") this.props.successFetch(this.state.cityName,res)
         
        // })
        // .catch(err => this.props.errFetch())
        this.props.fetchDataThunk(this.state.cityName)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.message}>{this.getWeatherMessage()} </Text>
                <TextInput 
                    placeholder="Nhập tên thành phố"
                    placeholderTextColor="gray"
                    style={styles.textinput}
                    onChangeText={(text) => this.setState({cityName : text})}/>
                <TouchableOpacity 
                onPress={() => this.getTempInVn()}
                style={styles.button}>
                   <Text>Lấy độ C</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProps(state){
    return {
        cityName : state.cityName,
        isLoading : state.isLoading,
        temp : state.temp,
        err : state.err
    }
}
function mapDispatchToProps(dispatch){
    return {
        startFetch : () => dispatch(startFetch()),
        successFetch : (cityName,temp) => dispatch(successFetch(cityName,temp)),
        errFetch : () => dispatch(errFetch()),
        fetchDataThunk : (cityName) => dispatch(fetchDataThunk(cityName))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)