export const Portfolio = {
  render() {
    const projects = [
      { id: 1, title: "Gourmet Palace", cat: "vitrine", catName: "Site Vitrine", client: "Restaurant", icon: "🍽️", color: "#2d3748" },
      { id: 2, title: "Tech Hub Ouaga", cat: "ecommerce", catName: "E-commerce", client: "Informatique", icon: "💻", color: "#1a365d" },
      { id: 3, title: "Legal Expert BF", cat: "vitrine", catName: "Site Vitrine", client: "Juridique", icon: "⚖️", color: "#2f855a" },
      { id: 4, title: "Safi Mode", cat: "ecommerce", catName: "E-commerce", client: "Boutique", icon: "👗", color: "#c05621" },
      { id: 5, title: "Immo Burkina", cat: "landing", catName: "Landing Page", client: "Immobilier", icon: "🏠", color: "#4a5568" },
      { id: 6, title: "Logo Clarity", cat: "branding", catName: "Branding", client: "Agence", icon: "🎨", color: "#dd6b20" }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <h1>Nos Réalisations</h1>
            <p>Découvrez les projets que nous avons accompagnés vers la réussite digitale au Burkina Faso.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="filter-bar reveal">
            <button class="filter-btn active" data-filter="all">Tous</button>
            <button class="filter-btn" data-filter="vitrine">Sites Vitrine</button>
            <button class="filter-btn" data-filter="ecommerce">E-commerce</button>
            <button class="filter-btn" data-filter="landing">Landing Pages</button>
            <button class="filter-btn" data-filter="branding">Identité Visuelle</button>
          </div>

          <div class="grid grid--3 stagger" id="portfolio-grid">
            ${projects.map(p => `
              <div class="portfolio-item reveal--up reveal" data-category="${p.cat}">
                <div class="portfolio-item__overlay">
                  <h4 class="portfolio-item__title">${p.title}</h4>
                  <span class="portfolio-item__cat">${p.catName} / ${p.client}</span>
                </div>
                <div style="width: 100%; height: 100%; background: ${p.color}; display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">${p.icon}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="section section--dark text-center">
        <div class="container reveal">
          <h2>Prêt à ajouter votre projet à cette liste ?</h2>
          <p class="section__subtitle" style="margin-bottom: var(--space-xl);">Nous sommes impatients de donner vie à votre vision digitale.</p>
          <a href="#/contact" class="btn btn--primary btn--lg">Démarrer mon projet</a>
        </div>
      </section>
    `;
  },
  init() {
    this.initFilters();
  },
  initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        items.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }
};
