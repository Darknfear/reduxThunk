const uri = "http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q=";

async function getTemp (cityName){
    try {
        let respone = await fetch(uri+cityName)
        let responeJSON = await respone.json();
        let responeLIST = await responeJSON.list[0];
        let responeMAIN = await responeLIST.main;
        return responeMAIN.temp;
    } catch (error) {
        console.log("err : "+error)
        this.props.dispatch({
            type : "FETCH_ERR"
        })
    }
}
export default getTemp