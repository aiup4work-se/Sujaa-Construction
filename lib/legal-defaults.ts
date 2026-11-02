// Default text for pages added in later versions. site.config.ts can override every part.
// ⚠️ Template wording — have your legal adviser review it before going live.

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: { title: string; text: string[] }[];
};

export const defaultTerms: LegalDoc = {
  title: "Terms of Use",
  updated: "1 November 2026",
  intro:
    "These terms explain how you may use this website. By using the site you agree to them. If you do not agree, please do not use the site.",
  sections: [
    {
      title: "About these terms",
      text: [
        "This website is operated by the company named at the end of this page. In these terms, “we”, “us” and “our” refer to the company, and “you” refers to anyone who visits the site.",
      ],
    },
    {
      title: "Using this website",
      text: [
        "You may view, download and print pages for your own information or to evaluate our services. You must not use the site in a way that breaks the law, harms the site or its users, or tries to gain unauthorised access to our systems.",
        "We aim to keep the site available, but we do not guarantee that it will always be available, uninterrupted or free of errors.",
      ],
    },
    {
      title: "Information on this website",
      text: [
        "Project descriptions, figures, photographs and service information are provided for general information. Values, quantities and dates are approximate and may be rounded.",
        "Nothing on this website is a binding offer, quotation, warranty or professional engineering advice. Always rely on a written proposal or contract for your specific project.",
      ],
    },
    {
      title: "Quotations and contracts",
      text: [
        "A quotation or estimate is only valid when we issue it in writing, and only for the period and scope stated in it.",
        "Every construction project is governed by its own signed contract, such as a CIDA (ICTAD) standard bidding document, a FIDIC form or another agreed form of contract. If anything on this website differs from your contract, the contract applies.",
      ],
    },
    {
      title: "Enquiries, drawings and tender documents",
      text: [
        "Drawings, bills of quantities and other documents you send us are treated as confidential and used only to prepare our response. Please do not send documents you are not authorised to share.",
      ],
    },
    {
      title: "Intellectual property",
      text: [
        "The content, design, logos, text and photographs on this website belong to us or our licensors and are protected by the Intellectual Property Act, No. 36 of 2003 and other laws. You may not copy, reproduce or reuse them for commercial purposes without our written permission.",
      ],
    },
    {
      title: "Links to other websites",
      text: [
        "The site may link to websites run by others. We are not responsible for their content or how they handle your information.",
      ],
    },
    {
      title: "Limitation of liability",
      text: [
        "To the extent permitted by law, we are not liable for any loss or damage arising from your use of this website or from relying on information on it. Nothing in these terms limits liability that cannot be limited by law.",
      ],
    },
    {
      title: "Privacy",
      text: ["How we collect and use personal information is explained in our Privacy Policy and Cookie Policy."],
    },
    {
      title: "Changes to these terms",
      text: ["We may update these terms from time to time. The date at the top of this page shows when they were last changed."],
    },
    {
      title: "Governing law",
      text: ["These terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka. The courts of Colombo have exclusive jurisdiction over any dispute about them."],
    },
  ],
};

export const defaultCookies: LegalDoc = {
  title: "Cookie Policy",
  updated: "1 November 2026",
  intro: "This page explains what cookies are, which ones this website uses and how you can control them.",
  sections: [
    {
      title: "What cookies are",
      text: ["Cookies are small text files that a website stores in your browser. They help the site work and can remember your preferences."],
    },
    {
      title: "Cookies we use",
      text: [
        "Essential cookies: needed for the website to work, for example to keep forms secure. These cannot be switched off.",
        "Analytics cookies (only if enabled): help us understand which pages are useful, using anonymous visit statistics. We do not use advertising or tracking cookies.",
      ],
    },
    {
      title: "Managing cookies",
      text: ["You can block or delete cookies in your browser settings. Blocking essential cookies may stop parts of the website, such as the enquiry form, from working."],
    },
    {
      title: "Changes",
      text: ["If we start using other cookies, we will update this page and the date at the top."],
    },
  ],
};

export type SuppliersPage = {
  hero: { label: string; title: string; text: string; photo?: string };
  introTitle: string;
  intro: string;
  categories: { title: string; text: string }[];
  requirementsTitle: string;
  requirements: string[];
  formTitle: string;
  formTypes: string[];
  thanksTitle: string;
  thanksText: string;
};

export const defaultSuppliers: SuppliersPage = {
  hero: {
    label: "Suppliers & Subcontractors",
    title: "Build with us as a partner",
    text: "We work with reliable suppliers, specialist subcontractors and consultants on projects across the country. Register your company to be considered for upcoming work.",
  },
  introTitle: "Who we work with",
  intro: "Good partners are essential to delivering safely and on time. We look for companies that share our standards for quality, safety and fair dealing.",
  categories: [
    { title: "Material suppliers", text: "Cement, steel, aggregates, ready-mix concrete, blocks, finishes and MEP materials." },
    { title: "Specialist subcontractors", text: "Formwork, steel fixing, waterproofing, façades, fire protection, lifts and finishing trades." },
    { title: "Plant & equipment hire", text: "Cranes, piling rigs, earth-moving plant, scaffolding and temporary works." },
    { title: "Consultants & services", text: "Design consultants, testing laboratories, surveyors, transport and logistics." },
  ],
  requirementsTitle: "What to include in your registration",
  requirements: [
    "Business registration certificate and VAT / SVAT registration",
    "CIDA registration and grade (for subcontractors)",
    "Company profile with completed projects and references",
    "Quality, safety or environmental certificates (ISO 9001 / 45001 / 14001, if held)",
    "Insurance cover: public liability and workmen's compensation",
    "Main contact person, phone and email",
  ],
  formTitle: "Register your company",
  formTypes: ["Material supplier", "Specialist subcontractor", "Plant & equipment hire", "Consultant / service provider", "Other"],
  thanksTitle: "Registration received",
  thanksText: "Thank you. Our procurement team will review your details and contact you if we need more information.",
};
