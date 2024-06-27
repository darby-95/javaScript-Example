gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

/////////////////////////////////////////////////

let cardWrapper=document.querySelectorAll('.cards_item')
let cardsEl=document.querySelectorAll('.cards_item .cards_el')
console.log(cardsEl)

cardWrapper.forEach(function(e,i){ // e=item, i=indexNo of item
    let card=cardsEl[i]
    let img=e.querySelector(".cards_img img")
    let scale=1;
    let rotate=0;

    if(i !== cardsEl.length - 1){
        scale= 0.9 + 0.025 * 1
        rotate= -10;
    }

    gsap.to(card,{
        scale:scale,
        rotateX:rotate,
        transformOrigin:"center top",
        ease:"none",
        scrollTrigger:{
            trigger: e,
            start:"top " + (100 + 40 * i),
            end:"bottom +=650px", // start가 시작되는 위치에서 650px 떨어진 위치에서 끝날것이다.
            pin:e, // e에 맞춰서 pin을 고정시켜야하기 때문에 e
            endTrigger:".end-anim", 
            scrub:1,
            pinSpacing:false // pin에 의한 공간을 없앤다. 
        }
    })
})