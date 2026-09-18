import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Devil's Thumb Construction",
  description: "How Devil's Thumb Construction uses cookies on our website.",
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "60px 24px 80px" }}>
        <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem", fontWeight: 800, color: "#13251e", marginBottom: 8 }}>
          Cookie Policy
        </h1>
        <p style={{ color: "#8a9490", fontSize: "0.88rem", marginBottom: 40 }}>
          Effective date: September 17, 2026 &nbsp;|&nbsp; Devil&apos;s Thumb Construction &nbsp;|&nbsp; Nederland, CO
        </p>

        {[
          {
            title: "What Are Cookies",
            body: `Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and function properly between visits.`,
          },
          {
            title: "How We Use Cookies",
            body: `We use only essential cookies — the minimum required for the website to function. These cookies do not track you across other websites, do not serve advertising, and do not collect personally identifiable information.\n\nThe only cookie we set is to remember your cookie consent preference, so we don't ask you again on your next visit.`,
          },
          {
            title: "What We Do Not Use",
            body: `We do not use:\n• Google Analytics or any behavioral analytics\n• Facebook Pixel or social media tracking\n• Advertising or retargeting cookies\n• Third-party tracking scripts of any kind\n\nThis website is built for information and lead generation only. Your browsing behavior is not tracked or sold.`,
          },
          {
            title: "Your Choices",
            body: `When you first visit our site, you will see a banner asking you to accept or decline cookies. If you decline, no non-essential cookies will be set. You can also clear cookies through your browser settings at any time.\n\nNote: Declining cookies will not affect your ability to use this website.`,
          },
          {
            title: "Changes to This Policy",
            body: `We may update this Cookie Policy if our practices change. The effective date at the top reflects the most recent revision.`,
          },
          {
            title: "Contact",
            body: `Questions? Reach us at j.kennedy@devilsthumbconstruction.com or call 720-322-6899.`,
          },
        ].map(({ title, body }) => (
          <section key={title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#13251e", borderLeft: "4px solid #e09f18", paddingLeft: 12, marginBottom: 10 }}>
              {title}
            </h2>
            <p style={{ color: "#5d6661", lineHeight: 1.8, fontSize: "0.95rem", whiteSpace: "pre-line" }}>{body}</p>
          </section>
        ))}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8e4df", display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a href="/privacy-policy" style={{ color: "#e09f18", fontSize: "0.85rem", textDecoration: "underline" }}>Privacy Policy</a>
          <a href="/terms" style={{ color: "#e09f18", fontSize: "0.85rem", textDecoration: "underline" }}>Terms of Service</a>
          <a href="/" style={{ color: "#8a9490", fontSize: "0.85rem", textDecoration: "underline" }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}
