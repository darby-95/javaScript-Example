gsap.registerPlugin(ScrollTrigger);

let innerSliderOne = document.querySelector('.slider-inner-one');
let innerSliderTwo = document.querySelector('.slider-inner-two');
let images = document.querySelectorAll('.img');
let current = 0; // 현재위치
let target = 0; // 스크롤 탑값
let ease = 0.075;
let imageItems = [];
let stop;

images.forEach((image) => {
    imageItems.push(image)
})

function lerp(start, end, t) { // 속도 조절용 함수 (천천히 멈춘다.)
    return start * (1 - t) + end * t;
    // return 100*(1 - 0.075) + 150 * 0.075 = 92.5 + 11.25 = 103.75
    // return 103.75*(1 - 0.075) + 150 * 0.075 = 95.96875 + 11.25 = 107.21
}
function transformElement(el,transform){
    el.style.transform=transform
}

function animate() {
    target = scrollY;
    console.log(target)
    current=lerp(current, target, ease)  // lerp(100,150,0.075)
    // console.log(current)
    for (let i=0; i<imageItems.length; i++){
        if(current<target - 50 || current>target + 50){
            transformElement(imageItems[i], `scale(0.8)`)
        }else{
            transformElement(imageItems[i], `scale(1)`)
        }
    }
}




// 가로 스크롤
gsap.to(innerSliderOne, {
    xPercent: -50,
    ease: "none",
    delay: 1,
    scrollTrigger: {
        trigger: "main",
        start: "top top",
        scrub: 1,
        end: "+=200%",
        pin: true,
        onEnter:function ani(){
            animate()
            stop=requestAnimationFrame(ani)
        },
        onLeaveBack:()=>{
            cancelAnimationFrame(stop)
        }
    }
}, 0)

gsap.to(innerSliderTwo, {
    xPercent: -67,
    ease: "none",
    delay: 1,
    scrollTrigger: {
        trigger: "main",
        start: "top top",
        scrub: 1,
        end: "+=200%",
        pin: true,
    }
}, 0)