window.onload=function(){
let gallery=document.querySelector(".gallery");
let previewImage=document.querySelector(".preview-img img")
let galleryWrap=document.querySelector("#page4");

galleryWrap.addEventListener("mousemove",function(event){
    let x=event.clientX;
    let y=event.clientY;
    // console.log(`${x},${y}`)
    let centerX=window.innerWidth / 2; //window.innerWidth 화면의 넓이
    let centerY=window.innerHeight / 2; //window.innerHeight 화면의 높이

    let percentX=(x - centerX)/centerX; // 중앙을 기준으로 왼쪽은 음수, 오른쪽은 양수
    let percentY=(y - centerY)/centerY; // 중앙을 기준으로 아래는 양수, 위는 음수

    let rotateX= 55 + percentY
    let rotateY= percentX * 2

    gsap.to(gallery,{
        duration:1,
        ease:"power2.out",
        rotateX:rotateX,
        rotateY:rotateY,
    })
})


for(let i=0; i<150;i++){
    let item=document.createElement("div");
    item.className="item";
    // console.log(item)
    let img=document.createElement("img")
    img.src="./assets/img"+((i % 15) + 1)+".jpg"
    // console.log(item)
    item.appendChild(img)
    gallery.appendChild(item)
}

let items=document.querySelectorAll('.item') // items 안에 150개의 item을 배열로 넣기
let numberOfItems=items.length;
// console.log(numberOfItems)
let angleIncrement= 360 / numberOfItems;
// console.log(angleIncrement)

items.forEach(function(item,index){
    gsap.set(item,{
        rotationY:90,
        rotationZ:index * angleIncrement - 90,
        transformOrigin:"50% 400px",
    })

    item.addEventListener("mouseover",function(){ // 마우스를 갖다대면
        let imgInsideItem=item.querySelector("img")
        previewImage.src=imgInsideItem.src;
        // styele.filter="none"
        gsap.to(item,{
            x:10,
            y:10,
            z:10,
            ease:"power2.out",
            filter:"none",
        })
    })
    item.addEventListener("mouseout",function(){ // 마우스에서 벗어나면
        previewImage.src="./assets/img1.jpg" // 마우스를 벗어나면 기본으로 1번째 이미지를 넣었다.
        gsap.to(item,{
            x:0,
            y:0,
            z:0,
            ease:"power2.out",
            filter:"grayscale(1)",
        })
    })

})





}