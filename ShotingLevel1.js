function des(){
    // 'use strict';
    document.getElementById('shot').play();
    document.getElementById('duck1').style.display="none";
    // *********************
      if(document.getElementById('duck1').style.display==="none"){
    
          document.getElementById('a').style.display="inline-block";
          document.getElementById('a').innerHTML = "Go To Level 2";
      }
}
function lose(){
    document.getElementById('shot').play();
     if(document.getElementById('duck1').style.display!=="none"){
         alert("you lose");
     }
}