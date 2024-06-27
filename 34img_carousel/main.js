let pTag1=document.querySelector('.first-parallel');
let pTag2=document.querySelector('.second-parallel');

let imageArr1=[
    'http://makorang.com/img/main/main_12_btn_20.jpg', 
    'http://makorang.com/img/main/main_12_btn_19.jpg', 
    'http://makorang.com/img/main/main_12_btn_17.jpg', 
    'http://makorang.com/img/main/main_12_btn_16.jpg',
    'http://makorang.com/img/main/main_12_btn_15.jpg',
    'http://makorang.com/img/main/main_12_btn_14.jpg',
]

let imageArr2=[
    'http://makorang.com/img/main/main_12_btn_20.jpg', 
    'http://makorang.com/img/main/main_12_btn_19.jpg', 
    'http://makorang.com/img/main/main_12_btn_17.jpg', 
    'http://makorang.com/img/main/main_12_btn_16.jpg',
    'http://makorang.com/img/main/main_12_btn_15.jpg',
    'http://makorang.com/img/main/main_12_btn_14.jpg',
];

let count1=0;
let count2=0;

initimages(pTag1,imageArr1)
initimages(pTag2,imageArr2)

// 🌟 배열을 하나 더 복사하여 두배로 만들기
function initimages(el,imageArray){
    imageArray.push(...imageArray)
    imageArray.push(...imageArray)
    console.log(imageArray)
    for(let i=0; i<imageArray.length; i++){
        let img=document.createElement("img")
        img.src=imageArray[i]
        img.alt=`Image${i + 1}`
        el.appendChild(img)
    }
}

// 🌟 count 0 만들고 무한 반복하기
function animate(){
    count1++;
    count2++;
    
    count1=marqueeIamge(count1, pTag1, -1)
    count2=marqueeIamge(count2, pTag2, 1)
    requestAnimationFrame(animate) // : return과 같은 효과, setinterval의 업그레이드ver.
}


function marqueeIamge(count,element,direction){
    // scrollHeight : 보이지 않는 공간까지 공간의 높이값
    // scrollWidth : 보이지 않는 공간까지 공간의 너비값
    if(count>element.scrollWidth/2){
        count=0;
        element.style.transform=`translate(0,0)`;
    }
    element.style.transform=`translate(${count * direction}px, 0)`;
    return count;
}

function scrollHandler(){
    count1 += 30;
    count2 += 30;
}
window.addEventListener("scroll",scrollHandler)
// => 함수만 넣으면 함수 자체를 넣는것, 함수()는 호출하는것.
animate()


