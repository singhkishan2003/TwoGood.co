function locomativeScrolltriger(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll 

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}

locomativeScrolltriger();

function navbarAnimation(){
    gsap.to("#nav-part1 svg",{
            transform:"translateY(-100%)",
            ScrollTrigger:{
                trigger:"#page1",
                scroller:"#main",
                markers:"true",
                start:"top 20%",
                end:"top -5%",
                scrub:true
            },
        });
        
        gsap.to("#nav-part2 #nav-links",{
            transform:"translateY(-100%)",
            opacity:0,
            ScrollTrigger:{
                trigger:"#page1",
                scroller:"#main",
                start:"top 0",
                end:"top 5%",
                scrub:true,
            },
        });
}

// navbarAnimation();

function videoconAnimation(){
    var videocon=document.querySelector("#video-container");
var playbtn=document.querySelector("#play");


videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-70,
        top:dets.y-60
    })
})
}
videoconAnimation();

function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:.5,
        duration:.9,
        stagger:.3
    })
    gsap.from("#page1 #video-container",{
        scale:.9,
        opacity:0,
        delay:1.3,
        duration:.5
    })
}
loadinganimation();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    
    var a=document.querySelectorAll(".child");
    a.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
                gsap.to("#cursor",{
                    transform:"translate(-50%,-50%) scale(1)"
                })
            })
    })
    
    var a=document.querySelectorAll(".child");
    a.forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
                gsap.to("#cursor",{
                    transform:"translate(-50%,-50%) scale(0)"
                })
            })
    })
}

cursorAnimation();

function firstbtn(){
    
var first_btn=document.querySelector("#first");
var sidebar=document.querySelector("#sidebar");
var firstend_btn=document.querySelector("#firstend")
var shop =document.querySelector("#shop");
var secondsidebar=document.querySelector("#secondsidebar");

first_btn.addEventListener("click",function(){
    sidebar.classList.remove('openfirst');
});

firstend_btn.addEventListener("click",function(){
    sidebar.classList.add('openfirst');
    
});

shop.addEventListener("click",function(){
    sidebar.classList.add('openfirst');
    secondsidebar.classList.remove('opensecond');
});
}

firstbtn();

function firstendAnimation(){

var timeline1=gsap.timeline();

timeline1.from("#inner4 ul li",{
    y:60,
    opacity:0,
    duration:.5,
    stagger:.1
})

timeline1.from("#inner3 span",{
    y:20,
    opacity:0,
    duration:.2
})

timeline1.from("#inner3 li",{
    y:20,
    opacity:0,
    duration:.3,
    stagger:.1
})

timeline1.from("#inner2 span",{
    y:20,
    opacity:0,
    duration:.2
})

timeline1.from("#inner2 li",{
    y:20,
    opacity:0,
    duration:.3,
    stagger:.1
})

timeline1.from("#inner1 span",{
    y:20,
    opacity:0,
    duration:.2
})

timeline1.from("#inner1 li",{
    y:20,
    opacity:0,
    duration:.3,
    stagger:.1
})

}
var first=document.querySelector("#first");
var about=document.querySelector("#about");
first.addEventListener("click",function(){
    firstendAnimation();
})
about.addEventListener("click",function(){
    firstendAnimation();
})

function secondbtn(){
    
    var second_btn=document.querySelector("#second");
    var sidebar=document.querySelector("#secondsidebar");
    var secondend_btn=document.querySelector("#secondend")
    var about=document.querySelector("#about");
    var firstsidebar=document.querySelector("#sidebar");
    
    second_btn.addEventListener("click",function(){
        sidebar.classList.remove('opensecond');
    });
    
    secondend_btn.addEventListener("click",function(){
        sidebar.classList.add('opensecond');
    });

    about.addEventListener("click",function(){
        sidebar.classList.add('opensecond');
        firstsidebar.classList.remove('openfirst');
    })
}
secondbtn();

function secondAnimation(){
    gsap.from("#inner21 #cart",{
        x:-500,
        delay:.3,
        duration:5,
        repeat:-1,
        yoyo:true
    })
    gsap.to("#inner21 #empty",{
        x:-500,
        // delay:.3,
        duration:5,
        repeat:-1,
        yoyo:true
    })
}

secondAnimation();

var shop=document.querySelector("#shop");
var second=document.querySelector("#second");
shop.addEventListener("click",function(){
    secondAnimation();
})
second.addEventListener("click",function(){
    secondAnimation();
})


var dets1=document.querySelector("#page2 #dets1");
var visibleimg1=document.querySelector("#page2 #drop1");
var visibleabout1=document.querySelector("#page2 #info-elem1");

dets1.addEventListener("mouseenter",function(){
    setTimeout(()=>{
        visibleimg1.style.visibility='visible';
        visibleabout1.style.visibility='visible';
    },150)
})
dets1.addEventListener("mouseleave",function(){
    setTimeout(()=>{
        visibleimg1.style.visibility='hidden';
        visibleabout1.style.visibility='hidden';
    },100)
})

var dets2=document.querySelector("#page2 #dets2");
var visibleimg2=document.querySelector("#page2 #drop2");
var visibleabout2=document.querySelector("#page2 #info-elem2");

dets2.addEventListener("mouseenter",function(){
    setTimeout(()=>{
        visibleimg2.style.visibility='visible';
        visibleabout2.style.visibility='visible';
    },150)
})
dets2.addEventListener("mouseleave",function(){
    setTimeout(()=>{
        visibleimg2.style.visibility='hidden';
        visibleabout2.style.visibility='hidden';
    },100)
})

var dets3=document.querySelector("#page2 #dets3");
var visibleimg3=document.querySelector("#page2 #drop");
var visibleabout3=document.querySelector("#page2 #info-elem3");

dets3.addEventListener("mouseenter",function(){
    setTimeout(()=>{
        visibleimg3.style.visibility='visible';
        visibleabout3.style.visibility='visible';
    },150)
})
dets3.addEventListener("mouseleave",function(){
    setTimeout(()=>{
        visibleimg3.style.visibility='hidden';
        visibleabout3.style.visibility='hidden';
    },100)
})

