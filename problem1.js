var request= new XMLHttpRequest;

request.open("GET","https://restcountries.eu/rest/v2/all",true)

request.send();

request.onload=function(){
    try{
        var data=JSON.parse(this.response)
       var countriesFromAsia=data.filter(item=>{
        if(item.region==="Asia"){
          return item.name
      }
            
       })
       countriesFromAsia.map(item=>{
           console.log(item.name)
       })
    }
    catch(err){
        console.log("err")
    }
       
           
}

    