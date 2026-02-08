// hello its 29s od DEY and i start learning js and there is my explain:

//you can uncomment everyday codes to see the resault of them

/*start 29Dey
// initailing  the variables wisth keywors(Var) for everyone
let number = 5;
console.log("number : " + number); //number: 5

let name = "amin";
console.log("im " + name); //im amin
//using operators
let s = number + 20;
console.log(s); //25  //5+20=25

let SecondNumber = 5;
let SecondStringNumber = "5";
console.log(5 == SecondNumber); //true 5 == 5
console.log(5 == SecondStringNumber); //true 5 == "5"
console.log(5 === SecondStringNumber); //false 5 !== "5"

//function
//simple void function
function sum(a, b) {
  console.log(a + b);
}
sum(3, 6); //9

//simple return function
function sumReturn(a, b) {
  return a + b;
}
console.log(sumReturn(3, 7)); //10

//local and global variables
let num = 13;
function say() {
    num=14;
  console.log(num);
}
console.log(num);//13
say();14 //num=>14
console.log(num); 14

finish 29Dey
*/

/* Start 30 Dey

//if and else conditions
let age = 12;

if (age < 18) {
  console.log("you are teen");
} else if (age === 18) {
  console.log("welcome to older people "); //this one is working
} else {
  console.log("you are old !!!");
}

//switch

//simple switch

let date = "Friday";
switch (date) {
  case "Saturday":
    console.log("it is Saturday");
    break;
  case "Sunday":
    console.log("it is Sunday");
    break;
  case "Monday":
    console.log("it is Monday");
    break;
  default:
    console.log("its nearby weekend"); //=>this work
}

//conditional switch

switch (true) {
  case age < 18:
    console.log("you are teen ");
    break;
  case 18:
    console.log("welcome to older people");
    break;
  default:
    console.log("you are old !!");
}

//lists

let lst = [0, 1, 2];
console.log(lst); // [ 1, 2, 3 ]
console.log(lst[0]); //0
lst[0] = "hi zero";
console.log(lst[0]); //hi zero
lst[6] = true;
console.log(lst); //[ 'hi zero', 1, 2, <3 empty items>, true ]
console.log(lst[4]); //undifined
console.log(lst[6]); //true
console.log(lst.length); //7
lst.forEach(function (item) {
  console.log(" : " + item); //=> :hi zero   :1   :2 :true
});
lst.push("new ");
console.log(lst); //[ 'hi zero', 1, 2, <3 empty items>, true, 'new ' ]
lst.pop();
lst.pop();
console.log(lst); //[ 'hi zero', 1, 2, <3 empty items> ]
lst.shift();
console.log(lst); //[ 1, 2, <3 empty items> ]
lst.unshift("new for first ");
console.log(lst); //[ 'new for first ', 1, 2, <3 empty items> ]
console.log(lst.indexOf(2)); //2
console.log(lst.indexOf(100)); //-1
console.log(lst.slice(2, 5)); // [ 2, <2 empty items> ]
console.log(lst); //[ 'new for first ', 1, 2, <3 empty items> ]
lst = lst.slice(2, 5); //list change
console.log(lst); //[ 2, <2 empty items> ]
lst.pop();
lst.pop();
lst.push(3, 4, 5, 6);
console.log(lst); // [ 2, 3, 4, 5 ,6 ]
console.log(lst.join("_")); //2_3_4_5_6
let lst_2 = [7, 10, 1, 8];
console.log(lst.concat(lst_2)); //[2,3,4,5,6,7,10,1,8]
console.log(lst_2.reverse()); // [ 8, 1, 10, 7 ] ***lst-2 is changed***
console.log(
  lst_2.filter(function (item) {
    return item % 2 == 0; //return odd numbers // [ 8, 10 ]
  })
);
console.log(lst_2.map(function (item) {
  return item *3;
}));

//for in lists


let list=["Dey","Bahman",17,18,2000,"finish"];
for(index in list){
  console.log(list[index]); //  Dey   Bahman 17  18 2000  finish
}


End 30 Dey

*/

/*Start 1 Bahman

//object :

let myCar = {
  model: "pride",
  buyYear: 2011,
  owner: {
    name: "amin",
    family: "haddad",
    birthday: "2006",
  },
  color: "white",
  run: function () {
    return "speed to 180";
  },
  summery: function () {
    return (
      "my car details : " +
      this.model +
      " , " +
      this.buyYear +
      " , " +
      this.color
    );
  },
};
console.log(myCar.model); //pride
myCar.buyYear = 2013;
console.log(myCar.buyYear); //2013
console.log(myCar.company); //undefined
console.log(myCar.owner.family); //haddad
console.log(myCar["color"]); //white
console.log(myCar["owner"]["birthday"]); //2006
console.log(myCar.run()); //speed to 180
console.log(myCar.summery()); //my car details : pride , 2013 , white

//create object oriented function with object

function person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.summery = function () {
    return "details : " + this.name + " " + this.lastName;
  };
}
let p1 = new person("amin", "hdd");
console.log(p1.summery()); //details : amin hdd

End 1 Bahman*/

/*Start 3 Bahman

//try and catch

try {
  indifinedVariable = 10;
  console.log(x);
  if (true) {
    throw "edf";
  }
} catch (err) {
  console.log("error !! : " + err); //error !! : ReferenceError: x is not defined
  console.log(
    "error name : " + err.name + " and error message : " + err.message
  ); //error name : ReferenceError and
  //  error message : x is not defined
} finally {
  console.log(" the END"); // the END
}

//time out funcs

setTimeout(function () {
  console.log("8 s");
}, 8000);//at 8 second log 8  s
let time = 1;
setInterval(function () {
  //timer controller:
  if (time > 10) {
    return;
  }
  console.log(time);
  time++;
}, 1000); // counting 1 to 10 in 10 sec

//String Methods

let txt=" hi good morning  ";
console.log(txt.length);//16
console.log(txt.charAt(2));//i
console.log(txt.charAt(3));//white space
let txt_2=txt.concat(" how are you :)");
console.log(txt); //hi good morning
console.log(txt_2); // hi good morning how are you :)
console.log(txt.toUpperCase());// HI GOOD MORNING
console.log(txt.toLowerCase());// hi good morning
console.log(txt.split(" "));//[ '', 'hi', 'good', 'morning' ] //for iterate in txt
console.log(txt.trim());//hi good morning //this has no extra space
console.log(txt.trimStart());//hi good morning this has no extra space  only at start
console.log(txt.trimEnd());// hi good morning this has no extra space only at end
console.log(txt.indexOf("morning"));//9
console.log(txt.indexOf("night"));//-1 //no word with start this
console.log(txt.substring(4,16));//good morning
console.log(txt.replace("morning","night"));// hi good night
console.log(txt.replace("hello","salam"));// hi good morning
// replace method does not working because hello is not in txt


End 3 Bahman*/

/*Start 4 Bahman

//DATE

let now = Date.now();
console.log(now); //1769219132603 timespan time
now = new Date(now); //convert timespan to taqvim
console.log(now); //2026-01-24T01:45:32.603Z
console.log(now.getHours()); //5
console.log(now.getMinutes());//17
let tommorow = new Date("2026-01-25T01:47:24.118Z");
console.log(tommorow.getHours());//5
tommorow.setHours(12);//convert hour from 5 to 12
console.log(tommorow.getHours());//12

//MATH library

console.log(Math.floor(1.88));//1
console.log(Math.ceil(1.12));2
console.log(Math.max(1,2,3,4,6,2,7,10,1,3,5));//10
console.log(Math.PI);//30141592653....
console.log(Math.sqrt(16));//4
console.log(Math.pow(3,3));//27
console.log(Math.abs(-100));//100
console.log(Math.random());//0.39... get random number between 0 to 1
function GetRandomNumber(max){
  return Math.ceil(Math.random()*Math.ceil(max));//get random number between 0to max value (max value can select)
}
console.log(GetRandomNumber(100));//0 1 2 3 ..... 99 100(one of them)

End 4 Bahman*/

/*Start 9 Bahman

//classes:
class person {
  constructor(nam, famil) {
    this.name = nam;
    this.family = famil;
  }
  get name() {
    return this.nam;
  }
  set name(newName) {
    this.nam = newName;
  }
  tostring() {
    return this.name + " " + this.family;
  }
}
let p = new person("amin", "hadad");
console.log(p.name); //amin
console.log(p.tostring()); //amin hadad
p.name = "amin2";
console.log(p.name);//amin2

//object-oriend class:
class animal{
  constructor(nam){
    this.name=nam;
  }
  description(){
    return this.name+" ";
  }
}
class dog extends animal {
  constructor(nam,nejad) {
    super(nam);
    this.nejad = nejad;
  }
  description() {
    return super.description()+this.nejad+" says hop";
  }
}
let d1=new dog("dog name","hoskey");
console.log(d1.description()); //dog name hoskey says hop

//arrow functions

let sum=(a,b)=>a+b;
console.log(sum(3,4));//7

let sumWithIf=(x,y)=>{
  if(Math.abs(x-y)>3)return x+"+"+y+"="+(x+y);
  else return x+"+2*"+y+"="+(x+y+y);
}
console.log(sumWithIf(4,9));//4+9=13
console.log(sumWithIf(5,3));//5+2*3=11

let list=["amin","ali","hosein"];
let lengthList=list.map(n=>n+" :"+n.length);
console.log(lengthList); //[ 'amin :4', 'ali :3', 'hosein :6' ]

End 9 Bahman*/
