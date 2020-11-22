var request=new XMLHttpRequest;

request.open("GET","https://restcountries.eu/rest/v2/all",true);

request.send();

request.onload=function(){
    try{
        var data=JSON.parse(this.response);
        // console.log(data)
        var population=data.filter(item=>{
         if(item.population<2000000)
         return item.name

        })
        population.map(item=>{
            console.log(item.name)
        })
        



    }
    catch(err){
        console.log("err")
    }
   
}