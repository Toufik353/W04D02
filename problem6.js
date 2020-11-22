// Print the country which use US Dollars as currency.

var request=new XMLHttpRequest;

request.open("GET","https://restcountries.eu/rest/v2/all",true);

request.send();

request.onload=function(){
    try{
        var data=JSON.parse(this.response);
        // data.map(item=>{
        //     console.log(item.currencies[0].symbol)

        // })
        var filteredData=data.filter(item=>{
            return item.currencies[0].symbol==='$'
        })
        filteredData.map(item=>{
            console.log(item.name)

        })
    }
    catch(err){
        console.log("err")
    }
}
