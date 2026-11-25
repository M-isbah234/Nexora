// ==========================================================================
//  NEXORA SOLVEX — CORE PORTFOLIO DATA ARCHITECTURE
//  Flagship Projects, Services, Pricing, and Company Info (Zero Emojis)
// ==========================================================================

export const BRAND_INFO = {
    name: "Nexora Solvex",
    shortName: "Nexora",
    tagline: "We don't just build websites — we engineer intelligent digital systems.",
    location: "Karachi, Pakistan",
    established: "2026",
    email: "nexoradevx@gmail.com",
    whatsapp: "+92 315 1196495",
    whatsappLink: "https://wa.me/923151196495",
    github: "https://github.com/muhammadirtizakhan/Nexora",
    instagram: "https://www.instagram.com/nexora.devx",
    careersPortal: "https://nexora-job-portal.vercel.app",
    officialLogo: "https://res.cloudinary.com/djaonuvzx/image/upload/v1790244415/ChatGPT_Image_Sep_24_2026_03_06_36_PM_qgkrhw.png",
    stats: {
        projectsCount: 6,
        categoriesCount: 6,
        clientRating: "4.9/5",
        supportUptime: "99.9%"
    }
};

// ==========================================================================
//  AUTHENTIC UI PREVIEWS FOR THE 6 FLAGSHIP PROJECTS (REAL SCREENSHOTS)
// ==========================================================================

export const PROJECT_PREVIEWS = {
    hotntasty: './assets/previews/hotntasty.png',
    aetheric: './assets/previews/aetheric.png',
    quickstay: './assets/previews/quickstay.png',
    saud: './assets/previews/saudemporium.png',
    medixweb: './assets/previews/medixweb.png',
    edusity: './assets/previews/edusity.png'
};

// ==========================================================================
//  THE 6 CORE FLAGSHIP PROJECTS (COVER FLOW CARDS)
// ==========================================================================

export const FLAGSHIP_PROJECTS = [
    {
        id: "hot-n-tasty",
        slug: "hot-n-tasty",
        title: "Hot N Tasty Roll",
        subtitle: "Restaurant & AI Chatbot",
        category: "Websites & AI Chatbots",
        tag: "RESTAURANT & AI",
        desc: "Karachi fast-food restaurant platform featuring online roll and burger ordering, embedded conversational AI chatbot, Google Search Console indexing, and local SEO foundation.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Supabase", "Groq AI"],
        liveLink: "https://hot-n-tasty-roll.vercel.app/",
        videoLink: "https://drive.google.com/file/d/113tFBU9iyjCWPTC4FDVpN8BdU3_3iLLa/view?usp=drive_link",
        githubLink: "https://github.com/muhammadirtizakhan/Nexora",
        previewImg: PROJECT_PREVIEWS.hotntasty,
        badge: "Live Production"
    },
    {
        id: "aetheric-store",
        slug: "aetheric-store",
        title: "Aetheric Store",
        subtitle: "Luxury E-Commerce & Admin CRM",
        category: "E-Commerce & CRM",
        tag: "E-COMMERCE",
        desc: "Full-stack luxury e-commerce platform where customers browse and purchase products, paired with an administrative CRM dashboard to monitor sales trends, category revenue, and order dispatch.",
        tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "Firebase", "Supabase", "Chart.js"],
        liveLink: "https://aetheric-neon.vercel.app",
        videoLink: "https://drive.google.com/file/d/1EDC8ykwhyq0hDnjIQZ-0wOx_e8wXHUcR/view?usp=drive_link",
        githubLink: "https://github.com/muhammadirtizakhan/Nexora",
        previewImg: PROJECT_PREVIEWS.aetheric,
        badge: "Full-Stack Store"
    },
    {
        id: "quickstay",
        slug: "quickstay",
        title: "QuickStay Hotel Platform",
        subtitle: "MERN Hotel Booking Platform",
        category: "Web Applications",
        tag: "HOTEL BOOKING",
        desc: "Scalable MERN hotel discovery and reservation platform with real-time room availability, Clerk authentication, Cloudinary media storage, and instant booking confirmation.",
        tags: ["MERN Stack", "Clerk Auth", "Cloudinary", "MongoDB", "Express", "React", "Node"],
        liveLink: "https://hotel-booking-app-amber-omega.vercel.app/",
        videoLink: "https://drive.google.com/file/d/1UuAwdkqZ3BZe7XyIjOqZ2ZBNPnmPMLzt/view?usp=drive_link",
        githubLink: "https://github.com/muhammadirtizakhan/Nexora",
        previewImg: PROJECT_PREVIEWS.quickstay,
        badge: "MERN Platform"
    },
    {
        id: "saud-emporium",
        slug: "saud-emporium",
        title: "Saud Emporium",
        subtitle: "Luxury Ladies' Fashion Couture",
        category: "E-Commerce & CRM",
        tag: "FASHION COUTURE",
        desc: "Nexora's flagship client delivery: Premium ladies' fashion store (Sarees, Suits, Maxi & Jewelry) with customer wishlists, secure JWT accounts, EasyPaisa checkout, and complete sales CRM dashboard.",
        tags: ["React", "Node.js", "PostgreSQL", "Supabase", "JWT Auth", "Chart.js"],
        liveLink: "https://www.saudemporium.com",
        videoLink: "https://drive.google.com/file/d/1M0Fu91yVd0VGLrrwt1o4I27lxW-se_So/view?usp=drive_link",
        githubLink: "https://github.com/muhammadirtizakhan/Nexora",
        previewImg: PROJECT_PREVIEWS.saud,
        badge: "Client Delivery"
    },
    {
        id: "medixweb",
        slug: "medixweb",
        title: "MedixWeb AI Hospital",
        subtitle: "AI Hospital Assistant & Telehealth",
        category: "HealthTech & AI Agents",
        tag: "HEALTH AI",
        desc: "AI-powered hospital platform featuring symptom-based doctor recommendation, calendar-driven appointment scheduling, WhatsApp confirmations (Whapi), and Clerk authentication.",
        tags: ["React", "Node.js", "Supabase", "Groq AI", "Clerk", "Whapi", "Brevo Mail"],
        liveLink: "https://medixweb-x89r.vercel.app/",
        videoLink: "https://drive.google.com/file/d/1x5Eu8hp9pSWr51d_PhTPJ8pEEVdbXX00/view?usp=drive_link",
        githubLink: "https://github.com/muhammadirtizakhan/Nexora",
        previewImg: PROJECT_PREVIEWS.medixweb,
        badge: "HealthTech AI"
    },
    {
        id: "edusity",
        slug: "edusity",
        title: "Edusity Platform",
        subtitle: "Modern Educational Portal",
        category: "Websites",
        tag: "EDUCATION",
        desc: "Modern university web portal featuring clean UI/UX, responsive mobile architecture, embedded high-definition campus video player, and Web3Forms inquiry integration.",
        tags: ["React", "Tailwind CSS", "Vercel", "Web3Forms"],
        liveLink: "https://edusity-com-beige.vercel.app/",
        videoLink: "https://drive.google.com/file/d/1Dm7yCt_4WZ0QCYQFVR3w6OeLCQ9es3Gd/view?usp=drive_link",
        githubLink: "https://github.com/muhammadirtizakhan/Nexora",
        previewImg: PROJECT_PREVIEWS.edusity,
        badge: "Live Web App"
    }
];

// ==========================================================================
//  CORE SERVICES DATA (RENDERED IN SERVICES TAB)
// ==========================================================================

export const SERVICES_DATA = [
    {
        id: "srv-websites",
        title: "Websites & Web Applications",
        category: "Engineering",
        desc: "Modern, high-performance responsive websites and web applications built with cutting-edge tech stacks that drive conversions and deliver exceptional user experiences.",
        deliverables: [
            "Custom frontend engineering (React, Tailwind, HTML5, CSS3)",
            "Scalable backend architectures (Node.js, Express, Supabase)",
            "E-commerce stores with secure local checkouts (EasyPaisa, Bank, Card)",
            "High-speed Vercel hosting setup and SEO foundation"
        ]
    },
    {
        id: "srv-chatbots",
        title: "Smart AI Chatbots",
        category: "Conversational AI",
        desc: "Domain-grounded AI chatbots that engage visitors 24/7, answer complex inquiries instantly, and capture qualified leads automatically.",
        deliverables: [
            "Retrieval-Augmented Generation (RAG) on your business knowledge",
            "Integration with state-of-the-art LLMs (Gemini 2.5 Flash, Groq)",
            "Automated lead capture, email alerts, and booking guidance",
            "Clean chat widgets with Markdown and syntax highlighting"
        ]
    },
    {
        id: "srv-agents",
        title: "Autonomous AI Agents",
        category: "Automation",
        desc: "Intelligent autonomous agents that execute multi-step business workflows, monitor listings, triage support inquiries, and coordinate schedules.",
        deliverables: [
            "Lead discovery and business audit agents",
            "Autonomous customer triage and priority queue routing",
            "Smart appointment scheduling with WhatsApp and calendar sync",
            "Automated background webhook pipelines and data reconciliation"
        ]
    },
    {
        id: "srv-canva-posters",
        title: "Canva Designing & Posters",
        category: "Branding & Visuals",
        desc: "High-impact visual communication: comprehensive brand guidelines, social media marketing campaigns, commercial promotional posters, and product packaging.",
        deliverables: [
            "Corporate logo suites, vector marks, and typography sheets",
            "Editorial social media post templates and carousel sets",
            "Print-ready promotional posters, event banners, and standees",
            "Commercial restaurant menus, product labels, and packaging"
        ]
    },
    {
        id: "srv-support",
        title: "Customer & Admin Support",
        category: "Operations",
        desc: "Complete support desk architectures: omnichannel communication desks, dispute resolution portals, ticket routing, and administrative hubs.",
        deliverables: [
            "24/7 omnichannel helpdesk unifying WhatsApp, web chat, and email",
            "E-commerce order tracking, refund, and dispute resolution portals",
            "Emergency hospital triage desks and patient notification workflows",
            "Role-based administrative control panels with audit logging"
        ]
    },
    {
        id: "srv-crm-dashboard",
        title: "CRM & Dashboards",
        category: "Analytics & Control",
        desc: "Custom administrative dashboards, real-time KPI visualization, revenue breakdown charts, and business intelligence hubs.",
        deliverables: [
            "Gross sales trends and category breakdown analytics",
            "Top products and peak customer hours tracking via Chart.js",
            "Client project milestone tracking and sprint delivery portals",
            "Real-time visitor conversion funnels and lead management"
        ]
    }
];

// ==========================================================================
//  PRICING TIERS DATA (RENDERED IN PRICING TAB)
// ==========================================================================

export const PRICING_DATA = [
    {
        tier: "Basic Plan",
        range: "PKR 11,000 – 15,000",
        bestFor: "Small businesses & local landing pages",
        popular: false,
        features: [
            "Stunning responsive UI/UX for all screen sizes",
            "SEO optimization and Google Search Console setup",
            "Domain setup assistance and high-speed Vercel hosting",
            "Basic automated contact / lead inquiry form",
            "Fast turnaround: 3 to 5 business days",
            "1-month complimentary bug fixes"
        ],
        buttonText: "Start Basic Plan",
        whatsappMsg: "Hi Nexora! I want to inquire about the Basic Plan."
    },
    {
        tier: "Pro Plan",
        range: "PKR 17,000 – 24,000",
        bestFor: "Growing businesses needing full web & AI chatbots",
        popular: true,
        features: [
            "Complete custom multi-page website or web app",
            "Active backend engineering (Node, Express, Supabase)",
            "Intelligent domain-trained AI Chatbot (LLM integration)",
            "Product catalog or service booking modules",
            "Website analytics and performance tracking dashboard",
            "Priority client support & maintenance: 3k-5k/month option"
        ],
        buttonText: "Choose Pro Plan",
        whatsappMsg: "Hi Nexora! I want to get started with the Pro Plan with AI Chatbot."
    },
    {
        tier: "Enterprise Plan",
        range: "PKR 26,000 – 50,000+",
        bestFor: "Complete digital systems, custom CRMs & AI workflows",
        popular: false,
        features: [
            "Full custom system architecture and scalable database",
            "Custom administrative CRM and analytics dashboard",
            "Autonomous AI agent pipelines and automated notifications",
            "Payment gateway integration (EasyPaisa, Bank, Card)",
            "Canva social branding kit & promo posters included",
            "Ongoing maintenance, SLA support, and team collaboration"
        ],
        buttonText: "Consult Enterprise",
        whatsappMsg: "Hi Nexora! We need a custom Enterprise digital system quote."
    }
];