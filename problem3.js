//Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest;

request.open("GET","https://restcountries.eu/rest/v2/all",true);

request.send();

request.onload=function(){
    try{
        var data=JSON.parse(this.response)
        data.forEach(element => {
        console.log({name:element.name,capital:element.capital,flag:element.flag})
        });
    }
    catch(err){
        console.log("err")
    }
}