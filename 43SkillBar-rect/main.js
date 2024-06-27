gsap.registerPlugin(ScrollTrigger);


// 한번만 실행하게 수정할것 
let executed = false; // : 한번만 실행하도록 만든 변수

function animateSkills(){
    document.querySelectorAll(".skill-per").forEach((perEl)=>{
        gsap.to(perEl,{
        duration:2,
        width:perEl.getAttribute('per') + "%", // : per라는 속성을 가져와라
        onUpdate:function (){
            // Math.ceil : 올림
            // parseInt(36.333) : 정수값으로 바꾼다.
            perEl.setAttribute('per', Math.ceil(this.progress() * parseInt(perEl.style.width)) + "%") 
            // 여기서 this는 함수 자체를 의미한다.
            // this는 화살표 함수에서는 사용하지 못한다.
        }
    })
})
}

ScrollTrigger.create({
    trigger:".main",
    start:"top 30%",
    onEnter:()=>{
        if(!executed){
            animateSkills();
            executed=true
        }
    }
})