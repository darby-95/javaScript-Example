let imageSliders = document.querySelectorAll('.image-slider')

imageSliders.forEach(function (imageSlider) {
    let prev = imageSlider.querySelector(".prev-slide")
    let next = imageSlider.querySelector(".next-slide")
    let slideNum = imageSlider.querySelector(".slide-num")
    let tracker = imageSlider.querySelector(".tracker")
    let images = imageSlider.querySelectorAll(".image-slider img")

    let slideId = 0; // 슬라이드 번호
    prev.addEventListener("click", function () {
        slideId--; // slideId는 0이기 때문에 -- 할 경우 음수가 되었다.
        if (slideId < 0) {
            slideId = images.length - 1;
            // images.length = 4
            // 4 -1 = 3, 조건(음수X)은 0보다 작을 수 없기 때문에 0,1,2,3
        }
        slideNum.innerHTML = `${slideId + 1} / ${images.length}`
        // 화면엔 1,2,3,4 가 찍혀야 하기 때문에 0,1,2,3에 각각 +1 을 하였다.

        // 모든 이미지 선택
        images.forEach(function (img) {
            img.style.width = "0"
            img.style.right = "0"
            img.style.left = "initial" // initial : 초기값, 기본값
        })
        images[slideId].style.width = "100%";
        images[slideId].style.right = "auto"; // 또는 initial도 사용 가능하다.
        images[slideId].style.left = 0;

    }) // prev.click 함수

    next.addEventListener("click", function () {
        slideId++;
        if (slideId > images.length - 1) {
            slideId = 0;
        }
        slideNum.innerHTML = `${slideId + 1} / ${images.length}`

        // 모든 이미지 선택
        images.forEach(function (img) {
            img.style.width = "0"
            img.style.left = "0"
            img.style.right = "initial" // initial : 초기값, 기본값
        })
        images[slideId].style.width = "100%";
        images[slideId].style.left = "auto"; // 또는 initial도 사용 가능하다.
        images[slideId].style.right = 0;

    }) // next.click 함수

    let scrollAmmount = 0;
    let yPos = imageSlider.offsetTop // 문서 전체에서 선택한 영역의 top까지의 높이값
    let xPos = 0;

    function mouseTracker() {
        scrollAmmount = window.scrollY + yPos;


        tracker.style.top = `${scrollAmmount}px`;
        tracker.style.left = `${xPos}px`;
    }

    window.addEventListener("mousemove", function (e) {

        yPos = (e.clientY - tracker.offsetHeight / 2) - imageSlider.offsetTop;
        xPos = (e.clientX - tracker.offsetWidth / 2) - imageSlider.offsetLeft;
        mouseTracker();

    })

    window.addEventListener("scroll", function () {
        mouseTracker();
    })

    prev.addEventListener("mouseenter", function () {
        imageSlider.querySelector(".arrow-prev").style.width = "1em";
        imageSlider.querySelector(".arrow-next").style.width = 0;
        tracker.style.paddingRight = 0;
    })
    next.addEventListener("mouseenter", function () {
        imageSlider.querySelector(".arrow-prev").style.width = 0;
        imageSlider.querySelector(".arrow-next").style.width = "1em";
        tracker.style.paddingLeft = 0;
    })

    prev.addEventListener("mouseout",()=>{tracker.style.paddingRight ="0.8em"})
    next.addEventListener("mouseout",()=>{tracker.style.paddingLeft ="0.8em"})

}) //forEach