export const Home = {
  render() {
    return `
      <!-- Hero Section -->
      <section class="hero-home">
        <div class="container hero-home__inner">
          <div class="hero-home__content reveal--left reveal">
            <div class="hero-home__badge">
              <span>Nouveau</span> Création de sites avec l'IA en ⚡ 48h
            </div>
            <h1 class="hero-home__title">Des sites web professionnels, créés avec l'IA, livrés en un <span class="text-accent">temps record</span>.</h1>
            <p class="hero-home__subtitle">Nous aidons les entreprises burkinabè à se démarquer en ligne avec des sites modernes, performants et optimisés pour le marché local.</p>
            <div class="btn-group">
              <a href="#/contact" class="btn btn--primary">Demander un devis gratuit</a>
              <a href="#/portfolio" class="btn btn--secondary">Voir nos réalisations</a>
            </div>
          </div>
          <div class="hero-home__visual reveal--scale reveal">
            <div class="hero-stat-float">
              <div class="hero-stat-float__number">50+</div>
              <div class="hero-stat-float__label">Sites créés</div>
            </div>
            <div class="hero-mockup">
              <div class="hero-mockup__bar">
                <div class="hero-mockup__dot hero-mockup__dot--red"></div>
                <div class="hero-mockup__dot hero-mockup__dot--yellow"></div>
                <div class="hero-mockup__dot hero-mockup__dot--green"></div>
                <div class="hero-mockup__url">claritywebstudio.com</div>
              </div>
              <div class="hero-mockup__screen">
                <div class="hero-mockup__line hero-mockup__line--accent"></div>
                <div class="hero-mockup__line hero-mockup__line--medium" style="margin-top: 14px;"></div>
                <div class="hero-mockup__line hero-mockup__line--long"></div>
                <div class="hero-mockup__line hero-mockup__line--short"></div>
                <div class="hero-mockup__grid">
                  <div class="hero-mockup__block"></div>
                  <div class="hero-mockup__block"></div>
                  <div class="hero-mockup__block"></div>
                </div>
                <div class="hero-mockup__line hero-mockup__line--medium" style="margin-top: 14px;"></div>
                <div class="hero-mockup__line hero-mockup__line--long"></div>
              </div>
              <div class="hero-mockup__badge-box">
                ✅ Site livré en <span class="badge-tag">48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Problem/Solution -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <span class="section__label">Visibilité</span>
            <h2 class="section__title">Votre entreprise mérite d'être visible en ligne</h2>
            <p class="section__subtitle">Ne laissez pas vos concurrents prendre toute la place. Une présence digitale n'est plus une option en 2025.</p>
          </div>
          <div class="grid grid--3 stagger">
            <div class="card card--problem">
              <div class="card__icon card__icon--accent">❌</div>
              <h3 class="card__title">Perte de Clients</h3>
              <p class="card__text">Vous perdez des clients parce qu'on ne vous trouve pas sur Google ou les réseaux sociaux.</p>
            </div>
            <div class="card card--problem">
              <div class="card__icon card__icon--accent">❌</div>
              <h3 class="card__title">Site Obsolète</h3>
              <p class="card__text">Votre site actuel ne reflète plus la qualité de votre travail ou ne fonctionne pas sur mobile.</p>
            </div>
            <div class="card card--problem">
              <div class="card__icon card__icon--accent">❌</div>
              <h3 class="card__title">Complexité</h3>
              <p class="card__text">Créer un site vous semble compliqué, lent et trop coûteux pour votre budget actuel.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Overview -->
      <section class="section section--gray">
        <div class="container">
          <div class="section__header reveal">
            <span class="section__label">Expertise</span>
            <h2 class="section__title">Ce que nous faisons pour vous</h2>
            <p class="section__subtitle">Des solutions digitales complètes adaptées aux réalités du marché burkinabè.</p>
          </div>
          <div class="grid grid--4 stagger">
            <div class="card">
              <div class="card__icon card__icon--primary">🌐</div>
              <h3 class="card__title">Sites Vitrines</h3>
              <p class="card__text">Des sites modernes pour présenter votre activité de manière professionnelle.</p>
            </div>
            <div class="card">
              <div class="card__icon card__icon--secondary">🛒</div>
              <h3 class="card__title">E-commerce</h3>
              <p class="card__text">Vendez vos produits en ligne avec intégration Orange/Moov Money.</p>
            </div>
            <div class="card">
              <div class="card__icon card__icon--accent">🎨</div>
              <h3 class="card__title">Identité Visuelle</h3>
              <p class="card__text">Logos et chartes graphiques qui marquent les esprits.</p>
            </div>
            <div class="card">
              <div class="card__icon card__icon--primary">📱</div>
              <h3 class="card__title">Réseaux Sociaux</h3>
              <p class="card__text">Boostez votre visibilité sur Facebook, TikTok et Instagram.</p>
            </div>
          </div>
          <div class="text-center" style="margin-top: var(--space-3xl);">
            <a href="#/services" class="btn btn--outline">Découvrir tous nos services</a>
          </div>
        </div>
      </section>

      <!-- Why Us -->
      <section class="section section--dark">
        <div class="container">
          <div class="section__header reveal">
            <span class="section__label">Différence</span>
            <h2 class="section__title">Pourquoi choisir Clarity Web Studio ?</h2>
            <p class="section__subtitle">Nous combinons l'expertise humaine et la puissance de l'IA pour vous offrir le meilleur rapport qualité-prix.</p>
          </div>
          <div class="grid grid--4 stagger">
            <div class="stat-item">
              <div class="stat-item__number" data-count="48" data-suffix="h">0h</div>
              <div class="stat-item__label">Délai de Livraison</div>
            </div>
            <div class="stat-item">
              <div class="stat-item__number" data-count="50" data-suffix="+">0+</div>
              <div class="stat-item__label">Sites Créés</div>
            </div>
            <div class="stat-item">
              <div class="stat-item__number" data-count="100" data-suffix="%">0%</div>
              <div class="stat-item__label">Satisfaction Client</div>
            </div>
            <div class="stat-item">
              <div class="stat-item__number" data-count="24" data-suffix="/7">0/7</div>
              <div class="stat-item__label">Support Technique</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio Preview -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <span class="section__label">Réalisations</span>
            <h2 class="section__title">Derniers projets</h2>
            <p class="section__subtitle">Quelques exemples de sites web que nous avons conçus pour nos clients.</p>
          </div>
          <div class="grid grid--3 stagger">
            <div class="portfolio-item">
              <div class="portfolio-item__overlay">
                <h4 class="portfolio-item__title">Gourmet Palace</h4>
                <span class="portfolio-item__cat">Site Vitrine / Restaurant</span>
              </div>
              <div style="width: 100%; height: 100%; background: #2d3748; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">🍽️</div>
            </div>
            <div class="portfolio-item">
              <div class="portfolio-item__overlay">
                <h4 class="portfolio-item__title">Tech Hub Ouaga</h4>
                <span class="portfolio-item__cat">E-commerce / Informatique</span>
              </div>
              <div style="width: 100%; height: 100%; background: #1a365d; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">💻</div>
            </div>
            <div class="portfolio-item">
              <div class="portfolio-item__overlay">
                <h4 class="portfolio-item__title">Legal Expert BF</h4>
                <span class="portfolio-item__cat">Site Vitrine / Juridique</span>
              </div>
              <div style="width: 100%; height: 100%; background: #2f855a; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">⚖️</div>
            </div>
          </div>
          <div class="text-center" style="margin-top: var(--space-3xl);">
            <a href="#/portfolio" class="btn btn--outline">Voir tout le portfolio</a>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="section section--gray">
        <div class="container--narrow">
          <div class="section__header reveal">
            <span class="section__label">Témoignages</span>
            <h2 class="section__title">Ce que disent nos clients</h2>
          </div>
          <div class="carousel reveal--up reveal">
            <div class="carousel__track" id="testimonial-track">
              <!-- Slide 1 -->
              <div class="carousel__slide">
                <div class="testimonial-card">
                  <div class="testimonial-card__stars">★★★★★</div>
                  <p class="testimonial-card__quote">L'équipe de Clarity Web Studio a transformé notre vision en réalité en un temps record. Leur professionnalisme au Burkina est inégalé.</p>
                  <div class="testimonial-card__author">
                    <div class="testimonial-card__avatar">SM</div>
                    <div class="testimonial-card__info">
                      <h4>Seydou Maïga</h4>
                      <p>PDG, Logistics Solutions BF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel__dots" id="testimonial-dots">
              <button class="carousel__dot active"></button>
              <button class="carousel__dot"></button>
              <button class="carousel__dot"></button>
            </div>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section class="section">
        <div class="container">
          <div class="section__header reveal">
            <span class="section__label">Méthode</span>
            <h2 class="section__title">Comment ça marche ?</h2>
            <p class="section__subtitle">Un processus simple et transparent pour lancer votre site web sereinement.</p>
          </div>
          <div class="grid grid--4 stagger">
            <div class="process-step">
              <div class="process-step__number">1</div>
              <h3 class="process-step__title">Briefing</h3>
              <p class="process-step__text">Vous nous contactez pour un briefing gratuit de votre projet.</p>
            </div>
            <div class="process-step">
              <div class="process-step__number">2</div>
              <h3 class="process-step__title">Maquette</h3>
              <p class="process-step__text">Nous créons votre maquette personnalisée pour validation.</p>
            </div>
            <div class="process-step">
              <div class="process-step__number">3</div>
              <h3 class="process-step__title">Développement</h3>
              <p class="process-step__text">Nous développons votre site avec puissance grâce à l'IA.</p>
            </div>
            <div class="process-step">
              <div class="process-step__number">4</div>
              <h3 class="process-step__title">Lancement</h3>
              <p class="process-step__text">Votre site est en ligne et vous commencez à briller !</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section section--dark" style="background: var(--gradient-hero); overflow: hidden; position: relative;">
        <div class="container text-center reveal--up reveal">
          <h2 style="font-size: var(--fs-h1); margin-bottom: var(--space-lg);">Prêt à propulser votre entreprise ?</h2>
          <p style="color: rgba(255,255,255,0.7); font-size: var(--fs-body-lg); max-width: 600px; margin: 0 auto var(--space-2xl);">Obtenez un devis gratuit en moins de 24h et démarquez-vous dès maintenant.</p>
          <div class="btn-group" style="justify-content: center;">
            <a href="#/contact" class="btn btn--primary btn--lg">Demander mon devis</a>
            <a href="https://wa.me/22675086171?text=Bonjour%2C%20je%20souhaite%20un%20devis%20urgent%20pour%20mon%20site%20web" class="btn btn--green btn--lg">Nous appeler sur WhatsApp</a>
          </div>
        </div>
      </section>
    `;
  },
  init() {
    this.initCarousel();
  },
  initCarousel() {
    const track = document.getElementById('testimonial-track');
    const dots = document.querySelectorAll('.carousel__dot');
    let currentIndex = 0;

    // Simple placeholder testimonials data to simulate rotation
    const testimonials = [
      { name: "Seydou Maïga", role: "PDG, Logistics Solutions BF", text: "L'équipe de Clarity Web Studio a transformé notre vision en réalité en un temps record. Leur professionnalisme au Burkina est inégalé." },
      { name: "Awa Traoré", role: "Fondatrice, Mode & Style", text: "Mon e-commerce fonctionne parfaitement. Les paiements par Orange Money ont boosté mes ventes instantanément." },
      { name: "Paul Kaboré", role: "Directeur, Cabinet Expert", text: "Un site vitrine élégant qui a immédiatement renforcé notre crédibilité auprès de nos partenaires internationaux." }
    ];

    const renderSlide = (index) => {
      const t = testimonials[index];
      return `
        <div class="carousel__slide">
          <div class="testimonial-card">
            <div class="testimonial-card__stars">★★★★★</div>
            <p class="testimonial-card__quote">${t.text}</p>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar">${t.name.split(' ').map(n=>n[0]).join('')}</div>
              <div class="testimonial-card__info">
                <h4>${t.name}</h4>
                <p>${t.role}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    };

    const updateCarousel = (index) => {
      track.style.opacity = 0;
      setTimeout(() => {
        track.innerHTML = renderSlide(index);
        track.style.opacity = 1;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
      }, 300);
    };

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
      });
    });

    // Auto rotation
    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateCarousel(currentIndex);
    }, 5000);
  }
};
