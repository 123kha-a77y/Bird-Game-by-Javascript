function des(){
    // 'use strict';
    document.getElementById('shot').play();
    document.getElementById('duck1').style.display="none";
}
function des1(){
    // 'use strict';
    document.getElementById('shot').play();
    document.getElementById('duck2').style.display="none";
}
function des2(){
    // 'use strict';
    document.getElementById('shot').play();
    document.getElementById('duck3').style.display="none";
}
function des3(){
    // 'use strict';
    document.getElementById('shot').play();
    document.getElementById('duck4').style.display="none";
}
function lose(){
    document.getElementById('shot').play();
     
     if(document.getElementById('duck1').style.display=="none" 
     && 
     document.getElementById('duck2').style.display=="none" 
     && 
     document.getElementById('duck3').style.display=="none" 
     &&
     document.getElementById('duck4').style.display=="none"){
         
         document.getElementById('a1').style.display = "inline-block";
         document.getElementById('a1').innerHTML ="You win the Game";
     }
} 