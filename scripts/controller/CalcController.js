class CalcController {

  constructor(){
    
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();

  }  

  initialize(){
    
    let displayCalcEL = document.querySelector("#display")
    let currentDateEL = document.querySelector("#data")
    let timeEL = document.querySelector("#hora")

    displayCalcEL.innerHTML = "2222"
    currentDateEL.innerHTML = "08092018"
    timeEL.innerHTML = "10:00"
  }

  get displayCalc(){
    
    return this._displayCalc;

  }

  set displayCalc(valor){

    this._displayCalc = valor;
    
  }

  get currentDate(){

    return this._currentDate;

  }

  set currentDate(valor){

    this._currentDate = valor;

  }
  
}
