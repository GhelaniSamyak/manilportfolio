// Custom Cursor
gsap.registerPlugin(ScrollTrigger);
const cursor = document.querySelector('.custom-cursor');
window.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const heroHeight = document.querySelector('.hero').offsetHeight;

    if (window.scrollY > heroHeight * 0.5) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

// GSAP animations
gsap.from(".main-title", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power4.out"
});

gsap.from(".tagline", {
  duration: 2.2,
  y: 20,
  opacity: 0,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from(".btn", {
  duration: 1,
  opacity: 0,
  scale: 0.8,
  delay: 0.6,
  ease: "back.out(1.7)"
});

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 3,
    ease: "power2.out"
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Paragraph animation
  gsap.utils.toArray(".about-text p").forEach((para, i) => {
    gsap.to(para, {
      scrollTrigger: {
        trigger: para,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.2
    });
  });

  // Skill icons animation
  gsap.to(".skill", {
    scrollTrigger: {
      trigger: ".skills-icons",
      start: "top 80%",
    },
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });
});

gsap.from(".about-image img", {
  scrollTrigger: {
    trigger: ".about-image img",
    start: "top 85%",
  },
  opacity: 0,
  x: -50,
  duration: 3.2,
  ease: "power3.out"
});

