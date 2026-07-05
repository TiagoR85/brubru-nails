import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let isInitialized = false;

export function initAnimations() {
  if (typeof window === 'undefined') return;
  if (isInitialized) return;

  gsap.registerPlugin(ScrollTrigger);
  isInitialized = true;

  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });

  initNavbarAnimation();
  initHeroAnimations();
  initTimelineAnimations();
  initProductAnimations();
  initBenefitsAnimations();
  initAboutAnimations();
  initTestimonialsAnimations();
  initNewsletterAnimation();
  initFooterAnimation();
  initFadeInAnimations();
  initParallaxEffects();
}

function initNavbarAnimation() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  gsap.fromTo(
    navbar,
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
  );
}

function initHeroAnimations() {
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');
  const heroDecorations = document.querySelectorAll('.hero-decoration');

  const heroTl = gsap.timeline({ delay: 0.3 });

  if (heroDecorations.length) {
    heroTl.fromTo(
      heroDecorations,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.1,
      },
      0
    );
  }

  if (heroImage) {
    heroTl.fromTo(
      heroImage,
      { scale: 1.1, opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' },
      {
        scale: 1,
        opacity: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power3.out',
      },
      0.2
    );
  }

  if (heroContent) {
    heroTl.fromTo(
      heroContent.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
      },
      0.4
    );
  }
}

function initTimelineAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineLine = document.querySelector('.timeline-line');

  if (timelineLine) {
    gsap.fromTo(
      timelineLine,
      { scaleY: 0, transformOrigin: 'top' },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
      }
    );
  }

  timelineItems.forEach((item, index) => {
    const dot = item.querySelector('.timeline-dot');
    const card = item.querySelector('.card-premium');

    const itemTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    if (dot) {
      itemTl.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' },
        0
      );
    }

    if (card) {
      itemTl.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -40 : 40,
          y: 20,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
        },
        0.2
      );
    }
  });
}

function initProductAnimations() {
  const productCards = document.querySelectorAll('.product-card');
  const productsSection = document.querySelector('.products-section');

  if (!productsSection || !productCards.length) return;

  const sectionHeading = productsSection.querySelector('.section-heading');
  if (sectionHeading) {
    gsap.fromTo(
      sectionHeading,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: productsSection,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  gsap.fromTo(
    productCards,
    { y: 60, opacity: 0, scale: 0.95 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        from: 'start',
      },
      ease: 'power3.out',
      scrollTrigger: {
        trigger: productsSection,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

function initBenefitsAnimations() {
  const benefitItems = document.querySelectorAll('.benefit-item');
  const benefitsSection = document.querySelector('.benefits-section');

  if (!benefitsSection || !benefitItems.length) return;

  const sectionHeading = benefitsSection.querySelector('.section-heading');
  if (sectionHeading) {
    gsap.fromTo(
      sectionHeading,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: benefitsSection,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  gsap.fromTo(
    benefitItems,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: {
        amount: 0.5,
        grid: 'auto',
        from: 'center',
      },
      scrollTrigger: {
        trigger: benefitsSection,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

function initAboutAnimations() {
  const aboutImage = document.querySelector('.about-image');
  const aboutContent = document.querySelector('.about-content');
  const aboutSection = document.querySelector('.about-section');

  if (!aboutSection) return;

  if (aboutImage) {
    gsap.fromTo(
      aboutImage,
      { x: -60, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  if (aboutContent) {
    const contentChildren = aboutContent.children;
    gsap.fromTo(
      contentChildren,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }
}

function initTestimonialsAnimations() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialsSection = document.querySelector('.testimonials-section');

  if (!testimonialsSection || !testimonialCards.length) return;

  const sectionHeading = testimonialsSection.querySelector('.section-heading');
  if (sectionHeading) {
    gsap.fromTo(
      sectionHeading,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: testimonialsSection,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  gsap.fromTo(
    testimonialCards,
    { y: 50, opacity: 0, rotateY: 5 },
    {
      y: 0,
      opacity: 1,
      rotateY: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: testimonialsSection,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

function initNewsletterAnimation() {
  const newsletterCard = document.querySelector('.newsletter-card');
  const newsletterSection = document.querySelector('.newsletter-section');

  if (!newsletterSection || !newsletterCard) return;

  gsap.fromTo(
    newsletterCard,
    { y: 40, opacity: 0, scale: 0.98 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: newsletterSection,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

function initFooterAnimation() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const footerContent = footer.querySelectorAll('.container-premium > *');
  if (footerContent.length) {
    gsap.fromTo(
      footerContent,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footer,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }
}

function initFadeInAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  fadeElements.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
}

function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  parallaxElements.forEach((el) => {
    const speed = parseFloat(el.getAttribute('data-parallax') || '0.2');

    gsap.to(el, {
      y: () => -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

export function refreshScrollTrigger() {
  if (typeof window === 'undefined') return;
  ScrollTrigger.refresh();
}

export function cleanupAnimations() {
  if (typeof window === 'undefined') return;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  isInitialized = false;
}
