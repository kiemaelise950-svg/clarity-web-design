export const Contact = {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="reveal">
            <h1>Contactez-nous</h1>
            <p>Un projet ? Une question ? Notre équipe est prête à vous répondre en moins de 24h.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid grid--2 stagger">
            <!-- Form -->
            <div class="reveal--left reveal">
              <div class="card" style="padding: var(--space-2xl);">
                <h3 class="section__title">Envoyez-nous un message</h3>
                <form id="contact-form">
                  <div class="form-group">
                    <label class="form-label">Nom complet <span class="required">*</span></label>
                    <input type="text" name="nom" class="form-input" placeholder="Ex: Jean Traoré" required>
                  </div>
                  <div class="grid grid--2">
                    <div class="form-group">
                      <label class="form-label">Email <span class="required">*</span></label>
                      <input type="email" name="email" class="form-input" placeholder="jean@exemple.com" required>
                    </div>
                    <div class="form-group">
                      <label class="form-label">WhatsApp <span class="required">*</span></label>
                      <input type="tel" name="whatsapp" class="form-input" placeholder="+226 XX XX XX XX" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Service souhaité</label>
                    <select name="service" class="form-select">
                      <option value="vitrine">Site Vitrine</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="branding">Identité Visuelle</option>
                      <option value="social">Réseaux Sociaux</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Votre message <span class="required">*</span></label>
                    <textarea name="message" class="form-textarea" placeholder="Décrivez brièvement votre projet..." required></textarea>
                  </div>
                  <button type="submit" class="btn btn--primary btn--lg" style="width: 100%;">Envoyer ma demande</button>
                </form>
              </div>
            </div>

            <!-- Info -->
            <div class="reveal--right reveal">
              <div style="padding: var(--space-xl) 0;">
                <h3 class="section__title">Autres moyens de contact</h3>
                <p class="section__subtitle">Nous sommes basés à Ouagadougou mais nous travaillons avec des clients partout au Burkina et à l'international.</p>
                
                <div style="margin-top: var(--space-2xl);">
                  <div style="display: flex; gap: var(--space-md); margin-bottom: var(--space-xl);">
                    <div class="card__icon card__icon--accent" style="flex-shrink: 0; width: 48px; height: 48px;">📍</div>
                    <div>
                      <h4 style="margin-bottom: 5px;">Localisation</h4>
                      <p style="margin: 0; font-size: var(--fs-small);">Ouagadougou, Secteur 15, Burkina Faso</p>
                    </div>
                  </div>
                  
                  <div style="display: flex; gap: var(--space-md); margin-bottom: var(--space-xl);">
                    <div class="card__icon card__icon--primary" style="flex-shrink: 0; width: 48px; height: 48px;">📱</div>
                    <div>
                      <h4 style="margin-bottom: 5px;">WhatsApp / Téléphone</h4>
                      <p style="margin: 0; font-size: var(--fs-small);"><a href="https://wa.me/22675086171">+226 75 08 61 71</a></p>
                    </div>
                  </div>
                  
                  <div style="display: flex; gap: var(--space-md); margin-bottom: var(--space-xl);">
                    <div class="card__icon card__icon--secondary" style="flex-shrink: 0; width: 48px; height: 48px;">📧</div>
                    <div>
                      <h4 style="margin-bottom: 5px;">Email</h4>
                      <p style="margin: 0; font-size: var(--fs-small);"><a href="mailto:contact@claritywebstudio.com">contact@claritywebstudio.com</a></p>
                    </div>
                  </div>
                </div>

                <div class="footer__socials" style="margin-top: var(--space-3xl);">
                  <!-- Social links can be bigger here -->
                  <a href="#" class="social-link" style="width: 50px; height: 50px;"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
                  <a href="#" class="social-link" style="width: 50px; height: 50px;"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg></a>
                  <a href="#" class="social-link" style="width: 50px; height: 50px;"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 6.34 0 006.34-6.34V8.89a8.28 8.28 0 004.76 1.52V6.97a4.84 4.84 0 01-1-.28z"/></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mini Map Placeholder -->
      <section class="section section--gray" style="padding: 0;">
        <div style="width: 100%; height: 400px; background: #cbd5e0; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: #4a5568;">
          📍 Google Maps (Ouagadougou)
        </div>
      </section>
    `;
  },
  init() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // État de chargement
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      // Collecte des données du formulaire
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        // Envoi vers Formspree → arrivée sur kiemaelise950@gmail.com
        const response = await fetch('https://formspree.io/f/kiemaelise950@gmail.com', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          // ✅ Succès
          form.innerHTML = `
            <div style="text-align: center; padding: var(--space-3xl) 0;">
              <div style="font-size: 4rem; margin-bottom: var(--space-lg);">✅</div>
              <h3 style="color: var(--color-secondary); margin-bottom: var(--space-md);">Message envoyé !</h3>
              <p style="color: var(--color-gray-500);">
                Merci pour votre message. Notre équipe vous contactera dans les 
                <strong>24 prochaines heures</strong> via WhatsApp ou email.
              </p>
              <a href="https://wa.me/22675086171?text=Bonjour%2C%20je%20viens%20de%20vous%20envoyer%20un%20message%20depuis%20votre%20site."
                 target="_blank" rel="noopener" class="btn btn--green" style="margin-top: var(--space-xl);">
                📱 Nous contacter directement sur WhatsApp
              </a>
            </div>
          `;
        } else {
          // ❌ Erreur serveur
          throw new Error('Formspree error');
        }
      } catch (err) {
        // Fallback : réactiver le bouton + afficher l'erreur
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';

        // Afficher le message d'erreur sous le bouton
        let errorMsg = form.querySelector('.form-error-msg');
        if (!errorMsg) {
          errorMsg = document.createElement('p');
          errorMsg.className = 'form-error-msg';
          errorMsg.style.cssText = 'color: #e53e3e; font-size: var(--fs-small); margin-top: var(--space-md); text-align: center;';
          form.appendChild(errorMsg);
        }
        errorMsg.textContent = '⚠️ Erreur d\'envoi. Contactez-nous directement sur WhatsApp.';
      }
    });
  }
};
