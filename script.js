document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y
    })
})
document.querySelector(".page1").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        transform:'translate(-50%,-50%) scale(1)'
    })
})
document.querySelector(".page1").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        transform:'translate(-50%,-50%) scale(0)'
    })
})
// document.querySelector("#feature").addEventListener("mouseenter",function(){
//     gsap.to(".cursor",{
//         transform:'translate(-50%,-50%) scale(1)'
//     })
// })
// document.querySelector("#feature").addEventListener("mouseleave",function(){
//     gsap.to(".cursor",{
//         transform:'translate(-50%,-50%) scale(1)'
//     })
// })