gsap.registerPlugin(ScrollTrigger);



const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

lenis.on('scroll', (e) => {
    //console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

//////////////////////////////////////////////////////////////
let airplane=document.querySelector('.airplane');
let airplaneScrollTimeline=document.querySelector('.airplane-scroll-timeline')
let animation =0;

animation=gsap.to(airplane,{
    offsetDistance:'0%',
    scrollTrigger:{
        trigger:".track",
        start:"top top",
        end:"bottom 10%",
        duration:1,
        scrub:true,
        markes:true,
        onUpdate:animationUpdate
    }

})

function animationUpdate(){
    let tb1=document.querySelector('.tb1');
    let tb2=document.querySelector('.tb2');
    let jeju=document.querySelector('.hello-jeju')
    let pg = animation.progress()  
    //console.log(pg)
    if(pg>=0.04){
        tb1.style.transform='scale(1.3)';
        tb1.style.opacity=1;
    }else{
        tb1.computedStyleMap.transform='scale(1)';
        tb1.style.opacity=0;
    }

    if(pg>=0.15){
        jeju.style.transform=`scale(1.3)`;
    }else{
        jeju.style.transform=`scale(1)`;
    }

    if(pg>0.65){
        tb2.style.transform=`scale(1.3)`;
        tb2.style.opacity=1;
    }else{
        tb2.style.transform=`scale(1)`;
        tb2.style.opacity=0;
    }
}


//鍮꾪뻾湲곗쓽 諛⑺뼢
window.addEventListener("wheel",(e)=>{
    console.log(e.deltaY)
    let y=e.deltaY;

    if(y>0){
        airplane.style.transform=`rotate(180deg)`;
    }else{
        airplane.style.transform=`rotate(0deg)`;
    }

})