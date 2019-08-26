import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "lightblue",
        alignSelf : "stretch",
        alignItems : "center",
        justifyContent : "center"
    },
    button : {
        width : 100,
        height : 40,
        backgroundColor : "red",
        borderRadius : 10,
        alignItems : "center",
        justifyContent : "center",
        padding : 10,
        margin :10
    },
    message : {
        color : "white",
        fontSize : 25
    },
    textinput : {
        padding : 10,
        margin : 10,
        borderBottomWidth : 1
    }
})

export default styles;