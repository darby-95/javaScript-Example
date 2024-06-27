let imageSources=[
    "./assets/img1.jpg",
    "./assets/img2.jpg",
    "./assets/img3.jpg",
    "./assets/img4.jpg",
    "./assets/img5.jpg"
]

let menuitem=document.querySelectorAll(".menu-item")
// menu-item 모두를 불러와서 배열이 된다.
console.log(menuitem) 
// 배열임을 알 수 있다.
// NodeList(5) [div.menu-item, div.menu-item, div.menu-item, div.menu-item, div.menu-item]

menuitem.forEach(function(item){
    let copyElements=item.querySelectorAll(".info,.name,.tag")
    // 모든 ".info,.name,.tag" 를 불러낸다.
    copyElements.forEach(function(div){
        let copy = div.querySelector("p")
        // html에 사용된 모든 p태그를 불러온다.
        let duplicateCopy = document.createElement("p")
        // duplicateCopy는 p태그를 만들겠다고 선언한다.

        duplicateCopy.textContent=copy.textContent;
        div.appendChild(duplicateCopy)
        // html 에 사용된 모든 p태그에게 (p태그를 생성하는)duplicateCopy를 동생으로 넣겠다.
        // 즉, 모든 p태그에게 동생으로 p태그가 각자 새로 생겼다.
    })
})

function removeExtraImages(container){
    while(container.children.length>10){ // 이미지의 갯수가 10보다 커진다면
        container.removeChild(container.firstChild) // 첫번째 자식 요소를 지운다.
    }
}

let appendIamges = function(src){
    let preview1=document.querySelector(".preview-img-1")
    // preview1은 html의 .preview-img-1 임을 선언한다.
    let preview2=document.querySelector(".preview-img-2")

    let img1=document.createElement("img");
    // img1은 html에 img 엘리먼트를 생성한다.
    let img2=document.createElement("img");

    img1.src=src;
    // img1의 소스는 위에 호출한 함수 src 이다.
    img2.src=src;
    console.log(img1)
    img1.style.clipPath="polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    img2.style.clipPath="polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"

    
    preview1.appendChild(img1)
    // preview1(.preview-img-1)에 img1(이미지 소스를 호출한 함수)를 넣겠다.
    preview2.appendChild(img2)

    gsap.to([img1,img2],{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration:1,
        onComplete:function(){ // gsap 애니메이션이 끝나고나서 할일
        removeExtraImages(preview1)
        removeExtraImages(preview2)

        }
    })

}

let mouseoverAnimation = function(elem){
    // 마우스를 올릴때마다 실행된다.
    // console.log(elem) OK
    gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
        // 첫번째 p태그를 선택하여 아래와 같은 효과를 준다.
        top:"-100%",
        duration:0.3
    })
    gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
        // 두번째 p태그를 선택하여 아래와 같은 효과를 준다.
        top:"0%",
        duration:0.3,
    })

}

let mouseoutAnimation = function(elem){
    // 마우스가 떠날때마다 실행된다.
    gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
        top:"0%",
        duration:0.3,
    })
    gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
        top:"100%",
        duration:0.3
    })

}

document.querySelectorAll(".menu-item").forEach(function(item,index){
// menu-item 을 선택하여 일을 시킨다.
    item.addEventListener("mouseover",function(){
    // 아이템에 마우스를 올릴때마다 함수가 실행된다.
        // console.log("실행") OK
        mouseoverAnimation(item)
        // 마우스에게 애니메이션을 전송한다.
        // item=매개변수
        appendIamges(imageSources[index])
        // .menu-item 순서에따라 imageSources의 index 순서대로 찍힌다.
        // 예)  .menu-item 1번째 : imageSources 0번
    })
    item.addEventListener("mouseout",function(){
    // 아이템에 마우스를 벗어날때마다 함수가 실행된다.
        mouseoutAnimation(item)
    })
})

document.querySelector(".hoverWrap").addEventListener('mouseout',function(){
    gsap.to(".preview-img img",{
        clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration:1,
        ease: "power3.out",
    })
})



// 마우스 이미지 따라오기

document.querySelector(".hoverWrap").addEventListener('mousemove',function(e){
    let preview=document.querySelector('.preview')
    // 이미지의 부모를 불러온다.
    gsap.to(preview,{
        x:e.clientX,
        y:e.clientY,
        duration:0.5,
        ease: "power3.out",
    })
})