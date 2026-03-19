export const Legal = {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <h1>Aspects Légaux</h1>
            <p>Mentions légales et politique de confidentialité de Clarity Web Studio.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container--narrow reveal">
          <h2>1. Mentions Légales</h2>
          <p>Le site <strong>Clarity Web Studio</strong> (claritywebstudio.com) est édité par l'agence éponyme, basée à Ouagadougou, Burkina Faso.</p>
          <p><strong>Dénomination :</strong> Clarity Web Studio</p>
          <p><strong>Siège social :</strong> Secteur 15, Ouagadougou, Burkina Faso</p>
          <p><strong>Email de contact :</strong> <a href="mailto:contact@claritywebstudio.com">contact@claritywebstudio.com</a></p>
          <p><strong>Hébergement :</strong> Ce site est hébergé sur des serveurs sécurisés conformes aux standards internationaux de sécurité et de disponibilité.</p>
          
          <h2 style="margin-top: var(--space-2xl);">2. Politique de Confidentialité</h2>
          <p>Nous attachons une grande importance à la protection de vos données personnelles. En application des lois en vigueur, vous êtes informé(e) de ce qui suit :</p>
          <p><strong>Données collectées :</strong> Les informations recueillies via nos formulaires (nom, email, téléphone, message) sont uniquement destinées à la gestion de vos demandes de devis et à la relation commerciale qui peut en découler.</p>
          <p><strong>Utilisation :</strong> Vos données ne sont jamais vendues, partagées ou cédées à des tiers sans votre consentement explicite.</p>
          <p><strong>Durée de conservation :</strong> Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans le respect de la législation en vigueur.</p>
          <p><strong>Vos droits :</strong> Conformément à la législation applicable, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à l'adresse email ci-dessus.</p>
          
          <h2 style="margin-top: var(--space-2xl);">3. Droits d'auteur & Propriété Intellectuelle</h2>
          <p>L'ensemble du contenu de ce site (textes, images, logos, graphismes, code source) relève de la législation burkinabè et internationale sur le droit d'auteur et la propriété intellectuelle.</p>
          <p>Toute reproduction, représentation, modification ou distribution, totale ou partielle, du contenu de ce site, par quelque procédé que ce soit, est interdite sans l'autorisation préalable et écrite de Clarity Web Studio.</p>
          
          <h2 style="margin-top: var(--space-2xl);">4. Cookies</h2>
          <p>Ce site utilise des cookies techniques essentiels au bon fonctionnement du site. Ces cookies ne collectent aucune donnée personnelle et ne sont pas utilisés à des fins publicitaires.</p>
        </div>
      </section>
    `;
  },
  init() {
    console.log('Legal Page Loaded');
  }
};
