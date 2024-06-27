gsap.registerPlugin(ScrollTrigger);

let MAX=100;
let circleProgressInstances=[];
document.querySelectorAll(".progress").forEach((progressEle,index)=>{
    let initialvalue=document.querySelectorAll(".value-input")[index].value;
    let classText=document.querySelectorAll(".skill h3")[index].innerHTML;

    let cp=new CircleProgress(progressEle, {
        max: MAX,
        value: 0,
        animationDuration:1500,
        //textFormat: (val)=>val + "%";
        textFormat: (val)=>val
    });

    console.log(cp)
    circleProgressInstances.push(cp);

    ScrollTrigger.create({
        trigger:".skill",
        start:"top 70%",
        scrub:1,
        onEnter:()=>{
            cp.value=initialvalue;
        },
        onLeaveBack:()=>{
            cp.value=0;
        }
    })

})
