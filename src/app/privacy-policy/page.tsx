import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Devil's Thumb Construction",
  description: "How Devil's Thumb Construction collects, uses, and protects information submitted through our website.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "60px 24px 80px" }}>
        <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem", fontWeight: 800, color: "#13251e", marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#8a9490", fontSize: "0.88rem", marginBottom: 40 }}>
          Effective date: September 17, 2026 &nbsp;|&nbsp; Devil&apos;s Thumb Construction &nbsp;|&nbsp; Nederland, CO
        </p>

        {[
          {
            title: "Who We Are",
            body: `Devils Thumb Construction is a Colorado-based residential and light commercial construction company owned by John Kennedy. We operate at devilsthumbconstruction.com and serve the Colorado Front Range. This Privacy Policy explains how we collect, use, and protect information you submit through our website.`,
          },
          {
            title: "Information We Collect",
            body: `We only collect information you voluntarily provide — primarily through our contact form. This may include your name, phone number, email address, and a description of your project. We do not collect payment information through this website. We also collect standard server log data (IP address, browser type, pages visited, referral source) automatically when you visit the site.`,
          },
          {
            title: "How We Use Your Information",
            body: `We use the information you submit to respond to your inquiry, schedule consultations, and communicate about your project. We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information is used only for the purpose of providing construction services and communicating with you.`,
          },
          {
            title: "Cookies",
            body: `Our website uses essential cookies to support basic site functionality (such as remembering your cookie preference). We do not use advertising cookies, tracking pixels, or third-party analytics that collect personally identifiable information. See our Cookie Policy for full details.`,
          },
          {
            title: "Third-Party Services",
            body: `Our website may use Vercel (hosting) and Resend (transactional email) to deliver your contact form submissions to us. These services process data only as needed to route your message and do not retain your personal data beyond standard operational logs. We do not use Google Analytics, Facebook Pixel, or other advertising trackers.`,
          },
          {
            title: "Data Retention",
            body: `We retain your contact information only as long as necessary to respond to your inquiry and fulfill any resulting project work. If you request that we delete your information, we will do so within a reasonable time unless we are legally required to retain it.`,
          },
          {
            title: "Your Rights",
            body: `You may request access to, correction of, or deletion of your personal information at any time by contacting us directly. Colorado residents may also have rights under the Colorado Privacy Act (CPA). To exercise any of these rights, contact us at j.kennedy@devilsthumbconstruction.com.`,
          },
          {
            title: "Children's Privacy",
            body: `Our website is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted information through our site, please contact us and we will delete it promptly.`,
          },
          {
            title: "Changes to This Policy",
            body: `We may update this Privacy Policy from time to time. The effective date at the top of this page reflects the most recent revision. Continued use of the site after a change constitutes acceptance of the updated policy.`,
          },
          {
            title: "Contact Us",
            body: `If you have questions about this Privacy Policy, contact us at:\n\nDevils Thumb Construction\nPO Box 1575, Nederland, CO 80466\nPhone: 720-322-6899\nEmail: j.kennedy@devilsthumbconstruction.com`,
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
          <a href="/terms" style={{ color: "#e09f18", fontSize: "0.85rem", textDecoration: "underline" }}>Terms of Service</a>
          <a href="/cookie-policy" style={{ color: "#e09f18", fontSize: "0.85rem", textDecoration: "underline" }}>Cookie Policy</a>
          <a href="/" style={{ color: "#8a9490", fontSize: "0.85rem", textDecoration: "underline" }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}
