function scroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
scroll()


function cursor(){
    var cur = document.querySelector(".cur");
var page = document.querySelector(".page1-content");
page.addEventListener("mousemove",function(dets){
    gsap.to(cur,{
        x:dets.x,
        y:dets.y
    })
})
page.addEventListener("mouseenter",function(dets){
    // cur.style.scale ='1'
    gsap.to(cur,{
       scale:1 ,
       opacity:1
    })
})
page.addEventListener("mouseleave",function(dets){
    gsap.to(cur,{
      scale:0,
      opacity:0

    })
})



}
cursor()
function page2(){
    gsap.from(".elem h3",{
        y:40,
        duration:1,
        stagger:1,
        // delay:1
    })
    gsap.from(".head h1",{
 y:120,
 stagger:0.25,
 duration:1,
 scrollTrigger:{
  trigger:".page2",
  scroller:"#main",
  start:"top 40%",
  end:"top 40%",
  scrub:2,
  // markers:true

 }

    });

    
}
page2();

function ji() {
  gsap.from(".yh h4",{
    y:20,
    opacity:0,
    stagger:0.25,
    duration:1,
    scrollTrigger:{
     trigger:".ko",
     scroller:"#main",
     start:"top 80%",
     end:"top 80%",
     scrub:2,
    //  markers:true
    }
  })

gsap.from(".lo h1",{
y:120,
stagger:0.5,
duration:1,
opacity:0,
scrollTrigger:{
trigger:".ko",
scroller:"#main",
start:"top 70%",
end:"top 70%",
scrub:2,
// markers:true
}
})
  }
  ji();
  function circle(){
    var take = document.querySelector(".take");
var page4 = document.querySelector(".page4");
page4.addEventListener("mousemove",function(dets){
  take.style.left = dets.x+"px"
  take.style.top = dets.y+"px"
  // gsap.to(take,{
    // x:dets.x,
    // y:dets.y
// })


})
page4.addEventListener("mouseenter",function(dets){
  // cur.style.scale ='1'
  gsap.to(take,{
     scale:1 ,
     opacity:1
  })
})
page4.addEventListener("mouseleave",function(dets){
  gsap.to(take,{
    scale:0,
    opacity:0

  })
})



  }
  circle();
  function sanu(){
    gsap.from(".kanu h4",{
      y:20,
      opacity:0,
      stagger:0.25,
      duration:1,
      scrollTrigger:{
       trigger:".sanu",
       scroller:"#main",
       start:"top 80%",
       end:"top 80%",
       scrub:2,
      //  markers:true
      }
    })
    gsap.from(".manu h1",{
      y:120,
      stagger:0.5,
      duration:1,
      opacity:0,
      scrollTrigger:{
      trigger:".sanu",
      scroller:"#main",
      start:"top 70%",
      end:"top 70%",
      scrub:2,
      // markers:true
      }
      })
      
  
  }
  sanu()
  
var tl = gsap.timeline() 
tl.from("#loader h3",{
  x:200,
  opacity:0,
  stagger:0.3,
  duration:1
}) 
tl.to("#loader h3",{
  opacity:0,
  x:-10,
  duration:1,
  stagger:0.1
})
tl.to("#loader",{
  opacity:0,
})
tl.to("#loader",{
  display:"none"
})
tl.from(".page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5
})
function page7(){
  gsap.from(".page7 h1",{
    y:40,
    stagger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
    trigger:".page7",
    scroller:"#main",
    start:"top 85%",
    end:"top 85%",
    scrub:2,
    // markers:true
    }


  })
  gsap.from(".page7 h5",{
    y:40,
    stagger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
    trigger:".page7",
    scroller:"#main",
    start:"top 85%",
    end:"top 85%",
    scrub:2,
    // markers:true
    }


  })


}
page7()
function page3top(){
  gsap.from(".page3top h1",{
    y:-40,
    stagger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
    trigger:".page3top",
    scroller:"#main",
    start:"top 80%",
    end:"top 80%",
    scrub:2,
    // markers:true
    }


  })
  gsap.from(".page3top h4",{
    y:40,
    stagger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
    trigger:".page3top",
    scroller:"#main",
    start:"top 85%",
    end:"top 85%",
    scrub:2,
    // markers:true
    }


  })


}
page3top()
function final(){
  var tl = gsap.timeline()
  tl.from(".page8 h1 span",{
    y:-100,
    stagger:0.3,
    duration:1,
    opacity:0,
    // delay:-0.5,
    scrollTrigger:{
      trigger:".page8",
      scroller:"#main",
      start:"top 50%",
      end:"top -4%",
      scrub:2,
      // markers:true
      }
  
  })
}
final()




