gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    // x: 500,
    duration: 3,
    ScrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end: "center 20%",
        markers:{
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "4rem",
            indent: 200
        },
    }
})