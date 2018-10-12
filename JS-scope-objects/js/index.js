//
// // objects
// var Person = function (name, surname, age){
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.friends = ["Jenny", "Sally", "July", "Thotianna"];
//   this.sayHello = function () {
//       console.log(`Hello, my name is ` + this.name);
//   }
//   // blueprint for object sturcutre
// }
//
// var person1 = new Person("Jordan", "Smith", 29);
// console.log(person1.name);
// // information for person 1
// var person2 = new Person ("Mike", "Hutchman", 45);
// console.log(person2.age);
//
// console.log(`This persons surname is ${person1.surname}`);
//
// // extention
// function speak (person){
//   console.log (`Hey ${person.name} you turned ${person.age} today`);
//   // Interactive by saying speak (person1) information will be inputted
// }
// person1.sayHello();
//   console.log("My girlfriend is " +person1.friends[0]);


// JavaScriptObjectNotation/ JSON
// var data = {
//     class_name:"Engineering-20",
//     // object inside object
//     trainer: {
//     name: "Joe",
//     surname: "Childs"
//     },
//     lessons: [
//       // Object inside array
//     {topic: "business skills", description:"soft skills for business"},
//     {topic: "HTML", description:"structure of a webpage"}
//   ]
// }
// console.log ("Second topic and second description " + data.trainer.surname + data.lessons[1].topic + data.lessons[0].description);
// // look over


      // function rndfun() {
      //   console.log("HI!!!!!!!!!!");
      // }
      // function rnd22() {
      //   console.log("Second");
      //   rndfun();
      //   // execueting rndfun now
      //   console.log("NOw you speak");
      // }
      //
      // // setTimeout(rnd22, 3000);
      // // makes everything delated by 3 seconds
      // // setTimeout(rndfun, 3000);
      // // makes the first line delated by 3 seconds
      //
      // function exampleWithoutTime(func){
      //     func();
      //
      // }
      //
      // exampleWithoutTime(rndfun);
      //

        // function sayHI (){
        //   sayHI();
        //   console.log("HEY MATE. I TOOK A WHILE TO COME DIDNT I?");
        //
        // }
        //
        //   setTimeout(sayHI, 3000);
                  // mess around

                  // CLOSURE
          //
          // function Add(num1, num2) {
          //   return num1 + num2;
          //   var result = Add(9,10);
          // }


          // function createCounter() {
          //   var total = 0;
          //   return function (){
          //     total++;
          //     return total;
          //   }
          // }
          //
          // var counter = createCounter();
          // // every time counter is written it implements the first function.
          // for (var i = 0; i < 4; i++) {
          //   setTimeout(createCounter, 2000);
          //
          // counter();
          // // first run
          // counter();
          // // second run
          // var totalTosee = counter();
          // console.log(totalTosee);
          // }
          //
          // // counter run 3 times

          // console.log(totalTosee);




          for (var i = 1; i <= 10; i=i+1) {
            // i++ goes at the end whereas i+1 is immediate
            setTimeout((function (j) {
              // j must be looped as if it was regarded as i it would clash wih the 
              return function(){
              console.log(j);
            }
          })(i), (i*1000));
          }
