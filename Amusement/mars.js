function scrollFunction() {
  
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
    
  
  document.getElementById('book').style.opacity = '1';
  else {
      document.getElementById('book').style.opacity ='0';
    }
}
  
  window.onscroll = function() {scrollFunction()};

