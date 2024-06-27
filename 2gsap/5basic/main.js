gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


////////////////////////////////////////

let backColor=document.querySelectorAll("[data-bgcolor]")
// : data-bgcolor에 해당되는것들을 모두 배열로 불러내라.
// console.log(backColor) OK


// one --> backColor 배열안의 요소(item)
// two --> backColor 배열안의 요소에게 할당된 index 번호
// three --> backColor 배열 그 자체


backColor.forEach(function(item,index){
  let prevBg=index == 0 ?"":backColor[index - 1].dataset.bgcolor
  ScrollTrigger.create({
      trigger:item,
      start:"top 50%",
      end:"bottom 5%",
      duration:1,
      onEnter:function(){
          gsap.to("#contents",{
              backgroundColor:item.dataset.bgcolor
          })
      },
      onLeaveBack:function(){
          gsap.to("#contents",{
              backgroundColor:prevBg
          })
      }
  })
})


// 수평 슬라이드
let horSection=document.querySelectorAll('.port_desc .port');

gsap.to(horSection,{
  xPercent:-97 * (horSection.length - 1),
  scrollTrigger:{
    trigger:".port_desc",
    start:"top 20%",
    end:"+=5000",
    scrub:1,
    pin:true
  }
})






// // 설명
// let sec=document.querySelector("#section1")
// console.log(sec.getAttribute("id"))// sec가 가지고 있는 id 속성을 가져와라. 
// sec.setAttribute("id","아이디") // sec의 id 속성을 "아이디"로 넣는다.
// sec.setAttribute("data-bgcolor","red")
// // dateset
// sec.dataset.bgcolor="검정";
// console.log(sec.dataset.bgcolor)

