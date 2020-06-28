
//global variables
var cl=0;
var x=document.forms[0];  //
var arr=[];
var  inv;
var setstatues=0;
var n=0;  //number of places wich dont have bomb;
window.oncontextmenu=(e)=>{
    e.preventDefault ();}
//-------------------------------------------------------
function index(el) {
    return [...el.parentElement.children].indexOf(el);
  }
function back(i){
    if(i<100 && i>-1){
        x[i].style.backgroundImage="none";
    if(x[i].value==0 && x[i].style.color!="green"){
        x[i].style.color="green";
        x[i].style.backgroundColor ="rgb(225,225,225)";
        x[i].disabled="disabled";
        n++;
        x[i].style.backgroundImage="none";
        
 }
    else if(x[i].value!=0 && x[i].value!=-1 && x[i].style.color!="green" && x[i].style.color!="red"){//not bomb and zero and not clicked 
    x[i].style.color="green";
    x[i].style.backgroundColor ="rgb(227,182,181)";
    x[i].disabled="disabled";
    n++;
    
    return ;
 }
else
return;
}

if((i+1)<100 && (i+1)%10!=0){
back(i+1); 
}
if((i+10)<100){
back(i+10);
}
if((i-1)>-1 && (i-1)%10!=9)
back(i-1);
if((i-10)>-1)
back(i-10);

}

let nobombs=15;



function check2(y){
 
    if(arr.indexOf(y)!=-1){
       y.style.background="rgb(59, 68, 131)";
       nobombs++;
       document.getElementById('g').innerHTML=nobombs;
   
    }
    else{
        
        nobombs--;
       document.getElementById('g').innerHTML=nobombs;
        y.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjRgZglng6AhPgSCiAdp9XXvk6cJzsPRcvXmbQx-0&usqp=CAU')";
      
        arr.push(y); }
   }
   


function check(y){

    if(arr.indexOf(y)!=-1){
        y.style.background="none";
        nobombs++;
       document.getElementById('g').innerHTML=nobombs;
            
    }
    
    if(y.value==-1){
          
        y.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCTF3Rja6cmMmF2Csv0gxNR_PRIkNjrZUNFeuZre8&usqp=CAU')";
        //y.style.color="black";
        document.getElementById("gameover").innerHTML="Game Over";
       
  
        for(var i=0;i<100;i++){
            x[i].disabled="disabled";
                if(x[i].value==-1&&x[i].value!="xx"){
                    x[i].style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCTF3Rja6cmMmF2Csv0gxNR_PRIkNjrZUNFeuZre8&usqp=CAU')";
                    
                }
        }
        clearInterval(inv);
    }
    else if(y.value==0){
        back(index(y));
        if(n==85){document.getElementById("gameover").innerHTML=" You win";
        clearInterval(inv);}

    }
    else{
        y.style.color="rgb(252,114,51)";
       y.style.backgroundColor ="rgb(227,182,181)";
        y.disabled="disabled";
        n++;
        if(n==85){document.getElementById("gameover").innerHTML=" You win";
        clearInterval(inv);
    }
    }
    
}



//add feilds

for(let i=0;i<100;i++){
var btn;
btn=(document.createElement("input"));
btn.type="button";
btn.value=0;
btn.oncontextmenu=function(){
  // xx(1);
    check2(this);
}
btn.onclick=function(){
    if(n==0){
    xx(-1);
n=1}
    check(this);
}
x.appendChild(btn);
}
/********************************/
//bombs places

for(let ii=0;ii<15;ii++){
var rand=Math.floor(Math.random()*100);


if(x[rand].value!=-1){
x[rand].value=-1;
if(rand-1>-1){
    if(x[rand-1].value!=-1 && (rand-1)%10<9)
        x[rand-1].value++;}
if(rand+1<100)
    if(x[rand+1].value!=-1 && (rand+1)%10>0 )
        x[rand+1].value++;
if(rand-9>-1)
    if(x[rand-9].value!=-1 && Math.floor((rand-9)/10)==Math.floor((rand/10 - 1)))
        x[rand-9].value++;
if(rand-10>-1)
    {if(x[rand-10].value!=-1)
        x[rand-10].value++;}

if(rand-11>-1 && Math.floor((rand-11)/10)==Math.floor((rand/10 - 1)))
    if(x[rand-11].value!=-1 )
        x[rand-11].value++;
if(rand+10<100)
    {if(x[rand+10].value!=-1)
        x[rand+10].value++;}
if(rand+9<100 && Math.floor((rand+9)/10)==Math.floor(rand/10 + 1))
    if(x[rand+9].value!=-1 )
        x[rand+9].value++;
if(rand+11<100 && Math.floor((rand+11)/10)==Math.floor((rand/10 + 1) ))
    if(x[rand+11].value!=-1)
        x[rand+11].value++;

}
else{ii--}

}

function newgame(){
    window.location.reload(false); }
var v=0;


  
var v;
    
    function xx(setstatues){
              
        if(setstatues==-1){
           inv= setInterval(function(){
                  v++;
        document.getElementById("value").innerHTML=v;
            }
                ,1000);
      }

 



}