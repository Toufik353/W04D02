//Print the total population of countries in Asia continent using reduce and filter function

var request=new XMLHttpRequest;

request.open("GET","https://restcountries.eu/rest/v2/all",true);

request.send();

request.onload=function(){
    try{
        var data=JSON.parse(this.response);
        var asianCountries=data.filter(item=>{
            return item.region==="Asia";
        })
        var populationByReduceMethod=asianCountries.reduce((acc,item)=>{
            
                return acc+item.population
            
        },0)
        console.log(populationByReduceMethod)
    }
    catch(err){
        console.log("err")
    }
}