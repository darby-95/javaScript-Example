gsap.registerPlugin(Flip)

let group=document.querySelector(".group")
let button=document.querySelector(".button")

button.addEventListener("click",()=>{
    // F, 초기상태를 캡처. group과 box의 초기 상태를 캡처한다.
    let state=Flip.getState(".group, .box")
    // L, 마지막 상태. group의 토글키 reorder를 만들었다.
    group.classList.toggle("reorder")

    Flip.from(state,{
        absolute:true, // 🌟🌟 층을 이루면서 부드럽게 애니메이션 효과가 적용된다.
        duration:0.5,
        stagger:0.2,
        ease:"power1.inOut"
    })
})