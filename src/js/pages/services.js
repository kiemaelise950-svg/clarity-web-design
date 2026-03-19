export const Services = {
  render() {
    const services = [
      {
        id: "web",
        title: "Création de Sites Web",
        label: "Digitalisation",
        desc: "Nous concevons des sites web modernes, rapides et entièrement administrables. Que vous ayez besoin d'un site vitrine pour présenter votre activité ou d'un catalogue en ligne, nous avons la solution.",
        includes: ["Design personnalisé", "Optimisation SEO de base", "Hébergement sécurisé", "Interface d'administration", "100% Mobile Responsive"],
        icon: "🌐"
      },
      {
        id: "ecommerce",
        title: "E-commerce & Paiement",
        label: "Ventes en ligne",
        desc: "Transformez votre boutique physique en une plateforme de vente mondiale. Nous intégrons les solutions de paiement locales (Orange Money, Moov Money) pour faciliter les achats de vos clients au Burkina.",
        includes: ["Gestion de stock", "Panier d'achat", "Paiement Mobile Money", "Tableau de bord de ventes", "Notifications par WhatsApp/SMS"],
        icon: "🛒"
      },
      {
        id: "branding",
        title: "Identité Visuelle",
        label: "Branding",
        desc: "Votre logo est la première impression que vous donnez. Nous créons des identités visuelles fortes et mémorables qui reflètent les valeurs et le professionnalisme de votre entreprise.",
        includes: ["Création de Logo", "Charte Graphique", "Cartes de visite", "Supports pour réseaux sociaux", "Flyers & Affiches"],
        icon: "🎨"
      },
      {
        id: "social",
        title: "Gestion Réseaux Sociaux",
        label: "Social Media",
        desc: "Soyez là où vos clients passent leur temps. Nous gérons votre présence sur Facebook, TikTok et Instagram pour engager votre communauté et générer des leads qualifiés.",
        includes: ["Création de contenu", "Planning éditorial", "Animation de communauté", "Campagnes publicitaires", "Rapports de performance"],
        icon: "📱"
      },
      {
        id: "maintenance",
        title: "Maintenance & Support",
        label: "Sérénité",
        desc: "Un site web doit évoluer et rester sécurisé. Nous assurons la maintenance technique, les mises à jour et les sauvegardes régulières pour que vous puissiez vous concentrer sur votre business.",
        includes: ["Mises à jour régulières", "Sauvegardes quotidiennes", "Support technique prioritaire", "Sécurité renforcée", "Modifications mensuelles"],
        icon: "🛠️"
      }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <h1>Nos Services</h1>
            <p>Des solutions digitales complètes pour propulser votre entreprise vers de nouveaux sommets.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${services.map(s => `
            <div class="service-block reveal--up reveal">
              <div class="service-block__visual">
                ${s.icon}
              </div>
              <div class="service-block__content">
                <span class="section__label">${s.label}</span>
                <h3 class="service-block__title">${s.title}</h3>
                <p>${s.desc}</p>
                <ul class="service-block__list">
                  ${s.includes.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <a href="#/contact" class="btn btn--primary">Demander un devis</a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="section section--gray text-center">
        <div class="container reveal">
          <h2 class="section__title">Un projet spécifique en tête ?</h2>
          <p class="section__subtitle">Nous aimons les défis. Si vous avez un besoin qui ne figure pas ici, parlons-en !</p>
          <a href="#/contact" class="btn btn--outline btn--lg" style="margin-top: var(--space-xl);">Discutons de votre projet</a>
        </div>
      </section>
    `;
  },
  init() {
    console.log('Services Page Loaded');
  }
};
