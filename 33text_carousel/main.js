let pTag1=document.querySelector('.first-parallel')
let pTag2=document.querySelector('.second-parallel')

let textArr1='welcome Hello welcome Hello welcome Hello welcome Hello'.split(' ')
console.log(textArr1)

let textArr2='My Portfolio My Portfolio My Portfolio My Portfolio'.split(' ')
console.log(textArr2)

let count1=0;
let count2=0;

initTexts(pTag1,textArr1)
initTexts(pTag2,textArr2)

// 🌟 배열을 하나 더 복사하여 두배로 만들기
function initTexts(el,txtArr){
    txtArr.push(...txtArr)
    console.log(txtArr)
    for(let i=0; i<txtArr.length; i++){
        // 자바스크립트에서 띄워쓰기는 &nbsp; 이다.
        // 또는 \u00A0 (역슬래쉬, 공백) 
        el.innerHTML += `${txtArr[i]}\u00A0\u00A0\u00A0`
    }
}

// let arr=[];
// arr.push(...textArr1)
// console.log(arr)

// 🌟 count 0 만들고 무한 반복하기
function animate(){
    count1++;
    count2++;
    
    count1=marqueeText(count1, pTag1, -1)
    count2=marqueeText(count2, pTag2, 1)
    requestAnimationFrame(animate) // : return과 같은 효과, setinterval의 업그레이드ver.
}


function marqueeText(count,element,direction){
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


