 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
     gsap.registerPlugin(ScrollTrigger)


     // 이미지 애니메이션
     let items = document.querySelectorAll(".anime-list li")
     items.forEach(function (el) {
         gsap.set(".hover-img", {
             xPercent: -50,
             yPercent: -50
         })
         let image = el.querySelector(".hover-img")
         let innerImage = el.querySelector(".hover-img img")
         let pos = {
             x: window.innerWidth / 2,
             y: window.innerHeight / 2
         }
         let mouse = {
             x: pos.x /* pos 안에 들어있는 x(key) , 즉 x:window.innerWidth/2 */
         }
         let speed = 0.1
         let xSet = gsap.quickSetter(image, "x", "px") // : image 변수의 x값의 px 단위를 신속하게 설정
         // gsap.quickSetter : gsap.quickSetter 메서드를 호출하여 특정 DOM 요소의 특정 CSS 속성을 신속하게 설정할 수 있는 함수를 만든다.
         // xSet(100)을 호출하면 image 요소의 수평 위치가 신속하게 100 픽셀로 설정된다.
         window.addEventListener("mousemove", function (e) {
             // console.log(e.x)
             mouse.x = e.x
         })

         gsap.ticker.add(function () { // ticker == requestAnimationFrame 를 뜻한다.
             //  gsap.ticker.add()
             // 애니메이션 프레임마다 특정 요소의 속성을 업데이트하거나, 사용자 인터랙션을 실시간으로 처리하는 등의 다양한 활용이 가능하다.
             let dt = 1.0 - Math.pow((1.0 - speed), gsap.ticker.deltaRatio())
             pos.x += (mouse.x - pos.x) * dt
             xSet(pos.x)
         })
         let direction = "",
             oldx = 0,
             lastCursorX = null,
             cursorThreshold = 150; /* 마지막에 무조건 ; 넣기 */
         let mousemovemethod = function (e) {
             if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
                 // : 150보다 더 많이 움직였다면
                 direction = "left"
                 lastCursorX = e.clientX
                 innerImage.style.transform = "rotate(-15deg)"
             } else if (e.pageX > oldx && e.clientX >= lastCursorX + cursorThreshold) {
                 direction = "right"
                 lastCursorX = e.clientX
                 innerImage.style.transform = "rotate(15deg)"
             }
             oldx = e.pageX
         }

         let mouseMoveTimer; // : 마우스가 멈출때를 감지하는 변수

         document.addEventListener("mousemove", function () {
             // setTimeout(할일, 시간) : 시간뒤에 한번만 할일(함수) 실행
             // setTimeout 을 멈추고 싶을때는 변수에 할당한다.
             // 변수 =setTimeout(할일,시간)
             // clearTimeout(변수) ==> 멈추는 명령

             clearTimeout(mouseMoveTimer) // : 기존 타이머를 지운다.
             mouseMoveTimer = setTimeout(function () {
                 innerImage.style.transform = "translateX(0%) rotate(0deg)"
             }, 100)

         })
         document.addEventListener("mousemove", mousemovemethod)

     })

     function ani() {
         // requestAnimationFrame 은 실행되면 다시 ani를 실행하고 > 다시 requestAnimationFrame 를 실행하고 ... 반복한다.
         // requestAnimationFrame 아래에 있는 명령어들은 거쳐지지 않고 requestAnimationFrame 만 무한반복 된다. (requestAnimationFrame 위의 명령어만 반복)
         requestAnimationFrame(ani) // setInterval의 진화된 버전 : 용량을 적게 먹는다, 무한 반복
     }
     ani()

     // Mouse Cursor
     gsap.set(".ball", {
         xPercent: -50,
         yPercent: -50
     })
     let ball = document.querySelector(".ball")
     let pos = {
         x: window.innerWidth / 2,
         y: window.innerHeight / 2
     }
     let mouse = {
         x: pos.x,
         y: pos.y
     }
     let speed = 0.08
     let xSet = gsap.quickSetter(ball, "x", "px") // : ball의 x px 값을 빠르게 세팅한다.
     let ySet = gsap.quickSetter(ball, "y", "px") // : ball의 y px 값을 빠르게 세팅한다.

     window.addEventListener("mousemove", function (e) {
         mouse.x = e.x
         mouse.y = e.y
     })
     // Mouse가 부드럽게 움직일 수 있도록 도와준다.
     gsap.ticker.add(function () {
         // pow : 예를 들어 2의 n승 했을때 n승을 뜻
         // delta : 프레임과 프레임 사이의 간격 (부드럽게 전환)
         let dt = 1.0 - Math.pow((1.0 - speed), gsap.ticker.deltaRatio())
         // : 현재의 위치값에 과거의 위치값을 뺀다. 즉, 움직인 거리이다.
         // gsap.ticker.deltaRatio() : gsap에서 제공하는 기능. 인터넷의 속도 값에 맞춰 속도를 조절해준다. (보통 0.9 ~ 1 사이의 숫자가 나오며 숫자의 오차가 클수록 속도가 저하됐음을 알 수 있다.)

         // 🍇🍇🍇 GSAP (GreenSock Animation Platform)는 자바스크립트를 사용하여 웹 애니메이션을 만들기 위한 도구이다 GSAP의 ticker는 애니메이션의 프레임 업데이트를 관리하는 메커니즘이다. gsap.ticker.deltaRatio()는 프레임 간의 시간 변화를 비율로 반환하는 함수이다. 이를 통해 애니메이션이 프레임 속도에 관계없이 일정하게 작동하도록 할 수 있다.

         // 쉽게 말해, deltaRatio()는 이전 프레임과 현재 프레임 사이의 시간 차이를 기준으로 값을 반환한다. 이 값은 보통 1에 가까운데, 이것은 정상적인 프레임 속도(예: 60fps)에서의 값이다. 만약 프레임 속도가 떨어지거나 증가하면, 이 값은 1보다 크거나 작아진다. 이를 활용하여 애니메이션 속도를 프레임 속도에 맞춰 자동으로 조절할 수 있다.

         // 예를 들어, 애니메이션을 실행하는 동안 컴퓨터가 느려져서 프레임 속도가 떨어지면, deltaRatio()는 1보다 큰 값을 반환한다. 이를 이용해 애니메이션의 움직임을 조정하여 일관된 시각적 효과를 유지할 수 있다.

         pos.x += (mouse.x - pos.x) * dt
         pos.y += (mouse.y - pos.y) * dt
         xSet(pos.x)
         ySet(pos.y)
     })


     // 글자 애니메이션
     let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // 26
     let interval = null;
     let list = document.querySelectorAll(".anime-list li")
     // console.log(list) [item, item, item....] 12
     list.forEach(function (el) {
         /* el = 매개변수 이름 */
         // el.onmouseenter=function(){}
         el.addEventListener("mouseenter", function (event) {
             // 클릭을 했을때 (겹치는) 영역중 가장 하위 요소(막내)
             let target_element = event.target.querySelector('h2') /* : h2태그를 타겟으로 잡는다. */
             let iteration = 0;
             // setInterval(할일, 시간) 시간마다 할일 (할일=함수)
             // setInterval을 멈추고 싶다면 setInterval를 변수에 할당한다.
             // let interval=setInterval(할일, 시간) : 멈추는 변수 
             // 멈출때 : clearInterval(변수)//clearInterval(interval)

             // console.log(target_element.dataset.value[0])
             // target_element.innerText="메롱" : 마우스를 올리면 h2 태그를 덮어버린다(변경).
             let interval = setInterval(function () {
                 target_element.innerText = target_element.innerText
                     .split("") /* : 글자 마다마다 자른다. 배열이 만들어진다. */
                     .map(function (letter, index) { // 위의 배열의 각각의 item의 할일
                         if (index < iteration) {
                             return target_element.dataset.value[index]
                         }
                         return letters[Math.floor(Math.random() * 26)]
                     })
                     .join(""); // 글자화
                 // console.log(Math.random()) // : 0이상 1미만 사이의 부동 소수점의 숫자를 무작위로 뽑는다.

                 // .map(function(item,indexNo){ : map 함수는 배열 안에 요소를 하나씩 불러서 
                 //                                새로운 배열을 만든다. item은 요소를 하나씩 받는다.
                 //     return
                 // })

                 // console.log(target_element.innerText.split(""))

                 if (iteration >= target_element.dataset.value.length) {
                     clearInterval(interval)
                 }
                 iteration += 1 / 3
                 // iteration = iteration + 1/3 ( 1/3 = 0.3)
             }, 20) /* 1000=1초 */
         })
     })
 });