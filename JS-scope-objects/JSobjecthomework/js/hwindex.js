// var num1 =parseInt( prompt("What is your first number"));
// var num2 = parseInt( prompt("What is your second number"));
//  var operations = prompt("what operation would you like to make");
//
// operationarray = [+,-,*,/, ];
//  if (operations == Add) {
//    addanswer = num1 operationarray[0] num2;
// console.log
//  }
//
//
// function (){
// var num1
//
// var num2
    // Method 2
//     var calculation = function (num1, num2, operation,){
//       this.num1 = num1;
//       this.num2 = num2;
//       this.operation = [+num2 ,-num2];
//
//       // num1 = parseInt(prompt("what is your first number"));
//       // i = parseInt(prompt("which operation would you like to use"));
//       // num2 = parseInt(prompt("What is your second number"));
//       //
//       // return console.log(num1, calculation.operation[i]);
//       // };
//       //
//       // calculation ();
//
// console.log(calculation.operations[i]);
// method 3


    // var calcuations {
    // }
    //   switch (expression) {
    //     case expression:
    //
    //       break;
    //     default:
    //
    //   }

    // if addd {
    //
    // num1 +num2 = addanswer;
    //
    // console.log(addanswer);
    //
    // }
// Based on ALinas solution
    function calculation (num1, num2){

      var num1 = parseInt( prompt ('What is your first number'));
      var num2 = parseInt( prompt ('What is your second number? Put any number if you would like to use Square or Square Root'));
      var operation1 = parseInt (prompt( 'What operation would you like? + , - , / , * , Sqr, '));
      switch (calculation) {

      case (operation1 == "+"):

      numAns = num1 + num2 ;

//
  return console.log(numAns);

  case (operation1 == '-'):
    numAns = num1 - num2;

    return console.log(numAns);
//     break;
  case (operation1 == '*'):
    numAns = num1 * num2;

    return console.log(numAns);

    case ( operation1 == '/'):
      numAns = num1 / num2;


  return console.log(numAns);


      case ( operation1 == 'Square'):
        numAns = num1 * num1;


    return console.log(numAns);
      case (operation1 == 'Square Root' ):
      numAns = Math.sqrt(num1);

      return console.log(numAns);
      default:

    return console.log('Sorry there was an error. Refresh the page');
// }


  }

}
calculation();
