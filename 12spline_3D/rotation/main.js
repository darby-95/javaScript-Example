gsap.registerPlugin(ScrollTrigger)

// lenis 충돌 방지를 위해 function(함수)안에 넣는다.
function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        // console.log(e) : OK
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}

////////////////////////////////////////////////////////////////////

import { Application } from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/NiIwtSnZomOwo09O/scene.splinecode')
    .then(() => {
        let rotate=app.findObjectByName("rotate")

        gsap.set(rotate.scale,{x:1.5,y:1.5,z:1.5})
        gsap.set(rotate.position,{x:0, y:0})
        gsap.timeline({
            scrollTrigger:{
            trigger:".third",
            start:"top top",
            end:"+=300%",
            scrub:2,
            pin:true
        }})
        .to(rotate.rotation,{y:-Math.PI * 6, x:0},0)
        .to(rotate.position,{x:0, y:3800},0)
        .to(rotate.scale,{x:1,y:1,z:1},0)
    })

