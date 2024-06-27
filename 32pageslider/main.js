let contentWraps = document.querySelectorAll('.contentWrap');

contentWraps[0].querySelectorAll("img").forEach((img)=>img.classList.add("active"))

contentWraps.forEach((contentWrap,index)=>{
    let imgArr = contentWrap.querySelectorAll('img');
    let title = document.querySelector('.textWrap h2');
    let pageNum=0;
    let totalNum=contentWraps.length; // : 각 contentWrap 이미지의 갯수

    // 🌟 초기 설정 

    // 둘 다 글자를 넣는것이다.
    // title.innerHTML // : 태그와 함께 글자를 넣는다.
    // title.textContent // : 태그는 넣을 수 없고 글자만 넣는다.

    title.textContent="PAGE : "+(pageNum + 1)+ "/" + totalNum;

    // 🌟 Next Btn
    document.querySelector(".buttonWrap .btn2").addEventListener("click",()=>{
        if(pageNum<totalNum - 1){
            pageNum++;
        }else{
            pageNum = 0;
        }
        updateGallery(imgArr, title,pageNum, totalNum)
    })

    // 🌟 Prev Btn
    document.querySelector(".buttonWrap .btn1").addEventListener("click",()=>{
        if(pageNum>0){
            pageNum--
        }else{
            pageNum = 0;
        }
        updateGallery(imgArr, title,pageNum, totalNum)
    })
})

function updateGallery(imgArr, title,pageNum, totalNum){
    imgArr.forEach((img)=>img.classList.remove("active"))
    contentWraps[pageNum].querySelectorAll("img").forEach((img)=>img.classList.add("active"))
    title.textContent="PAGE : "+(pageNum + 1)+ "/"+totalNum;

}