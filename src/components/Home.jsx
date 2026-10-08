import { useState, useEffect } from "react";
// Put sunlogo.png in /public/ (imported as "/sunlogo.png")
import universityLogo from "/sunlogo.png";

/* ------------------------------------------------------------------
   SETUP
   1. Put all images in /public/ (same filenames as used below).
   2. All styling is inline CSS. Add once to global CSS:
         body { margin: 0; }
         html { scroll-behavior: smooth; }
   3. In handleSubmit(), send the lead to your CRM and fire your
      Google Ads conversion event (gtag_report_conversion).
------------------------------------------------------------------- */

const RECRUITERS = [
  { name: "Rêve Pharma", src: "/10012.jpg" },
  { name: "Yugandhar", src: "/10010.jpg" },
  { name: "Nova Beauty", src: "/10009.jpg" },
  { name: "Pantaloons", src: "/10008.jpg" },
  { name: "Forest Essentials", src: "/10007.jpg" },
  { name: "Design Cafe", src: "/10006.jpg" },
  { name: "The Souled Store", src: "/10005.jpg" },
  { name: "Anant Fragrance Pvt. Ltd.", src: "/10003.jpg" },
  { name: "Anant Fragrance Pvt. Ltd.", src: "/10002.jpg" },
  { name: "Anant Fragrance Pvt. Ltd.", src: "/10001.jpg" },
];

const CAMPUS = [
  { src: "/labimg.jpg", title: "Advanced Labs", text: "State-of-the-art laboratories for hands-on experiments and innovation." },
  { src: "/studentActivities.jpg", title: "Student Activities", text: "Cultural festivals, sports, clubs, and various student-led initiatives." },
  { src: "/securityimg.webp", title: "24×7 Security", text: "Round-the-clock surveillance with advanced monitoring systems." },
  { src: "/gym.webp", title: "Gymnasium", text: "Modern fitness center with advanced workout machines." },
  { src: "/campus-1.jpg", title: "Vibrant Campus Atmosphere", text: "Experience an energetic campus filled with learning, culture and fun." },
  { src: "/classroom-1.jpg", title: "Modern Classrooms", text: "Well-equipped digital classrooms designed for interactive learning." },
  { src: "/DSC_5062.jpg", title: "Library & Research Center", text: "A huge digital + physical library supporting academic and research needs." },
  { src: "/hostel.jpg", title: "Hostel & Accommodation", text: "Comfortable, secure hostel facilities that feel like a second home." },
];

const IMG = {
  hero: "/IMG_20251010_142827.jpg",
  campus: "/042__1_.jpg",
  studentsFaculty: "/IMG_20251010_143929.jpg",
  seniorFaculty: "/IMG_20251010_124443.jpg",
  schoolEntrance: "/IMG_20251010_143927.jpg",
};

const CONTENT = {
  brand: "Sandip University",
  phone: "+91-8956374111",
  phoneHref: "tel:+918956374111",
  heroTag: "Admissions Open 2026–27",
  heroTitle: "From Classroom to Corporate Leadership",
  heroSub:
    "Applications Invited for SU-MAT 2027",
  para: "Applicable for only PG course",
  
    heroPoints: [
    "Practice-oriented business education",
    "Experienced faculty & industry experts",
    "Industry-aligned curriculum",
    "Leadership & entrepreneurial development",
  ],
  datNotice: {
    titlee: "1st Phase Examination",
    title: "",
    lastDateLabel: "Last Date to Apply",
    lastDate: "28 Jan 2027",
    examLabel: "SU-DAT Exam",
    examDate: "30 Jan 2027",
  },

  stats: [
    { value: "20+", label: "Years of Excellence" },
    { value: "150+", label: "Industry Partners" },
    { value: "20+", label: "Design Labs & Studios" },
    { value: "100%", label: "Placement Support" },
  ],
  aboutTitle: "About the School of Commerce & Management Studies",
  aboutText: [
    "School of Commerce and Management Studies is one of the best management colleges in Nashik offering 3-year undergraduate programs divided into 6 semesters.",
    "We follow the updated system because the business landscape is constantly evolving due to continuous technological advancement, changing market conditions, and globalization. We ensure that the graduates from our college are trained and knowledgeable enough to thrive in the modern workplace. Moreover they are in par with the students of top MBA colleges in Maharashtra.",
  ],
  programs: [
    { name: "BBA Specialisation in Business Analytics", duration: "4 Years", blurb: "Undergraduate design degree with specialisation options." },
    { name: "BBA Specialisation in Digital Marketing", duration: "3 Years", blurb: "Science-based degrees in fashion, interiors and beauty." },
    { name: "Bachelor of Commerce", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "MBA Specialisation  in Financial Management", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "MBA Specialisation in Marketing Management", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "MBA Specialisation in Business Analytics", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "MBA Specialisation in Banking and Financial Services", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "BBA  Specialisation in Marketing", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "BBA Specialisation in Human Resource Management", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "BBA Specialisation in Financial Management", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "BBA Specialisation in INTERNATIONAL BUSINESS", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "MBA Specialisation in Artificial Intelligence", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "MBA Specialisation in Content Strategy", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "MBA Specialisation in Digital Transformation", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "BBA International Accounting & Finance (ACCA-UK)", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },
    { name: "BBA Aviation Management", duration: "2 Years", blurb: "Advanced science-based programmes in fashion and beauty." },

  ],
  highlights: [
    { title: "Learn by Doing", text: "Case studies, business simulations, live projects and market research assignments in dedicated practice labs." },
    { title: "Mentorship", text: "Small batches with faculty who guide your projects, internships and career planning one-to-one." },
    { title: "Business Meets Technology", text: "Work with analytics tools, digital marketing platforms and financial software that match what industry uses today." },
    { title: "Career Ready", text: "Presentations, business competitions, live projects and placement training help you graduate ready for the workplace." },
    { title: "Industry Exposure", text: "Workshops, guest lectures and internships with corporates, banks, startups and consulting firms." },
    { title: "Green Campus", text: "A spacious, well-connected campus with a library and learning spaces built for focused study." },
  ],
  careers: [
    "Financial Analyst",
    "Marketing Manager",
    "HR Manager",
    "Business Analyst",
    "Investment Banker",
    "Chartered Accountant / Tax Consultant",
    "International Business Manager",
    "Entrepreneur / Startup Founder",
  ],
  steps: [
    { title: "Enquire", text: "Fill the form or call our admission desk." },
    { title: "Counselling", text: "Talk to our team about programmes and eligibility." },
    { title: "Apply", text: "Submit your application and documents." },
    { title: "Enrol", text: "Confirm your seat and start your design journey." },
  ],
  faqs: [
    { q: "What programs are offered under Sandip University’s School of Commerce & Management Studies?", a: "We offer undergraduate programs like BBA and B.Com., as well as postgraduate programs such as MBA and specialized New Age MBA programs." },
    { q: "What is the eligibility criteria for BBA admission at Sandip University?", a: "Passed 10+2 from a recognized board with minimum required marks depending on the category. Specific requirements may vary for different specializations." },
    { q: "What is the eligibility criteria for B.Com. admission at Sandip University?", a: "Passed 10+2 in Commerce or any stream from a recognized board with minimum required marks." },
    { q: "Do I need to appear for an entrance exam for MBA programs at Sandip University?", a: "Some MBA programs require entrance tests or personal interviews. For New Age MBA programs, industry exposure and prior academic performance are also considered." },
    { q: "Can I switch my specialization after taking admission at Sandip University?", a: "Yes, in some cases, students may switch specializations depending on seat availability and academic guidelines." },
    { q: "Are internships included in the curriculum at Sandip University?", a: "Yes, internships and industry projects are integrated into the curriculum for practical exposure." },
  ],
  footerAddress: "Sandip University, Nashik, Maharashtra, India",
};
const DEGREES = [
  {
    id: "bba",
    title: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    mode: "Full-Time",
    eligibility: ["Passed 10+2 from a recognized board"],
    specializations: [
      {
        key: "Financial Management",
        summary:
          "BBA in Financial Management gives you a strong foundation in corporate finance, investment analysis, risk management, and financial planning. Through practical projects, real-world case studies, and hands-on learning, you'll develop the skills to analyze financial data, make informed decisions, and think strategically. This program blends business knowledge with financial expertise, preparing you to confidently navigate the complex world of finance.",
        careers: ["Financial Analyst", "Corporate Finance Executive", "Investment Banker", "Risk Manager", "Portfolio Manager", "Accounts & Audit Executive", "Treasury Analyst", "Wealth Manager"],
      },
      {
        key: "Marketing Management",
        summary:
          "BBA in Marketing Management equips you with a solid foundation in marketing strategy, consumer behavior, brand management, digital marketing, and market research. Through practical projects, case studies, and hands-on learning, you'll develop the skills to analyze markets, craft effective strategies, and create value-driven campaigns. This program blends business knowledge with marketing expertise, enabling you to think creatively and strategically in the dynamic world of marketing.",
        careers: ["Marketing Executive / Manager", "Brand Manager", "Digital Marketing Specialist", "Sales Executive / Manager", "Market Research Analyst", "Advertising & Promotions Executive", "Product Manager", "Social Media Manager"],
      },
      {
        key: "Human Resource Management",
        summary:
          "BBA in Human Resource Management provides a strong foundation in talent management, organizational behavior, recruitment, training & development, and employee relations. Through practical projects, real-world case studies, and hands-on learning, you'll develop the skills to manage people effectively, build strong teams, and drive organizational success. This program blends business knowledge with HR expertise, enabling you to strategically shape workplace culture and performance.",
        careers: ["HR Executive / Manager", "Talent Acquisition Specialist", "Training & Development Officer", "Employee Relations Manager", "Payroll & Compensation Specialist", "HR Analytics Specialist", "Organizational Development Consultant"],
      },
      {
        key: "International Business",
        summary:
          "BBA in International Business equips you with a solid foundation in global trade, international marketing, cross-cultural management, global finance, and international business strategy. Through practical projects, case studies, and real-world exposure, you'll develop the skills to understand global markets, make strategic business decisions, and operate effectively across borders. This program blends business knowledge with international expertise, preparing you to thrive in today's interconnected world.",
        careers: ["International Business Manager", "Export-Import Executive", "Global Supply Chain Analyst", "International Marketing Manager", "Business Development Manager", "Trade Compliance Specialist", "International Sales Manager"],
      },
      {
        key: "Business Analytics",
        summary:
          "BBA in Business Analytics provides a strong foundation in data analysis, business intelligence, statistical modeling, predictive analytics, and decision-making tools. Through hands-on projects, real-world case studies, and practical exposure, you'll develop the skills to analyze complex business data, uncover insights, and drive strategic decisions. This program blends business knowledge with analytical expertise, preparing you to solve real-world business challenges with data-driven precision.",
        careers: ["Business Analyst", "Data Analyst / Data Scientist", "Market Research Analyst", "Operations Analyst", "Business Intelligence Analyst", "Risk & Strategy Analyst", "Analytics Consultant"],
      },
      {
        key: "Digital Marketing",
        summary:
          "BBA in Digital Marketing equips you with a solid foundation in SEO, social media marketing, content strategy, digital advertising, and data-driven marketing insights. Through hands-on projects, real-world case studies, and practical exposure, you'll develop the skills to create impactful campaigns, analyze audience behavior, and drive results in the digital landscape. This program blends business knowledge with digital expertise, preparing you to lead in today's fast-paced online world.",
        careers: ["Digital Marketing Executive / Manager", "SEO / SEM Specialist", "Social Media Manager", "Content Marketing Strategist", "Email Marketing Manager", "Online Advertising / PPC Specialist", "Marketing Analytics Specialist", "Brand & Campaign Manager"],
      },
    ],
  },
  {
    id: "bcom",
    title: "Bachelor of Commerce (B.Com.)",
    duration: "3 Years",
    mode: "Full-Time",
    eligibility: ["Passed 10+2 in Commerce or any stream from a recognized board"],
    specializations: [
      {
        key: "Accounting & Finance",
        summary:
          "B.Com. in Accounting and Finance builds a strong foundation in financial accounting, taxation, auditing, cost accounting, and financial analysis. Through practical learning and real-world case studies, the program equips you with the skills to interpret financial data, manage accounts, and make informed financial decisions. It blends essential commerce knowledge with financial expertise to help you understand and strengthen an organization's financial health.",
        careers: ["Accountant", "Financial Analyst", "Tax Consultant", "Audit Assistant / Auditor", "Accounts Executive", "Finance Officer", "Financial Planner", "Payroll Executive", "Compliance & Reporting Assistant"],
      },
      {
        key: "Costing",
        summary:
          "B.Com. in Costing provides a strong foundation in cost accounting, budgeting, cost analysis, pricing strategies, and financial control. Through practical exercises and real-world case studies, the program helps you develop the skills to identify, manage, and optimize costs, ensuring better decision-making and operational efficiency. It blends core commerce knowledge with specialized costing techniques to help you understand and improve an organization's financial performance.",
        careers: ["Cost Accountant Assistant", "Cost Analyst", "Budget Analyst", "Cost Controller", "Pricing Analyst", "Production Cost Supervisor", "Cost Audit Assistant"],
      },
    ],
  },
  {
    id: "mba",
    title: "Master of Business Administration (MBA)",
    duration: "2 Years",
    mode: "Full-Time",
    eligibility: ["Any graduation with minimum 50% marks"],
    specializations: [
      {
        key: "Marketing Management",
        summary:
          "MBA in Marketing Management builds advanced expertise in marketing strategy, consumer behavior, branding, digital marketing, market analytics, and integrated communication. Through case studies, live projects, and practical simulations, the program equips you with the ability to analyze markets, understand customer needs, craft powerful campaigns, and drive business growth. It blends strategic business insight with creative marketing skills, preparing you to lead and innovate in a dynamic, competitive marketplace.",
        careers: ["Marketing Manager / Executive", "Brand Manager", "Product Manager", "Digital Marketing Strategist", "Market Research Analyst", "Sales Manager", "Social Media Manager"],
      },
      {
        key: "Financial Management",
        summary:
          "MBA in Financial Management provides advanced knowledge in corporate finance, investment analysis, financial planning, risk management, and strategic decision-making. Through real-world case studies, practical projects, and analytical tools, the program helps you develop the expertise to evaluate financial performance, manage capital, optimize investments, and guide organizations toward sustainable growth. It blends strong business leadership skills with deep financial expertise, preparing you to navigate complex financial environments with confidence.",
        careers: ["Financial Analyst", "Investment Banker", "Corporate Finance Manager", "Risk Manager", "Portfolio Manager", "Accounts & Audit Manager", "Treasury Analyst"],
      },
      {
        key: "Human Resource Management",
        summary:
          "MBA in Human Resource Management offers advanced learning in talent management, organizational behavior, leadership development, HR analytics, employee relations, and strategic workforce planning. Through practical projects, case studies, and experiential learning, the program equips you with the ability to build high-performing teams, shape workplace culture, design effective HR policies, and align people strategies with organizational goals. It blends strong leadership skills with modern HR expertise, preparing you to lead and inspire in today's evolving work environments.",
        careers: ["HR Manager / Executive", "Talent Acquisition Manager", "Training & Development Manager", "Employee Relations Manager", "Compensation & Benefits Specialist", "HR Analytics Specialist", "Organizational Development Consultant"],
      },
      {
        key: "International Business",
        summary:
          "MBA in International Business offers focused learning in global trade, international marketing, cross-cultural management, and global finance. Through practical projects and international business simulations, the program builds the skills to analyze global markets, manage cross-border operations, and make strategic decisions in a global environment.",
        careers: ["International Business Manager", "Global Marketing Manager", "Export–Import Manager", "International Trade Analyst", "International Sales Manager", "Foreign Market Entry Specialist", "International Finance Executive", "International Operations Manager", "Trade Compliance Officer"],
      },
    ],
  },
  {
    id: "newage",
    title: "New Age MBA",
    duration: "2 Years",
    mode: "Future-Ready Program",
    eligibility: ["Graduation in any stream from a recognized university"],
    specializations: [
      {
        key: "Banking and Financial Services",
        summary:
          "New Age MBA in Banking and Financial Services combines advanced finance concepts, banking operations, risk management, and investment strategies with practical, industry-focused learning from the very first semester. The program also offers exclusive international industry exposure, giving you a global perspective on modern banking and finance. Gain the skills to analyze financial markets, manage banking operations, and make strategic decisions with confidence.",
        careers: ["Banking Operations Manager", "Corporate Finance Manager", "Investment Banker", "Risk & Compliance Manager", "Financial Analyst", "Treasury Manager", "Wealth & Portfolio Manager", "Credit & Loan Manager", "Financial Strategy Consultant"],
      },
      {
        key: "Business Analytics",
        summary:
          "New Age MBA in Business Analytics combines advanced data analysis, predictive modeling, business intelligence, and decision-making tools with practical, industry-focused learning from the very first semester. The program also includes exclusive international industry exposure, giving you a global perspective on how businesses leverage data to drive growth. Develop the skills to analyze complex datasets, extract actionable insights, and make data-driven strategic decisions with confidence.",
        careers: ["Business / Data Analyst", "Business Intelligence (BI) Specialist", "Market Research Analyst", "Predictive Analytics Specialist", "Operations Analyst", "Risk & Strategy Analyst", "Data-Driven Decision Consultant", "Analytics Project Manager", "Insights & Reporting Manager"],
      },
    ],
  },
];

/* ----------------------------- theme ----------------------------- */

const C = {
  blue950: "#172554",
  blue900: "#1e3a8a",
  blue800: "#1e40af",
  blue700: "#1d4ed8",
  blue200: "#bfdbfe",
  blue100: "#dbeafe",
  orange700: "#c2410c",
  orange600: "#ea580c",
  orange500: "#f97316",
  orange400: "#fb923c",
  orange200: "#fed7aa",
  orange100: "#ffedd5",
  slate900: "#0f172a",
  slate700: "#334155",
  slate600: "#475569",
  slate500: "#64748b",
  slate400: "#94a3b8",
  slate300: "#cbd5e1",
  slate200: "#e2e8f0",
  slate50: "#f8fafc",
  white: "#ffffff",
};

const FONT =
  "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

/* ----------------------------- helpers ----------------------------- */

function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

function useBp() {
  const w = useWidth();
  return { sm: w >= 640, md: w >= 768, lg: w >= 1024 };
}

const goToForm = () =>
  document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });

const NAV = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Courses", id: "courses" },
  { label: "Recruiters", id: "recruiters" },
  { label: "Campus Life", id: "campus-life" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Contact Us", id: "enquire" },
];

const goTo = (id) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Container({ children, style }) {
  const { sm } = useBp();
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: 1152,
        margin: "0 auto",
        padding: sm ? "0 24px" : "0 16px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, center = true, light = false }) {
  const { sm } = useBp();
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      {eyebrow && (
        <p
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: light ? C.orange400 : C.orange600,
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          margin: "8px 0 0",
          fontSize: sm ? 36 : 30,
          fontWeight: 700,
          lineHeight: 1.2,
          color: light ? C.white : C.slate900,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Btn({ href, onClick, style, hoverStyle, children, type }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={href ? undefined : type || "button"}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        cursor: "pointer",
        textDecoration: "none",
        border: "none",
        fontFamily: "inherit",
        transition: "background-color .2s, transform .2s",
        ...style,
        ...(hover ? hoverStyle : {}),
      }}
    >
      {children}
    </Tag>
  );
}

function HoverCard({ style, children }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "transform .2s, box-shadow .2s",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? "0 10px 25px rgba(15,23,42,.12)" : "0 1px 2px rgba(15,23,42,.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Field({ as = "input", style, ...props }) {
  const [focus, setFocus] = useState(false);
  const Tag = as;
  return (
    <Tag
      {...props}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        boxSizing: "border-box",
        width: "100%",
        padding: "11px 12px",
        fontSize: 14,
        fontFamily: "inherit",
        color: C.slate900,
        background: C.white,
        borderRadius: 8,
        outline: "none",
        border: `1px solid ${focus ? C.orange600 : C.slate300}`,
        boxShadow: focus ? `0 0 0 3px ${C.orange200}` : "none",
        ...style,
      }}
    />
  );
}

/* ----------------------------- lead form ----------------------------- */

function LeadForm() {
  const { sm } = useBp();
  const [data, setData] = useState({ name: "", phone: "", email: "", program: "", city: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST `data` to your CRM / backend
    // TODO: fire Google Ads conversion, e.g. gtag_report_conversion();
    console.log("Lead:", data);
    setSent(true);
  };

  const card = {
    boxSizing: "border-box",
    background: C.white,
    borderRadius: 16,
    padding: sm ? 32 : 24,
    boxShadow: "0 25px 50px rgba(0,0,0,.3)",
  };

  if (sent) {
    return (
      <div style={{ ...card, textAlign: "center", padding: 32 }}>
        <div
          style={{
            width: 56,
            height: 56,
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: "#dcfce7",
            color: "#16a34a",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✓
        </div>
        <h3 style={{ margin: 0, fontSize: 20, color: C.slate900 }}>Thank you!</h3>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: C.slate600 }}>
          Our admission counsellor will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={card}>
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>
        Apply / Get a Free Callback
      </h3>
      <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate500 }}>Takes less than a minute.</p>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <Field name="name" placeholder="Full name" required value={data.name} onChange={onChange} />
        <Field name="phone" type="tel" placeholder="Mobile number" required pattern="[0-9+\- ]{10,15}" value={data.phone} onChange={onChange} />
        <Field name="email" type="email" placeholder="Email address" required value={data.email} onChange={onChange} />
        <Field name="city" placeholder="City" value={data.city} onChange={onChange} />
        <Field as="select" name="program" required value={data.program} onChange={onChange}>
          <option value="">Select programme</option>
          {CONTENT.programs.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </Field>
      </div>
      <Btn
        type="submit"
        style={{
          width: "100%",
          marginTop: 20,
          padding: "14px 16px",
          borderRadius: 8,
          background: "rgb(216 10 18)",
          color: C.white,
          fontSize: 16,
          fontWeight: 600,
        }}
        hoverStyle={{ background: C.orange700 }}
      >
        Submit Enquiry
      </Btn>
      <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: 12, color: C.slate400 }}>
        By submitting, you agree to be contacted by Sandip University.
      </p>
    </form>
  );
}

/* ----------------------------- sections ----------------------------- */

function Header() {
  const { sm, lg } = useBp();
  const w = useWidth();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setMenuOpen(false);
    goTo(id);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${C.slate200}`,
      }}
    >
      <Container style={{ display: "flex", height: 64, alignItems: "center", justifyContent: "space-between", gap: 16, maxWidth: 1180 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <img
            src={universityLogo}
            alt={CONTENT.brand}
            style={{ height: 56, width: "auto", objectFit: "contain", display: "block" }}
          />
        </div>

        {lg && (
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV.map((n) => (
              <Btn
                key={n.id}
                onClick={() => go(n.id)}
                style={{ padding: "8px 10px", background: "none", color: C.slate700, fontSize: 14, fontWeight: 600, borderRadius: 6 }}
                hoverStyle={{ color: C.orange600 }}
              >
                {n.label}
              </Btn>
            ))}
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>

          {sm && (
            <Btn
              onClick={goToForm}
              style={{ padding: "8px 20px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
              hoverStyle={{ background: "#000" }}
            >
              Apply Now
            </Btn>
          )}
          {!lg && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{ background: "none", border: `1px solid ${C.slate300}`, borderRadius: 8, width: 40, height: 40, fontSize: 20, cursor: "pointer", color: C.slate700 }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </Container>

      {!lg && menuOpen && (
        <nav style={{ background: C.white, borderTop: `1px solid ${C.slate200}`, padding: "8px 16px 16px", display: "flex", flexDirection: "column" }}>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              style={{ textAlign: "left", padding: "12px 4px", background: "none", border: "none", borderBottom: `1px solid ${C.slate200}`, fontFamily: "inherit", fontSize: 15, fontWeight: 600, color: C.slate700, cursor: "pointer" }}
            >
              {n.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { sm, lg } = useBp();
  return (
    <section id="home" style={{ position: "relative", overflow: "hidden", background: C.blue950 }}>
      <img
        src={IMG.hero}
        alt="Design student draping fabric on a mannequin in the studio"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to right, ${C.blue950}, rgba(23,37,84,.8), transparent)`,
        }}
      />
      <Container
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: lg ? "1fr 1fr" : "1fr",
          alignItems: "center",
          gap: 40,
          paddingTop: lg ? 80 : 56,
          paddingBottom: lg ? 80 : 56,
        }}
      >
        <div style={{ color: C.white }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: 999,
              background: "rgb(216 10 18)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {CONTENT.heroTag}
          </span>
          <h1 style={{ margin: "20px 0 0", fontSize: sm ? 48 : 36, fontWeight: 700, lineHeight: 1.15 }}>
            {CONTENT.heroTitle}
          </h1>
          <h5 style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 18, lineHeight: 1.6, color: "#fff" }}>
            {CONTENT.heroSub}
          </h5>
          <p style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 15, lineHeight: 1.6, color: C.blue100 }}>
            {CONTENT.para}
          </p>
          <div
            style={{
              marginTop: 24,
              maxWidth: 576,
              padding: "16px 20px",
              borderRadius: 12,
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.25)",
              borderLeft: "4px solid rgb(216 10 18)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div style={{ fontSize: sm ? 20 : 17, fontWeight: 600, lineHeight: 1.3, marginBottom: 5 }}>
              {CONTENT.datNotice.titlee}
            </div>
            <div style={{ fontSize: sm ? 17 : 17, fontWeight: 700, lineHeight: 1.3 }}>
              {CONTENT.datNotice.title}
            </div>

            <div
              style={{
                marginTop: 12,
                display: "flex",
                flexDirection: sm ? "row" : "column",
                alignItems: sm ? "center" : "flex-start",
                gap: sm ? 20 : 10,
              }}
            >
              <div>
                <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "red", fontWeight: 700, marginBottom: 4 }}>
                  {CONTENT.datNotice.lastDateLabel}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{CONTENT.datNotice.lastDate}</div>
              </div>

              <div
                aria-hidden="true"
                style={{
                  width: sm ? 1 : "100%",
                  height: sm ? 36 : 1,
                  background: "rgba(255,255,255,.35)",
                }}
              />

              <div>
                <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "red", fontWeight: 700, marginBottom: 4 }}>
                  {CONTENT.datNotice.examLabel}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{CONTENT.datNotice.examDate}</div>
              </div>
            </div>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: "24px 0 0",
              padding: 0,
              display: "grid",
              gridTemplateColumns: sm ? "1fr 1fr" : "1fr",
              gap: 8,
            }}
          >
            {CONTENT.heroPoints.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgb(216 10 18)",
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div id="enquire" style={{ scrollMarginTop: 96 }}>
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  const { md } = useBp();
  return (
    <section style={{ background: "rgb(216 10 18)" }}>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
          gap: 24,
          padding: "32px 24px",
          textAlign: "center",
          color: C.white,
        }}
      >
        {CONTENT.stats.map((s) => (
          <div key={s.label}>
            <p style={{ margin: 0, fontSize: 30, fontWeight: 800 }}>{s.value}</p>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: C.orange100 }}>{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function About() {
  const { sm, lg } = useBp();
  return (
    <section id="about" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container style={{ display: "grid", gridTemplateColumns: lg ? "1fr 1fr" : "1fr", alignItems: "center", gap: 40 }}>
        <div>
          <SectionTitle eyebrow="Who we are" title={CONTENT.aboutTitle} center={false} />
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16, color: C.slate600, lineHeight: 1.7 }}>
            {CONTENT.aboutText.map((t) => (
              <p key={t} style={{ margin: 0 }}>{t}</p>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Talk to a Counsellor
          </Btn>
        </div>
        <img
          src={IMG.campus}
          alt="Sandip University campus"
          loading="lazy"
          style={{
            width: "100%",
            height: lg ? 380 : 240,
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 20px 40px rgba(15,23,42,.2)",
          }}
        />
      </Container>
    </section>
  );
}

/* ----------------------------- programmes ----------------------------- */

function DegreePanel({ degree }) {
  const { sm, md } = useBp();
  const [tab, setTab] = useState(0);
  const spec = degree.specializations[tab];

  return (
    <div
      style={{
        boxSizing: "border-box",
        background: C.white,
        border: `1px solid ${C.slate200}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(15,23,42,.08)",
      }}
    >
      <div style={{ background: "rgb(216 10 18)", color: C.white, padding: sm ? "28px 32px" : "24px 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "#000", fontSize: 12, fontWeight: 600 }}>
            {degree.duration}
          </span>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(255,255,255,.15)", fontSize: 12, fontWeight: 600 }}>
            {degree.mode}
          </span>
        </div>
        <h3 style={{ margin: "12px 0 0", fontSize: sm ? 30 : 24, fontWeight: 800 }}>{degree.title}</h3>
        <p style={{ margin: "16px 0 8px", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>
          Choose Specialization
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {degree.specializations.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setTab(i)}
              aria-pressed={tab === i}
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${tab === i ? C.orange600 : "rgba(255,255,255,.4)"}`,
                background: tab === i ? "#000" : "transparent",
                color: C.white,
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color .2s, border-color .2s",
              }}
            >
              {s.key}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: md ? "1.2fr 1fr" : "1fr",
          gap: md ? 40 : 28,
          padding: sm ? "32px" : "24px 20px",
        }}
      >
        <div>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{spec.key} — Summary</h4>
          <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.7, color: C.slate600 }}>{spec.summary}</p>

          <h4 style={{ margin: "28px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>Eligibility</h4>
          <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {degree.eligibility.map((e) => (
              <li key={e} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5, color: C.slate700 }}>
                <span style={{ color: C.orange600, fontWeight: 700 }}>✓</span>
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ boxSizing: "border-box", background: C.slate50, border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24, alignSelf: "start" }}>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>Career Opportunities</h4>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {spec.careers.map((c) => (
              <span
                key={c}
                style={{ padding: "8px 14px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
              >
                {c}
              </span>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Enquire for {spec.key} →
          </Btn>
        </div>
      </div>
    </div>
  );
}
const TABS = [
  { id: "bba", label: "BBA", title: "Bachelor of Business Administration (BBA)", hash: "#bba-courses" },
  { id: "bcom", label: "B.Com.", title: "Bachelor of Commerce (B.Com.)", hash: "#bcom-courses" },
  { id: "mba", label: "MBA", title: "Master of Business Administration (MBA)", hash: "#mba-courses" },
  { id: "newage", label: "New Age MBA", title: "New Age MBA", hash: "#newage-courses" },
];
function Programs() {
  const { sm, md } = useBp();
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const degree = DEGREES.find((d) => d.id === tab.id);
  const others = CONTENT.programs.filter((p) => !DEGREES.some((d) => d.title === p.name));

  // Keep old nav links (#bsc-courses, #msc-courses) working: they switch the tab
  useEffect(() => {
    const syncFromHash = () => {
      const i = TABS.findIndex((t) => t.hash === window.location.hash);
      if (i !== -1) setActive(i);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section id="courses" style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      {/* anchors so existing links to these ids still scroll here */}
      <span id="bsc-courses" style={{ display: "block", scrollMarginTop: 64 }} />
      <span id="msc-courses" style={{ display: "block", scrollMarginTop: 64 }} />

      <Container>
        <SectionTitle eyebrow="Programmes" title={tab.title} />
        {tab.desc && (
          <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
            {tab.desc}
          </p>
        )}

        {/* Filter tabs: flat, one row, underline on active */}
        <div
          role="tablist"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            marginTop: 40,
            marginBottom: 24,
            borderBottom: `2px solid ${C.slate200}`,
          }}
        >
          {TABS.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  whiteSpace: "nowrap",
                  padding: sm ? "16px 12px" : "12px 6px",
                  background: "transparent",
                  border: "none",
                  borderBottom: `3px solid ${isActive ? C.orange600 : "transparent"}`,
                  marginBottom: -2,
                  color: isActive ? "rgb(216 10 18)" : C.slate600,
                  fontFamily: "inherit",
                  fontSize: sm ? 17 : 15,
                  fontWeight: isActive ? 800 : 600,
                  cursor: "pointer",
                  transition: "color .2s, border-color .2s",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* key resets the specialization tab when the degree changes */}
        <DegreePanel key={degree.id} degree={degree} />

        {/* extra programmes only under B.Des, as before */}
        {tab.id === "bdes" && others.length > 0 && (
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: md ? `repeat(${others.length}, 1fr)` : "1fr",
              gap: 24,
            }}
          >
            {others.map((p) => (
              <HoverCard
                key={p.name}
                style={{ boxSizing: "border-box", background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24 }}
              >
                <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 999, background: C.orange100, color: C.orange700, fontSize: 12, fontWeight: 600 }}>
                  {p.duration}
                </span>
                <h3 style={{ margin: "16px 0 0", fontSize: 24, fontWeight: 700, color: C.slate900 }}>{p.name}</h3>
                <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{p.blurb}</p>
                <Btn
                  onClick={goToForm}
                  style={{ marginTop: 20, padding: 0, background: "none", color: C.orange600, fontSize: 14, fontWeight: 600 }}
                  hoverStyle={{ color: C.orange700 }}
                >
                  Enquire now →
                </Btn>
              </HoverCard>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function Highlights() {
  const { sm, lg } = useBp();
  return (
    <section id="why-us" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container>
        <SectionTitle eyebrow="Why choose us" title="What Makes Our School Different" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(3, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.highlights.map((h, i) => (
            <div key={h.title} style={{ boxSizing: "border-box", border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "rgb(216 10 18)",
                  color: C.white,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{h.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{h.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- campus life ----------------------------- */

function CarouselArrow({ dir, onClick, top }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",
        top,
        [dir]: 4,
        transform: "translateY(-50%)",
        zIndex: 2,
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        fontSize: 22,
        lineHeight: 1,
        color: hover ? C.white : C.slate900,
        background: hover ? C.orange600 : "rgba(255,255,255,.92)",
        boxShadow: "0 4px 12px rgba(15,23,42,.25)",
        transition: "background-color .2s, color .2s",
      }}
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}

function CampusCard({ item, imgH }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        boxSizing: "border-box",
        height: "100%",
        overflow: "hidden",
        background: C.white,
        borderRadius: 20,
        boxShadow: hover ? "0 14px 30px rgba(15,23,42,.18)" : "0 4px 14px rgba(15,23,42,.10)",
        transition: "box-shadow .3s",
      }}
    >
      <div style={{ overflow: "hidden", height: imgH, background: `linear-gradient(135deg, ${C.blue900}, ${C.orange600})` }}>
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .5s",
            transform: hover ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>{item.title}</h3>
        <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.6, color: C.slate600 }}>{item.text}</p>
      </div>
    </div>
  );
}

function CampusLife() {
  const { sm, md } = useBp();
  const perView = md ? 2 : 1;
  const pages = Math.ceil(CAMPUS.length / perView);
  const imgH = md ? 300 : sm ? 260 : 210;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const page = Math.min(index, pages - 1);

  const next = () => setIndex((page + 1) % pages);
  const prev = () => setIndex((page - 1 + pages) % pages);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (Math.min(i, pages - 1) + 1) % pages), 5000);
    return () => clearInterval(t);
  }, [paused, pages]);

  return (
    <section
      id="campus-life"
      style={{
        padding: sm ? "80px 0" : "64px 0",
        scrollMarginTop: 64,
        background: `linear-gradient(to bottom, ${C.orange100}, ${C.white} 35%, ${C.slate50})`,
      }}
    >
      <Container>
        <SectionTitle eyebrow="Life at Sandip" title="Campus Life" />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
          Learning, creativity, fitness and community — everything you need for a complete university experience.
        </p>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: "relative", marginTop: 40 }}
        >
          <CarouselArrow dir="left" onClick={prev} top={imgH / 2 + 8} />
          <CarouselArrow dir="right" onClick={next} top={imgH / 2 + 8} />

          <div style={{ overflow: "hidden", margin: "0 -12px", padding: "8px 0 24px" }}>
            <div
              style={{
                display: "flex",
                transform: `translateX(-${page * 100}%)`,
                transition: "transform .6s ease",
              }}
            >
              {CAMPUS.map((item) => (
                <div
                  key={item.title}
                  style={{ boxSizing: "border-box", flex: `0 0 ${100 / perView}%`, padding: "0 12px" }}
                >
                  <CampusCard item={item} imgH={imgH} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === page ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === page ? C.orange600 : C.slate300,
                transition: "width .3s, background-color .3s",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  const { sm, md } = useBp();
  const items = [
    {
      src: IMG.schoolEntrance,
      alt: "Commerce and management students in blazers outside the School of Commerce and Management Studies",
      title: "Our Students",
      text: "A professional, business-ready community that learns and grows together.",
    },
    {
      src: IMG.studentsFaculty,
      alt: "Students standing with faculty mentors in front of the school building",
      title: "Faculty Mentors",
      text: "Faculty who guide your projects, internships and career planning.",
    },
    {
      src: IMG.seniorFaculty,
      alt: "Students with a senior faculty member inside the School of Commerce and Management Studies",
      title: "Life at SCMS",
      text: "Open, well-lit learning spaces built for discussion, teamwork and focus.",
    },
  ];

  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Student showcase" title="Life at the School of Commerce & Management Studies" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: md ? "repeat(3, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {items.map((it) => (
            <article
              key={it.title}
              style={{
                overflow: "hidden",
                background: C.white,
                border: `1px solid ${C.slate200}`,
                borderRadius: 16,
                boxShadow: "0 1px 2px rgba(15,23,42,.06)",
              }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: 288,
                  objectFit: "cover",
                  objectPosition: "center 35%",
                }}
              />
              <div style={{ padding: 20 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{it.title}</h3>
                <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  const { sm } = useBp();
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Careers" title="Where a Management Degree Can Take You" />
        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {CONTENT.careers.map((c) => (
            <span
              key={c}
              style={{ padding: "8px 20px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const { sm, lg } = useBp();
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Admission process" title="4 Simple Steps to Get Started" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(4, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.steps.map((s, i) => (
            <div key={s.title} style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "rgb(216 10 18)",
                  color: C.white,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{s.title}</h3>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate600 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Recruiters() {
  const { sm, md } = useBp();
  return (
    <section
      id="recruiters"
      style={{ background: C.blue950, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}
    >
      <Container>
        <SectionTitle eyebrow="Placements" title="Our Recruiters" light />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.blue200, lineHeight: 1.6 }}>
          Leading fashion, lifestyle, beauty and design brands hire and mentor our students.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
            gap: sm ? 20 : 12,
          }}
        >
          {RECRUITERS.map((r) => (
            <HoverCard
              key={r.name}
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: sm ? 140 : 110,
                padding: 16,
                background: C.white,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <img
                src={r.src}
                alt={r.name}
                loading="lazy"
                style={{ display: "block", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            </HoverCard>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Start Your Journey
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const { sm } = useBp();
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container style={{ maxWidth: 768 }}>
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          {CONTENT.faqs.map((f, i) => (
            <div key={f.q} style={{ background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 12 }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 600,
                  color: C.slate900,
                }}
              >
                {f.q}
                <span style={{ marginLeft: 16, fontSize: 20, color: C.orange600 }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p style={{ margin: 0, padding: "0 20px 16px", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  const { sm } = useBp();
  return (
    <section style={{ background: "rgb(216 10 18)", padding: "64px 0", textAlign: "center", color: C.white }}>
      <Container>
        <h2 style={{ margin: 0, fontSize: sm ? 36 : 30, fontWeight: 700 }}>Ready to Start Your Management Journey?</h2>
        <p style={{ margin: "12px auto 0", maxWidth: 576, color: C.blue100 }}>
          Limited seats. Talk to our admission team today.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: sm ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: "#000", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Apply Now
          </Btn>
          <Btn
            href={CONTENT.phoneHref}
            style={{ padding: "12px 32px", borderRadius: 999, border: "1px solid rgba(255,255,255,.7)", background: "transparent", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: "rgba(255,255,255,.1)" }}
          >
            📞 Call {CONTENT.phone}
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const { md } = useBp();
  return (
    <footer style={{ padding: md ? "15px 0" : "32px 0 96px", textAlign: "center", fontSize: 14, color: C.slate700 }}>
      <Container>
        <img
          src={universityLogo}
          alt={CONTENT.brand}
          style={{ height: 48, width: "auto", objectFit: "contain", display: "block", margin: "0 auto" }}
        />
        <p style={{ margin: "12px 0 0" }}>{CONTENT.footerAddress}</p>
        <p style={{ margin: "12px 0 0", fontSize: 12 }}>
          © {new Date().getFullYear()} {CONTENT.brand}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

function StickyMobileBar() {
  const { md } = useBp();
  if (md) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: "flex",
        background: C.white,
        borderTop: `1px solid ${C.slate200}`,
      }}
    >
      <a
        href={CONTENT.phoneHref}
        style={{ flex: 1, padding: "12px 0", textAlign: "center", fontSize: 14, fontWeight: 600, color: C.blue900, textDecoration: "none" }}
      >
        📞 Call Now
      </a>
      <button
        onClick={goToForm}
        style={{ flex: 1, padding: "12px 0", border: "none", background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}
      >
        Apply Now
      </button>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function SchoolOfDesignLanding() {
  return (
    <div style={{ fontFamily: FONT, color: C.slate700, WebkitFontSmoothing: "antialiased" }}>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Careers />
      {/* <BscPrograms />
      <MscPrograms /> */}
      <Highlights />
      <CampusLife />
      <Showcase />

      <Process />
      <Recruiters />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileBar />
    </div>
  );
}