import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Devil's Thumb Construction",
  description: "Terms governing use of the Devil's Thumb Construction website and general service information.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "60px 24px 80px" }}>
        <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "2rem", fontWeight: 800, color: "#13251e", marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ color: "#8a9490", fontSize: "0.88rem", marginBottom: 40 }}>
          Effective date: September 17, 2026 &nbsp;|&nbsp; Devil&apos;s Thumb Construction &nbsp;|&nbsp; Nederland, CO
        </p>

        {[
          {
            title: "Acceptance of Terms",
            body: `By accessing or using the Devils Thumb Construction website (devilsthumbconstruction.com), you agree to these Terms of Service. If you do not agree, please do not use this website.`,
          },
          {
            title: "Website Use — No Contractor Relationship",
            body: `Use of this website does not create a contractor-client relationship between you and Devils Thumb Construction. No agreement, contract, or obligation of any kind arises from browsing this website, submitting a contact form, or receiving a response from us. A formal contractor-client relationship is only established through a signed written agreement.`,
          },
          {
            title: "Information Accuracy",
            body: `We make reasonable efforts to keep information on this website accurate and up to date. However, we make no warranties — express or implied — regarding the accuracy, completeness, or timeliness of any content. Project photos, descriptions, and service lists are provided for general informational purposes only and should not be relied upon as formal proposals or specifications.`,
          },
          {
            title: "Estimates and Quotes",
            body: `Any pricing information, ranges, or rough estimates mentioned on this website are general in nature and do not constitute a formal bid or binding quote. All estimates are subject to site evaluation, material costs, project scope, and other factors. A formal written estimate will be provided following a consultation.`,
          },
          {
            title: "Licensing and Compliance",
            body: `Devils Thumb Construction operates as a licensed general contractor in the state of Colorado. All work is performed in compliance with applicable Colorado building codes, local ordinances, and safety regulations. Licensing information is available upon request.`,
          },
          {
            title: "Intellectual Property",
            body: `All content on this website — including text, images, logos, and project photographs — is the property of Devils Thumb Construction or its respective owners. You may not reproduce, distribute, or use any content from this site without prior written permission.`,
          },
          {
            title: "Third-Party Links",
            body: `This website may link to third-party websites for reference. We are not responsible for the content, accuracy, or privacy practices of any third-party site. A link does not constitute an endorsement.`,
          },
          {
            title: "Limitation of Liability",
            body: `Devils Thumb Construction shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on its content. Our total liability, if any, shall not exceed the amount you have paid us for services directly related to the claim.`,
          },
          {
            title: "Governing Law",
            body: `These Terms of Service are governed by the laws of the State of Colorado. Any disputes arising from these terms or use of this website shall be resolved in the courts of Boulder County, Colorado.`,
          },
          {
            title: "Changes to These Terms",
            body: `We reserve the right to update these Terms at any time. The effective date at the top of this page reflects the most recent revision. Continued use of the website after a change constitutes acceptance of the updated terms.`,
          },
          {
            title: "Contact",
            body: `Questions about these Terms? Reach us at:\n\nDevils Thumb Construction\nPO Box 1575, Nederland, CO 80466\nPhone: 720-322-6899\nEmail: j.kennedy@devilsthumbconstruction.com`,
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
          <a href="/cookie-policy" style={{ color: "#e09f18", fontSize: "0.85rem", textDecoration: "underline" }}>Cookie Policy</a>
          <a href="/" style={{ color: "#8a9490", fontSize: "0.85rem", textDecoration: "underline" }}>← Back to Home</a>
        </div>
      </div>
    </main>
  );
}
