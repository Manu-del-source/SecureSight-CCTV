export const metadata = {
  title: "Website Terms",
  description: "Terms for using the SecureSight CCTV website and requesting CCTV installation quotations in Kenya.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Website Terms | SecureSight CCTV",
    description: "Terms for using the SecureSight CCTV website.",
    url: "https://securesight.smartbiz365.site/terms",
    type: "article"
  }
};

export default function TermsPage() {
  return <main style={{maxWidth:820,margin:"0 auto",padding:"64px 24px",lineHeight:1.8,color:"#f5f7fa"}}>
    <a href="/" style={{color:"#f4b544"}}>← Back to SecureSight CCTV</a>
    <h1 style={{fontSize:42,marginTop:28}}>Website terms</h1>
    <p style={{color:"#aab5c2"}}>Last updated: 19 October 2026</p>
    <h2>Website information</h2>
    <p>This website provides general information about CCTV, monitoring, access control and related security services. Service availability, equipment, installation timelines, warranties and prices must be confirmed directly with the business.</p>
    <h2>Quotes and service agreements</h2>
    <p>Submitting an enquiry is not a purchase, booking or service contract. Any quotation should specify the equipment, scope of work, price, payment terms, warranty and schedule. Work should begin only after both parties agree to the relevant terms.</p>
    <h2>Site use</h2>
    <p>Do not misuse this website, attempt to disrupt its operation or submit information you are not authorised to share. Product suitability depends on site conditions and the final agreed system design.</p>
    <h2>Enquiries by email</h2>
    <p>The quotation form prepares an email in your own email application. You are responsible for reviewing the draft and deciding whether to send it. Submitting the form does not itself send a message or create a contract.</p>
    <h2>Updates</h2>
    <p>The business should review and customise these terms before launch and add its verified legal name, contact information and any additional terms applicable to its services. This template is general information, not legal advice.</p>
  </main>;
}