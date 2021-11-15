const comboDOM = document.getElementById("combo")
const ball1DOM = document.getElementById("ball1")
const ball2DOM = document.getElementById("ball2")
const ball3DOM = document.getElementById("ball3")
const ball4DOM = document.getElementById("ball4")

const startClilckHandler = () => {
   const selctValue = comboDOM.value;

   if (selctValue === "") {
       return alert("공을선택해주세요");
   }

    setInterval(() => {
       
   let ran1 = Math.random()* 50 + 1;
   ran1 = Math.floor(ran1);

   let ran2 = Math.random()* 50 + 1;
   ran2 = Math.floor(ran2);

   let ran3 = Math.random()* 50 + 1;
   ran3 = Math.floor(ran3);

   let ran4 = Math.random()* 50 + 1;
   ran4 = Math.floor(ran4);

   if(ball1DOM.style.marginLeft === "") {
    ball1DOM.style.marginLeft =ran1 + "px"
}else{
    let currenValue1 = ball1DOM.style.marginLeft;
    currenValue1 = currenValue1.split("p");
    currenValue1 = parseInt(currenValue1) + ran1;
    currenValue1 = currenValue1 + "px";
    ball1DOM.style.marginLeft = currenValue1
 }

 if(ball2DOM.style.marginLeft === "") {
     ball2DOM.style.marginLeft =ran2 + "px"
 }else{
     let currenValue2 = ball2DOM.style.marginLeft;
     currenValue2 = currenValue2.split("p");
     currenValue2 = parseInt(currenValue2) + ran2;
     currenValue2 = currenValue2 + "px";
     ball2DOM.style.marginLeft = currenValue2
 }

if(ball3DOM.style.marginLeft === "") {
 ball3DOM.style.marginLeft =ran3 + "px"
 }else{
 let currenValue3 = ball3DOM.style.marginLeft;
 currenValue3 = currenValue3.split("p");
 currenValue3 = parseInt(currenValue3) + ran3;
 currenValue3 = currenValue3 + "px";
 ball3DOM.style.marginLeft = currenValue3
}
 if(ball4DOM.style.marginLeft === "") {
 ball4DOM.style.marginLeft =ran4 + "px"
 }else{
 let currenValue4 = ball4DOM.style.marginLeft;
 currenValue4 = currenValue4.split("p");
 currenValue4 = parseInt(currenValue4) + ran4;
 currenValue4 = currenValue4 + "px";
 ball4DOM.style.marginLeft = currenValue4
 }
},500);
}