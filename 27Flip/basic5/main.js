gsap.registerPlugin(Flip);


const thumbs=document.querySelectorAll(".item");
const modal=document.querySelector('.modal');
const toggle=document.querySelector('.page3 button')
const modalImage=modal.querySelector('.modal-image');
const wrapper=document.querySelector('.grid-wrapper');
let activeThumb;

thumbs.forEach((thumb)=>{
    thumb.addEventListener("click",()=>{
        // 🌟 capture
        // thumb을 바깥에서 쓸 수 없기 때문에 변수 activeThumb 을 만들어 Thumb 안에 넣었다.
        activeThumb=thumb;
        thumb.classList.add("active-thumb")
        thumb.dataset.flipId="img"; // <div class="item" data-flip-id="img"></div>
        gsap.set(thumb,{opacity:0})

        // START. 
        const state=Flip.getState([thumb,modalImage],{
            props:"borderRadius,aspectRatio,boxShadow"
        })

        // END
        modalImage.querySelector("img").setAttribute("src",thumb.dataset.url)
        modal.classList.add("active")
        modalImage.style.display="block";
        Flip.from(state,{
            duration:0.25,
            ease:"sin.inOut"
        })
    })
})

modal.addEventListener("click",()=>{
    gsap.set(activeThumb,{opacity:1})
    const state=Flip.getState([activeThumb,modalImage],{
        props:"borderRadius,aspectRatio,boxShadow"
    })
    modal.classList.remove("active")
    
    // END
    Flip.from(state,{
        duration:0.25,
        absolute:true,
        ease:"sine,inOut",
        onComplete:()=>{ // 완수 됐을때 할일,
            modalImage.querySelector("img").setAttribute("src","")
            activeThumb.classList.remove("active-thumb")
        }
    }) 
})

toggle.addEventListener("click",()=>{
    toggle.classList.toggle("grid-view-on")
    // START
    let state=Flip.getState(".grid-wrapper, .item-wrapper")

    // END
    wrapper.classList.toggle("stack")

    Flip.from(state,{
        absolute:true, // absolute 된것처럼 모양이 바뀐다.
        duration:0.5,
        ease:"sine",
        stagger:0.05
    })
})