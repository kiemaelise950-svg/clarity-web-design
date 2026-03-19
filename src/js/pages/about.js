export const About = {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <h1>À Propos de Nous</h1>
            <p>L'agence qui démocratise le web professionnel au Burkina Faso grâce à l'innovation.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="service-block reveal">
            <div class="service-block__visual" style="font-size: 8rem;">🤝</div>
            <div class="service-block__content">
              <span class="section__label">Notre Histoire</span>
              <h2 class="section__title">Rendre le web accessible à tous</h2>
              <p>Clarity Web Studio est née d'un constat simple : trop d'entreprises burkinabè sont absentes du web à cause de coûts prohibitifs ou de délais interminables.</p>
              <p>Nous avons décidé de casser ces codes en utilisant l'intelligence artificielle pour automatiser les tâches répétitives et nous concentrer sur ce qui compte vraiment : votre stratégie et votre design.</p>
              <div class="btn-group">
                <a href="#/contact" class="btn btn--primary">Rejoindre l'aventure</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--gray">
        <div class="container">
          <div class="grid grid--3 stagger">
            <div class="card text-center">
              <div class="card__icon card__icon--primary" style="margin: 0 auto var(--space-lg);">🎯</div>
              <h3 class="card__title">Mission</h3>
              <p class="card__text">Digitaliser 1000 PME burkinabè d'ici 2027 avec des solutions premium et accessibles.</p>
            </div>
            <div class="card text-center">
              <div class="card__icon card__icon--accent" style="margin: 0 auto var(--space-lg);">💡</div>
              <h3 class="card__title">Vision</h3>
              <p class="card__text">Devenir la référence de l'innovation digitale en Afrique de l'Ouest.</p>
            </div>
            <div class="card text-center">
              <div class="card__icon card__icon--secondary" style="margin: 0 auto var(--space-lg);">💎</div>
              <h3 class="card__title">Valeurs</h3>
              <p class="card__text">Transparence, Rapidité, Excellence et Proximité avec nos clients locaux.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section text-center">
        <div class="container reveal">
          <span class="section__label">Approche</span>
          <h2 class="section__title">L'IA au service de l'humain</h2>
          <p class="section__subtitle" style="max-width: 800px; margin: 0 auto;">Nous n'utilisons pas l'IA pour vous remplacer, mais pour démultiplier nos capacités. Chaque pixel reste validé par un expert pour garantir une qualité artisanale au prix industriel.</p>
          <div style="font-size: 10rem; margin-top: var(--space-3xl);" class="reveal--scale reveal">🤖 + 🧠 = 🚀</div>
        </div>
      </section>
    `;
  },
  init() {
    console.log('About Page Loaded');
  }
};
