



var n= Math.random();
n=n*6;
n=Math.floor(n);
var m= Math.random();
   m=m*3;
   m=Math.floor(m);
 

   
 
var colors= [];
for (var i = 0; i < 6; i++) {
    colors.push((getRandomRgb()));
    
  }



  var square =document.querySelectorAll(".square");
  var pickedcolor=colors[n];
  var colordisplay=document.getElementById("colordisplay");
  var messagedisplay=document.getElementById("message");
  
  colordisplay.textContent=pickedcolor;//for picked the h1 and change
  
  for(var i=0;i<square.length;i++)
  {
      var clickcolor;
      //for initial colour to the boxes
      square[i].style.background=colors[i];
      //add event lisner to the boxes
      square[i].addEventListener("click", function(){
          //grab the color the clicked square
           clickcolor=this.style.background;
          if(clickcolor===pickedcolor)
          {
            messagedisplay.textContent="Correct";
            document.getElementById("gg").style.backgroundColor=pickedcolor;
            document.getElementById("reseteasy").innerHTML="Play Again??"
            document.getElementById("resethard").innerHTML="Play Again??"
              changecolor(clickcolor);
        
          }
          else
          {
              this.style.background="black";
              messagedisplay.textContent="Try again";
             
              
          }
  
      });
  
  }
function changecolor(color)
{
    //all box are in same whem in corect
    for(var i=0;i<square.length;i++)
    {
        square[i].style.background=color;
    }
}




function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  





  easybtn.addEventListener("click", function(){
  funeasy();

    });

function funeasy(){
    easybtn.classList.add("selected");
    hard.classList.remove("selected");      
    var g= Math.random();
    g=g*3;
    g=Math.floor(g);
    messagedisplay.textContent=" ";
    for(var i=0;i< square.length;i++ ){
        colors.pop(colors[i]);
    }
  for (var i = 0; i < 3; i++) {
      colors.push((getRandomRgb()));
      
    }
    pickedcolor=colors[g];
    colordisplay.textContent=pickedcolor;
    for(var i=0;i< square.length;i++){
        if(colors[i]){
            square[i].style.background = colors[i];
        }
        else{
            square[i].style.display ="none";
        }
    }
    
    document.getElementById('reseteasy').style.opacity=1;
    document.getElementById('resethard').style.opacity=0;
    document.getElementById("gg").style.backgroundColor="";
    
 
}


hard.addEventListener("click", function(){
 
    funhard();
   
   });

function funhard(){
    easybtn.classList.remove("selected");
    hard.classList.add("selected"); 
    var k= Math.random();
    k=k*6;
    k=Math.floor(k);
    messagedisplay.textContent=" ";
    for(var i=0;i< square.length;i++ ){
        colors.pop(colors[i]);
    }
    
  for (var i = 0; i < 6; i++) {
      colors.push((getRandomRgb()));
      
    }
    pickedcolor=colors[k];
    colordisplay.textContent=pickedcolor;
   
    for(var i=0;i< square.length;i++){
        square[i].style.background=colors[i];
        square[i].style.display ="block";
        
    }
    
    document.getElementById('resethard').style.opacity=1;
    document.getElementById('reseteasy').style.opacity=0;
    document.getElementById("gg").style.backgroundColor="";

}


reseteasy.addEventListener("click", function(){
    document.getElementById("gg").style.backgroundColor="";
    document.getElementById("reseteasy").innerHTML="New Color";
    
    
    funeasy();

   
   });


   resethard.addEventListener("click", function(){
    document.getElementById("gg").style.backgroundColor="";
    document.getElementById("resethard").innerHTML="New Color";
    funhard();
   
   });

