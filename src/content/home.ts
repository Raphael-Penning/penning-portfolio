import type { Localized } from "@/lib/i18n";
import { site } from "@/lib/site";

/** All copy of the one-page portfolio, German and English with one shared shape. */
export const meta = {
  de: {
    title: "Raphael Penning – Fachinformatiker Systemintegration & Entwickler aus Oldenburg",
    description:
      "Portfolio von Raphael Penning: Azubi zum Fachinformatiker für Systemintegration in Oldenburg, in der Freizeit Entwickler und Admin. Macher von OpenStatusPage, der Open-Source-Statusseite.",
  },
  en: {
    title: "Raphael Penning – IT systems integration trainee & developer from Germany",
    description:
      "Portfolio of Raphael Penning: IT specialist for systems integration in training in Oldenburg, Germany, developer and sysadmin in his spare time. Creator of OpenStatusPage, the open-source status page.",
  },
} as const satisfies Localized<{ title: string; description: string }>;

type NavLink = { href: string; label: string };

export const nav = {
  de: {
    homeLabel: "Raphael Penning – Startseite",
    mainNavLabel: "Hauptnavigation",
    languageLabel: "Sprache wählen",
    languages: { de: "Deutsch", en: "English" },
    github: "GitHub-Profil von Raphael Penning",
    contact: "Kontakt",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    skip: "Zum Inhalt springen",
    links: [
      { href: "#projects", label: "Projekte" },
      { href: "#about", label: "Über mich" },
      { href: "#skills", label: "Skills" },
    ] as NavLink[],
  },
  en: {
    homeLabel: "Raphael Penning – home",
    mainNavLabel: "Main navigation",
    languageLabel: "Choose language",
    languages: { de: "Deutsch", en: "English" },
    github: "Raphael Penning on GitHub",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    links: [
      { href: "#projects", label: "Projects" },
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
    ] as NavLink[],
  },
};

export const intro = {
  de: {
    status: "Azubi · Entwickler · Admin",
    title: "Ich baue Infrastruktur, die läuft – und Software, die zeigt, ob sie läuft.",
    lead: "Ich bin Raphael Penning, angehender Fachinformatiker für Systemintegration aus Oldenburg. In meiner Freizeit entwickle ich Open-Source-Tools rund um Betrieb und Monitoring.",
    ctaProjects: "Projekte ansehen",
    ctaContact: "Kontakt",
    locationLabel: "Standort",
    location: "Oldenburg",
    region: "Niedersachsen, Deutschland",
    timezone: "Zeitzone MEZ/MESZ",
    githubLabel: "GitHub",
    githubCta: "Profil öffnen",
    featuredLabel: "Hauptprojekt",
    featuredBody: "Selbst gehostete Open-Source-Statusseite",
    terminalLabel: "Kurzprofil als Terminal-Ausgabe",
    terminal: [
      { key: "beruf", value: "Azubi FISI" },
      { key: "freizeit", value: "Dev & Admin" },
      { key: "fokus", value: "Linux · Docker · TS" },
    ],
  },
  en: {
    status: "Trainee · Developer · Sysadmin",
    title: "I build infrastructure that runs – and software that shows whether it does.",
    lead: "I'm Raphael Penning, an IT specialist for systems integration in training from Oldenburg, Germany. In my spare time I build open-source tools for operations and monitoring.",
    ctaProjects: "See projects",
    ctaContact: "Contact",
    locationLabel: "Location",
    location: "Oldenburg",
    region: "Lower Saxony, Germany",
    timezone: "Time zone CET/CEST",
    githubLabel: "GitHub",
    githubCta: "Open profile",
    featuredLabel: "Main project",
    featuredBody: "Self-hosted, open-source status page",
    terminalLabel: "Short profile as terminal output",
    terminal: [
      { key: "job", value: "IT trainee" },
      { key: "spare time", value: "Dev & sysadmin" },
      { key: "focus", value: "Linux · Docker · TS" },
    ],
  },
};

export const projects = {
  de: {
    eyebrow: "Projekte",
    title: "Woran ich arbeite",
    lead: "Entwickelt, dokumentiert und betrieben von mir – komplett Open Source.",
    featured: "Hauptprojekt",
    name: "OpenStatusPage",
    tagline: "Die selbst gehostete Statusseite, die deine Infrastruktur privat hält.",
    body: "Unternehmen informieren ihre Kunden über Störungen und Wartungen, ohne interne Monitoring-Details preiszugeben. Öffentliche Dienste entstehen aus beliebig vielen internen Checks – Check-Namen, Hosts und Ausgaben verlassen nie den Admin-Bereich.",
    highlights: [
      { title: "Monitoring-Adapter", body: "Icinga 2, Uptime Kuma, openITCockpit und Webhooks" },
      { title: "Benachrichtigungen", body: "E-Mail mit DKIM, Slack, Teams, Discord und SMS" },
      { title: "Deployment", body: "Docker Compose, Helm-Chart, .deb/.rpm und systemd" },
      { title: "Barrierearm", body: "WCAG 2.2 AA, funktioniert ohne JavaScript" },
    ],
    stack: ["TypeScript", "Node.js", "Docker", "Kubernetes", "PostgreSQL"],
    facts: [
      { label: "Lizenz", value: "AGPL-3.0" },
      { label: "Version", value: "v0.4.1" },
      { label: "Sprachen", value: "DE / EN" },
    ],
    website: "Website",
    source: "Quellcode",
    demo: "Live-Demo",
    screenshotAlt: "Übersichtsseite von OpenStatusPage mit Diensten, Status und Uptime-Balken",
    portfolio: {
      label: "Dieses Portfolio",
      title: "penning-portfolio",
      body: "Zweisprachige Next.js-Seite mit Bento-Layout, Hell/Dunkel-Modus und durchdachtem SEO. Der Code ist öffentlich.",
      stack: ["Next.js 16", "React 19", "Tailwind 4"],
      cta: "Quellcode ansehen",
    },
    more: {
      label: "Mehr auf GitHub",
      title: "Skripte, Tools & Experimente",
      body: "Installer, Automatisierung und kleinere Projekte findest du auf meinem Profil.",
      cta: "GitHub-Profil",
    },
  },
  en: {
    eyebrow: "Projects",
    title: "What I'm working on",
    lead: "Built, documented and operated by me – fully open source.",
    featured: "Main project",
    name: "OpenStatusPage",
    tagline: "The self-hosted status page that keeps your infrastructure private.",
    body: "Companies keep their customers informed about incidents and maintenance without exposing internal monitoring details. Public services are composed from any number of internal checks – check names, hosts and outputs never leave the admin area.",
    highlights: [
      { title: "Monitoring adapters", body: "Icinga 2, Uptime Kuma, openITCockpit and webhooks" },
      { title: "Notifications", body: "Email with DKIM, Slack, Teams, Discord and SMS" },
      { title: "Deployment", body: "Docker Compose, Helm chart, .deb/.rpm and systemd" },
      { title: "Accessible", body: "WCAG 2.2 AA, works without JavaScript" },
    ],
    stack: ["TypeScript", "Node.js", "Docker", "Kubernetes", "PostgreSQL"],
    facts: [
      { label: "License", value: "AGPL-3.0" },
      { label: "Version", value: "v0.4.1" },
      { label: "Languages", value: "DE / EN" },
    ],
    website: "Website",
    source: "Source code",
    demo: "Live demo",
    screenshotAlt: "OpenStatusPage overview page with services, status and uptime bars",
    portfolio: {
      label: "This portfolio",
      title: "penning-portfolio",
      body: "Bilingual Next.js site with a bento layout, light/dark mode and careful SEO. The code is public.",
      stack: ["Next.js 16", "React 19", "Tailwind 4"],
      cta: "View source",
    },
    more: {
      label: "More on GitHub",
      title: "Scripts, tools & experiments",
      body: "Installers, automation and smaller projects live on my profile.",
      cta: "GitHub profile",
    },
  },
};

export const about = {
  de: {
    eyebrow: "Über mich",
    title: "Zwei Rollen, ein Thema: Systeme, die laufen.",
    cards: [
      {
        tag: "Beruf",
        title: "Azubi Fachinformatiker für Systemintegration",
        body: "In meiner Ausbildung kümmere ich mich um Server, Netzwerke und Clients: Systeme einrichten, Virtualisierung, Firewalls, Monitoring und Dokumentation. Ich mag Abläufe, die automatisiert und nachvollziehbar sind.",
        points: ["Server & Virtualisierung", "Netzwerk & Firewall", "Monitoring & Betrieb", "Automatisierung"],
      },
      {
        tag: "Freizeit",
        title: "Entwickler & Admin",
        body: "Nach Feierabend entwickle ich eigene Tools und betreibe mein Homelab – am liebsten Projekte, die echte Probleme aus dem Betrieb lösen, vom Installer-Skript bis zur Web-Anwendung mit Docker, Helm-Chart und CI.",
        points: ["TypeScript & Next.js", "Docker & Kubernetes", "Self-Hosting", "Open Source"],
      },
    ],
    principlesLabel: "Wie ich arbeite",
    principles: [
      { title: "Automatisieren", body: "Was zweimal passiert, wird ein Skript." },
      { title: "Dokumentieren", body: "Gute Doku ist Teil des Produkts." },
      { title: "Offen bauen", body: "Code und Wissen gehören geteilt." },
    ],
  },
  en: {
    eyebrow: "About",
    title: "Two roles, one theme: systems that keep running.",
    cards: [
      {
        tag: "Job",
        title: "IT specialist for systems integration (trainee)",
        body: "In my apprenticeship I look after servers, networks and clients: setting up systems, virtualisation, firewalls, monitoring and documentation. I like processes that are automated and easy to follow.",
        points: ["Servers & virtualisation", "Networking & firewalls", "Monitoring & operations", "Automation"],
      },
      {
        tag: "Spare time",
        title: "Developer & sysadmin",
        body: "After work I build my own tools and run my homelab – ideally projects that solve real operations problems, from an installer script to a web application with Docker, a Helm chart and CI.",
        points: ["TypeScript & Next.js", "Docker & Kubernetes", "Self-hosting", "Open source"],
      },
    ],
    principlesLabel: "How I work",
    principles: [
      { title: "Automate", body: "Anything done twice becomes a script." },
      { title: "Document", body: "Good docs are part of the product." },
      { title: "Build in the open", body: "Code and knowledge are meant to be shared." },
    ],
  },
};

type SkillGroup = { title: string; items: string[] };

export const skills = {
  de: {
    eyebrow: "Skills",
    title: "Werkzeuge, mit denen ich arbeite",
    groups: [
      { title: "Infrastruktur", items: ["Linux (Debian)", "Docker & Compose", "Kubernetes & Helm", "Proxmox VE", "pfSense", "systemd"] },
      { title: "Monitoring & Betrieb", items: ["Icinga 2", "Uptime Kuma", "openITCockpit", "Reverse Proxy & TLS", "Postfix & DKIM", "Backups"] },
      { title: "Entwicklung", items: ["TypeScript", "Next.js & React", "Node.js", "Java", "PHP", "Shell / Bash"] },
      { title: "Workflow", items: ["Git & GitHub", "GitLab", "CI/CD", "PostgreSQL", "SQLite", "Dokumentation"] },
    ] as SkillGroup[],
  },
  en: {
    eyebrow: "Skills",
    title: "Tools I work with",
    groups: [
      { title: "Infrastructure", items: ["Linux (Debian)", "Docker & Compose", "Kubernetes & Helm", "Proxmox VE", "pfSense", "systemd"] },
      { title: "Monitoring & operations", items: ["Icinga 2", "Uptime Kuma", "openITCockpit", "Reverse proxy & TLS", "Postfix & DKIM", "Backups"] },
      { title: "Development", items: ["TypeScript", "Next.js & React", "Node.js", "Java", "PHP", "Shell / Bash"] },
      { title: "Workflow", items: ["Git & GitHub", "GitLab", "CI/CD", "PostgreSQL", "SQLite", "Documentation"] },
    ] as SkillGroup[],
  },
};

export const contact = {
  de: {
    eyebrow: "Kontakt",
    title: "Lass uns reden.",
    lead: "Fragen zu OpenStatusPage, eine Projektidee oder einfach Austausch rund um Infrastruktur? Schreib mir.",
    mailLabel: "E-Mail",
    primary: "E-Mail schreiben",
    altLabel: "Weitere Adressen",
    githubLabel: "GitHub",
    discordLabel: "Discord",
    copy: { copy: "Kopieren", copied: "Kopiert", failed: "Fehlgeschlagen", aria: "Discord-Namen kopieren", announcement: "Discord-Name in die Zwischenablage kopiert" },
  },
  en: {
    eyebrow: "Contact",
    title: "Let's talk.",
    lead: "Questions about OpenStatusPage, a project idea or just a chat about infrastructure? Drop me a line.",
    mailLabel: "Email",
    primary: "Send an email",
    altLabel: "Other addresses",
    githubLabel: "GitHub",
    discordLabel: "Discord",
    copy: { copy: "Copy", copied: "Copied", failed: "Failed", aria: "Copy Discord username", announcement: "Discord username copied to clipboard" },
  },
};

export const footer = {
  de: {
    copyright: `© ${site.updated.slice(0, 4)} Raphael Penning`,
    imprint: "Impressum",
    privacy: "Datenschutz",
    source: "Quellcode",
  },
  en: {
    copyright: `© ${site.updated.slice(0, 4)} Raphael Penning`,
    imprint: "Legal notice",
    privacy: "Privacy",
    source: "Source code",
  },
};
