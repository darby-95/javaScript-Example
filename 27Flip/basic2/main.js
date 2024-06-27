gsap.registerPlugin(Flip);

let container=document.querySelector(".container")
let box=document.querySelector(".box")

document.addEventListener("click",()=>{
    // F : first 값
    let state=Flip.getState(".box") // box의 처음 상태를 가져옴.

    // L : lsat 값
    container.appendChild(box) // container의 자식으로 box를 넣어라

    // Invert
    Flip.from(state,{duration:1, ease:"power1.out"}) // 움직이는 값 : box가 현재있는 위치부터 시작해라.
})