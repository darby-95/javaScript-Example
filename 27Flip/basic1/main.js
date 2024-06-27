gsap.registerPlugin(Flip);

//Flip : 반드시 처음과 끝값을 적어야 한다.
//F -- First : 처음
//l -- Last : 나중
//i -- Invert : 처음에서 마지막으로 진행되는 값을 반전
//p -- play


let originalContainer=document.querySelector(".originalContainer")
let box=document.querySelector(".box")
let newContainer=document.querySelector(".newContainer")
let button=document.querySelector("button")
//부모.appendChild(자식이름)
button.addEventListener("click",function(){
   let state = Flip.getState(box);//Flip의 F상태(초기상태)
(box.parentNode === originalContainer ? newContainer: originalContainer).appendChild(box)  //Flip의 l상태(최종상태)
Flip.from(state, {duration: 1, ease: "power1.inOut", scale: true});


   //scale:true --> width와 height을 조절하여 크기를 바꾸겠다.
})