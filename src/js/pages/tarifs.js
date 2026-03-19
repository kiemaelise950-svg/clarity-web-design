export const Tarifs = {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <h1>Nos Tarifs</h1>
            <p>Des prix clairs, sans surprise, adaptés à votre budget et à vos objectifs de croissance.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid grid--4 stagger">
            <!-- Starter -->
            <div class="pricing-card">
              <h3 class="pricing-card__name">Starter</h3>
              <div class="pricing-card__price">75k <span>FCFA</span></div>
              <p class="pricing-card__desc">Idéal pour débuter avec une page d'accueil efficace.</p>
              <div class="pricing-card__features">
                <div class="pricing-card__feature"><span class="check">✓</span> 1 Page (Landing)</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Design Professionnel</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Formulaire de Contact</div>
                <div class="pricing-card__feature"><span class="check">✓</span> WhatsApp Intégré</div>
                <div class="pricing-card__feature"><span class="cross">✗</span> Blog non inclus</div>
                <div class="pricing-card__feature"><span class="cross">✗</span> SEO Avancé</div>
              </div>
              <div class="pricing-card__delivery">Livré en 24-48h</div>
              <a href="#/contact?pack=starter" class="btn btn--outline btn--sm">Choisir</a>
            </div>

            <!-- Vitrine -->
            <div class="pricing-card pricing-card--featured">
              <div class="pricing-card__badge">Populaire</div>
              <h3 class="pricing-card__name">Vitrine</h3>
              <div class="pricing-card__price">150k <span>FCFA</span></div>
              <p class="pricing-card__desc">La solution complète pour les PME en pleine croissance.</p>
              <div class="pricing-card__features">
                <div class="pricing-card__feature"><span class="check">✓</span> 3-7 Pages</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Galerie Photos</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Formulaire Avancé</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Optimisation Mobile</div>
                <div class="pricing-card__feature"><span class="check">✓</span> SEO Standard</div>
                <div class="pricing-card__feature"><span class="cross">✗</span> Blog non inclus</div>
              </div>
              <div class="pricing-card__delivery">Livré en 3-5 jours</div>
              <a href="#/contact?pack=vitrine" class="btn btn--primary btn--sm">Choisir</a>
            </div>

            <!-- Business -->
            <div class="pricing-card">
              <h3 class="pricing-card__name">Business</h3>
              <div class="pricing-card__price">300k <span>FCFA</span></div>
              <p class="pricing-card__desc">Pour les entreprises qui veulent dominer leur secteur.</p>
              <div class="pricing-card__features">
                <div class="pricing-card__feature"><span class="check">✓</span> 7-15 Pages</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Blog Intégré</div>
                <div class="pricing-card__feature"><span class="check">✓</span> SEO Avancé</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Google Analytics</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Newsletters</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Formation Incluse</div>
              </div>
              <div class="pricing-card__delivery">Livré en 5-7 jours</div>
              <a href="#/contact?pack=business" class="btn btn--outline btn--sm">Choisir</a>
            </div>

            <!-- E-commerce -->
            <div class="pricing-card">
              <h3 class="pricing-card__name">E-commerce</h3>
              <div class="pricing-card__price">500k <span>+</span></div>
              <p class="pricing-card__desc">Boutique complète avec paiement électronique.</p>
              <div class="pricing-card__features">
                <div class="pricing-card__feature"><span class="check">✓</span> Catalogue Produits</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Panier & Commande</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Orange/Moov Money</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Gestion de Stock</div>
                <div class="pricing-card__feature"><span class="check">✓</span> Dashboard Vendeur</div>
                <div class="pricing-card__feature"><span class="check">✓</span> SEO E-commerce</div>
              </div>
              <div class="pricing-card__delivery">Livré en 7-14 jours</div>
              <a href="#/contact?pack=ecommerce" class="btn btn--outline btn--sm">Choisir</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--gray">
        <div class="container reveal">
          <div class="section__header">
            <h2 class="section__title">Services Additionnels</h2>
            <p class="section__subtitle">Complétez votre pack avec nos services à la carte.</p>
          </div>
          <table class="extras-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Prix Estimé</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nom de domaine (.com)</td><td>10 000 - 15 000 F / an</td></tr>
              <tr><td>Nom de domaine (.bf)</td><td>25 000 - 35 000 F / an</td></tr>
              <tr><td>Hébergement Pro</td><td>5 000 - 15 000 F / mois</td></tr>
              <tr><td>Maintenance Technique</td><td>10 000 - 25 000 F / mois</td></tr>
              <tr><td>Création de Logo</td><td>50 000 - 150 000 F</td></tr>
              <tr><td>Formation Site Web</td><td>25 000 - 50 000 F</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Tarifs FAQ -->
      <section class="section">
        <div class="container--narrow reveal">
          <div class="section__header">
            <h2 class="section__title">Vos questions sur nos tarifs</h2>
          </div>
          <div class="accordion" id="pricing-faq">
            <div class="accordion-item">
              <button class="accordion-header">
                Pourquoi cette fourchette de prix ?
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body">
                <div class="accordion-body__content">
                  Chaque projet est unique. La fourchette permet de s'adapter à la complexité des fonctionnalités souhaitées, au volume de contenu à intégrer et au niveau de personnalisation graphique.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-header">
                Est-ce que je peux payer en plusieurs fois ?
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body">
                <div class="accordion-body__content">
                  Oui, absolument. Nous proposons généralement un paiement en deux ou trois fois : 50% à la commande et le solde à la mise en ligne, ou selon un calendrier défini ensemble.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--dark text-center">
        <div class="container reveal">
          <h2>Pas encore sûr de votre choix ?</h2>
          <p class="section__subtitle" style="margin-bottom: var(--space-xl);">Contactez-nous pour un conseil gratuit et personnalisé selon vos besoins réels.</p>
          <a href="https://wa.me/22600000000" class="btn btn--green btn--lg">Parler à un conseiller</a>
        </div>
      </section>
    `;
  },
  init() {
    this.initAccordion();
  },
  initAccordion() {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        items.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.accordion-body').style.maxHeight = null;
        });
        
        if (!isActive) {
          item.classList.add('active');
          const body = item.querySelector('.accordion-body');
          body.style.maxHeight = body.scrollHeight + "px";
        }
      });
    });
  }
};
