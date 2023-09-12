var tl =  gsap.timeline()
tl.from(".nav img",{
  
    y:-100,
    duration:0.5,

    scale:0.5
   
   })
   tl.from(".navpart1,.navpart2",{
 
        y:-100,
        duration:0.4,
       
        opacity:0,
       stagger:1
    
   })