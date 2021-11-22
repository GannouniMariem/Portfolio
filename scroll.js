gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector("#scroll-container")

let height
function setHeight() {
  height = container.clientHeight
}
ScrollTrigger.addEventListener("refreshInit", setHeight)

// smooth scrolling container
gsap.to(container, {
  y: () => -(height - document.documentElement.clientHeight),
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.5,
    invalidateOnRefresh: true
  }
})

const sections = gsap.utils.toArray('.appear-down')

sections.forEach(function (sec, i) {	
  const y = sec.offsetTop - 100
  gsap.fromTo(sec, {
    y: 100,
    opacity: 0,
    scale: 0.9,
  }, {
    y: 0,
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: sec,
      scrub: 1,
      start: 'top bottom',
      end: '+=200',
      markers: false,
    }
  })
})
