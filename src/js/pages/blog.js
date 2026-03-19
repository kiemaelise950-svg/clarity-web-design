export const Blog = {
  render() {
    const posts = [
      {
        id: 1,
        title: "Pourquoi votre entreprise au Burkina a besoin d'un site web en 2025",
        excerpt: "Le marché digital explose en Afrique de l'Ouest. Découvrez pourquoi posséder votre propre plateforme est devenu vital pour survivre et prospérer.",
        cat: "Stratégie",
        date: "15 Mars 2025",
        readTime: "5 min",
        img: "🌐"
      },
      {
        id: 2,
        title: "Site web vs Page Facebook : le match pour la crédibilité",
        excerpt: "Beaucoup d'entrepreneurs se contentent d'une page Facebook. Voici pourquoi c'est une erreur stratégique majeure qui vous coûte des clients chaque jour.",
        cat: "Conseils",
        date: "10 Mars 2025",
        readTime: "4 min",
        img: "⚔️"
      },
      {
        id: 3,
        title: "Comment l'IA révolutionne la création de sites web en Afrique",
        excerpt: "L'intelligence artificielle permet désormais de créer des sites professionnels en 48h. Tout ce que vous devez savoir sur cette révolution.",
        cat: "Technologie",
        date: "5 Mars 2025",
        readTime: "6 min",
        img: "🤖"
      },
      {
        id: 4,
        title: "10 erreurs qui font fuir vos visiteurs (et comment les éviter)",
        excerpt: "Votre site a peut-être des problèmes qui font partir vos clients. Découvrez les erreurs les plus courantes et comment les corriger rapidement.",
        cat: "Design",
        date: "28 Fév 2025",
        readTime: "7 min",
        img: "🎯"
      },
      {
        id: 5,
        title: "Mobile Money : intégrer Orange Money et Moov Money à votre boutique",
        excerpt: "Au Burkina Faso, le paiement mobile est roi. Apprenez comment l'intégrer à votre site e-commerce pour booster vos ventes.",
        cat: "E-commerce",
        date: "20 Fév 2025",
        readTime: "8 min",
        img: "💳"
      },
      {
        id: 6,
        title: "SEO local : comment apparaître sur Google quand on cherche votre métier à Ouaga",
        excerpt: "Être visible sur Google à Ouagadougou n'est pas réservé aux grandes entreprises. Voici les techniques simples que nous utilisons pour nos clients.",
        cat: "SEO",
        date: "12 Fév 2025",
        readTime: "5 min",
        img: "🔍"
      }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <h1>Notre Blog</h1>
            <p>Conseils, astuces et actualités du digital pour les entreprises au Burkina Faso.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid grid--3 stagger">
            ${posts.map(post => `
              <article class="blog-card reveal--up reveal">
                <div class="blog-card__image" style="display: flex; align-items: center; justify-content: center; font-size: 4rem; background: var(--color-gray-50);">
                  ${post.img}
                </div>
                <div class="blog-card__body">
                  <div class="blog-card__meta">
                    <span class="blog-card__category">${post.cat}</span>
                    <span class="blog-card__date">${post.date}</span>
                    <span>⏱ ${post.readTime}</span>
                  </div>
                  <h3 class="blog-card__title">${post.title}</h3>
                  <p class="blog-card__excerpt">${post.excerpt}</p>
                  <a href="#/blog/${post.id}" class="blog-card__link">Lire la suite →</a>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="section section--gray">
        <div class="container reveal">
          <h2 class="section__title">Abonnez-vous à notre newsletter</h2>
          <p class="section__subtitle">Recevez nos meilleurs conseils directement dans votre boîte mail. Pas de spam, désabonnement en un clic.</p>
          <form class="newsletter-form reveal--up reveal" id="newsletter-form">
            <input type="email" class="form-input" placeholder="Votre adresse email" required>
            <button type="submit" class="btn btn--primary">S'abonner gratuitement</button>
          </form>
          <div id="newsletter-success" style="display:none; margin-top: var(--space-lg); padding: var(--space-lg); background: rgba(56,161,105,0.1); border: 1px solid rgba(56,161,105,0.3); border-radius: var(--radius-md); color: var(--color-secondary); font-weight: var(--fw-semibold); text-align: center;">
            ✅ Merci ! Vous êtes bien abonné(e) à notre newsletter.
          </div>
        </div>
      </section>
    `;
  },
  init() {
    const form = document.getElementById('newsletter-form');
    const success = document.getElementById('newsletter-success');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        success.style.display = 'block';
      });
    }
  }
};
