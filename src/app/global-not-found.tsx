import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 – Seite nicht gefunden · Raphael Penning",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="de">
      <body className="grid min-h-dvh place-items-center bg-bg px-4 text-fg">
        <main className="max-w-md font-mono">
          <p className="text-sm text-subtle">
            <span className="text-accent">$</span> curl -I {"<this page>"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold">404 Not Found</h1>
          <p className="mt-4 text-sm text-muted">
            Diese Seite gibt es nicht. <span lang="en">This page does not exist.</span>
          </p>
          <p className="mt-6 flex gap-4 text-sm">
            <Link href="/de" className="text-accent underline underline-offset-4">Startseite</Link>
            <Link href="/en" lang="en" className="text-accent underline underline-offset-4">Home</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
