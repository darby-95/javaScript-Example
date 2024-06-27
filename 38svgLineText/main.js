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

////////////////////////////////////////////////////////////////
const svgText = document.querySelector("#textOnPath1");
const svgText2 = document.querySelector("#textOnPath2");
console.log(svgText);

gsap.fromTo(
    [svgText, svgText2],
    {
      attr: { startOffset: "100%" },
    },
    {
      attr: { startOffset: "0%" },
      scrollTrigger: {
        trigger: ".svg",
        start: "top top",
        scrub: 1,
        end: "+=100%",
        pin:true
      },
    }
  );
  