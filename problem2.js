var request=new XMLHttpRequest;

request.open("GET","",true);

request.send();

request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data)
}