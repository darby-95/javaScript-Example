const lenis = new Lenis();
console.clear();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


//--------------------------------------------

let video=document.querySelector('.page video'),
    videoWidth,
    videoHeight;

    function setVideo(){
        videoWidth=video.offsetWidth
        videoHeight=video.offsetHeight
    }
    setVideo()

    let inset={x:0, y:0, r:50} // r: radios로 쓸 예정
    let snap=gsap.utils.snap(10)

    gsap.timeline({
        scrollTrigger:{
            trigger:".video-wrapper",
            start:"center center",
            end:"+=1000",
            pin:true,
            scrub:true
        }
    })
    .fromTo(inset,{
        x:0,y:0,r:50
    },{
        duration:1,
        x:50, y:50, r:50,
        onUpdate:()=>{
            video.style.clipPath=`inset(${inset.x * videoWidth/200}px ${inset.y * videoWidth/200}px round ${snap(inset.r)}px)`
        }
    })

    
    gsap.timeline({
        scrollTrigger:{
            trigger:".video-wrapper2",
            start:"center center",
            end:"+=1000",
            pin:true,
            scrub:true
        }
    })
    .fromTo(inset,{
        x:0,y:0,r:50
    },{
        duration:1,
        x:50, y:50, r:50,
        onUpdate:()=>{
            video.style.clipPath=`inset(${inset.x * videoWidth/200}px ${inset.y * videoWidth/200}px round ${snap(inset.r)}px)`
        }
    })

    window.addEventListener("resize",setVideo)