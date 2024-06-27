let path=`M 10 200 Q 600 200 1190 200`
let finalpath=`M 10 200 Q 600 200 1190 200`
let svg=document.querySelector(".svgWrap svg")

svg.addEventListener("mousemove", function(e){
    console.log(e.y)
    path=`M 10 200 Q ${e.x - 350} ${e.y + 100} 1190 200`;

    gsap.to('.svgWrap svg path',{
        attr:{d:path}, // svg의 d의 속성값에게 path처럼 줄것이다. 
        duration:0.3, // 기본값 0.5
        ease: "power3.out",
    })
})

svg.addEventListener("mouseleave",function(){
    gsap.to('.svgWrap svg path',{
        attr:{d:finalpath}, 
        duration:1.5,
        ease:"elastic.out(1,0.2)",
    })
})