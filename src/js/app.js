import { router } from './router.js';

/**
 * Main Application Module
 */
class App {
  constructor() {
    this.init();
  }

  init() {
    // Initialize Navigation
    this.initNav();
    
    // Initialize Intersection Observer for Animations
    this.initScrollAnimations();
    
    // Initialize Router
    router.init();
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      this.closeMobileMenu();
      this.scrollToTop();
    });

    console.log('Clarity Web Studio App Initialized');
  }

  initNav() {
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    
    // Scroll event for header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });
  }

  closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // If it's a counter, start it
          if (entry.target.hasAttribute('data-count')) {
            this.animateCounter(entry.target);
          }
          
          // Once animated, we can stop observing if needed
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Watch for .reveal and .stagger elements
    // Note: Since content is dynamic, we'll need to call this after each route change
    this.refreshObserver = () => {
      document.querySelectorAll('.reveal, .stagger, [data-count]').forEach(el => {
        observer.observe(el);
      });
    };

    // Initial run
    this.refreshObserver();
  }

  animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = t => t * (2 - t);
      
      const current = Math.floor(easeOutQuad(progress) * target);
      el.textContent = current + (el.getAttribute('data-suffix') || '');

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }
}

// Global app instance
window.app = new App();
