let container=document.querySelector('.items');
let imageIndex=1;
let animationTimeout=null; // : 비어있음.
let currentlyPlaying=false;

function addNewItem(x,y){
    // div 태그 만들기
    let newItem=document.createElement("div");
    newItem.className="item";
    
    let img=document.createElement('img')
    img.src=`./img/img${imageIndex}.jpg`
    newItem.appendChild(img)

    // imageIndex 순서 (총 16장)
    imageIndex=(imageIndex % 15) + 1
    container.appendChild(newItem)
    console.log(imageIndex)

    // 마우스를 사진의 정중앙에 넣기
    newItem.style.left=`${x - 75 }px`; 
    newItem.style.top=`${y - 100 }px`;

    manageItemLimit();
}

function manageItemLimit(){
    while(container.children.length>20)
        container.removeChild(container.firstChild)
}

function startAnimation(){
    // or 연산자 : 둘중 하나라도 true면 true 이다.
    // 4번째줄 : currentlyPlaying=false;
    if(currentlyPlaying || container.children.length === 0){
        // 둘중 하나라도 true면 중괄호 진입,
        // return으로 진입하면 return을 감싸고 있는 함수 (startAnimation) 종료
        return;
    }

    currentlyPlaying=true;
    gsap.to('.item',{
        y:1000,
        scale:0.5,
        opacity:0,
        duration:0.5,
        stagger:0.025, // : 0.025초 간격을 두고 하나씩 떨어진다.
        onComplete:function(){ // 위의 애니메이션이 끝나고 나면 할일
            ㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        }
    })
}

container.addEventListener("mousemove",function(event){
    console.log(event)
    addNewItem(event.clientX,event.clientY)
})