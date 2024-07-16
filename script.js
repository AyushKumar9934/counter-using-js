let data=0;
let ele=document.getElementById("value");
ele.innerHTML=` ${data}`


function Increment(){
   
    data++;
    ele.innerHTML=` ${data}`
   
    document.querySelector(".error").style.display="none";
    document.querySelector(".clear").style.display="inline-block";

}
function Decrement(){
    data--;
    if(data==0){
        document.querySelector(".clear").style.display="none";
    }
    else if(data<0){
        data=0;
        
        document.querySelector(".error").style.display="block";
        document.querySelector(".clear").style.display="none";
    }
    else {

        document.querySelector(".clear").style.display="inline-block";
      

    }
    
   
        ele.innerHTML=` ${data}`



}
function Clear(){
   
    data=0;
     ele.innerHTML=` ${data}`
    document.querySelector(".error").style.display="none";
    document.querySelector(".clear").style.display="none";
}
