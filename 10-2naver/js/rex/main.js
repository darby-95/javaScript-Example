let id = document.querySelector('#id')
let error = document.querySelectorAll('.error_next_box')
// .error_next_box 를 가진 모든 요소를 부른다.
console.log(error)

let pw1 = document.querySelector('#pw1')
let pwImg1 = document.querySelector('#pw1_img1')
let pwMsg = document.querySelector('#alertTxt')

let pw2 = document.querySelector('#pw2')
let pwImg2 = document.querySelector('#pw2_img1')

let username = document.querySelector('#name')

let yy = document.querySelector('#yy')
let mm = document.querySelector('#mm')
let dd = document.querySelector('#dd')

let gender = document.querySelector('#gender')

let email=document.querySelector('#email')

let mobile=document.querySelector('#phoneNo')

// id.addEventListener('focusout',function(){
//     checkId();
// })
// 줄여서 호출
id.addEventListener('focusout', checkId)
pw1.addEventListener('focusout', checkPW)
pw2.addEventListener('focusout', comparePw)
username.addEventListener('focusout', checkName)
yy.addEventListener("focusout", isBirthCompleted)
mm.addEventListener("focusout", isBirthCompleted)
dd.addEventListener("focusout", isBirthCompleted)
gender.addEventListener("focusout",function(){
    if(gender.value === "성별"){
        error[5].style.display="block";
    }else{
        error[5].style.display="none"; 
    }
})
email.addEventListener("focusout", isEmailCorrect)
phoneNo.addEventListener("focusout", checkPhoneNum)

function checkId(){
    // 정규식 사용
    let idPattern = /^[a-zA-Z0-9_-]{5,20}$/;
    if (id.value === "") { // id 가 비어있다면? 아래와같이 메세지가 출력된다.
        error[0].innerHTML = "필수 정보입니다."
        error[0].style.display = "block"; // error의 style 요소가 (기존 none에서->)block으로 바뀐다.
        error[0].style.color = "#f00";
    } else if (!idPattern.test(id.value)) {
        error[0].innerHTML = "5~20자의 영문 소문자, 대문자, 숫자와 특수기호(_),(-)만 사용가능합니다."
        error[0].style.display = "block";
        error[0].style.color = "#f00";
    } else {
        error[0].innerHTML = "사용가능한 아이디입니다."
        error[0].style.display = "block";
        error[0].style.color = "#80a600";
    }
}

function checkPW(){
    let pwPattern = /^[a-zA-Z0-9~!@#$%^&*()_+}|<>?:{}]{8,16}$/;
    // console.log(pwPattern.test(pw1.value))
    if (pw1.value === "") { // : pw1의 값이 비어있다면
        error[1].innerHTML = `필수 정보입니다.`;
        error[1].style.display = "block";
        pwImg1.src = "./img/m_icon_not_use.png"
        pwMsg.style.display = "none"
    } else if (!pwPattern.test(pw1.value)) { // : pw1의 값이 pwPattern(정규식)과 일치하지 않다면
        error[1].innerHTML = `8~16자 영문, 대소문자, 숫자, 특수문자를 사용하세요`;
        error[1].style.display = "block";
        pwMsg.style.display = "block";
        pwMsg.innerHTML = "사용 불가";
        pwMsg.style.color = "#f00"
        pwImg1.src = "./img/m_icon_not_use.png"
    } else { // : pw1의 값이 있고, 정규식과 일치하다면
        error[1].style.display = "none";
        pwMsg.innerHTML = "안전";
        pwMsg.style.display = "block";
        pwMsg.style.color = "#03c75a"
        pwImg1.src = "./img/m_icon_safe.png"
    }
}

function comparePw(){
    // : pw1의 값과 pw2의 값이 같고 pw2의 값이 비어있지 않다면
    if (pw1.value === pw2.value && pw2.value !== "") {
        pwImg2.src = "./img/m_icon_check_enable.png"
        error[2].style.display = "none";
    } else if (pw1.value !== pw2.value) { // : pw1의 값과 pw2값이 다르다면
        pwImg2.src = "./img/m_icon_check_disable.png"
        error[2].style.display = "block";
        error[2].innerHTML = `비밀번호가 일치하지 않습니다.`;
    }

    if (pw2.value === "") { // : pw2의 값이 비어있다면
        error[2].style.display = "block";
        error[2].innerHTML = `필수 정보입니다.`;
        pwImg2.src = "./img/m_icon_not_use.png"
    }
}

function checkName(){
    let namePattern = /^[a-zA-Z가-힣]+$/;
    // console.log(namePattern.test(username.value))
    if (username.value === "") {
        error[3].style.display = "block";
        error[3].innerHTML = `필수 정보입니다.`;
    } else if (!namePattern.test(username.value) ||
        username.value.indexOf(" ") > -1) { // 공백을 찾아준다.
        // indexOf : 띄어쓰기를 포함한 한글자마다 부여되는 번호를 찾아준다.
        // 즉, 띄어쓰기가 있을 경우 양수가 되고 없을 경우 음수 번호가 부여된다.
        error[3].style.display = "block";
        error[3].innerHTML = `한글과 영문 대소문자를 이용하세요(특수기호, 공백 사용 불가)`;
    } else {
        error[3].style.display = "none";
    }
}

function isBirthCompleted(){
    let yearPattern = /[0-9]{4}/;
    if (!yearPattern.test(yy.value)) {
        error[4].style.display = "block";
        error[4].innerHTML = `태어난 년도 4자리를 정확하게 입력하세요.`;
    } else {
        error[4].style.display = "none";
        // 년도가 맞다면 월 체크 함수
        isMonthCompleted();
    }

    function isMonthCompleted(){
        if (mm.value == "월") { // 숫자가 아닌 월이라는 글자를 선택하였다면
            error[4].style.display = "block";
            error[4].innerHTML = `태어난 월을 선택하세요.`;
        } else {
            // 년도와 월을 제대로 선택했다면 생일을 체크하는 함수
            isDateCompleted();
        }
    }

    function isDateCompleted(){
        if (dd.value === ""){
            error[4].style.display = "block";
            error[4].innerHTML = `태어난 일(날짜) 2자리를 정확하게 입력하세요.`;
        } else {
            // 생일 날짜를 정확하게 1~31 에 오도록 하는 함수
            isBirthRight();
        }
    }

    function isBirthRight(){
        let datePattern= /\d{1,2}/;
        if(!datePattern.test(dd.vlaue) || Number(dd.value) < 1 ||  Number(dd.value)>31){
            error[4].style.display = "block";
            error[4].innerHTML = `태어난 일(날짜) 2자리를 정확하게 입력하세요.`; 
        }else{
            checkAge();
        }
    }

    function checkAge(){
        if(Number(yy.value)<1910){
            error[4].style.display = "block";
            error[4].innerHTML = `년도를 다시입력하세요`; 
        }else if(Number(yy.value)>2024){
            error[4].style.display = "block";
            error[4].innerHTML = `년도를 다시입력하세요`; 
        }else{
            error[4].style.display = "none";
        }

        if(Number(yy.value)>2021 && Number(yy.value)<=2024){
            error[4].style.display = "block";
            error[4].innerHTML = `만 14세 미만의 어린이는 보호자 동의가 필요합니다.`; 
        }else{
            error[4].style.display = "none";
        }

    }
}

function isEmailCorrect(){
    //dkdkkd@gmail.com
    //kdkdl@naver.com
    let emailPattern=/[a-zA-Z0-9_]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/;
    if(email.value === ""){
        error[6].style.display="none"
    }else if(!emailPattern.test(email.value)){
        error[6].style.display="block";
        email.value=null;
        email.focus();
    }else{
        error[6].style.display="none"  
    }
}

function checkPhoneNum(){
    let isPhoneNum=/^([01]{2})([01679]{1})([0-9]{3,4})([0-9]{,4})/;
    if(mobile.value === ""){
        error[7].style.display="none"
        error[7].innerHTML = `필수 정보입니다.`;

    }else if(!emailPattern.test(email.value)){
        error[7].style.display="block";
        error[7].innerHTML = `형식에 맞지 않는 번호입니다.`;
    }else{
        error[7].style.display="none"  
    }
}