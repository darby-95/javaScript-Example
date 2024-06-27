gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

let path1 = document.querySelector('.theLine');
let path1Length = path1.getTotalLength();
//console.log(path1Length)

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;

let pulses = gsap.timeline({
    defaults: { // defaults : {}에 모든 값이 동일하게 들어간다. 
        duration: 0.05,
        autoAlpha: 1, // opacity, visibility을 한번에 실행한다.
        scale: 2,
        transformOrigin: "center",
        ease: "elastic.out(1,0.3)",
    }
})
.to(".ball01,.text01", {}, 0.15) // : {} 여기여기 ❗❗
.to(".ball02,.text02", {}, 0.24)
.to(".ball03,.text03", {}, 0.36)
.to(".text04", {}, 1)


let main = gsap.timeline({
    defaults: {
        duration: 1
    },
    scrollTrigger: {
        trigger: '#svg',
        start: "top center",
        end: "+=1500",
        scrub: 1.9
    },
    onUpdate: animationUpdate,
})

.to(".ball04", {
    duration: 0.01,
    autoAlpha: 1
})
.to(path1, {
    strokeDashoffset: 0
},"ball")
.to(".ball04", {
    motionPath: {
        path: ".theLine",//path연결
        align: ".theLine",
        alignOrigin: [0.5, 0.5],
    }
},"ball")

.add(pulses,0) // timeline 연결하는 방법 0타임라인의 시작 지점

function animationUpdate(){
    console.log(this.progress())
}