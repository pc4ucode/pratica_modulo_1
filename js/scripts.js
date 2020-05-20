window.addEventListener('load', function () {

    let rgbRed = document.querySelector('#rgbRed');
    let rgbGreen = document.querySelector('#rgbGreen');
    let rgbBlue = document.querySelector('#rgbBlue');
    let colorDiv = document.querySelector('#colorBox');
  
    rgbRed.addEventListener('input',mudarValor);
    rgbGreen.addEventListener('input',mudarValor);
    rgbBlue.addEventListener('input',mudarValor);
  
    rgbRed.value = 0;
    document.querySelector('#'+rgbRed.getAttribute('data-target')).value = 0;
    
    rgbGreen.value = 0;
    document.querySelector('#'+rgbGreen.getAttribute('data-target')).value = 0;
    
    rgbBlue.value = 0;
    document.querySelector('#'+rgbBlue.getAttribute('data-target')).value = 0;
  
    mudarCor();
  
    function mudarValor(target){
      let inputObj = document.querySelector('#'+this.getAttribute('data-target'));
      inputObj.value = this.value;
      mudarCor();
    }
  
    function mudarCor(){
      let rgb = "rgb(" + rgbRed.value + "," + rgbGreen.value + "," + rgbBlue.value + ")"; 
      
      colorDiv.style.backgroundColor = rgb;
    }
  
  });