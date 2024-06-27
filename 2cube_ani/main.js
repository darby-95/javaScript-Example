
let rotationX=0;
let rotationY=0;

// let cube=document.getElementsByClassName('box-area') : 항상 배열로 들어온다.
let cube=document.querySelector('.box-area') // : 배열이 아닌 태그 형식으로 들어온다.

function rotateYAxis(n){ // 좌, 우 (Y축)
    rotationY=rotationY + (90 * n) // rotationY + (90 * n) = 90, 180, 270, ... 무한
    console.log(rotationY)
    //transform: rotateX(0deg) rotateY(0deg) 이와 같은 css 형식을 js 코드로 바꾸면 👇
    cube.style.transform=`rotateX(0deg) rotateY(${rotationY}deg)`
}

function rotateXAxis(n){ // 상, 하 (X축)
    rotationX=rotationX + (90 * n) // rotationY + (90 * n) = 90, 180, 270, ... 무한
    console.log(rotationX)
    cube.style.transform=`rotateX(${rotationX}deg) rotateY(0deg)`
}

function front(){
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`
}