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
      { href: "#about", label: "Über mich" },
      { href: "#projects", label: "Projekte" },
      { href: "#skills", label: "Skills" },
      { href: "#contact", label: "Kontakt" },
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
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#contact", label: "Contact" },
    ] as NavLink[],
  },
};

export const hero = {
  de: {
    status: "Online aus Oldenburg",
    greeting: "Hallo, ich bin",
    role: "Fachinformatiker für Systemintegration in Ausbildung – und in der Freizeit Entwickler & Admin.",
    lead: "Ich baue Infrastruktur, die zuverlässig läuft, und Software, die zeigt, ob sie das tut. Mein bekanntestes Projekt ist OpenStatusPage, eine selbst gehostete Open-Source-Statusseite.",
    ctaProjects: "Projekte ansehen",
    ctaContact: "Kontakt aufnehmen",
    terminalLabel: "Kurzprofil als Terminal-Ausgabe",
    terminal: [
      { key: "name", value: "Raphael Penning" },
      { key: "beruf", value: "Azubi Fachinformatiker Systemintegration" },
      { key: "freizeit", value: "Entwickler & Admin" },
      { key: "standort", value: "Oldenburg, Deutschland" },
      { key: "fokus", value: "Linux · Docker · Monitoring · TypeScript" },
    ],
    uptime: "Uptime",
    services: [
      { name: "ausbildung.service", state: "active" },
      { name: "homelab.service", state: "active" },
      { name: "openstatuspage.service", state: "active" },
    ],
  },
  en: {
    status: "Online from Oldenburg, Germany",
    greeting: "Hi, I'm",
    role: "IT specialist for systems integration in training – and a developer & sysadmin in my spare time.",
    lead: "I build infrastructure that runs reliably, and software that shows whether it does. My best-known project is OpenStatusPage, a self-hosted, open-source status page.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    terminalLabel: "Short profile as terminal output",
    terminal: [
      { key: "name", value: "Raphael Penning" },
      { key: "job", value: "IT systems integration trainee" },
      { key: "spare time", value: "Developer & sysadmin" },
      { key: "location", value: "Oldenburg, Germany" },
      { key: "focus", value: "Linux · Docker · Monitoring · TypeScript" },
    ],
    uptime: "Uptime",
    services: [
      { name: "apprenticeship.service", state: "active" },
      { name: "homelab.service", state: "active" },
      { name: "openstatuspage.service", state: "active" },
    ],
  },
};

export const about = {
  de: {
    eyebrow: "Über mich",
    title: "Zwei Rollen, ein Thema: Systeme, die laufen.",
    lead: "Beruflich lerne ich, IT-Infrastruktur zu planen und zu betreiben. Privat schreibe ich die Software dazu.",
    cards: [
      {
        tag: "Beruf",
        title: "Azubi Fachinformatiker für Systemintegration",
        body: "In meiner Ausbildung kümmere ich mich um Server, Netzwerke und Clients: Linux- und Windows-Systeme einrichten, Virtualisierung, Firewalls, Monitoring und Dokumentation. Ich mag es, wenn Abläufe automatisiert und nachvollziehbar sind.",
        points: ["Server & Virtualisierung", "Netzwerk & Firewall", "Monitoring & Betrieb", "Automatisierung mit Shell"],
      },
      {
        tag: "Freizeit",
        title: "Entwickler & Admin",
        body: "Nach Feierabend entwickle ich eigene Tools und betreibe mein Homelab. Am liebsten Projekte, die echte Probleme aus dem Betrieb lösen – vom Installer-Skript bis zur kompletten Web-Anwendung mit Docker, Helm-Chart und CI.",
        points: ["TypeScript & Next.js", "Docker & Kubernetes", "Self-Hosting & Homelab", "Open Source"],
      },
    ],
  },
  en: {
    eyebrow: "About",
    title: "Two roles, one theme: systems that keep running.",
    lead: "At work I learn to plan and operate IT infrastructure. In my spare time I write the software for it.",
    cards: [
      {
        tag: "Job",
        title: "IT specialist for systems integration (trainee)",
        body: "In my apprenticeship I look after servers, networks and clients: setting up Linux and Windows systems, virtualisation, firewalls, monitoring and documentation. I like processes that are automated and easy to follow.",
        points: ["Servers & virtualisation", "Networking & firewalls", "Monitoring & operations", "Shell automation"],
      },
      {
        tag: "Spare time",
        title: "Developer & sysadmin",
        body: "After work I build my own tools and run my homelab. I enjoy projects that solve real operations problems – from an installer script to a full web application with Docker, a Helm chart and CI.",
        points: ["TypeScript & Next.js", "Docker & Kubernetes", "Self-hosting & homelab", "Open source"],
      },
    ],
  },
};

export const projects = {
  de: {
    eyebrow: "Projekte",
    title: "Woran ich arbeite",
    lead: "Mein Hauptprojekt – entwickelt, dokumentiert und betrieben von mir.",
    featured: "Hauptprojekt",
    name: "OpenStatusPage",
    tagline: "Die selbst gehostete Open-Source-Statusseite, die deine Infrastruktur privat hält.",
    body: "Unternehmen informieren ihre Kunden über Störungen und Wartungen, ohne interne Monitoring-Details preiszugeben. Öffentliche Dienste werden aus beliebig vielen internen Checks zusammengesetzt – aus Icinga 2, Uptime Kuma, openITCockpit oder per Webhook. Check-Namen, Hosts und Ausgaben verlassen nie den Admin-Bereich.",
    highlights: [
      "Monitoring-Adapter für Icinga 2, Uptime Kuma, openITCockpit und Webhooks",
      "Benachrichtigungen per E-Mail (Double-Opt-in, DKIM), Slack, Teams, Discord und SMS",
      "Single Sign-on über OpenID Connect, SQLite oder PostgreSQL",
      "Docker Compose, Helm-Chart, .deb/.rpm-Pakete und systemd",
      "Barrierearm nach WCAG 2.2 AA, funktioniert komplett ohne JavaScript",
    ],
    stackLabel: "Tech-Stack",
    stack: ["TypeScript", "Node.js", "Docker", "Kubernetes", "PostgreSQL", "SQLite"],
    facts: [
      { label: "Lizenz", value: "AGPL-3.0" },
      { label: "Version", value: "v0.4.1" },
      { label: "Sprachen", value: "DE / EN" },
    ],
    website: "Website",
    source: "Quellcode",
    demo: "Live-Demo",
    screenshotAlt: "Übersichtsseite von OpenStatusPage mit Diensten, Status und Uptime-Balken",
    moreTitle: "Mehr auf GitHub",
    moreBody: "Weitere Skripte, Tools und Experimente findest du auf meinem GitHub-Profil.",
    moreCta: "GitHub-Profil öffnen",
  },
  en: {
    eyebrow: "Projects",
    title: "What I'm working on",
    lead: "My main project – built, documented and operated by me.",
    featured: "Main project",
    name: "OpenStatusPage",
    tagline: "The self-hosted, open-source status page that keeps your infrastructure private.",
    body: "Companies keep their customers informed about incidents and maintenance without exposing internal monitoring details. Public services are composed from any number of internal checks – from Icinga 2, Uptime Kuma, openITCockpit or webhooks. Check names, hosts and outputs never leave the admin area.",
    highlights: [
      "Monitoring adapters for Icinga 2, Uptime Kuma, openITCockpit and webhooks",
      "Notifications by email (double opt-in, DKIM), Slack, Teams, Discord and SMS",
      "Single sign-on via OpenID Connect, SQLite or PostgreSQL",
      "Docker Compose, Helm chart, .deb/.rpm packages and systemd",
      "Accessible to WCAG 2.2 AA, works fully without JavaScript",
    ],
    stackLabel: "Tech stack",
    stack: ["TypeScript", "Node.js", "Docker", "Kubernetes", "PostgreSQL", "SQLite"],
    facts: [
      { label: "License", value: "AGPL-3.0" },
      { label: "Version", value: "v0.4.1" },
      { label: "Languages", value: "DE / EN" },
    ],
    website: "Website",
    source: "Source code",
    demo: "Live demo",
    screenshotAlt: "OpenStatusPage overview page with services, status and uptime bars",
    moreTitle: "More on GitHub",
    moreBody: "You'll find more scripts, tools and experiments on my GitHub profile.",
    moreCta: "Open GitHub profile",
  },
};

type SkillGroup = { title: string; items: string[] };

export const skills = {
  de: {
    eyebrow: "Skills",
    title: "Werkzeuge, mit denen ich arbeite",
    lead: "Von der Shell bis zum Frontend – das nutze ich in Ausbildung und eigenen Projekten.",
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
    lead: "From the shell to the front end – what I use in my apprenticeship and my own projects.",
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
    source: "Quellcode dieser Seite",
  },
  en: {
    copyright: `© ${site.updated.slice(0, 4)} Raphael Penning`,
    imprint: "Legal notice",
    privacy: "Privacy",
    source: "Source of this site",
  },
};
