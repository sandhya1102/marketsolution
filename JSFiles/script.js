let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial"),
  dots = document.querySelectorAll(".dot");
function showTestimonial(t) {
  testimonials.forEach((t, e) => {
    t.classList.remove("active"), dots[e].classList.remove("active");
  }),
    testimonials[t].classList.add("active"),
    dots[t].classList.add("active");
}
function currentTestimonial(t) {
  showTestimonial((currentSlide = t));
}
showTestimonial(currentSlide);


gsap.to("#nav",{
    backgroundColor:"#fff",
    duration:0.5,
    height:"100px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top 5%",
        end: "top 2%",
        scrub:3
    }
})

gsap.to("#nav a", { 
    color: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -1%",
        end: "top -13%",
        scrub: 1
    }
});

gsap.from(".about", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 1,
    }
});


