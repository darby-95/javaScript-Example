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

/////////////////////////////////////////////////////////////

let tl=gsap.timeline({
    scrollTrigger:{
      trigger:".animation",
      start:"top top",
      end:"200% bottom",
      scrub:1,
      pin:true,
      markers:true
    }
})
tl.to(".paper-plane",{
    offsetDistance:"80%",
    stagger:0.022
    ,},"plane")

/////////////////////////////
// 비행기방향
window.addEventListener("wheel",myFunction)

let plane=document.querySelector('.paper-plane')
function myFunction(event){
    let y=event.deltaY;
    console.log(y)

    if(y>0){
        plane.style.transform=`rotate(0deg)`;
    }else{
        plane.style.transform=`rotate(180deg)`;
    }

}