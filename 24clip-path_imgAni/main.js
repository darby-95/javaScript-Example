gsap.registerPlugin(ScrollTrigger)
function smooth(){

    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
    
}
// smooth()
/////////////////////////////////////////////////

let wokInfoItems=document.querySelectorAll(".work__photo-item")
wokInfoItems.forEach((item,index)=>{
    item.style.zIndex=wokInfoItems.length - index
    // 제일 큰 형(첫번째)이 제일 위로 올라간다.
})
gsap.set(".work__photo-item",{
    clipPath:()=>{
        // inset(top right bottom left)
        return "inset(0px 0px 0px 0px)"
    }
})

let ani = gsap.to(".work__photo-item:not(:last-child)",{ // : 막내를 제외한 모든 아이템
    clipPath:()=>{
        return "inset(0px 0px 100% 0px)"
    },
    stagger:.5,
    ease:"none",
})

ScrollTrigger.create({
    trigger:".work",
    start:"top top",
    end:"bottom bottom",
    animation:ani,
    scrub:1
})