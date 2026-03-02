import logo from './assets/logo.jpg'
import cardFront from './assets/card-front.jpg'
import stamp from './assets/stamp.jpg'

function Badge({ children }) {
  return <span className="badge">{children}</span>
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="sectionTitle">
      {eyebrow ? <div className="sectionTitle__eyebrow">{eyebrow}</div> : null}
      <h2 className="sectionTitle__title">{title}</h2>
      {subtitle ? <p className="sectionTitle__subtitle">{subtitle}</p> : null}
    </div>
  )
}

export default function App() {
  const phone = '06 66 27 86 18'
  const phoneHref = 'tel:+33666278618'
  const email = 'contact@n-vs.fr'
  const address = '9, rue de la Mare-aux Chevaux, 27930 Angerville-la-Campagne'
  const siret = '530 578 830 00016'

  return (
    <div className="page">
      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="#top" aria-label="NVS Transport">
            <div className="brand__mark" aria-hidden="true">
              <img src={logo} alt="" />
            </div>
            <div className="brand__text">
              <div className="brand__name">NVS Transport</div>
              <div className="brand__tagline">Transport personnalisé à la demande</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#zones">Zones & trajets</a>
            <a href="#contact" className="nav__cta">Devis</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="hero__badges">
                <Badge>Groupe</Badge>
                <Badge>Individuel</Badge>
                <Badge>Longue distance</Badge>
              </div>

              <h1 className="hero__title">
                Navettes <span className="accent">Aéroports</span> & <span className="accent">Gares</span><br />
                et autres destinations
              </h1>

              <p className="hero__lead">
                Un transport simple, ponctuel et adapté à ton besoin : trajets réguliers ou occasionnels,
                déplacements privés ou professionnels.
              </p>

              <div className="hero__actions">
                <a className="btn btn--primary" href={phoneHref}>Appeler</a>
                <a className="btn btn--ghost" href={`mailto:${email}?subject=Demande%20de%20devis%20-%20NVS%20Transport`}>
                  Envoyer un email
                </a>
              </div>

              <div className="hero__stats">
                <Stat label="Réponse" value="Rapide" />
                <Stat label="Trajets" value="À la demande" />
                <Stat label="Service" value="Sur-mesure" />
              </div>

              <div className="hero__contactLine">
                <span className="muted">Contact :</span>
                <a href={phoneHref}>{phone}</a>
                <span className="dot">•</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>

            <div className="hero__media">
              <div className="mediaCard">
                <img src={cardFront} alt="Carte NVS Transport" />
              </div>
              <div className="mediaNote">
                <div className="mediaNote__title">Devis & réservation</div>
                <div className="mediaNote__text">
                  Appelle ou écris, et donne : date/heure, adresse de départ, destination, nombre de personnes.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Ce que tu peux réserver"
              title="Services"
              subtitle="Transport personnalisé à la demande, pour particuliers et professionnels."
            />

            <div className="cardsGrid">
              <div className="card">
                <div className="card__icon">✈️</div>
                <h3 className="card__title">Navettes aéroports</h3>
                <p className="card__text">Départs/arrivées, prise en charge à l'heure, dépôt au terminal.</p>
              </div>

              <div className="card">
                <div className="card__icon">🚆</div>
                <h3 className="card__title">Navettes gares</h3>
                <p className="card__text">Transferts gare ⇄ domicile/hôtel/entreprise.</p>
              </div>

              <div className="card">
                <div className="card__icon">👥</div>
                <h3 className="card__title">Transport en groupe</h3>
                <p className="card__text">Sorties, événements, déplacements associatifs ou pro.</p>
              </div>

              <div className="card">
                <div className="card__icon">🧍</div>
                <h3 className="card__title">Individuel</h3>
                <p className="card__text">Trajets privés, rendez-vous, courses, visites.</p>
              </div>

              <div className="card">
                <div className="card__icon">🗓️</div>
                <h3 className="card__title">Périodique</h3>
                <p className="card__text">Trajets réguliers (sur devis) : travail, école, missions.</p>
              </div>

              <div className="card">
                <div className="card__icon">🛣️</div>
                <h3 className="card__title">Longue distance</h3>
                <p className="card__text">Déplacements inter-villes, sur réservation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="zones" className="section section--alt">
          <div className="container zones">
            <div className="zones__left">
              <SectionTitle
                eyebrow="Zones & trajets"
                title="Aéroports, gares, villes — et au-delà"
                subtitle="Tu définis le trajet, on s'adapte. Le prix dépend de la distance, de l'heure et du nombre de passagers."
              />

              <ul className="list">
                <li>Prise en charge à domicile, hôtel, entreprise</li>
                <li>Transferts vers gares et aéroports</li>
                <li>Déplacements professionnels & privés</li>
                <li>Trajets réguliers possibles (périodique)</li>
              </ul>

              <div className="callout">
                <div className="callout__title">Pour gagner du temps</div>
                <div className="callout__text">
                  Dans ton message, indique : <strong>date/heure</strong>, <strong>départ</strong>, <strong>destination</strong>, <strong>nb de personnes</strong>.
                </div>
              </div>
            </div>

            <div className="zones__right">
              <div className="paper">
                <img src={stamp} alt="Tampon NOUICER VOYAGE SERVICES SAS" />
              </div>
              <div className="legalCard">
                <div className="legalCard__title">Informations</div>
                <div className="legalCard__row"><span>Entreprise</span><span>NOUICER VOYAGE SERVICES SAS</span></div>
                <div className="legalCard__row"><span>Adresse</span><span>{address}</span></div>
                <div className="legalCard__row"><span>Tél</span><span><a href={phoneHref}>{phone}</a></span></div>
                <div className="legalCard__row"><span>Email</span><span><a href={`mailto:${email}`}>{email}</a></span></div>
                <div className="legalCard__row"><span>SIRET</span><span>{siret}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Contact"
              title="Demander un devis"
              subtitle="Le plus efficace : téléphone ou email. (Formulaire simple ci-dessous si tu veux.)"
            />

            <div className="contactGrid">
              <div className="contactCard">
                <h3>Contact direct</h3>
                <p className="muted">Réponse rapide — indique les infos du trajet.</p>
                <div className="contactActions">
                  <a className="btn btn--primary" href={phoneHref}>Appeler {phone}</a>
                  <a className="btn btn--ghost" href={`mailto:${email}?subject=Demande%20de%20devis%20-%20NVS%20Transport`}>Email {email}</a>
                </div>

                <div className="mini">
                  <div className="mini__label">Adresse</div>
                  <div className="mini__value">{address}</div>
                </div>
              </div>

              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget)
                  const name = fd.get('name')?.toString() || ''
                  const from = fd.get('from')?.toString() || ''
                  const to = fd.get('to')?.toString() || ''
                  const when = fd.get('when')?.toString() || ''
                  const pax = fd.get('pax')?.toString() || ''
                  const msg = fd.get('msg')?.toString() || ''
                  const body = encodeURIComponent(
                    `Nom: ${name}\nDate/Heure: ${when}\nDépart: ${from}\nDestination: ${to}\nPassagers: ${pax}\n\nMessage:\n${msg}`
                  )
                  window.location.href = `mailto:${email}?subject=${encodeURIComponent('Demande de devis - NVS Transport')}&body=${body}`
                }}
              >
                <div className="form__row">
                  <label>
                    Nom
                    <input name="name" placeholder="Ton nom" required />
                  </label>
                  <label>
                    Date / Heure
                    <input name="when" placeholder="ex: 12/04 05:30" required />
                  </label>
                </div>

                <div className="form__row">
                  <label>
                    Départ
                    <input name="from" placeholder="Adresse de départ" required />
                  </label>
                  <label>
                    Destination
                    <input name="to" placeholder="Adresse / gare / aéroport" required />
                  </label>
                </div>

                <div className="form__row">
                  <label>
                    Passagers
                    <input name="pax" placeholder="ex: 1, 4, 8..." />
                  </label>
                  <label>
                    Téléphone (optionnel)
                    <input name="phone" placeholder="Pour te rappeler" />
                  </label>
                </div>

                <label>
                  Message
                  <textarea name="msg" placeholder="Détails (bagages, retours, attente, etc.)" rows={5} />
                </label>

                <button className="btn btn--primary" type="submit">Envoyer la demande</button>
                <p className="tiny muted">
                  Le formulaire ouvre ton client mail (pas de données stockées sur un serveur).
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <div className="footer__brand">NVS Transport</div>
            <div className="footer__muted">Transport personnalisé à la demande</div>
          </div>

          <div className="footer__right">
            <a href={phoneHref}>{phone}</a>
            <span className="dot">•</span>
            <a href={`mailto:${email}`}>{email}</a>
            <span className="dot">•</span>
            <a href="#top">Haut de page</a>
          </div>
        </div>

        <div className="container footer__legal">
          <span>NOUICER VOYAGE SERVICES SAS — SIRET {siret}</span>
          <span className="dot">•</span>
          <span>{address}</span>
        </div>
      </footer>
    </div>
  )
}
