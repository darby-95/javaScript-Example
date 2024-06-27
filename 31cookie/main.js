let currentCookie = document.cookie; // 쿠키 가져오기
let cookieCheck = currentCookie.indexOf('green')
// indexof = 인덱스 번호, green이 없으면 -1(false, 없다.) 0,1,2,3.... 

let noticeEl = document.querySelector(".notice")
let checkboxEl = document.querySelector("#cb")
let closeBtn= document.querySelector(".close")

console.log(checkboxEl)

if (cookieCheck > -1) {
    noticeEl.style.display = "none" // 쿠키가 남아있다면 보이지 않는다.
} else {
    noticeEl.style.display = "block"  // 쿠키가 없다면 보인다.
}

checkboxEl.addEventListener("change", () => {
    let date = new Date();
    date.setDate(date.getDate() + 7)

    if (checkboxEl.checked){ // : checkboxEl에 check를 하였다면
        // 쿠키를 생성하여
        let setCookie="";
        setCookie += "green=true; " 
        setCookie += "expires=" + date.toUTCString()

        // 쿠키를 저장하겠다.
        document.cookie = setCookie
    }
})

closeBtn.addEventListener("click",()=>{noticeEl.style.display="none"})