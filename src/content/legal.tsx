import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { authority, hosting, provider } from "@/data/legal";
import { openStatusPage, site } from "@/lib/site";
import { umami } from "@/lib/analytics";
import { AnalyticsOptOut } from "@/components/analytics-opt-out";

const Mail = () => <a href={`mailto:${provider.email}`}>{provider.email}</a>;

const Address = ({ lang }: { lang: Locale }) => (
  <address className="not-italic">
    {provider.name}
    <br />
    {provider.street}
    <br />
    {provider.postalCode} {provider.city}
    <br />
    {provider.country[lang]}
  </address>
);

const H2 = ({ children }: { children: ReactNode }) => <h2>{children}</h2>;

/** Privacy sections are numbered by a CSS counter, so optional ones can come and go. */
const Numbered = ({ children }: { children: ReactNode }) => (
  <div className="legal-numbered">{children}</div>
);

const optOutLabels = {
  de: {
    active: "Die Reichweitenmessung ist in diesem Browser aktiv.",
    disabled: "Die Reichweitenmessung ist in diesem Browser abgeschaltet.",
    disable: "Messung abschalten",
    enable: "Messung wieder erlauben",
  },
  en: {
    active: "Audience measurement is active in this browser.",
    disabled: "Audience measurement is turned off in this browser.",
    disable: "Turn off measurement",
    enable: "Allow measurement again",
  },
} as const;

function UmamiDe({ host }: { host: string }) {
  return (
    <>
      <H2>Reichweitenmessung mit Umami</H2>
      <p>
        Um zu verstehen, welche Seiten gelesen werden und woher Besucher kommen, nutze ich{" "}
        <a href="https://umami.is">Umami</a>, eine quelloffene Software zur Reichweitenmessung.
        Umami läuft auf meinem eigenen Server ({host}), den ich bei einem Hosting-Anbieter in der
        EU gemietet habe. Der Anbieter verarbeitet die Daten ausschließlich in meinem Auftrag (Art.
        28 DSGVO). Eine Weitergabe an Dritte oder in Drittländer findet nicht statt.
      </p>
      <p>
        Ist JavaScript aktiv, lädt dein Browser ein kleines Skript von {host} und meldet beim
        Seitenaufruf: aufgerufene Seite, Referrer, Browser, Betriebssystem, Gerätetyp,
        Bildschirmgröße und Sprache. Aus der IP-Adresse wird das Land abgeleitet; die IP-Adresse
        selbst wird nicht gespeichert. Damit Besuche gezählt werden können, ohne dich
        wiederzuerkennen, bildet Umami aus IP-Adresse, Browserkennung und einem regelmäßig
        wechselnden Zufallswert einen Hashwert. Umami setzt keine Cookies, erstellt keine Profile
        und verfolgt dich nicht über andere Websites hinweg.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; mein berechtigtes Interesse liegt darin,
        die Website anhand anonymer Nutzungsstatistiken zu verbessern. Die gespeicherten Daten
        lassen sich keiner Person zuordnen. Sie werden ohne feste Frist aufbewahrt, bis ich sie
        lösche.
      </p>
      <p>
        Widerspruch: Ist in deinem Browser „Do Not Track“ aktiviert oder JavaScript abgeschaltet,
        wird nichts erfasst. Außerdem kannst du die Messung hier für diesen Browser abschalten.
        Dafür wird auf deinen Wunsch nur der Eintrag „umami.disabled“ im Local Storage gespeichert.
      </p>
      <AnalyticsOptOut labels={optOutLabels.de} />
    </>
  );
}

function UmamiEn({ host }: { host: string }) {
  return (
    <>
      <H2>Audience measurement with Umami</H2>
      <p>
        To understand which pages are read and where visitors come from, I use{" "}
        <a href="https://umami.is">Umami</a>, open-source web analytics software. Umami runs on my
        own server ({host}), rented from a hosting provider in the EU that processes the data
        solely on my behalf (Art. 28 GDPR). No data is passed on to third parties or transferred
        to third countries.
      </p>
      <p>
        If JavaScript is enabled, your browser loads a small script from {host} and reports on
        each page view: the page visited, referrer, browser, operating system, device type, screen
        size and language. Your country is derived from the IP address; the IP address itself is
        not stored. To count visits without recognising you, Umami creates a hash from the IP
        address, the browser identifier and a regularly changing random value. Umami sets no
        cookies, builds no profiles and does not track you across other websites.
      </p>
      <p>
        The legal basis is Art. 6 (1) (f) GDPR; my legitimate interest is improving the website
        based on anonymous usage statistics. The stored data cannot be linked to a person. It is
        kept without a fixed retention period until I delete it.
      </p>
      <p>
        Objection: if your browser sends “Do Not Track” or JavaScript is disabled, nothing is
        recorded. You can also turn off measurement for this browser here. At your request, this
        only stores the entry “umami.disabled” in local storage.
      </p>
      <AnalyticsOptOut labels={optOutLabels.en} />
    </>
  );
}

/* ------------------------------------------------------------------------- */
/* Impressum / Legal notice                                                   */
/* ------------------------------------------------------------------------- */

function ImprintDe() {
  return (
    <>
      <H2>Angaben gemäß § 5 DDG</H2>
      <Address lang="de" />

      <H2>Kontakt</H2>
      <p>
        E-Mail: <Mail />
      </p>

      <H2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</H2>
      <Address lang="de" />

      <H2>Haftung für Inhalte</H2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als
        Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen. Sobald mir Rechtsverletzungen bekannt werden, entferne ich die
        betreffenden Inhalte umgehend.
      </p>

      <H2>Haftung für Links</H2>
      <p>
        Diese Website enthält Links zu externen Websites Dritter, etwa zu GitHub,
        openstatuspage.dev oder zur Live-Demo von OpenStatusPage. Auf deren Inhalte habe ich keinen Einfluss; für sie ist stets der jeweilige
        Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.
        Werden mir Rechtsverletzungen bekannt, entferne ich die betreffenden Links umgehend.
      </p>

      <H2>Urheberrecht</H2>
      <p>
        Texte und Gestaltung dieser Website stammen von mir. Der Quellcode ist auf{" "}
        <a href={site.repo}>GitHub</a> einsehbar. Die Software OpenStatusPage steht unter der{" "}
        <a href={openStatusPage.licenseUrl}>GNU Affero General Public License v3.0</a>; die
        Screenshots zeigen ihre öffentliche Demo-Instanz. Genannte Marken und Logos gehören ihren
        jeweiligen Inhabern.
      </p>
    </>
  );
}

function ImprintEn() {
  return (
    <>
      <H2>Information pursuant to § 5 DDG (German Digital Services Act)</H2>
      <Address lang="en" />

      <H2>Contact</H2>
      <p>
        Email: <Mail />
      </p>

      <H2>Responsible for content pursuant to § 18 (2) MStV</H2>
      <Address lang="en" />

      <H2>Liability for content</H2>
      <p>
        The content of this website was created with great care. However, I cannot guarantee that
        it is accurate, complete or up to date. As a service provider I am responsible for my own
        content on these pages under general law. I am not obliged to monitor third-party
        information that is transmitted or stored, or to investigate circumstances that indicate
        illegal activity. As soon as I become aware of an infringement, I will remove the content
        concerned without delay.
      </p>

      <H2>Liability for links</H2>
      <p>
        This website links to external third-party websites, such as GitHub, openstatuspage.dev
        or the OpenStatusPage live demo. I
        have no influence on their content; the respective provider is always responsible for it.
        No infringements were apparent when the links were set. If I become aware of an
        infringement, I will remove the link concerned without delay.
      </p>

      <H2>Copyright</H2>
      <p>
        The texts and design of this website are my own. Its source code is available on{" "}
        <a href={site.repo}>GitHub</a>. The OpenStatusPage software is licensed under the{" "}
        <a href={openStatusPage.licenseUrl}>GNU Affero General Public License v3.0</a>; the
        screenshots show its public demo instance. Trademarks and logos mentioned belong to their
        respective owners.
      </p>
    </>
  );
}

/* ------------------------------------------------------------------------- */
/* Datenschutzerklärung / Privacy policy                                      */
/* ------------------------------------------------------------------------- */

function PrivacyDe() {
  return (
    <Numbered>
      <H2>Verantwortlicher</H2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:</p>
      <Address lang="de" />
      <p>
        E-Mail: <Mail />
      </p>
      <p>
        Ein Datenschutzbeauftragter ist nicht bestellt, da hierzu keine gesetzliche Pflicht
        besteht.
      </p>

      <H2>Das Wichtigste in Kürze</H2>
      <ul>
        <li>Keine Cookies, keine Werbung, kein Tracking über andere Websites hinweg.</li>
        {umami ? (
          <li>Anonyme Reichweitenmessung mit selbst gehostetem Umami, jederzeit abschaltbar.</li>
        ) : (
          <li>Keine Reichweitenmessung.</li>
        )}
        <li>Keine eingebundenen Inhalte Dritter: Schriften, Bilder und Skripte kommen von eigenen Servern.</li>
        <li>Server-Logs werden ohne vollständige IP-Adresse geschrieben.</li>
        <li>Die Website funktioniert ohne JavaScript.</li>
      </ul>

      <H2>Hosting</H2>
      <p>
        Diese Website wird auf Servern der {hosting.name} (<a href={hosting.url}>{hosting.url.replace("https://", "")}</a>)
        in Deutschland betrieben. Die {hosting.name} verarbeitet die beim Aufruf anfallenden Daten
        ausschließlich in meinem Auftrag und nach meinen Weisungen (Art. 28 DSGVO). Eine
        Übermittlung in Drittländer findet nicht statt.
      </p>

      <H2>Aufruf der Website und Server-Logfiles</H2>
      <p>
        Beim Aufruf der Website übermittelt dein Browser technisch notwendige Informationen an den
        Server. Damit die Website ausgeliefert werden kann, verarbeitet der Server kurzzeitig
        deine IP-Adresse. In den Server-Logfiles wird die IP-Adresse nur anonymisiert (gekürzt)
        oder gar nicht gespeichert. Protokolliert werden außerdem:
      </p>
      <ul>
        <li>Datum und Uhrzeit des Abrufs</li>
        <li>aufgerufene Seite bzw. Datei und HTTP-Statuscode</li>
        <li>übertragene Datenmenge</li>
        <li>Browsertyp und -version, Betriebssystem (User-Agent)</li>
        <li>Referrer-URL (zuvor besuchte Seite), sofern übermittelt</li>
      </ul>
      <p>
        Zweck ist die technische Bereitstellung, die Stabilität und die Sicherheit der Website,
        etwa die Abwehr von Angriffen und die Fehleranalyse. Rechtsgrundlage ist Art. 6 Abs. 1
        lit. f DSGVO; mein berechtigtes Interesse liegt in einem sicheren und funktionierenden
        Betrieb. Da die Logfiles keine vollständigen IP-Adressen enthalten, ist ein Rückschluss auf
        deine Person nicht möglich.
      </p>

      <H2>Verschlüsselung</H2>
      <p>
        Die Website wird ausschließlich über HTTPS (TLS) ausgeliefert. So können übertragene Daten
        nicht von Dritten mitgelesen werden.
      </p>

      <H2>Cookies und lokale Speicherung</H2>
      <p>
        Diese Website setzt keine Cookies.
        {umami &&
          " Etwas im Speicher deines Browsers (Local Storage) abgelegt wird nur, wenn du die Reichweitenmessung ausdrücklich abschaltest (siehe Reichweitenmessung mit Umami)."}
      </p>

      {umami && <UmamiDe host={umami.host} />}

      <H2>Schriften</H2>
      <p>
        Die verwendeten Schriften (IBM Plex Sans und JetBrains Mono) werden beim Erstellen der Website
        heruntergeladen und vom eigenen Server ausgeliefert. Beim Besuch der Website besteht keine
        Verbindung zu Google oder anderen Schriftanbietern.
      </p>

      <H2>Kontakt per E-Mail</H2>
      <p>
        Wenn du mir eine E-Mail schreibst, verarbeite ich deine E-Mail-Adresse, deinen Namen und
        den Inhalt deiner Nachricht, um dein Anliegen zu bearbeiten. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage auf einen Vertrag zielt, sonst Art. 6
        Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten
        werden gelöscht, sobald dein Anliegen erledigt ist und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen.
      </p>

      <H2>Externe Links</H2>
      <p>
        Die Website verlinkt unter anderem auf GitHub, auf openstatuspage.dev, auf die Live-Demo ({openStatusPage.demo.replace("https://", "")})
        und auf {hosting.url.replace("https://", "")}. Erst wenn du einen solchen Link anklickst,
        verbindet sich dein Browser mit dem jeweiligen Anbieter; ab dann gilt dessen
        Datenschutzerklärung.
      </p>

      <H2>Deine Rechte</H2>
      <p>Du hast gegenüber mir jederzeit das Recht auf</p>
      <ul>
        <li>Auskunft über die zu dir gespeicherten Daten (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
        <li>Löschung (Art. 17 DSGVO),</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
        <li>
          Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen (Art. 21
          DSGVO).
        </li>
      </ul>
      <p>
        Für die Ausübung genügt eine formlose E-Mail an <Mail />. Außerdem hast du das Recht, dich
        bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist{" "}
        {authority.de}, {authority.address} (<a href={authority.url}>{authority.url.replace("https://", "")}</a>).
      </p>

      <H2>Änderungen</H2>
      <p>
        Ich passe diese Datenschutzerklärung an, wenn sich die Website oder die Rechtslage ändert.
        Es gilt die jeweils hier veröffentlichte Fassung.
      </p>
    </Numbered>
  );
}

function PrivacyEn() {
  return (
    <Numbered>
      <H2>Controller</H2>
      <p>The controller responsible for data processing on this website within the meaning of the GDPR is:</p>
      <Address lang="en" />
      <p>
        Email: <Mail />
      </p>
      <p>No data protection officer has been appointed, as there is no legal obligation to do so.</p>

      <H2>In short</H2>
      <ul>
        <li>No cookies, no advertising, no tracking across other websites.</li>
        {umami ? (
          <li>Anonymous audience measurement with self-hosted Umami, which you can turn off at any time.</li>
        ) : (
          <li>No audience measurement.</li>
        )}
        <li>No embedded third-party content: fonts, images and scripts are served from our own servers.</li>
        <li>Server logs are written without full IP addresses.</li>
        <li>The website works without JavaScript.</li>
      </ul>

      <H2>Hosting</H2>
      <p>
        This website runs on servers operated by {hosting.name} (<a href={hosting.url}>{hosting.url.replace("https://", "")}</a>)
        in Germany. {hosting.name} processes the data that arises when the site is accessed solely
        on my behalf and according to my instructions (Art. 28 GDPR). No data is transferred to
        third countries.
      </p>

      <H2>Visiting the website and server log files</H2>
      <p>
        When you visit the website, your browser sends technically necessary information to the
        server. To deliver the website, the server briefly processes your IP address. In the
        server log files the IP address is stored only in anonymised (truncated) form or not at
        all. The following is also logged:
      </p>
      <ul>
        <li>date and time of the request</li>
        <li>requested page or file and HTTP status code</li>
        <li>amount of data transferred</li>
        <li>browser type and version, operating system (user agent)</li>
        <li>referrer URL (previously visited page), if sent</li>
      </ul>
      <p>
        The purpose is the technical provision, stability and security of the website, such as
        defending against attacks and analysing errors. The legal basis is Art. 6 (1) (f) GDPR; my
        legitimate interest is secure and reliable operation. As the log files contain no full IP
        addresses, they cannot be traced back to you.
      </p>

      <H2>Encryption</H2>
      <p>The website is served exclusively over HTTPS (TLS), so transmitted data cannot be read by third parties.</p>

      <H2>Cookies and local storage</H2>
      <p>
        This website sets no cookies.
        {umami &&
          " Something is stored in your browser (local storage) only if you explicitly turn off audience measurement (see Audience measurement with Umami)."}
      </p>

      {umami && <UmamiEn host={umami.host} />}

      <H2>Fonts</H2>
      <p>
        The fonts used (IBM Plex Sans and JetBrains Mono) are downloaded when the website is built and served
        from our own server. Visiting the website creates no connection to Google or other font
        providers.
      </p>

      <H2>Contact by email</H2>
      <p>
        If you send me an email, I process your email address, your name and the content of your
        message to handle your request. The legal basis is Art. 6 (1) (b) GDPR where your request aims at a
        contract, otherwise Art. 6 (1) (f) GDPR (legitimate interest in answering requests). The
        data is deleted once your request has been dealt with, unless statutory retention
        obligations apply.
      </p>

      <H2>External links</H2>
      <p>
        The website links to GitHub, openstatuspage.dev, the live demo ({openStatusPage.demo.replace("https://", "")}) and{" "}
        {hosting.url.replace("https://", "")}, among others. Your browser only connects to the
        respective provider once you click such a link; from then on, that provider’s privacy
        policy applies.
      </p>

      <H2>Your rights</H2>
      <p>You have the right at any time to</p>
      <ul>
        <li>access the data stored about you (Art. 15 GDPR),</li>
        <li>rectification of inaccurate data (Art. 16 GDPR),</li>
        <li>erasure (Art. 17 GDPR),</li>
        <li>restriction of processing (Art. 18 GDPR),</li>
        <li>data portability (Art. 20 GDPR),</li>
        <li>object to processing based on Art. 6 (1) (f) GDPR (Art. 21 GDPR).</li>
      </ul>
      <p>
        An informal email to <Mail /> is enough. You also have the right to lodge a complaint with
        a data protection supervisory authority (Art. 77 GDPR). The competent authority is{" "}
        {authority.en}, {authority.address} (<a href={authority.url}>{authority.url.replace("https://", "")}</a>).
      </p>

      <H2>Changes</H2>
      <p>
        I update this privacy policy when the website or the legal situation changes. The version
        published here applies.
      </p>
    </Numbered>
  );
}

export const legalContent = {
  imprint: {
    de: { title: "Impressum", description: "Impressum von raphael-penning.de: Anbieterkennzeichnung und Kontakt von Raphael Penning.", Body: ImprintDe },
    en: { title: "Legal notice", description: "Legal notice of raphael-penning.de: provider identification and contact details of Raphael Penning.", Body: ImprintEn },
  },
  privacy: {
    de: { title: "Datenschutzerklärung", description: "Datenschutzerklärung von raphael-penning.de: keine Cookies, kein Tracking über andere Websites, Hosting in Deutschland.", Body: PrivacyDe },
    en: { title: "Privacy policy", description: "Privacy policy of raphael-penning.de: no cookies, no cross-site tracking, hosted in Germany.", Body: PrivacyEn },
  },
} as const;

export const legalUi = {
  de: { updated: "Stand", back: "Zurück zur Startseite", translationNote: null },
  en: {
    updated: "Last updated",
    back: "Back to home",
    translationNote: "This is a translation for convenience. The German version is legally binding.",
  },
} as const;
