import type { Metadata } from "next";
import { MusicPlayer } from "./MusicPlayer";

export const metadata: Metadata = {
  title: "Manuel & Donna | Wedding Celebration",
  description: "Join Manuel Varghese and Donna Sanju as they begin their next chapter together.",
};

const events = [
  {
    time: "03:00 PM",
    label: "The Ceremony",
    date: "Sunday, 20 September 2026",
    place: "St. George Jacobite Syrian Church",
    address: "Chooracode, Ernakulam, Kerala 683562",
    qr: "/st-george-choorakode.png",
    href: "https://maps.google.com/?q=St.+George+Jacobite+Syrian+Church+Choorakode",
  },
  {
    time: "06:30 PM",
    label: "The Celebration",
    date: "Sunday, 20 September 2026",
    place: "PetRose Event Centre",
    address: "P.P Road, Vadayampady P.O, Puthencruz, Ernakulam, Kerala 682308",
    qr: "/petrose-event-centre.png",
    href: "https://maps.google.com/?q=PetRose+Event+Centre+Vadavucode",
  },
];

const assetPrefix = process.env.GITHUB_ACTIONS ? "/Manuel-Donna" : "";

export default function Home() {
  return (
    <main>
      <MusicPlayer src={`${assetPrefix}/backgroundmusic.mp3`} />
      <section className="hero" id="top">
        <img className="hero-image" src={`${assetPrefix}/manuel-donna.png`} alt="Manuel and Donna smiling together" />
        <div className="hero-wash" />
        <nav className="nav" aria-label="Main navigation">
          <a className="monogram" href="#top">M <span>&amp;</span> D</a>
          <div className="nav-links">
            <a href="#story">Our story</a>
            <a href="#details">Details</a>
            <a href="#rsvp">RSVP</a>
          </div>
        </nav>
        <div className="hero-copy">
          <p className="eyebrow">A new chapter begins</p>
          <h1>Manuel <span>&amp;</span> Donna</h1>
          <p className="hero-date">20 · 09 · 2026</p>
          <blockquote className="hero-verse"><strong>Matthew 19:6</strong><span>“So they are no longer two, but one. Therefore what God has joined together, let man not separate.”</span></blockquote>
          <a className="hero-arrow" href="#story" aria-label="Scroll to our story">↓</a>
        </div>
      </section>

      <section className="intro section" id="story">
        <p className="section-kicker">With joyful hearts</p>
        <h2>We are getting<br /><em>married.</em></h2>
        <div className="intro-body">
          <p>Two families, two stories, and one beautiful beginning. We would be honoured to have you with us as we celebrate the love that brought Manuel and Donna together.</p>
          <div className="names">
            <div><strong>Manuel Varghese</strong><span>Son of Varghese Paul &amp; Jaisy Varghese<br />Kaniyamkudy House, Choorakode</span></div>
            <div><strong>Donna Sanju</strong><span>Daughter of Sanju Varghese &amp; Bincy Paul<br />Thannikkottu House, Vadavucode</span></div>
          </div>
        </div>
      </section>

      <section className="details section" id="details">
        <div className="details-heading">
          <p className="section-kicker">Save the date</p>
          <h2>The day<br /><em>we say I do.</em></h2>
          <p className="details-note">Your presence is the only present we need. Come for the vows, stay for the celebration.</p>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <article className="event" key={event.label}>
              <div className="event-time">{event.time}</div>
              <div className="event-info">
                <p className="event-label">{event.label}</p>
                <h3>{event.place}</h3>
                <p>{event.date}<br />{event.address}</p>
                <a href={event.href} target="_blank" rel="noreferrer">Open in maps ↗</a>
              </div>
              <img className="qr" src={`${assetPrefix}${event.qr}`} alt={`QR code for ${event.place} location`} />
            </article>
          ))}
        </div>
      </section>

      <section className="rsvp section" id="rsvp">
        <p className="section-kicker">We hope you can join us</p>
        <h2>Let us celebrate<br /><em>together.</em></h2>
          <a className="button" href="mailto:eben92paul@gmail.com?subject=Manuel%20Donna%20Marriage&amp;body=We%20would%20be%20attending%20the%20Marriage%20reception">Kindly RSVP <span>↗</span></a>
          <a className="button secondary-button" href={`${assetPrefix}/manuel-donna-wedding-invite.pdf`} download>Download wedding invite <span>↓</span></a>
        <div className="contact-details">
          <p>For more details</p>
          <a href="tel:+919447049509">+91 94470 49509</a>
          <a href="tel:+919961062460">+91 99610 62460</a>
        </div>
      </section>

      <footer><span>M &amp; D</span><span>With love, Manuel &amp; Donna</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
