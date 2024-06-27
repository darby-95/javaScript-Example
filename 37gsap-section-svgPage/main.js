
gsap.registerPlugin(ScrollTrigger);

let initalPath ="M0.5 691V89.5C0.5 89.5 205 0.499986 510 0.5C789.5 0.500013 1001 89.5 1001 89.5V691H0.5Z"
let targetPath ="M0 602V0.500006C0 0.500006 204.5 103 509.5 103C789 103 1000.5 0.500006 1000.5 0.500006V602H0Z"

let svgWraps = document.querySelectorAll(".svg-container")
svgWraps.forEach((svgWrap)=>{
    let itemSvg=svgWrap.querySelector("svg path")
    itemSvg.setAttribute("d",initalPath)

    gsap.to(itemSvg,{
        attr:{d:targetPath},
        scrollTrigger: {
            trigger: svgWrap,
            start: "top 70%",
            end: "+=20%",
            ease: "linear",
            scrub: 1,
            markers: true,
          },
    })
})