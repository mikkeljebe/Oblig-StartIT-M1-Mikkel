function velgStolpe(barNo){
  chosenBar == barNo 
  ? chosenBar = undefined 
  : chosenBar = barNo;
  chosenBar == undefined 
    ? enableDisableButtons = 'disabled' 
    : enableDisableButtons = '';
  show()
};

function endreStolpe() {
  inputValue > 10 || inputValue < 1 || inputValue == undefined 
    ? alert('Du må velge en verdi mellom 1 og 10') 
    : numbers[chosenBar-1] = parseInt(inputValue);
  show();
};

function fjerneStolpe(){
  numbers.splice((chosenBar-1), 1);
  chosenBar = undefined;
  enableDisableButtons = 'disabled' ;
  show();
};

function leggTilStolpe(){
  inputValue > 10 || inputValue == undefined || inputValue < 1 
    ? alert('Du må velge en verdi mellom 1 og 10. Det blir høyden på stolpen.') 
    : numbers.push(parseInt(inputValue));
  inputValue = undefined;
  show();
};