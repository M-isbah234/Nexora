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

// Safe SVG Data URI Encoder with automatic XML entity escaping
function makeSvgUri(svgString) {
    const sanitized = svgString.trim().replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(sanitized)}`;
}

// ==========================================================================
//  AUTHENTIC UI PREVIEWS FOR THE 6 FLAGSHIP PROJECTS
// ==========================================================================

export const PROJECT_PREVIEWS = {
    // 1. Hot N Tasty Roll
    hotntasty: makeSvgUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650" fill="#0E0B1D">
            <rect width="500" height="650" fill="#140E26"/>
            <!-- Browser Header -->
            <rect x="0" y="0" width="500" height="42" fill="#20153B"/>
            <circle cx="24" cy="21" r="5" fill="#5A3B8C"/>
            <circle cx="42" cy="21" r="5" fill="#8B7CC7"/>
            <circle cx="60" cy="21" r="5" fill="#3A3A52"/>
            <rect x="130" y="11" width="240" height="20" rx="10" fill="#0E0B1D"/>
            <text x="250" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#8B7CC7" text-anchor="middle">hot-n-tasty-roll.vercel.app</text>
            
            <!-- Navbar -->
            <rect x="30" y="65" width="140" height="18" rx="4" fill="#C9C2E3"/>
            <rect x="330" y="62" width="140" height="24" rx="12" fill="#5A3B8C"/>
            <text x="400" y="78" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" text-anchor="middle">ORDER ONLINE</text>

            <!-- Hero Restaurant Banner -->
            <rect x="30" y="105" width="440" height="230" rx="16" fill="#2A1E4D" stroke="#5A3B8C" stroke-width="1.5"/>
            <!-- Roll & Burger Graphic -->
            <circle cx="150" cy="220" r="70" fill="#3A3A52"/>
            <circle cx="150" cy="220" r="54" fill="#5A3B8C"/>
            <ellipse cx="150" cy="220" rx="42" ry="24" fill="#8B7CC7"/>
            <rect x="250" y="145" width="190" height="26" rx="6" fill="#C9C2E3"/>
            <rect x="250" y="180" width="160" height="14" rx="4" fill="#8B7CC7"/>
            <rect x="250" y="202" width="130" height="12" rx="4" fill="#8B7CC7" opacity="0.7"/>
            <rect x="250" y="235" width="120" height="36" rx="8" fill="#5A3B8C"/>
            <text x="310" y="258" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#FFFFFF" text-anchor="middle">VIEW MENU</text>

            <!-- Embedded Chatbot Widget Preview -->
            <rect x="300" y="290" width="170" height="42" rx="12" fill="#0E0B1D" stroke="#8B7CC7" stroke-width="1.5"/>
            <circle cx="324" cy="311" r="12" fill="#5A3B8C"/>
            <text x="395" y="315" font-family="system-ui, sans-serif" font-weight="600" font-size="10" fill="#C9C2E3" text-anchor="middle">Ask AI Food Concierge</text>

            <!-- Menu Cards Grid -->
            <rect x="30" y="360" width="136" height="170" rx="12" fill="#2A1E4D" stroke="#3A3A52"/>
            <circle cx="98" cy="415" r="32" fill="#3A3A52"/>
            <rect x="45" y="465" width="106" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="45" y="490" width="70" height="12" rx="3" fill="#8B7CC7"/>

            <rect x="182" y="360" width="136" height="170" rx="12" fill="#2A1E4D" stroke="#3A3A52"/>
            <circle cx="250" cy="415" r="32" fill="#3A3A52"/>
            <rect x="197" y="465" width="106" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="197" y="490" width="70" height="12" rx="3" fill="#8B7CC7"/>

            <rect x="334" y="360" width="136" height="170" rx="12" fill="#2A1E4D" stroke="#3A3A52"/>
            <circle cx="402" cy="415" r="32" fill="#3A3A52"/>
            <rect x="349" y="465" width="106" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="349" y="490" width="70" height="12" rx="3" fill="#8B7CC7"/>

            <!-- Footer Strip -->
            <rect x="30" y="555" width="440" height="65" rx="10" fill="#1B1335"/>
            <text x="250" y="594" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#C9C2E3" text-anchor="middle" letter-spacing="2">HOT N TASTY ROLL • RESTAURANT + AI BOT</text>
        </svg>
    `),

    // 2. Aetheric Store
    aetheric: makeSvgUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650" fill="#0E0B1D">
            <rect width="500" height="650" fill="#120D22"/>
            <!-- Browser Header -->
            <rect x="0" y="0" width="500" height="42" fill="#1C1434"/>
            <circle cx="24" cy="21" r="5" fill="#5A3B8C"/>
            <circle cx="42" cy="21" r="5" fill="#8B7CC7"/>
            <circle cx="60" cy="21" r="5" fill="#3A3A52"/>
            <rect x="130" y="11" width="240" height="20" rx="10" fill="#0E0B1D"/>
            <text x="250" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#8B7CC7" text-anchor="middle">aetheric-neon.vercel.app</text>

            <!-- Navbar -->
            <text x="40" y="80" font-family="system-ui, sans-serif" font-weight="800" font-size="18" fill="#C9C2E3" letter-spacing="3">AETHERIC</text>
            <rect x="230" y="70" width="60" height="10" rx="3" fill="#8B7CC7" opacity="0.8"/>
            <rect x="305" y="70" width="60" height="10" rx="3" fill="#8B7CC7" opacity="0.8"/>
            <circle cx="440" cy="74" r="14" fill="#3A3A52"/>
            <circle cx="440" cy="74" r="7" fill="#8B7CC7"/>

            <!-- Hero Section -->
            <rect x="30" y="105" width="440" height="250" rx="16" fill="#2A1E4D" stroke="#5A3B8C" stroke-width="1.5"/>
            <rect x="60" y="145" width="170" height="30" rx="6" fill="#C9C2E3"/>
            <rect x="60" y="185" width="140" height="14" rx="4" fill="#8B7CC7"/>
            <rect x="60" y="208" width="110" height="12" rx="4" fill="#8B7CC7" opacity="0.6"/>
            <rect x="60" y="245" width="125" height="38" rx="8" fill="#5A3B8C"/>
            <text x="122" y="268" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" text-anchor="middle">DISCOVER NOW</text>

            <!-- Luxury Showcase Item (Watch / Jewelry) -->
            <circle cx="340" cy="225" r="72" fill="#1C1434" stroke="#8B7CC7" stroke-width="2"/>
            <circle cx="340" cy="225" r="54" fill="#3A3A52"/>
            <circle cx="340" cy="225" r="36" fill="#5A3B8C"/>
            <line x1="340" y1="225" x2="340" y2="200" stroke="#C9C2E3" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="340" y1="225" x2="360" y2="225" stroke="#C9C2E3" stroke-width="2.5" stroke-linecap="round"/>

            <!-- Products Catalog Row -->
            <rect x="30" y="375" width="210" height="165" rx="12" fill="#2A1E4D" stroke="#3A3A52"/>
            <circle cx="135" cy="435" r="35" fill="#3A3A52"/>
            <rect x="50" y="485" width="130" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="50" y="508" width="80" height="12" rx="3" fill="#8B7CC7"/>

            <rect x="260" y="375" width="210" height="165" rx="12" fill="#2A1E4D" stroke="#3A3A52"/>
            <circle cx="365" cy="435" r="35" fill="#3A3A52"/>
            <rect x="280" y="485" width="130" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="280" y="508" width="80" height="12" rx="3" fill="#8B7CC7"/>

            <!-- Footer Strip -->
            <rect x="30" y="560" width="440" height="60" rx="10" fill="#191334"/>
            <text x="250" y="596" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#C9C2E3" text-anchor="middle" letter-spacing="2">AETHERIC • LUXURY COMMERCE &amp; ADMIN</text>
        </svg>
    `),

    // 3. QuickStay Hotel Booking
    quickstay: makeSvgUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650" fill="#0E0B1D">
            <rect width="500" height="650" fill="#110E24"/>
            <!-- Browser Header -->
            <rect x="0" y="0" width="500" height="42" fill="#1B1537"/>
            <circle cx="24" cy="21" r="5" fill="#5A3B8C"/>
            <circle cx="42" cy="21" r="5" fill="#8B7CC7"/>
            <circle cx="60" cy="21" r="5" fill="#3A3A52"/>
            <rect x="130" y="11" width="240" height="20" rx="10" fill="#0E0B1D"/>
            <text x="250" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#8B7CC7" text-anchor="middle">hotel-booking-app.vercel.app</text>

            <!-- Navbar -->
            <rect x="30" y="65" width="120" height="20" rx="5" fill="#C9C2E3"/>
            <rect x="350" y="62" width="120" height="26" rx="13" fill="#5A3B8C"/>
            <text x="410" y="79" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" text-anchor="middle">SIGN IN</text>

            <!-- Hero Search Bar Component -->
            <rect x="30" y="105" width="440" height="150" rx="16" fill="#2A1E4D" stroke="#8B7CC7" stroke-width="1.5"/>
            <rect x="50" y="125" width="200" height="24" rx="4" fill="#C9C2E3"/>
            <rect x="50" y="156" width="160" height="12" rx="3" fill="#8B7CC7"/>
            
            <!-- Filter Pills Box inside Hero -->
            <rect x="50" y="185" width="90" height="45" rx="8" fill="#3A3A52"/>
            <rect x="60" y="196" width="50" height="8" rx="2" fill="#8B7CC7"/>
            <rect x="60" y="210" width="70" height="10" rx="2" fill="#C9C2E3"/>

            <rect x="150" y="185" width="90" height="45" rx="8" fill="#3A3A52"/>
            <rect x="160" y="196" width="50" height="8" rx="2" fill="#8B7CC7"/>
            <rect x="160" y="210" width="70" height="10" rx="2" fill="#C9C2E3"/>

            <rect x="250" y="185" width="90" height="45" rx="8" fill="#3A3A52"/>
            <rect x="260" y="196" width="50" height="8" rx="2" fill="#8B7CC7"/>
            <rect x="260" y="210" width="70" height="10" rx="2" fill="#C9C2E3"/>

            <rect x="350" y="185" width="100" height="45" rx="8" fill="#5A3B8C"/>
            <text x="400" y="212" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#FFFFFF" text-anchor="middle">SEARCH</text>

            <!-- Hotel Listing Cards -->
            <rect x="30" y="280" width="440" height="120" rx="14" fill="#2A1E4D" stroke="#3A3A52"/>
            <rect x="45" y="292" width="140" height="96" rx="10" fill="#3A3A52"/>
            <rect x="205" y="302" width="180" height="18" rx="4" fill="#C9C2E3"/>
            <rect x="205" y="328" width="140" height="12" rx="3" fill="#8B7CC7"/>
            <rect x="205" y="355" width="90" height="20" rx="4" fill="#5A3B8C"/>
            <text x="250" y="369" font-family="system-ui, sans-serif" font-weight="700" font-size="10" fill="#FFFFFF" text-anchor="middle">BOOK $149/NIGHT</text>

            <rect x="30" y="420" width="440" height="120" rx="14" fill="#2A1E4D" stroke="#3A3A52"/>
            <rect x="45" y="432" width="140" height="96" rx="10" fill="#3A3A52"/>
            <rect x="205" y="442" width="180" height="18" rx="4" fill="#C9C2E3"/>
            <rect x="205" y="468" width="140" height="12" rx="3" fill="#8B7CC7"/>
            <rect x="205" y="495" width="90" height="20" rx="4" fill="#5A3B8C"/>
            <text x="250" y="509" font-family="system-ui, sans-serif" font-weight="700" font-size="10" fill="#FFFFFF" text-anchor="middle">BOOK $189/NIGHT</text>

            <!-- Footer Strip -->
            <rect x="30" y="560" width="440" height="60" rx="10" fill="#181335"/>
            <text x="250" y="596" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#C9C2E3" text-anchor="middle" letter-spacing="2">QUICKSTAY • MERN HOTEL RESERVATION</text>
        </svg>
    `),

    // 4. Saud Emporium
    saud: makeSvgUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650" fill="#0E0B1D">
            <rect width="500" height="650" fill="#150E28"/>
            <!-- Browser Header -->
            <rect x="0" y="0" width="500" height="42" fill="#22153F"/>
            <circle cx="24" cy="21" r="5" fill="#5A3B8C"/>
            <circle cx="42" cy="21" r="5" fill="#8B7CC7"/>
            <circle cx="60" cy="21" r="5" fill="#3A3A52"/>
            <rect x="130" y="11" width="240" height="20" rx="10" fill="#0E0B1D"/>
            <text x="250" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#8B7CC7" text-anchor="middle">saudemporium.com</text>

            <!-- Navbar -->
            <text x="250" y="80" font-family="Georgia, serif" font-weight="700" font-size="20" fill="#C9C2E3" text-anchor="middle" letter-spacing="4">SAUD EMPORIUM</text>
            <rect x="30" y="95" width="440" height="1" fill="#3A3A52"/>
            <text x="250" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#8B7CC7" text-anchor="middle" letter-spacing="2">SAREES  •  SUITS  •  MAXI  •  JEWELRY</text>

            <!-- Luxury Fashion Carousel Banner -->
            <rect x="30" y="130" width="440" height="230" rx="16" fill="#2A1E4D" stroke="#8B7CC7" stroke-width="1.5"/>
            <!-- Fashion Silhouette / Couture Cards -->
            <rect x="55" y="150" width="115" height="185" rx="10" fill="#3A3A52"/>
            <rect x="65" y="295" width="95" height="12" rx="3" fill="#C9C2E3"/>
            <rect x="65" y="312" width="60" height="10" rx="2" fill="#8B7CC7"/>

            <rect x="190" y="145" width="120" height="195" rx="10" fill="#5A3B8C" stroke="#C9C2E3" stroke-width="1"/>
            <rect x="200" y="300" width="100" height="14" rx="3" fill="#FFFFFF"/>
            <rect x="200" y="320" width="70" height="10" rx="2" fill="#C9C2E3"/>

            <rect x="330" y="150" width="115" height="185" rx="10" fill="#3A3A52"/>
            <rect x="340" y="295" width="95" height="12" rx="3" fill="#C9C2E3"/>
            <rect x="340" y="312" width="60" height="10" rx="2" fill="#8B7CC7"/>

            <!-- Features Bar: EasyPaisa & Secure Checkout -->
            <rect x="30" y="380" width="440" height="45" rx="10" fill="#1C1438" stroke="#3A3A52"/>
            <text x="130" y="407" font-family="system-ui, sans-serif" font-size="11" fill="#C9C2E3">EasyPaisa &amp; Card Checkout</text>
            <text x="350" y="407" font-family="system-ui, sans-serif" font-size="11" fill="#8B7CC7">Nationwide Express Delivery</text>

            <!-- Category Tiles -->
            <rect x="30" y="445" width="136" height="95" rx="10" fill="#2A1E4D" stroke="#3A3A52"/>
            <text x="98" y="498" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#C9C2E3" text-anchor="middle">SAREES</text>

            <rect x="182" y="445" width="136" height="95" rx="10" fill="#2A1E4D" stroke="#3A3A52"/>
            <text x="250" y="498" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#C9C2E3" text-anchor="middle">BRIDAL SUITS</text>

            <rect x="334" y="445" width="136" height="95" rx="10" fill="#2A1E4D" stroke="#3A3A52"/>
            <text x="402" y="498" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#C9C2E3" text-anchor="middle">JEWELRY</text>

            <!-- Footer Strip -->
            <rect x="30" y="560" width="440" height="60" rx="10" fill="#1C1438"/>
            <text x="250" y="596" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#C9C2E3" text-anchor="middle" letter-spacing="2">SAUD EMPORIUM • LUXURY COUTURE</text>
        </svg>
    `),

    // 5. MedixWeb AI Hospital
    medixweb: makeSvgUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650" fill="#0E0B1D">
            <rect width="500" height="650" fill="#100D22"/>
            <!-- Browser Header -->
            <rect x="0" y="0" width="500" height="42" fill="#1B1436"/>
            <circle cx="24" cy="21" r="5" fill="#5A3B8C"/>
            <circle cx="42" cy="21" r="5" fill="#8B7CC7"/>
            <circle cx="60" cy="21" r="5" fill="#3A3A52"/>
            <rect x="130" y="11" width="240" height="20" rx="10" fill="#0E0B1D"/>
            <text x="250" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#8B7CC7" text-anchor="middle">medixweb.vercel.app</text>

            <!-- Navbar -->
            <path d="M45 65 H55 V75 H65 V85 H55 V95 H45 V85 H35 V75 H45 Z" fill="#5A3B8C"/>
            <text x="75" y="84" font-family="system-ui, sans-serif" font-weight="800" font-size="16" fill="#C9C2E3">MedixWeb</text>
            <rect x="340" y="68" width="130" height="24" rx="12" fill="#5A3B8C"/>
            <text x="405" y="84" font-family="system-ui, sans-serif" font-weight="700" font-size="10" fill="#FFFFFF" text-anchor="middle">BOOK DOCTOR</text>

            <!-- AI Diagnosis & Doctor Assistant Hero -->
            <rect x="30" y="110" width="440" height="220" rx="16" fill="#2A1E4D" stroke="#5A3B8C" stroke-width="1.5"/>
            <rect x="55" y="140" width="220" height="24" rx="6" fill="#C9C2E3"/>
            <rect x="55" y="172" width="180" height="14" rx="4" fill="#8B7CC7"/>
            <rect x="55" y="196" width="150" height="12" rx="4" fill="#8B7CC7" opacity="0.6"/>

            <!-- AI Symptom Input Box -->
            <rect x="55" y="235" width="260" height="38" rx="10" fill="#0E0B1D" stroke="#8B7CC7" stroke-width="1.5"/>
            <text x="145" y="258" font-family="system-ui, sans-serif" font-size="11" fill="#C9C2E3">Describe your symptoms...</text>
            <rect x="325" y="235" width="125" height="38" rx="10" fill="#5A3B8C"/>
            <text x="387" y="258" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" text-anchor="middle">ANALYZE</text>

            <!-- WhatsApp Confirmation Card -->
            <rect x="30" y="350" width="440" height="75" rx="12" fill="#1C1438" stroke="#3A3A52"/>
            <circle cx="65" cy="387" r="18" fill="#5A3B8C"/>
            <text x="100" y="380" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#C9C2E3">WhatsApp &amp; Email Instant Confirmation</text>
            <text x="100" y="398" font-family="system-ui, sans-serif" font-size="10" fill="#8B7CC7">Automated schedule reminders powered by Whapi and Brevo</text>

            <!-- Specialist Doctors List Preview -->
            <rect x="30" y="445" width="210" height="95" rx="10" fill="#2A1E4D" stroke="#3A3A52"/>
            <circle cx="65" cy="492" r="22" fill="#3A3A52"/>
            <rect x="100" y="475" width="120" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="100" y="497" width="90" height="10" rx="2" fill="#8B7CC7"/>

            <rect x="260" y="445" width="210" height="95" rx="10" fill="#2A1E4D" stroke="#3A3A52"/>
            <circle cx="295" cy="492" r="22" fill="#3A3A52"/>
            <rect x="330" y="475" width="120" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="330" y="497" width="90" height="10" rx="2" fill="#8B7CC7"/>

            <!-- Footer Strip -->
            <rect x="30" y="560" width="440" height="60" rx="10" fill="#181335"/>
            <text x="250" y="596" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#C9C2E3" text-anchor="middle" letter-spacing="2">MEDIXWEB • AI HOSPITAL ASSISTANT</text>
        </svg>
    `),

    // 6. Edusity Education Platform
    edusity: makeSvgUri(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650" fill="#0E0B1D">
            <rect width="500" height="650" fill="#130E26"/>
            <!-- Browser Header -->
            <rect x="0" y="0" width="500" height="42" fill="#1E143A"/>
            <circle cx="24" cy="21" r="5" fill="#5A3B8C"/>
            <circle cx="42" cy="21" r="5" fill="#8B7CC7"/>
            <circle cx="60" cy="21" r="5" fill="#3A3A52"/>
            <rect x="130" y="11" width="240" height="20" rx="10" fill="#0E0B1D"/>
            <text x="250" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#8B7CC7" text-anchor="middle">edusity-com.vercel.app</text>

            <!-- Navbar -->
            <circle cx="50" cy="74" r="14" fill="#5A3B8C"/>
            <text x="75" y="80" font-family="system-ui, sans-serif" font-weight="800" font-size="17" fill="#C9C2E3">Edusity</text>
            <rect x="350" y="64" width="120" height="26" rx="13" fill="#5A3B8C"/>
            <text x="410" y="81" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" text-anchor="middle">EXPLORE</text>

            <!-- Hero Video Section -->
            <rect x="30" y="105" width="440" height="240" rx="16" fill="#2A1E4D" stroke="#5A3B8C" stroke-width="1.5"/>
            <rect x="55" y="135" width="200" height="26" rx="6" fill="#C9C2E3"/>
            <rect x="55" y="170" width="170" height="14" rx="4" fill="#8B7CC7"/>
            <rect x="55" y="195" width="130" height="12" rx="4" fill="#8B7CC7" opacity="0.6"/>

            <!-- Embedded Video Player Preview -->
            <rect x="270" y="130" width="180" height="180" rx="12" fill="#3A3A52" stroke="#8B7CC7" stroke-width="1.5"/>
            <circle cx="360" cy="220" r="28" fill="#5A3B8C"/>
            <polygon points="354,210 372,220 354,230" fill="#FFFFFF"/>
            <text x="360" y="270" font-family="system-ui, sans-serif" font-weight="600" font-size="10" fill="#C9C2E3" text-anchor="middle">CAMPUS TOUR</text>

            <!-- Degree Programs Grid -->
            <rect x="30" y="365" width="136" height="175" rx="12" fill="#2A1E4D" stroke="#3A3A52"/>
            <rect x="45" y="380" width="106" height="85" rx="8" fill="#3A3A52"/>
            <rect x="45" y="480" width="106" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="45" y="505" width="70" height="12" rx="3" fill="#8B7CC7"/>

            <rect x="182" y="365" width="136" height="175" rx="12" fill="#2A1E4D" stroke="#3A3A52"/>
            <rect x="197" y="380" width="106" height="85" rx="8" fill="#3A3A52"/>
            <rect x="197" y="480" width="106" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="197" y="505" width="70" height="12" rx="3" fill="#8B7CC7"/>

            <rect x="334" y="365" width="136" height="175" rx="12" fill="#2A1E4D" stroke="#3A3A52"/>
            <rect x="349" y="380" width="106" height="85" rx="8" fill="#3A3A52"/>
            <rect x="349" y="480" width="106" height="14" rx="3" fill="#C9C2E3"/>
            <rect x="349" y="505" width="70" height="12" rx="3" fill="#8B7CC7"/>

            <!-- Footer Strip -->
            <rect x="30" y="560" width="440" height="60" rx="10" fill="#181335"/>
            <text x="250" y="596" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#C9C2E3" text-anchor="middle" letter-spacing="2">EDUSITY • ACADEMIC EDUCATION PLATFORM</text>
        </svg>
    `)
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
