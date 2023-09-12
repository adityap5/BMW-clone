var tl = gsap.timeline()
// gsap.from("", {

//     y: -100,
//     duration: 0.4,
// delay: 0.3,
//     scale: 0.5

// })
tl.from(".navpart1,.navpart2", {

    y: -100,
    duration: 0.5,
    opacity: 0.4,
    stagger: 1

})
tl.from(".heading h5 ,.heading h2,.heading h4 ,.heading button ", {

    x: -100,
    duration: 0.4,

    opacity: 0,
    stagger: 0.4

})