import { Home } from './pages/home.js';
import { Services } from './pages/services.js';
import { Portfolio } from './pages/portfolio.js';
import { Tarifs } from './pages/tarifs.js';
import { Blog } from './pages/blog.js';
import { BlogArticle } from './pages/blog-article.js';
import { About } from './pages/about.js';
import { Contact } from './pages/contact.js';
import { Legal } from './pages/legal.js';

/**
 * Simple Hash-based SPA Router
 */
export const router = {
  routes: {
    '/': Home,
    '/services': Services,
    '/portfolio': Portfolio,
    '/tarifs': Tarifs,
    '/blog': Blog,
    '/a-propos': About,
    '/contact': Contact,
    '/mentions-legales': Legal,
    '/politique-confidentialite': Legal
  },

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  },

  handleRoute() {
    const fullHash = window.location.hash.slice(1) || '/';
    const parts = fullHash.split('/').filter(Boolean);
    
    const appContainer = document.getElementById('app');

    // Fade out
    appContainer.style.opacity = 0;

    setTimeout(() => {
      let html = '';
      let page = null;

      // Handle /blog/:id
      if (parts[0] === 'blog' && parts[1]) {
        html = BlogArticle.render(parts[1]);
        page = BlogArticle;
      } else {
        const routeKey = fullHash === '' ? '/' : (fullHash.startsWith('/') ? fullHash : '/' + fullHash);
        // Try exact match, then first segment match
        let matched = this.routes[routeKey];
        if (!matched && parts.length) {
          matched = this.routes['/' + parts[0]];
        }
        page = matched || Home;

        if (!matched && fullHash !== '/') {
          // 404
          html = this._render404();
        } else {
          html = page.render();
        }
      }

      appContainer.innerHTML = html;

      // Update active nav link
      this.updateActiveNav(fullHash);

      // Initialize page scripts
      if (page && page.init) page.init();

      // Re-trigger animations
      if (window.app && window.app.refreshObserver) {
        window.app.refreshObserver();
      }

      // Fade in
      appContainer.style.opacity = 1;
    }, 200);
  },

  _render404() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <h1>404</h1>
            <p>Oups ! Cette page n'existe pas ou a été déplacée.</p>
          </div>
        </div>
      </section>
      <section class="section text-center">
        <div class="container reveal">
          <div style="font-size: 6rem; margin-bottom: var(--space-xl);">🔍</div>
          <h2 style="margin-bottom: var(--space-lg);">Page introuvable</h2>
          <p class="section__subtitle" style="margin-bottom: var(--space-2xl);">La page que vous cherchez n'existe pas. Retournez à l'accueil pour continuer.</p>
          <a href="#/" class="btn btn--primary btn--lg">Retour à l'accueil</a>
        </div>
      </section>
    `;
  },

  updateActiveNav(hash) {
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href').slice(1) || '/';
      if (href === hash || (hash.startsWith(href) && href !== '/')) {
        link.classList.add('active');
      } else if (href === '/' && hash === '/') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
};
