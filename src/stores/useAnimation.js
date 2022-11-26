import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useAnimation () {

    function animate() {
        console.log('hello from useAnimation')
        gsap.utils.toArray(".up").forEach(layer => {
            gsap.from(layer, {
                y: 70,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power2.inOut",
                scrollTrigger: {
                trigger: layer,
                // scrub: true,
                toggleActions: 'play none none reverse',
                start: "top bottom",
                // start:"top 100%",
                end:"bottom top",
            }
            });
        })
    }
    return {
        animate
      }
}