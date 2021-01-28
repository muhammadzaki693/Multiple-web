var hits = 0;
function addhit(){
  hits = hits + 1;
  document.getElementsByTagName("p")[0].innerText = hits;
}

function resethit(){
  hits = 0;
  document.getElementsByTagName("p")[0].innerText = hits;
}

document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    addhit();
  }
};