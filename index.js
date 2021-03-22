
//while loops
/*
var num=0;
while(num<100) {
    num+=1;
    console.log(num);

}*/
/*
for (let num=0; num<100;num++){
    console.log(num);
}*/
/*
let yourname=12;
let list=['takwa','13',['10','you']];
let random;
console.log(random);
*/
let emptyarray=new Array();
for(i=0;i<10;i++){
    emptyarray.push(i);
}
console.log(emptyarray);
//object in java script
let student ={
first:'takwa',
last:'makhlouf',
age:'22',
height:'169',
studentInfo: function(){
    return this.first + '\n'+ this.last + '\n' + this.age + '\n' ;
}
};
//console.log(student.first);
//console.log(student.last);
student.first='nottakwa';
student.age++;
//console.log(student.age);
console.log(student.studentInfo());
//18-35 is my target demographi

if(age >=18 && age <= 35){
    status = 'target demo';










    65
    console.log(status);
}else{
    status='not my audience';
    console.log(status);
}
*/
switch(1){
    case 0:
        text='weekend';
        break;
    case 5:
          text='weekend';
           break;
  case 6:
      text='weekend';
      break;
      default:
          text ='weekday';
}
console.log(text);





