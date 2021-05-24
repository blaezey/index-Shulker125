 function topFunction() {
  
  document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
  
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    
  document.getElementById("rtrntp").style.opacity = "1";
  
  else {
      document.getElementById('rtrntp').style.opacity = "0";
    }
  
  
}
