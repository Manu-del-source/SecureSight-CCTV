export const metadata = { title: "Privacy Notice", description: "How SecureSight CCTV handles website enquiries." };

export default function PrivacyPage() {
  return <main style={{maxWidth:820,margin:"0 auto",padding:"64px 24px",lineHeight:1.8,color:"#f5f7fa"}}>
    <a href="/" style={{color:"#f4b544"}}>← Back to SecureSight CCTV</a>
    <h1 style={{fontSize:42,marginTop:28}}>Privacy notice</h1>
    <p style={{color:"#aab5c2"}}>Last updated: 19 October 2026</p>
    <p>This website helps visitors enquire about CCTV installation and related security services. This starter website does not have a database and does not save quotation form submissions on its own.</p>
    <h2>Information you provide</h2>
    <p>If you complete the quotation form, the information you enter is used to prepare an enquiry. When a verified WhatsApp contact is configured, the website opens WhatsApp with the message prepared for your review. The message is only sent if you choose to send it. WhatsApp processes messages under its own terms and privacy practices.</p>
    <h2>How to protect your information</h2>
    <p>Only include information needed for your enquiry. Do not submit passwords, payment credentials, identity documents or sensitive security details about your property through a general enquiry form.</p>
    <h2>Cookies and third-party services</h2>
    <p>This starter does not intentionally set analytics or advertising cookies. The site loads fonts from Google Fonts, and following external links may allow those providers to process technical information under their own policies.</p>
    <h2>Contact and updates</h2>
    <p>The business should publish a verified contact address and update this notice before launch, including any actual data retention, access, sharing and deletion practices. This template is general information, not legal advice.</p>
  </main>;
}