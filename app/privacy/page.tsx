export const metadata = {
  title: "Privacy Notice",
  description: "How SecureSight CCTV handles information entered into its website quotation form and email enquiries.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Notice | SecureSight CCTV",
    description: "How SecureSight CCTV handles website quotation enquiries.",
    url: "https://securesight.smartbiz365.site/privacy",
    type: "article"
  }
};

export default function PrivacyPage() {
  return <main style={{maxWidth:820,margin:"0 auto",padding:"64px 24px",lineHeight:1.8,color:"#f5f7fa"}}>
    <a href="/" style={{color:"#f4b544"}}>← Back to SecureSight CCTV</a>
    <h1 style={{fontSize:42,marginTop:28}}>Privacy notice</h1>
    <p style={{color:"#aab5c2"}}>Last updated: 19 October 2026</p>
    <p>This website provides information about CCTV installation and related security services. The quotation form runs in your browser and prepares an email addressed to hello@smartbiz365.site. This website does not send that email automatically and does not store form submissions in a website database.</p>
    <h2>Information you enter</h2>
    <p>The form may include your name, phone number, county or town, property type, requested service and any additional details you choose to provide. These details are placed into a pre-filled email only after you submit the form in your browser. Review the draft before sending it.</p>
    <h2>Email processing</h2>
    <p>If you choose to send the email, your email provider and the recipient's email service will process the message under their own terms and privacy practices. Do not include passwords, payment credentials, identity documents or sensitive security details about your property in a general enquiry.</p>
    <h2>Cookies, analytics and external services</h2>
    <p>This website is not configured by this page to store quotation submissions or intentionally set analytics or advertising cookies. Hosting, browser and external service providers may process technical information needed to deliver their services. Check the relevant providers' policies for details.</p>
    <h2>Your choices and contact</h2>
    <p>You can choose not to submit an enquiry. If you send an email, you may contact hello@smartbiz365.site about that correspondence. Before launch, the business should confirm and publish its legal identity, contact details, retention practices and any applicable data-protection procedures. This notice is general information and is not legal advice.</p>
  </main>;
}