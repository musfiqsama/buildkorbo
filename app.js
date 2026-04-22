const app = document.getElementById('app');

const UNIVERSITY_RULES = [
  {
    "name": "University of Dhaka",
    "location": "Dhaka",
    "district": "Dhaka",
    "category": "General Public",
    "tier": "Top Public",
    "crowd": "Very high",
    "spend": "Mixed-medium",
    "fit": "Excellent for surrounding snacks, print, tutoring, rides, and student utility services",
    "note": "Huge off-campus catchment across halls, coaching zones, transport points, and nearby neighborhoods.",
    "aliases": [
      "university of dhaka",
      "dhaka university",
      "du"
    ]
  },
  {
    "name": "University of Chittagong",
    "location": "Chattogram",
    "district": "Chattogram",
    "category": "General Public",
    "tier": "Top Public",
    "crowd": "Medium-high",
    "spend": "Medium-low",
    "fit": "Good for transport-linked food, stationery, and student services around the wider area",
    "note": "The surrounding ecosystem matters more than assuming an inside-campus stall.",
    "aliases": [
      "university of chittagong",
      "chittagong university",
      "cu"
    ]
  },
  {
    "name": "University of Rajshahi",
    "location": "Rajshahi",
    "district": "Rajshahi",
    "category": "General Public",
    "tier": "Top Public",
    "crowd": "High",
    "spend": "Medium-low",
    "fit": "Good for affordable snacks, tutoring, and nearby utility businesses",
    "note": "Large student ecosystem supports repeat local demand outside the core campus.",
    "aliases": [
      "university of rajshahi",
      "rajshahi university",
      "ru"
    ]
  },
  {
    "name": "Jahangirnagar University",
    "location": "Savar, Dhaka",
    "district": "Dhaka",
    "category": "General Public",
    "tier": "Top Public",
    "crowd": "High / residential",
    "spend": "Medium-low",
    "fit": "Great for food, daily utility, and transport-adjacent ideas around halls and nearby residential pockets",
    "note": "Residential student life creates stable repeat demand around the surrounding area.",
    "aliases": [
      "jahangirnagar university",
      "jahangirnagar",
      "ju"
    ]
  },
  {
    "name": "Islamic University",
    "location": "Kushtia",
    "district": "Kushtia",
    "category": "General Public",
    "tier": "Regional Public",
    "crowd": "Medium-high",
    "spend": "Medium-low",
    "fit": "Good for practical food, print, tutoring, and neighborhood service businesses",
    "note": "Works better with affordability and repeat value.",
    "aliases": [
      "islamic university",
      "iu kushtia",
      "islamic university kushtia"
    ]
  },
  {
    "name": "Khulna University",
    "location": "Khulna",
    "district": "Khulna",
    "category": "General Public",
    "tier": "Regional Public",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, education support, and small services",
    "note": "Utility-first ideas fit the surrounding demand better than premium concepts.",
    "aliases": [
      "khulna university",
      "ku"
    ]
  },
  {
    "name": "Barishal University",
    "location": "Barishal",
    "district": "Barishal",
    "category": "General Public",
    "tier": "Regional Public",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for snacks, tutoring, and local service around nearby neighborhoods",
    "note": "Better with practical pricing and visible quality.",
    "aliases": [
      "barishal university",
      "bu barishal"
    ]
  },
  {
    "name": "Comilla University",
    "location": "Cumilla",
    "district": "Cumilla",
    "category": "General Public",
    "tier": "Regional Public",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for stationery, tutoring, food, and student utility business",
    "note": "District-city education demand can create steady repeat customers.",
    "aliases": [
      "comilla university",
      "cumilla university",
      "cou"
    ]
  },
  {
    "name": "Begum Rokeya University",
    "location": "Rangpur",
    "district": "Rangpur",
    "category": "General Public",
    "tier": "Regional Public",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for low-ticket food, print, and student services",
    "note": "Keep the offer practical and affordable.",
    "aliases": [
      "begum rokeya university",
      "brur"
    ]
  },
  {
    "name": "Jatiya Kabi Kazi Nazrul Islam University",
    "location": "Mymensingh",
    "district": "Mymensingh",
    "category": "General Public",
    "tier": "Regional Public",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, tutoring, events, and youth-oriented services",
    "note": "Works best with local trust and repeatability.",
    "aliases": [
      "jatiya kabi kazi nazrul islam university",
      "jkkniu",
      "nazrul university"
    ]
  },
  {
    "name": "Shahjalal University of Science & Technology",
    "location": "Sylhet",
    "district": "Sylhet",
    "category": "Science & Technology",
    "tier": "Top S&T",
    "crowd": "High",
    "spend": "Medium",
    "fit": "Great for tech services, practical SaaS pilots, coffee, and student utilities",
    "note": "Strong student brand and nearby ecosystem support repeat demand.",
    "aliases": [
      "shahjalal university of science and technology",
      "shahjalal university of science & technology",
      "sust",
      "shahjalal university"
    ]
  },
  {
    "name": "Mawlana Bhashani Science & Technology University",
    "location": "Tangail",
    "district": "Tangail",
    "category": "Science & Technology",
    "tier": "Regional S&T",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for student food, tutoring, and utility services",
    "note": "Tech-aware students help digital offers if they stay practical.",
    "aliases": [
      "mawlana bhashani science and technology university",
      "mawlana bhashani science & technology university",
      "mbstu",
      "mabashani"
    ]
  },
  {
    "name": "Noakhali Science & Technology University",
    "location": "Noakhali",
    "district": "Noakhali",
    "category": "Science & Technology",
    "tier": "Regional S&T",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, tutoring, print, and student-facing digital services",
    "note": "Low-cost but useful ideas work best.",
    "aliases": [
      "noakhali science and technology university",
      "noakhali science & technology university",
      "nstu"
    ]
  },
  {
    "name": "Jessore University of Science & Technology",
    "location": "Jashore",
    "district": "Jashore",
    "category": "Science & Technology",
    "tier": "Regional S&T",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for student services, food, and simple tech products",
    "note": "Best when the offer is specific and affordable.",
    "aliases": [
      "jessore university of science and technology",
      "jessore university of science & technology",
      "just",
      "jashore university of science and technology",
      "jashore university of science & technology"
    ]
  },
  {
    "name": "Patuakhali Science & Technology University",
    "location": "Patuakhali",
    "district": "Patuakhali",
    "category": "Science & Technology",
    "tier": "Regional S&T",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, print, and student utility offers",
    "note": "Rural-urban mix means practical value matters.",
    "aliases": [
      "patuakhali science and technology university",
      "patuakhali science & technology university",
      "pstu"
    ]
  },
  {
    "name": "Hajee Mohammad Danesh Science & Technology University",
    "location": "Dinajpur",
    "district": "Dinajpur",
    "category": "Science & Technology",
    "tier": "Regional S&T",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, tutoring, and agriculture-adjacent services",
    "note": "Affordable and useful businesses fit best.",
    "aliases": [
      "hajee mohammad danesh science and technology university",
      "hajee mohammad danesh science & technology university",
      "hstu",
      "hmdstu"
    ]
  },
  {
    "name": "Rangamati Science & Technology University",
    "location": "Rangamati",
    "district": "Rangamati",
    "category": "Science & Technology",
    "tier": "Emerging S&T",
    "crowd": "Low-medium",
    "spend": "Low-medium",
    "fit": "Good for small food, drinks, and practical services",
    "note": "Keep the business small and local-first.",
    "aliases": [
      "rangamati science and technology university",
      "rangamati science & technology university",
      "rstu"
    ]
  },
  {
    "name": "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
    "location": "Gopalganj",
    "district": "Gopalganj",
    "category": "Science & Technology",
    "tier": "Regional S&T",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, stationery, and student service businesses",
    "note": "Useful, low-ticket ideas are the safest starting point.",
    "aliases": [
      "bangabandhu sheikh mujibur rahman science and technology university",
      "bangabandhu sheikh mujibur rahman science & technology university",
      "bsmrstu"
    ]
  },
  {
    "name": "Bangamata Sheikh Fojilatunnesa Mujib Science & Technology University",
    "location": "Jamalpur",
    "district": "Jamalpur",
    "category": "Science & Technology",
    "tier": "Emerging S&T",
    "crowd": "Low-medium",
    "spend": "Low-medium",
    "fit": "Good for simple food, tutoring, and daily-need service",
    "note": "Start small and test manually.",
    "aliases": [
      "bangamata sheikh fojilatunnesa mujib science and technology university",
      "bangamata sheikh fojilatunnesa mujib science & technology university",
      "bsfmstu"
    ]
  },
  {
    "name": "Sheikh Hasina University",
    "location": "Netrokona",
    "district": "Netrokona",
    "category": "Science & Technology",
    "tier": "Emerging S&T",
    "crowd": "Low-medium",
    "spend": "Low-medium",
    "fit": "Good for low-cost food and student utilities",
    "note": "Smaller market means you should stay lean.",
    "aliases": [
      "sheikh hasina university"
    ]
  },
  {
    "name": "Chandpur Science & Technology University",
    "location": "Chandpur",
    "district": "Chandpur",
    "category": "Science & Technology",
    "tier": "Emerging S&T",
    "crowd": "Low-medium",
    "spend": "Low-medium",
    "fit": "Good for food, tutoring, and print",
    "note": "Practicality matters more than premium positioning.",
    "aliases": [
      "chandpur science and technology university",
      "chandpur science & technology university",
      "cstu chandpur"
    ]
  },
  {
    "name": "Sunamganj Science & Technology University",
    "location": "Sunamganj",
    "district": "Sunamganj",
    "category": "Science & Technology",
    "tier": "Emerging S&T",
    "crowd": "Low-medium",
    "spend": "Low-medium",
    "fit": "Good for snacks, tutoring, and small service businesses",
    "note": "Keep setup costs low.",
    "aliases": [
      "sunamganj science and technology university",
      "sunamganj science & technology university",
      "sstu"
    ]
  },
  {
    "name": "Kishoreganj Science & Technology University",
    "location": "Kishoreganj",
    "district": "Kishoreganj",
    "category": "Science & Technology",
    "tier": "Emerging S&T",
    "crowd": "Low-medium",
    "spend": "Low-medium",
    "fit": "Good for food, print, and local student utility offers",
    "note": "Simple businesses with repeat use work best.",
    "aliases": [
      "kishoreganj science and technology university",
      "kishoreganj science & technology university",
      "kstu"
    ]
  },
  {
    "name": "Bangladesh University of Engineering & Technology (BUET)",
    "location": "Dhaka",
    "district": "Dhaka",
    "category": "Engineering",
    "tier": "Top University",
    "crowd": "High but niche",
    "spend": "Medium",
    "fit": "Excellent for quality coffee, productivity tools, tutoring, and technical services around nearby areas",
    "note": "Focused high-skill student crowd with strong off-campus demand. Premium quality can work.",
    "aliases": [
      "bangladesh university of engineering and technology",
      "bangladesh university of engineering & technology",
      "buet"
    ]
  },
  {
    "name": "Khulna University of Engineering & Technology (KUET)",
    "location": "Khulna",
    "district": "Khulna",
    "category": "Engineering",
    "tier": "Top Engineering",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for technical tutoring, coffee, print, and student services",
    "note": "The surrounding demand is specialized rather than massive.",
    "aliases": [
      "khulna university of engineering and technology",
      "khulna university of engineering & technology",
      "kuet"
    ]
  },
  {
    "name": "Rajshahi University of Engineering & Technology (RUET)",
    "location": "Rajshahi",
    "district": "Rajshahi",
    "category": "Engineering",
    "tier": "Top Engineering",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for study tools, food, and utility services",
    "note": "Target precision and quality over very broad demand.",
    "aliases": [
      "rajshahi university of engineering and technology",
      "rajshahi university of engineering & technology",
      "ruet"
    ]
  },
  {
    "name": "Chittagong University of Engineering & Technology (CUET)",
    "location": "Chattogram",
    "district": "Chattogram",
    "category": "Engineering",
    "tier": "Top Engineering",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for technical services, quality food, and student utilities",
    "note": "Strong but specialized audience around the university zone.",
    "aliases": [
      "chittagong university of engineering and technology",
      "chittagong university of engineering & technology",
      "cuet"
    ]
  },
  {
    "name": "Dhaka University of Engineering & Technology (DUET)",
    "location": "Gazipur",
    "district": "Gazipur",
    "category": "Engineering",
    "tier": "Top Engineering",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for student services, tutoring, and practical food offers",
    "note": "Gazipur context adds worker and commuter demand around student areas.",
    "aliases": [
      "dhaka university of engineering and technology",
      "dhaka university of engineering & technology",
      "duet"
    ]
  },
  {
    "name": "Bangladesh Agricultural University",
    "location": "Mymensingh",
    "district": "Mymensingh",
    "category": "Agricultural",
    "tier": "Top Specialized",
    "crowd": "High",
    "spend": "Medium-low",
    "fit": "Good for food, agri services, tutoring, and practical tool ideas",
    "note": "Agriculture context can support both student and farm-adjacent opportunities.",
    "aliases": [
      "bangladesh agricultural university",
      "bau"
    ]
  },
  {
    "name": "Sher-e-Bangla Agricultural University",
    "location": "Dhaka",
    "district": "Dhaka",
    "category": "Agricultural",
    "tier": "Top Specialized",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for food, agri input information, and education-linked services",
    "note": "Dhaka location gives stronger urban spillover demand.",
    "aliases": [
      "sher e bangla agricultural university",
      "sher-e-bangla agricultural university",
      "sau"
    ]
  },
  {
    "name": "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
    "location": "Gazipur",
    "district": "Gazipur",
    "category": "Agricultural",
    "tier": "Top Specialized",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for agri services, food, and student utility businesses",
    "note": "Gazipur location supports practical and price-sensitive demand.",
    "aliases": [
      "bangabandhu sheikh mujibur rahman agricultural university",
      "bsmrau"
    ]
  },
  {
    "name": "Sylhet Agricultural University",
    "location": "Sylhet",
    "district": "Sylhet",
    "category": "Agricultural",
    "tier": "Specialized",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, agri service, and local utility businesses",
    "note": "Best when the idea solves a familiar daily problem.",
    "aliases": [
      "sylhet agricultural university"
    ]
  },
  {
    "name": "Chattogram Veterinary & Animal Sciences University",
    "location": "Chattogram",
    "district": "Chattogram",
    "category": "Specialized",
    "tier": "Specialized",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for food, health-adjacent service, and targeted products",
    "note": "Niche positioning works better than going too broad.",
    "aliases": [
      "chattogram veterinary and animal sciences university",
      "chattogram veterinary & animal sciences university",
      "cvasu"
    ]
  },
  {
    "name": "Bangladesh University of Professionals (BUP)",
    "location": "Mirpur Cantonment, Dhaka",
    "district": "Dhaka",
    "category": "Special Public",
    "tier": "Top University",
    "crowd": "Medium-high",
    "spend": "Medium",
    "fit": "Excellent for nearby snacks, coffee, service businesses, and structured student utility offers",
    "note": "BUP is treated as a top university. Use student demand and nearby residential/commuter zones, not an inside-campus stall assumption.",
    "aliases": [
      "bangladesh university of professionals",
      "bup"
    ]
  },
  {
    "name": "National University",
    "location": "Gazipur",
    "district": "Gazipur",
    "category": "Special Public",
    "tier": "Large Network",
    "crowd": "Very broad",
    "spend": "Mixed-low",
    "fit": "Good for coaching, print, exam prep, and practical services across many districts",
    "note": "Use this as a distributed student market, not one single campus opportunity.",
    "aliases": [
      "national university",
      "nu"
    ]
  },
  {
    "name": "Bangladesh Open University",
    "location": "Gazipur",
    "district": "Gazipur",
    "category": "Special Public",
    "tier": "Large Network",
    "crowd": "Broad",
    "spend": "Mixed-low",
    "fit": "Good for exam support, digital services, and flexible education-linked ideas",
    "note": "Distance-learning style demand means digital and support services fit well.",
    "aliases": [
      "bangladesh open university",
      "bou"
    ]
  },
  {
    "name": "Rabindra University",
    "location": "Sirajganj",
    "district": "Sirajganj",
    "category": "Special Public",
    "tier": "Regional Public",
    "crowd": "Low-medium",
    "spend": "Low-medium",
    "fit": "Good for practical food, print, and student utility ideas",
    "note": "Start lean and locally.",
    "aliases": [
      "rabindra university"
    ]
  },
  {
    "name": "North South University",
    "location": "Bashundhara, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Top Private",
    "crowd": "High",
    "spend": "Medium-high",
    "fit": "Great for premium coffee, healthier snacks, digital services, and career tools around nearby areas",
    "note": "Higher spending power than average campus zones; branding matters.",
    "aliases": [
      "north south university",
      "nsu"
    ]
  },
  {
    "name": "BRAC University",
    "location": "Mohakhali, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Top Private",
    "crowd": "High",
    "spend": "Medium-high",
    "fit": "Great for coffee, productivity services, quality food, and digital products around nearby zones",
    "note": "Urban digital-first students with stronger premium tolerance.",
    "aliases": [
      "brac university",
      "brac"
    ]
  },
  {
    "name": "Independent University, Bangladesh",
    "location": "Bashundhara, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Top Private",
    "crowd": "Medium-high",
    "spend": "Medium-high",
    "fit": "Good for premium snacks, events, and student services",
    "note": "Private university spillover demand can support better margins.",
    "aliases": [
      "independent university bangladesh",
      "independent university, bangladesh",
      "iub"
    ]
  },
  {
    "name": "American International University-Bangladesh",
    "location": "Kuril, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Top Private",
    "crowd": "Medium-high",
    "spend": "Medium",
    "fit": "Good for food carts, print, coffee, and student utility services",
    "note": "Good daily flow around nearby student areas.",
    "aliases": [
      "american international university bangladesh",
      "american international university-bangladesh",
      "aiub"
    ]
  },
  {
    "name": "East West University",
    "location": "Aftabnagar, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Top Private",
    "crowd": "Medium-high",
    "spend": "Medium",
    "fit": "Good for food, tutoring, print, and student convenience businesses",
    "note": "A practical, student-heavy catchment around the university area.",
    "aliases": [
      "east west university",
      "ewu"
    ]
  },
  {
    "name": "United International University",
    "location": "United City, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium-high",
    "spend": "Medium-high",
    "fit": "Good for coffee, digital service, and student utility ideas",
    "note": "Better with urban positioning and quality.",
    "aliases": [
      "united international university",
      "uiu"
    ]
  },
  {
    "name": "Ahsanullah University of Science & Technology",
    "location": "Tejgaon, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium-high",
    "spend": "Medium",
    "fit": "Good for food, print, tech tutoring, and utility services",
    "note": "Location and specialized student crowd can help repeat demand.",
    "aliases": [
      "ahsanullah university of science and technology",
      "ahsanullah university of science & technology",
      "aust"
    ]
  },
  {
    "name": "University of Asia Pacific",
    "location": "Green Road, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium-high",
    "spend": "Medium",
    "fit": "Good for food, coffee, digital services, and nearby utility offers",
    "note": "Dense city context makes nearby execution more important than the campus itself.",
    "aliases": [
      "university of asia pacific",
      "uap"
    ]
  },
  {
    "name": "Daffodil International University",
    "location": "Dhanmondi/Ashulia, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "High",
    "spend": "Medium",
    "fit": "Good for student services, food, and practical digital products",
    "note": "Broad student mix can support both low-ticket and selective premium offers.",
    "aliases": [
      "daffodil international university",
      "diu"
    ]
  },
  {
    "name": "University of Liberal Arts Bangladesh",
    "location": "Mohammadpur, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for creative services, snacks, and quality-focused small businesses",
    "note": "Smaller but more niche audience.",
    "aliases": [
      "university of liberal arts bangladesh",
      "ulab"
    ]
  },
  {
    "name": "Southeast University",
    "location": "Banani, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium-high",
    "spend": "Medium",
    "fit": "Good for food, coffee, print, and student utility services",
    "note": "Banani context supports slightly higher pricing.",
    "aliases": [
      "southeast university"
    ]
  },
  {
    "name": "Stamford University Bangladesh",
    "location": "Siddeswari, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for food, print, and student support services",
    "note": "Practical value and visibility matter most.",
    "aliases": [
      "stamford university bangladesh",
      "stamford university"
    ]
  },
  {
    "name": "Green University of Bangladesh",
    "location": "Purbachal, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for food, transport-linked services, and student convenience offers",
    "note": "Location context shapes demand more than pure brand value.",
    "aliases": [
      "green university of bangladesh",
      "gub"
    ]
  },
  {
    "name": "Bangladesh University of Business & Technology",
    "location": "Mirpur, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Medium-high",
    "spend": "Medium-low",
    "fit": "Good for affordable food, coaching, and daily student utilities",
    "note": "Budget-sensitive but dense student demand can help.",
    "aliases": [
      "bangladesh university of business and technology",
      "bangladesh university of business & technology",
      "bubt"
    ]
  },
  {
    "name": "IUBAT",
    "location": "Uttara, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for food, coffee, and transport-adjacent student offers",
    "note": "Uttara context helps with commuter and residential spillover.",
    "aliases": [
      "iubat"
    ]
  },
  {
    "name": "World University of Bangladesh",
    "location": "Dhanmondi, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for food, print, and practical services",
    "note": "Best with tight location strategy.",
    "aliases": [
      "world university of bangladesh",
      "wub"
    ]
  },
  {
    "name": "ASA University Bangladesh",
    "location": "Shyamoli, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for affordable food and student support services",
    "note": "A value-first offer works better than a premium one.",
    "aliases": [
      "asa university bangladesh",
      "asa university"
    ]
  },
  {
    "name": "Canadian University of Bangladesh",
    "location": "Banani, Dhaka",
    "district": "Dhaka",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Medium",
    "spend": "Medium-high",
    "fit": "Good for selective premium food, coffee, and career services",
    "note": "Small but brand-sensitive audience around Banani.",
    "aliases": [
      "canadian university of bangladesh",
      "cub"
    ]
  },
  {
    "name": "International Islamic University Chittagong (IIUC)",
    "location": "Kumira, Chattogram",
    "district": "Chattogram",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for affordable food, tutoring, and daily utility service",
    "note": "Location and student routine shape demand strongly.",
    "aliases": [
      "international islamic university chittagong",
      "iiuc"
    ]
  },
  {
    "name": "Premier University",
    "location": "Chattogram City",
    "district": "Chattogram",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for food, coffee, print, and local services",
    "note": "Urban Chattogram context gives broader nearby demand.",
    "aliases": [
      "premier university"
    ]
  },
  {
    "name": "University of Science & Technology Chittagong",
    "location": "Foy’s Lake, Chattogram",
    "district": "Chattogram",
    "category": "Private",
    "tier": "Strong Private",
    "crowd": "Medium",
    "spend": "Medium",
    "fit": "Good for food, study services, and practical tech offers",
    "note": "Best with useful, repeat-focused offers.",
    "aliases": [
      "university of science and technology chittagong",
      "university of science & technology chittagong",
      "ustc"
    ]
  },
  {
    "name": "Southern University Bangladesh",
    "location": "Chattogram",
    "district": "Chattogram",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, print, and student utilities",
    "note": "Affordable and visible ideas work best.",
    "aliases": [
      "southern university bangladesh"
    ]
  },
  {
    "name": "Port City International University",
    "location": "Chattogram",
    "district": "Chattogram",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Medium",
    "spend": "Medium-low",
    "fit": "Good for food, tutoring, and neighborhood service offers",
    "note": "Keep pricing practical.",
    "aliases": [
      "port city international university"
    ]
  },
  {
    "name": "BGC Trust University Bangladesh",
    "location": "Chandanaish, Chattogram",
    "district": "Chattogram",
    "category": "Private",
    "tier": "Growing Private",
    "crowd": "Low-medium",
    "spend": "Low-medium",
    "fit": "Good for simple food and student support businesses",
    "note": "Start lean and local.",
    "aliases": [
      "bgc trust university bangladesh",
      "bgctub"
    ]
  }
];

const BUSINESS_RULES = {
  jhalmuri: {type:'Food Cart', subtype:'Jhalmuri Cart', cost:[3000,8000], daily:[800,2200], margin:'High margin, low setup', best:'University gate, coaching area, office road', risks:['Weather dependency','Crowded low-ticket market','Need visible location'], scale:'Side income / small stable business', budget:'Low', channels:['Campus gate','School zone','Evening roadside crowd']},
  fuchka: {type:'Food Cart', subtype:'Fuchka / Chotpoti Cart', cost:[5000,15000], daily:[1200,3500], margin:'Very strong if taste is repeatable', best:'University, park, evening market', risks:['Hygiene trust','Rainy day sales drop','Heavy competition in prime spots'], scale:'Small business with high repeat potential', budget:'Low', channels:['Campus area','Family hangout zone','Busy footpath']},
  tea: {type:'Tea Stall', subtype:'Tea / Tong / Cha Stall', cost:[7000,30000], daily:[1000,3000], margin:'Stable and repeat-driven', best:'Campus corner, bus stand, office area', risks:['Daily labor needed','Municipal pressure','Commodity price fluctuation'], scale:'Stable local income', budget:'Low', channels:['Bus stand','Campus gate','Office cluster']},
  coffee: {type:'Food Cart', subtype:'Coffee Cart', cost:[15000,60000], daily:[1500,5000], margin:'Medium-high with quality positioning', best:'Private university, office zone, premium roadside spot', risks:['Equipment cost','Need strong taste/branding','Premium pricing may limit volume'], scale:'Can grow into a small chain', budget:'Medium', channels:['Private universities','Office belts','Events']},
  juice: {type:'Food Cart', subtype:'Juice / Drink Cart', cost:[10000,40000], daily:[1200,4000], margin:'Good in summer, seasonal swing', best:'Hot urban zone, campus, sports area', risks:['Seasonality','Ingredient wastage','Power/ice dependency'], scale:'Seasonal but scalable', budget:'Medium', channels:['Campus','Parks','Hot market zones']},
  fastfood: {type:'Food Cart', subtype:'Fast Food Cart', cost:[15000,70000], daily:[1800,6000], margin:'Strong if menu is efficient', best:'Campus road, office lane, late evening crowd', risks:['Higher setup and ops complexity','Food quality consistency','More licensing pressure'], scale:'Can become a shop', budget:'Medium', channels:['Office area','Campus road','Late-night market']},
  icecream: {type:'Food Cart', subtype:'Ice Cream Cart', cost:[12000,50000], daily:[1000,3500], margin:'Seasonal, family-heavy demand', best:'Park, family zone, school area', risks:['Seasonality','Storage needs','Lower winter demand'], scale:'Small/seasonal business', budget:'Medium', channels:['Parks','School zones','Family hangouts']},
  grocery: {type:'Small Shop', subtype:'Mini Grocery / Convenience Shop', cost:[50000,300000], daily:[2000,7000], margin:'Stable but lower margin', best:'Residential lane, student area, local market', risks:['Inventory capital','Rent pressure','Local competition'], scale:'Stable local income', budget:'Medium', channels:['Residential area','Mess area','Near campus housing']},
  stationery: {type:'Small Shop', subtype:'Stationery / Print / Photocopy', cost:[40000,200000], daily:[1500,6000], margin:'High relevance around institutions', best:'Near university, school, coaching centers', risks:['Machine maintenance','Price competition','Seasonal spikes'], scale:'Stable with service upsells', budget:'Medium', channels:['University gate','Coaching hub','School zone']},
  tuition: {type:'Local Service', subtype:'Tuition / Coaching Service', cost:[0,10000], daily:[500,3000], margin:'Very high for student founders', best:'Campus network, Facebook groups, local area', risks:['Trust and consistency','Time-for-money limitation','Low scale without system'], scale:'Excellent side hustle', budget:'Low', channels:['Campus network','Facebook groups','Parents circle']},
  catering: {type:'Local Service', subtype:'Event / Office Catering', cost:[20000,100000], daily:[1500,8000], margin:'Can be strong with repeat B2B', best:'Urban office clusters, events, universities', risks:['Operational complexity','Delivery issues','Quality control'], scale:'Can grow to strong local business', budget:'Medium', channels:['Offices','Departments','Event organizers']},
  clothing: {type:'Facebook / Online Business', subtype:'Clothing / Boutique Business', cost:[10000,150000], daily:[500,6000], margin:'Moderate if brand is clear', best:'Instagram/Facebook + urban delivery', risks:['Inventory risk','Return issues','Heavy competition'], scale:'Can grow if niche is clear', budget:'Medium', channels:['Facebook page','Instagram','Campus ambassadors']},
  ecommerce: {type:'Online Business', subtype:'Generic E-commerce', cost:[20000,200000], daily:[300,7000], margin:'Depends on niche and ads', best:'Urban digital audience', risks:['Very high competition','Ad dependency','Delivery friction'], scale:'Possible but hard', budget:'Medium-high', channels:['Facebook ads','TikTok content','Niche communities']},
  delivery: {type:'Startup / Ops-heavy', subtype:'Delivery / Courier / Logistics', cost:[100000,1000000], daily:[0,10000], margin:'Scale-based, hard early', best:'Dense city operations', risks:['Ops complexity','Low margins','Need capital and process'], scale:'Large if execution is strong', budget:'High', channels:['SMEs','Facebook sellers','City merchants']},
  saas: {type:'Tech Startup', subtype:'SaaS / Software Product', cost:[10000,300000], daily:[0,8000], margin:'Excellent if product-market fit exists', best:'Specific pain point, B2B or student tool niche', risks:['Adoption takes time','Need focused niche','Hard to market generic idea'], scale:'Highly scalable', budget:'Medium', channels:['LinkedIn outreach','Campus pilot','SME networks']},
  app: {type:'Tech Startup', subtype:'Mobile App / Platform', cost:[20000,300000], daily:[0,7000], margin:'Depends on retention and monetization', best:'Clear single problem, repeat usage', risks:['Retention risk','Crowded categories','Feature creep'], scale:'Scalable if niche is strong', budget:'Medium', channels:['Campus pilot','WhatsApp communities','Creator marketing']},
  foodcourt: {type:'Restaurant / Food Court', subtype:'Food Court / Small Restaurant', cost:[150000,1500000], daily:[3000,20000], margin:'Good if location is prime', best:'Busy road, mall, premium campus side, market hub', risks:['Rent and staff cost','Large upfront investment','Taste consistency'], scale:'Can become a brand', budget:'High', channels:['Prime location','Delivery apps','Local marketing']}
};

const CITY_RULES = [
  {
    "name": "Dhaka",
    "aliases": [
      "dhaka",
      "dhanmondi",
      "mirpur",
      "uttara",
      "banani",
      "mohakhali",
      "bashundhara",
      "mohammadpur",
      "tejgaon",
      "aftabnagar",
      "shyamoli",
      "motijheel",
      "green road",
      "kuril",
      "mirpur cantonment"
    ],
    "group": "Mega Urban",
    "demand": "Very high",
    "spend": "Mixed",
    "ops": "High competition but the biggest repeat demand in Bangladesh",
    "fit": "Best for food, services, retail, and scalable tech ideas",
    "multiplier": 1.1
  },
  {
    "name": "Chattogram",
    "aliases": [
      "chattogram",
      "chittagong",
      "ctg",
      "foys lake",
      "foy s lake",
      "kumira",
      "chandanaish"
    ],
    "group": "Mega Urban",
    "demand": "High",
    "spend": "Medium",
    "ops": "Strong city demand with practical logistics and port-city energy",
    "fit": "Good for food, retail, education, health, and operations-heavy businesses",
    "multiplier": 1.03
  },
  {
    "name": "Narayanganj",
    "aliases": [
      "narayanganj"
    ],
    "group": "Industrial Hub",
    "demand": "High",
    "spend": "Medium-low",
    "ops": "Worker and family demand; location and traffic matter",
    "fit": "Good for tea, fast food, grocery, local service, supply businesses",
    "multiplier": 0.98
  },
  {
    "name": "Gazipur",
    "aliases": [
      "gazipur",
      "tongi",
      "ashulia"
    ],
    "group": "Industrial Hub",
    "demand": "High",
    "spend": "Medium-low",
    "ops": "Industrial and university-adjacent demand with price-sensitive customers",
    "fit": "Good for tea stalls, food carts, boarding-area services, and practical SaaS pilots",
    "multiplier": 1.0
  },
  {
    "name": "Sylhet",
    "aliases": [
      "sylhet"
    ],
    "group": "Major City",
    "demand": "Medium-high",
    "spend": "Medium",
    "ops": "Lifestyle and diaspora-influenced spending can help premium offers",
    "fit": "Good for selective premium food, education, services, and tourism-linked ideas",
    "multiplier": 0.98
  },
  {
    "name": "Rajshahi",
    "aliases": [
      "rajshahi"
    ],
    "group": "Major City",
    "demand": "Medium-high",
    "spend": "Medium-low",
    "ops": "Lower pricing works better; repeat demand matters",
    "fit": "Good for student-facing food, tuition, stationery, and small services",
    "multiplier": 0.93
  },
  {
    "name": "Khulna",
    "aliases": [
      "khulna"
    ],
    "group": "Major City",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Utility-first businesses perform better than over-designed concepts",
    "fit": "Good for practical shops, food, and service businesses",
    "multiplier": 0.91
  },
  {
    "name": "Barishal",
    "aliases": [
      "barishal"
    ],
    "group": "Major City",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Strong local repeat value matters more than fancy branding",
    "fit": "Good for food, tuition, local service, and practical retail",
    "multiplier": 0.88
  },
  {
    "name": "Mymensingh",
    "aliases": [
      "mymensingh"
    ],
    "group": "Major City",
    "demand": "Medium-high",
    "spend": "Medium-low",
    "ops": "Student and family demand both matter; pricing should stay practical",
    "fit": "Good for education, snacks, stationery, and low-capital businesses",
    "multiplier": 0.9
  },
  {
    "name": "Bogura",
    "aliases": [
      "bogura",
      "bogra"
    ],
    "group": "Major City",
    "demand": "Medium-high",
    "spend": "Medium-low",
    "ops": "Busy district-city energy with practical customer behavior",
    "fit": "Good for food, courier support, service, and local commerce",
    "multiplier": 0.9
  },
  {
    "name": "Rangpur",
    "aliases": [
      "rangpur"
    ],
    "group": "Major City",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Need strong everyday value; lower price points work better",
    "fit": "Good for low-cost food, tuition, stationery, and daily retail",
    "multiplier": 0.87
  },
  {
    "name": "Tangail",
    "aliases": [
      "tangail"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Works best with repeat demand and trust-led businesses",
    "fit": "Good for snacks, coaching, groceries, and practical services",
    "multiplier": 0.85
  },
  {
    "name": "Feni",
    "aliases": [
      "feni"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Competition is lower than Dhaka, but scale is also smaller",
    "fit": "Good for food carts, tuition, mobile services, and neighborhood shops",
    "multiplier": 0.84
  },
  {
    "name": "Noakhali",
    "aliases": [
      "noakhali"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Student and district-town demand can support low-capital businesses",
    "fit": "Good for food carts, coaching, stationery, and service businesses",
    "multiplier": 0.84
  },
  {
    "name": "Lakshmipur",
    "aliases": [
      "lakshmipur",
      "laxmipur"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Keep pricing practical and build trust slowly",
    "fit": "Best for essential retail, snacks, and local services",
    "multiplier": 0.81
  },
  {
    "name": "Chandpur",
    "aliases": [
      "chandpur"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Works well for familiar products and low-ticket repeat behavior",
    "fit": "Good for snacks, tea, and local utility services",
    "multiplier": 0.84
  },
  {
    "name": "Brahmanbaria",
    "aliases": [
      "brahmanbaria",
      "brammanbaria"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Trust and location matter more than big branding",
    "fit": "Good for grocery, tea, coaching, and small retail",
    "multiplier": 0.84
  },
  {
    "name": "Cox’s Bazar",
    "aliases": [
      "cox s bazar",
      "cox bazar",
      "coxs bazar",
      "coxsbazar"
    ],
    "group": "Tourism",
    "demand": "Medium-high",
    "spend": "Mixed",
    "ops": "Tourism can spike demand, but seasonality matters",
    "fit": "Good for food, seasonal retail, drinks, tourism-linked services",
    "multiplier": 1.0
  },
  {
    "name": "Jashore",
    "aliases": [
      "jashore",
      "jessore"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "A balanced district-town market; repeat value wins",
    "fit": "Good for food, service, print, and student-support businesses",
    "multiplier": 0.86
  },
  {
    "name": "Jhenaidah",
    "aliases": [
      "jhenaidah"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Smaller market; keep setup light and practical",
    "fit": "Good for tea, groceries, simple services",
    "multiplier": 0.8
  },
  {
    "name": "Kushtia",
    "aliases": [
      "kushtia"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "University and district-town demand can combine well",
    "fit": "Good for food, education, retail, and local services",
    "multiplier": 0.85
  },
  {
    "name": "Satkhira",
    "aliases": [
      "satkhira"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Slow and trust-heavy market; essentials perform best",
    "fit": "Good for groceries, daily-use goods, tea stalls, and tutoring",
    "multiplier": 0.8
  },
  {
    "name": "Pabna",
    "aliases": [
      "pabna"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Repeat customers matter more than premium positioning",
    "fit": "Good for food carts, local service, stationery, and tuition",
    "multiplier": 0.84
  },
  {
    "name": "Naogaon",
    "aliases": [
      "naogaon",
      "naogoan"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Works best with low-cost essentials and trust-led service",
    "fit": "Good for groceries, tea, coaching, and daily-use business",
    "multiplier": 0.8
  },
  {
    "name": "Dinajpur",
    "aliases": [
      "dinajpur"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Student and district-town demand can help education-linked businesses",
    "fit": "Good for tuition, stationery, food, and simple service ideas",
    "multiplier": 0.84
  },
  {
    "name": "Thakurgaon",
    "aliases": [
      "thakurgaon"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Need tight cost control and a very practical offer",
    "fit": "Good for tea, groceries, and small service businesses",
    "multiplier": 0.79
  },
  {
    "name": "Panchagarh",
    "aliases": [
      "panchagarh"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Essential demand matters more than experimentation",
    "fit": "Best for simple retail, snacks, and local utility businesses",
    "multiplier": 0.78
  },
  {
    "name": "Shariatpur",
    "aliases": [
      "shariatpur"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Small market; word-of-mouth matters a lot",
    "fit": "Good for practical retail, coaching, and low-cost service",
    "multiplier": 0.8
  },
  {
    "name": "Gopalganj",
    "aliases": [
      "gopalganj"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Growing district-town opportunity with practical demand",
    "fit": "Good for food, service, and student-oriented businesses",
    "multiplier": 0.84
  },
  {
    "name": "Faridpur",
    "aliases": [
      "faridpur"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Works best when the value proposition is obvious and repeatable",
    "fit": "Good for food, education, and local retail",
    "multiplier": 0.84
  },
  {
    "name": "Rajbari",
    "aliases": [
      "rajbari"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "A smaller market that rewards consistency",
    "fit": "Good for groceries, tea stalls, tutoring, and simple retail",
    "multiplier": 0.79
  },
  {
    "name": "Manikganj",
    "aliases": [
      "manikganj"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Need low-cost operations and neighborhood trust",
    "fit": "Good for essential goods, tea, and tuition",
    "multiplier": 0.8
  },
  {
    "name": "Munshiganj",
    "aliases": [
      "munshiganj"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Dhaka spillover can help in the right spots",
    "fit": "Good for commuter food, groceries, and practical services",
    "multiplier": 0.83
  },
  {
    "name": "Habiganj",
    "aliases": [
      "habiganj"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Keep the model simple and repeat-friendly",
    "fit": "Good for tea, groceries, and local service",
    "multiplier": 0.8
  },
  {
    "name": "Moulvibazar",
    "aliases": [
      "moulvibazar",
      "moulvi bazar"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Works well for local service and tourism-adjacent food",
    "fit": "Good for tea, retail, and selective premium food",
    "multiplier": 0.84
  },
  {
    "name": "Sunamganj",
    "aliases": [
      "sunamganj"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Need practical pricing and strong local trust",
    "fit": "Good for food, tutoring, and daily-use service",
    "multiplier": 0.8
  },
  {
    "name": "Sherpur",
    "aliases": [
      "sherpur"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Essential demand is stronger than premium demand",
    "fit": "Good for snacks, groceries, and local services",
    "multiplier": 0.79
  },
  {
    "name": "Jamalpur",
    "aliases": [
      "jamalpur"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Emerging town demand but pricing should stay realistic",
    "fit": "Good for food, coaching, and simple retail",
    "multiplier": 0.83
  },
  {
    "name": "Netrokona",
    "aliases": [
      "netrokona"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Low-ticket and trusted offers perform best",
    "fit": "Good for groceries, food carts, and tuition",
    "multiplier": 0.79
  },
  {
    "name": "Gaibandha",
    "aliases": [
      "gaibandha"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Operational simplicity matters a lot here",
    "fit": "Good for tea, small retail, and practical service",
    "multiplier": 0.79
  },
  {
    "name": "Lalmonirhat",
    "aliases": [
      "lalmonirhat"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Need a very practical offer with low setup cost",
    "fit": "Best for essentials, tea, and neighborhood service",
    "multiplier": 0.78
  },
  {
    "name": "Nilphamari",
    "aliases": [
      "nilphamari"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Customer trust and repetition matter more than novelty",
    "fit": "Good for groceries, tuition, and simple retail",
    "multiplier": 0.78
  },
  {
    "name": "Kurigram",
    "aliases": [
      "kurigram"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Small market; keep it essential and repeatable",
    "fit": "Good for tea stalls, groceries, and tutoring",
    "multiplier": 0.77
  },
  {
    "name": "Sirajganj",
    "aliases": [
      "sirajganj"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Balanced local market with steady everyday demand",
    "fit": "Good for food, print, education, and service ideas",
    "multiplier": 0.84
  },
  {
    "name": "Chapainawabganj",
    "aliases": [
      "chapainawabganj",
      "chapai nawabganj"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Agriculture-linked and trust-heavy customer behavior",
    "fit": "Good for essentials, food, and practical service",
    "multiplier": 0.79
  },
  {
    "name": "Meherpur",
    "aliases": [
      "meherpur"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Keep pricing clear and operations small",
    "fit": "Good for groceries, tea, and local service",
    "multiplier": 0.78
  },
  {
    "name": "Chuadanga",
    "aliases": [
      "chuadanga"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Need a low-capital, steady-demand approach",
    "fit": "Good for snacks, tutoring, and neighborhood retail",
    "multiplier": 0.79
  },
  {
    "name": "Magura",
    "aliases": [
      "magura"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "A small market that rewards familiarity and trust",
    "fit": "Good for essentials, tea, and coaching",
    "multiplier": 0.79
  },
  {
    "name": "Narail",
    "aliases": [
      "narail"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Low-risk, low-cost businesses fit best",
    "fit": "Good for groceries, snacks, and tutoring",
    "multiplier": 0.78
  },
  {
    "name": "Bagerhat",
    "aliases": [
      "bagerhat"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Steady local demand but lower scale",
    "fit": "Good for food, essentials, and small service",
    "multiplier": 0.79
  },
  {
    "name": "Pirojpur",
    "aliases": [
      "pirojpur"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Keep the offer simple and locally trusted",
    "fit": "Good for groceries, food, and tutoring",
    "multiplier": 0.79
  },
  {
    "name": "Jhalokathi",
    "aliases": [
      "jhalokathi",
      "jhalakathi"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Value-for-money positioning matters the most",
    "fit": "Good for tea, small food, and local retail",
    "multiplier": 0.79
  },
  {
    "name": "Bhola",
    "aliases": [
      "bhola"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Need cost control and a repeat-friendly offer",
    "fit": "Good for essential retail and food",
    "multiplier": 0.78
  },
  {
    "name": "Patuakhali",
    "aliases": [
      "patuakhali"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Student and coastal-town demand can combine well",
    "fit": "Good for education, food, and practical service businesses",
    "multiplier": 0.83
  },
  {
    "name": "Barguna",
    "aliases": [
      "barguna"
    ],
    "group": "District Town",
    "demand": "Medium-low",
    "spend": "Low",
    "ops": "Small market, so start tiny and test manually",
    "fit": "Good for low-cost food, retail, and tutoring",
    "multiplier": 0.78
  },
  {
    "name": "Cumilla",
    "aliases": [
      "cumilla",
      "comilla"
    ],
    "group": "District Town",
    "demand": "Medium-high",
    "spend": "Medium-low",
    "ops": "A stronger district city with education-linked demand",
    "fit": "Good for food, print, coaching, and local commerce",
    "multiplier": 0.87
  },
  {
    "name": "Rangamati",
    "aliases": [
      "rangamati"
    ],
    "group": "Tourism",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Tourism and local demand mix; seasonality matters",
    "fit": "Good for food, drinks, and tourism-linked services",
    "multiplier": 0.88
  },
  {
    "name": "Kishoreganj",
    "aliases": [
      "kishoreganj"
    ],
    "group": "District Town",
    "demand": "Medium",
    "spend": "Medium-low",
    "ops": "Practical and repeat-driven demand works best",
    "fit": "Good for food, tuition, and neighborhood retail",
    "multiplier": 0.83
  }
];

const PRESET_IDEAS = [
  'আমি BUP এর student, Mirpur e thaki, BUP er pasher area te low budget diye jhalmuri cart dite chai',
  'আমি BRAC University te pori, Mohakhali area te coffee cart korte chai nearby student and office crowd target kore',
  'DU student der target kore Dhanmondi/Green Road side e stationery and photocopy service dite chai',
  'Gazipur e DUET/National University student der jonno tea stall plus evening snack corner start korte chai',
  'Noakhali te NSTU student network use kore tuition/coaching service start korte chai',
  'Dhaka te BUP, DU, BRAC student der jonno SaaS class planning tool banate chai',
  'Cox’s Bazar e seasonal juice and fast food cart dite chai tourist + local student crowd target kore',
  'Bogura te small food court start korte chai bus stand and residential area dhore'
];

let state = {
  screen:'landing',
  idea:'',
  analysis:null,
  history: loadHistory(),
  compareTarget:null
};

function loadHistory(){
  try{
    return JSON.parse(localStorage.getItem('buildkorbo_v16_history') || localStorage.getItem('buildkorbo_v15_history') || '[]');
  }catch(e){
    return [];
  }
}
function saveHistory(){
  localStorage.setItem('buildkorbo_v16_history', JSON.stringify(state.history.slice(0,8)));
}

function clamp(n,min,max){ return Math.max(min, Math.min(max,n)); }
function avg(arr){ return Math.round(arr.reduce((a,b)=>a+b,0)/arr.length); }
function moneyRange(min,max){ return `${formatMoney(min)} - ${formatMoney(max)}`; }
function formatMoney(num){
  if(num >= 100000) return `${(num/100000).toFixed(num % 100000 === 0 ? 0 : 1)}L BDT`;
  if(num >= 1000) return `${num/1000 % 1 === 0 ? num/1000 : (num/1000).toFixed(1)}k BDT`;
  return `${num} BDT`;
}
function titleCase(str){ return str.replace(/\b\w/g, c => c.toUpperCase()); }

function norm(text){
  return (text || '').toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\u0980-\u09ff\s']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function districtIdeas(city){
  if(city.group === 'Mega Urban') return ['Coffee cart near premium zones', 'Student utility service', 'Focused SaaS or SME software'];
  if(city.group === 'Industrial Hub') return ['Tea stall for worker traffic', 'Affordable fast food corner', 'Boarding / student utility service'];
  if(city.group === 'Tourism') return ['Seasonal drinks', 'Fast food cart', 'Tourist-linked small service'];
  if(city.group === 'Major City') return ['Stationery + print', 'Tuition/coaching', 'Affordable food cart'];
  return ['Tea stall or snack cart', 'Tuition/coaching', 'Mini grocery / daily utility'];
}

function detectBusinessRule(text){
  const t = norm(text);
  const checks = [
    ['jhalmuri','jhal muri','ঝালমুড়ি','ঝালমুড়ি'],['fuchka','chotpoti','chatpati','চটপটি','ফুচকা'],['tea','cha stall','tong','tea stall','চা'],['coffee','কফি'],['juice','shorbot','জুস'],['fastfood','burger','shawarma','fast food','snack cart','food cart','foodcourt'],['icecream','ice cream','আইসক্রিম'],['grocery','mini shop','convenience','mudi','মুদি'],['stationery','photocopy','print shop','xerox','photostat'],['tuition','coaching','private pora','tutoring','tutor'],['catering'],['clothing','boutique','tshirt','t-shirt','fashion'],['ecommerce','e-commerce','online shop'],['delivery','courier','logistics'],['saas','software','crm','dashboard tool'],['app','platform'],['foodcourt','food court','restaurant','resturent','resturant']
  ];
  for(const list of checks){
    const [key, ...aliases] = list;
    const terms = [key, ...aliases];
    if(terms.some(term => t.includes(term))) return BUSINESS_RULES[key];
  }
  if(/cart|stall|food|snack/.test(t)) return BUSINESS_RULES.fastfood;
  if(/service|agency|freelance/.test(t)) return BUSINESS_RULES.tuition;
  if(/shop|store/.test(t)) return BUSINESS_RULES.grocery;
  if(/website|tool|startup|tech/.test(t)) return BUSINESS_RULES.saas;
  return {type:'General Business', subtype:'General Bangladesh Business', cost:[10000,100000], daily:[500,5000], margin:'Depends heavily on niche and location', best:'Solve a specific local problem', risks:['Generic positioning','Weak differentiation','Execution inconsistency'], scale:'Needs clearer niche', budget:'Medium', channels:['Local community','Facebook','Direct outreach']};
}

function detectUniversity(text){
  const t = norm(text);
  let best = null;
  let bestLen = 0;
  for(const item of UNIVERSITY_RULES){
    for(const alias of item.aliases){
      const a = norm(alias);
      if(t.includes(a) && a.length > bestLen){
        best = item;
        bestLen = a.length;
      }
    }
  }
  if(best) return best;
  if(/university|varsity|campus/.test(t)){
    return {name:'General University Context', location:'Bangladesh', district:null, category:'General', tier:'Campus Context', crowd:'Medium-high', spend:'Medium', fit:'Good for nearby snacks, print, tutoring, and student utility services', note:'Treat the university as customer context and surrounding-area demand, not as an inside-campus stall assumption.', aliases:[]};
  }
  return null;
}

function detectCity(text, uni){
  const t = norm(text);
  let best = null;
  let bestLen = 0;
  for(const item of CITY_RULES){
    for(const alias of item.aliases){
      const a = norm(alias);
      if(t.includes(a) && a.length > bestLen){
        best = item;
        bestLen = a.length;
      }
    }
  }
  if(best) return {...best, inferred:false};
  if(uni && uni.district){
    const found = CITY_RULES.find(x => x.name === uni.district);
    if(found) return {...found, inferred:true};
  }
  if(/village|gram|rural/.test(t)) return {name:'Village / Rural Area', aliases:[], group:'Rural', demand:'Lower volume', spend:'Lower', ops:'Trust and locality matter most', fit:'Best for essential or daily-use businesses', multiplier:0.68, inferred:false};
  if(/town|district|jela/.test(t)) return {name:'Town / District Area', aliases:[], group:'District Town', demand:'Medium', spend:'Lower', ops:'Keep pricing simple and solve clear problems', fit:'Best for low-cost practical ideas', multiplier:0.82, inferred:false};
  return {name:'Major City', aliases:[], group:'Urban', demand:'Medium-high', spend:'Medium', ops:'Urban demand exists but depends on niche', fit:'Good for practical businesses', multiplier:0.95, inferred:true};
}

function detectExecutionContext(text, uni){
  const t = norm(text);
  if(/বাসা|basha|home|বাসার|thaki|thake|near home|home area|residential/.test(t)){
    return {label:'Residential / home area', note:'Use nearby residents, commuters, and daily local needs as the first market.'};
  }
  if(/market|bazar|bus stand|station|stand|roadside|footpath|junction/.test(t)){
    return {label:'Market / roadside area', note:'Traffic volume and visibility matter more than a strong student brand here.'};
  }
  if(/office|industrial|factory|worker|garments/.test(t)){
    return {label:'Office / worker area', note:'Price sensitivity, speed, and repeat value matter most.'};
  }
  if(/campus er pashe|campus er পাশে|campus er kache|campus er কাছে|near university|near campus|varsity area|university area|gate area|mess area|hostel/.test(t)){
    return {label:'University surrounding area', note:'Target student flow around gates, messes, coaching lanes, and transport points outside the campus.'};
  }
  if(uni){
    return {label:`${uni.name} surrounding area`, note:'Treat the university as nearby customer demand and surrounding-area opportunity, not an inside-campus stall assumption.'};
  }
  return {label:'Local area', note:'Start with the nearest practical customer segment before expanding.'};
}

function detectFounder(text){
  const t = norm(text);
  if(/student|campus|varsity|university/.test(t)) return {label:'Student Founder', budgetBias:-8, fit:'Best for side hustle, service, low-capital businesses', note:'Lower budget but campus network is a strong advantage.'};
  if(/job holder|office|part time|part-time/.test(t)) return {label:'Part-time Founder', budgetBias:0, fit:'Best for lower-ops businesses or digital offers', note:'Time constraint matters more than skill.'};
  return {label:'General Founder', budgetBias:4, fit:'Can pursue both small business and startup paths', note:'Flexibility depends on budget and execution.'};
}

function detectBudget(text, rule){
  const t = norm(text);
  const nums = [...t.matchAll(/(\d+)\s*(k|tk|taka|bdt|lakh|lac|lac?)/g)];
  if(nums.length){
    let maxMention = 0;
    nums.forEach(m => {
      let n = parseInt(m[1],10);
      let unit = m[2];
      if(unit.startsWith('l')) n *= 100000;
      else if(unit === 'k') n *= 1000;
      maxMention = Math.max(maxMention, n);
    });
    return maxMention < 10000 ? 'Low Budget' : maxMention < 100000 ? 'Medium Budget' : 'High Budget';
  }
  return `${rule.budget} Budget`;
}

function scoreAnalysis(rule, founder, city, uni, idea){
  const t = idea.toLowerCase();
  let marketFit = 58;
  let bdFit = 60;
  let monetization = 55;
  let feasibility = 58;
  let founderFit = 56;
  let clarity = clamp(Math.round(idea.length / 8), 42, 88);
  let competition = 50;
  let trustBarrier = 40;

  if(rule.type.includes('Food') || rule.type.includes('Tea') || rule.type.includes('Small Shop')){
    marketFit += 14; bdFit += 18; monetization += 10; feasibility += 8; competition += 12;
  }
  if(rule.type.includes('Tech') || rule.type.includes('Startup') || rule.type.includes('Online')){
    marketFit += 8; bdFit += 4; monetization += 4; feasibility -= 6; competition += 8; trustBarrier += 8;
  }
  if(rule.type.includes('Service')){
    monetization += 14; founderFit += 10; feasibility += 10;
  }
  if(uni){ marketFit += 7; bdFit += 6; feasibility += 4; }
  if(city.name === 'Dhaka'){ marketFit += 8; competition += 8; }
  if(city.name === 'Town / District Area' || city.name === 'Village / Rural Area'){ bdFit += 4; monetization -= 6; }
  if(founder.label === 'Student Founder'){
    if(rule.budget === 'Low') founderFit += 18;
    if(rule.budget === 'Medium') founderFit += 6;
    if(rule.budget === 'High') founderFit -= 12;
  }
  if(/student|campus|varsity|university/.test(t) && uni) bdFit += 8;
  if(/facebook|whatsapp|online/.test(t)) monetization += 3;
  if(/premium|brand|chain|franchise/.test(t)) feasibility -= 6;
  if(/food cart|cart|stall/.test(t)) trustBarrier += 4;
  if(/verified|subscription|booking|crm|tool|software/.test(t)) monetization += 5;
  if(/permission|permit|campus/.test(t)) trustBarrier += 4;
  if(/only|just/.test(t) && idea.length < 40) clarity -= 8;
  if(idea.split(' ').length > 8) clarity += 8;

  marketFit = clamp(Math.round(marketFit * city.multiplier), 35, 95);
  bdFit = clamp(Math.round(bdFit * city.multiplier), 35, 96);
  monetization = clamp(Math.round(monetization * (city.multiplier < 1 ? .96 : 1)), 30, 94);
  feasibility = clamp(feasibility + founder.budgetBias, 28, 94);
  founderFit = clamp(founderFit + founder.budgetBias, 28, 95);
  clarity = clamp(clarity, 32, 95);
  competition = clamp(competition, 22, 94);
  trustBarrier = clamp(trustBarrier, 18, 92);

  const total = clamp(Math.round((marketFit + bdFit + monetization + feasibility + founderFit + clarity + (100-competition) + (100-trustBarrier))/8), 34, 96);
  return {marketFit, bdFit, monetization, feasibility, founderFit, clarity, competition, trustBarrier, total};
}

function makeRisk(scores){
  const raw = Math.round((scores.competition + scores.trustBarrier + (100 - scores.feasibility))/3);
  const level = raw >= 68 ? 'High' : raw >= 48 ? 'Medium' : 'Low';
  return {value:raw, level};
}

function buildSuggestions(rule, founder, city, uni, scores){
  const strengths = [];
  const warnings = [];
  const why = [];
  const mvp = [];
  const firstUsers = [];
  const testPlan = [];
  const alternatives = [];

  if(scores.bdFit >= 70) strengths.push('Strong Bangladesh fit because the idea solves a familiar local need.');
  if(rule.budget === 'Low') strengths.push('Low setup cost makes this easier to test without taking huge financial risk.');
  if(uni) strengths.push(`Campus context helps because ${uni.note.toLowerCase()}`);
  if(scores.monetization >= 68) strengths.push('Revenue path is relatively clear from the start.');
  if(scores.founderFit >= 70) strengths.push(`${founder.label} profile fits this idea well.`);

  if(scores.competition >= 70) warnings.push({level:'high', text:'Competition is already strong, so location / niche / quality must be sharper than average.'});
  if(scores.trustBarrier >= 60) warnings.push({level:'medium', text:'People may hesitate at first unless hygiene, proof, quality, or credibility is visible.'});
  if(scores.feasibility <= 48) warnings.push({level:'high', text:'Execution complexity is high for the current founder profile or budget.'});
  if(rule.budget === 'High' && founder.label === 'Student Founder') warnings.push({level:'high', text:'This feels too capital-heavy for a typical student founder unless you have backing.'});
  if(city.name === 'Village / Rural Area' && rule.type.includes('Tech')) warnings.push({level:'medium', text:'Digital adoption may be slower outside city contexts, so early traction can be difficult.'});
  if(rule.type.includes('Food') || rule.type.includes('Tea') || rule.type.includes('Restaurant')) warnings.push({level:'medium', text:'Daily presence, food quality, and consistency matter more than branding alone.'});

  why.push(`Market fit is ${scores.marketFit}/100 because ${rule.subtype.toLowerCase()} has ${city.demand.toLowerCase()} demand in ${city.name}.`);
  why.push(`Bangladesh fit is ${scores.bdFit}/100 because ${rule.best.toLowerCase()} is practical for local buying behavior.`);
  why.push(`Founder fit is ${scores.founderFit}/100 because ${founder.fit.toLowerCase()}.`);
  why.push(`Competition is ${scores.competition}/100, so your edge should come from location, pricing, speed, or niche focus.`);

  if(rule.type.includes('Food') || rule.type.includes('Tea') || rule.type.includes('Restaurant')){
    mvp.push('Start with one focused menu, not a huge menu.');
    mvp.push('Test one location for 7-14 days before scaling.');
    mvp.push('Use a visible cleanliness and pricing board.');
    firstUsers.push('Students leaving class or coaching');
    firstUsers.push('Nearby mess / hostel residents');
    firstUsers.push('Facebook campus groups + friend referrals');
    testPlan.push('Sell manually for 3-5 days and note peak hours.');
    testPlan.push('Ask 20 buyers what they would buy again.');
    alternatives.push('Small evening snack corner');
    alternatives.push('Coffee + snack combo cart');
  } else if(rule.type.includes('Service')){
    mvp.push('Start with one specific service offer.');
    mvp.push('Use referrals before spending on ads.');
    mvp.push('Collect testimonials quickly.');
    firstUsers.push('Campus friends');
    firstUsers.push('Local Facebook groups');
    firstUsers.push('Word of mouth');
    testPlan.push('Offer the service to 5 users first.');
    testPlan.push('Measure repeat demand in 2 weeks.');
    alternatives.push('Premium small-batch coaching');
    alternatives.push('Niche student service bundle');
  } else if(rule.type.includes('Tech') || rule.type.includes('Online') || rule.type.includes('Startup')){
    mvp.push('Build one clear feature that solves one pain point.');
    mvp.push('Pilot with one niche group before adding more features.');
    mvp.push('Keep operations manual at first if needed.');
    firstUsers.push('Targeted campus community');
    firstUsers.push('SME owners via direct outreach');
    firstUsers.push('LinkedIn + Facebook niche groups');
    testPlan.push('Validate the pain point with 10 conversations before building more.');
    testPlan.push('Launch a waitlist or simple landing page first.');
    alternatives.push('Student-focused version');
    alternatives.push('SME-focused lite version');
  } else {
    mvp.push('Keep the first version small and practical.');
    mvp.push('Avoid over-investing before first customer proof.');
    firstUsers.push('Friends, family, and nearby local demand');
    testPlan.push('Manually validate demand before spending more money.');
    alternatives.push('More niche local version');
  }

  return {strengths, warnings, why, mvp, firstUsers, testPlan, alternatives:[...new Set(alternatives)].slice(0,3)};
}

function profitAndCost(rule, city){
  const costLow = Math.round(rule.cost[0] * city.multiplier);
  const costHigh = Math.round(rule.cost[1] * city.multiplier);
  const dailyLow = Math.round(rule.daily[0] * city.multiplier);
  const dailyHigh = Math.round(rule.daily[1] * city.multiplier);
  const monthlyLow = dailyLow * 26;
  const monthlyHigh = dailyHigh * 26;
  return {costLow, costHigh, dailyLow, dailyHigh, monthlyLow, monthlyHigh};
}

function buildAnalysis(idea){
  const rule = detectBusinessRule(idea);
  const uni = detectUniversity(idea);
  const city = detectCity(idea, uni);
  const founder = detectFounder(idea);
  const context = detectExecutionContext(idea, uni);
  const budget = detectBudget(idea, rule);
  const scores = scoreAnalysis(rule, founder, city, uni, idea);
  const risk = makeRisk(scores);
  const finance = profitAndCost(rule, city);
  const extras = buildSuggestions(rule, founder, city, uni, scores);
  const improvedIdea = improveIdea(idea, rule, uni, city, context);
  const bestNiche = bestNicheFor(rule, founder, uni, city, context);
  const earnFast = fastestWayToEarn(rule, city, context);
  const reality = realityCheck(rule, founder, city, uni, context, risk);
  const launch = launchEstimate(rule);
  const stack = suggestedStack(rule);
  const investor = investorVerdict(scores, rule);
  const scale = scalePotential(scores, rule);
  return {idea, rule, uni, city, founder, context, budget, scores, risk, finance, extras, improvedIdea, bestNiche, earnFast, reality, launch, stack, investor, scale};
}

function improveIdea(idea, rule, uni, city, context){
  if(rule.type.includes('Food') || rule.type.includes('Tea') || rule.type.includes('Restaurant')){
    const place = context.label.includes('University') ? context.label : city.name;
    return `Focused ${rule.subtype.toLowerCase()} with visible hygiene, fixed low-ticket pricing, and a repeat-friendly spot in ${place}.`;
  }
  if(rule.type.includes('Service')){
    return `Niche ${rule.subtype.toLowerCase()} for a specific local group with fast delivery, testimonials, and referral-based growth.`;
  }
  if(rule.type.includes('Tech') || rule.type.includes('Online') || rule.type.includes('Startup')){
    return `Small, niche-first ${rule.subtype.toLowerCase()} solving one specific Bangladesh problem for a clear target group before trying to scale.`;
  }
  return `Practical local version of this idea with one target customer, one clear offer, and one easy revenue stream.`;
}

function bestNicheFor(rule, founder, uni, city, context){
  if(uni) return `Start with ${uni.name} students and the nearby surrounding crowd around halls, messes, transport points, or residential blocks — not an inside-campus stall assumption.`;
  if(context.label.includes('Residential')) return `Start with one residential cluster where trust can spread fast and repeat demand is realistic.`;
  if(rule.type.includes('Food') || rule.type.includes('Shop')) return `Start with one high-footfall local area instead of trying to serve everyone.`;
  if(rule.type.includes('Tech') || rule.type.includes('Online')) return `Start with one niche user segment in ${city.name}, not a generic Bangladesh-wide launch.`;
  return `Start with one clear community or neighborhood where trust can spread faster.`;
}

function fastestWayToEarn(rule, city, context){
  if(rule.type.includes('Food') || rule.type.includes('Tea') || rule.type.includes('Restaurant')) return `Sell from a visible ${context.label.toLowerCase()} with a tight menu and low-ticket pricing. Cash flow can start on day one in ${city.name}.`;
  if(rule.type.includes('Service')) return 'Get first 3 customers through referrals and Facebook groups before making the service bigger.';
  if(rule.type.includes('Tech') || rule.type.includes('Online')) return 'Charge a small pilot fee or start with a premium feature for a very specific user group.';
  return 'Start small, validate manually, and charge early instead of building too much upfront.';
}

function realityCheck(rule, founder, city, uni, context, risk){
  const lines = [];
  if(rule.type.includes('Food') || rule.type.includes('Tea') || rule.type.includes('Restaurant')) lines.push('This can work, but it is an operations business first, not a passive income machine.');
  if(founder.label === 'Student Founder') lines.push('As a student, low-capital ideas and repeat local demand are safer than big inventory or full restaurant setups.');
  if(uni) lines.push('University context should be used as customer demand and surrounding-area insight, not as an inside-campus stall assumption.');
  if(uni && uni.name.includes('BUP')) lines.push('Because BUP is treated as a top university, nearby zones and commuter/residential spillover are smarter than assuming direct campus selling.');
  if(city.name === 'Dhaka') lines.push('Dhaka gives more demand, but competitors are sharper and rent/location mistakes are expensive.');
  if(city.group === 'District Town') lines.push('District-town markets reward affordability, trust, and consistency more than flashy branding.');
  if(risk.level === 'High') lines.push('You should validate manually before putting serious money into this.');
  lines.push(context.note);
  return lines;
}

function launchEstimate(rule){
  if(rule.type.includes('Food') || rule.type.includes('Tea')) return {mvp:'3-10 days', full:'2-4 weeks'};
  if(rule.type.includes('Restaurant')) return {mvp:'2-4 weeks', full:'2-3 months'};
  if(rule.type.includes('Service')) return {mvp:'1-7 days', full:'2-4 weeks'};
  if(rule.type.includes('Tech') || rule.type.includes('Online') || rule.type.includes('Startup')) return {mvp:'2-6 weeks', full:'2-4 months'};
  return {mvp:'1-3 weeks', full:'1-2 months'};
}

function suggestedStack(rule){
  if(rule.type.includes('Tech') || rule.type.includes('Online') || rule.type.includes('Startup')) return ['Frontend: React','Backend: Node / Firebase','DB: Firestore / Supabase','Payments: bKash/Nagad/manual'];
  return ['Core: WhatsApp + Facebook Page','Ops: Google Sheets / Notion','Payments: Cash / bKash','Marketing: Facebook groups + referrals'];
}

function investorVerdict(scores, rule){
  let verdict = 'Test First';
  if(rule.type.includes('Tech') && scores.total >= 74) verdict = 'Interesting Niche Bet';
  else if((rule.type.includes('Food') || rule.type.includes('Service') || rule.type.includes('Shop')) && scores.total >= 70) verdict = 'Good Local Business';
  else if(scores.total < 54) verdict = 'Too Early / Too Risky';
  const note = rule.type.includes('Tech') ? 'Investability depends on niche clarity, recurring usage, and repeat revenue.' : 'This is more likely to be a solid local business than a venture-scale startup.';
  return {verdict, note};
}

function scalePotential(scores, rule){
  if(rule.type.includes('Tech') || rule.type.includes('Online') || rule.type.includes('Startup')) return scores.total >= 72 ? 'High if niche focus stays sharp' : 'Possible, but not without clearer positioning';
  if(rule.type.includes('Restaurant')) return 'Can grow into a strong local brand if operations stay consistent';
  if(rule.type.includes('Food') || rule.type.includes('Tea') || rule.type.includes('Service') || rule.type.includes('Shop')) return 'Best as side income or a solid small business first';
  return 'Depends on niche and repeat demand';
}

function strengthBadge(total){
  if(total >= 80) return 'High Potential';
  if(total >= 68) return 'Strong Local Opportunity';
  if(total >= 56) return 'Worth Testing';
  return 'Needs Work';
}

function riskColor(value){
  if(value === 'High') return 'sev-high';
  if(value === 'Medium') return 'sev-medium';
  return 'sev-low';
}

function pushHistory(analysis){
  const item = {
    id:Date.now(),
    idea:analysis.idea,
    total:analysis.scores.total,
    type:analysis.rule.subtype,
    badge:strengthBadge(analysis.scores.total),
    when:new Date().toLocaleString()
  };
  state.history = [item, ...state.history.filter(x => x.idea !== item.idea)].slice(0,8);
  saveHistory();
}

function render(){
  app.innerHTML = state.screen === 'landing' ? renderLanding() : renderDashboard();
  attachEvents();
  if(state.screen === 'dashboard' && state.analysis){
    renderChart(state.analysis);
  }
}

function renderLanding(){
  return `
    <section class="landing landing-exact">
      <div class="landing-card landing-card-exact glass">
        <div class="orbit orbit-left"></div>
        <div class="orbit orbit-right"></div>
        <div class="glow glow-left"></div>
        <div class="glow glow-right"></div>
        <div class="grain-layer"></div>

        <div class="header-exact">
          <div class="brand-exact">
            <div class="logo-square"><div class="logo-diamond"></div></div>
            <div class="brand-copy">
              <div class="brand-title">BuildKorbo?</div>
              <div class="brand-sub">Bangladesh Startup Validator</div>
            </div>
          </div>
          <div class="header-actions">
            <div class="made-badge">Made for Bangladesh</div>
          </div>
        </div>

        <div class="top-pill">Smart Ideas. Real Insights. Better Decisions.</div>

        <div class="hero-exact">
          <h1>Type your idea.<br>See if it can actually<br>work in <span class="accent">Bangladesh.</span></h1>
          <p>Get market-fit signals, investor pulse, red flags, MVP focus,<br>and a first-user plan in one clean dashboard.</p>
        </div>

        <div class="landing-form exact-form">
          <div class="input-shell polished-shell refined-shell">
            <div class="input-head-row">
              <div>
                <div class="input-label">Describe your idea</div>
                <div class="input-subcopy">One clear sentence works best.</div>
              </div>
              <div class="prompt-chip">Clear and specific</div>
            </div>
            <textarea id="ideaInput" class="idea-box exact-idea-box" maxlength="500" placeholder="e.g. Online tutoring marketplace for university students in Dhaka"></textarea>
            <div class="sample-prompts">
              <button class="sample-chip" type="button" data-sample="Online tutoring marketplace for university students in Dhaka">Online tutoring</button>
              <button class="sample-chip" type="button" data-sample="Affordable tea and snacks stall near a private university in Dhaka">Tea stall near campus</button>
              <button class="sample-chip" type="button" data-sample="Low-cost laundry pickup and delivery for hostel students in Chattogram">Student laundry</button>
            </div>
            <div class="input-footer polished-footer">
              <div class="helper-line">Keep it short, clear, and specific.</div>
              <div class="char-count"><span id="charCount">0</span> / 500</div>
            </div>
          </div>
          <div class="cta-wrap">
            <button class="primary-btn exact-primary" id="analyzeBtn">Validate My Idea</button>
          </div>
          <div class="privacy-line">Your idea stays on this device.</div>
        </div>

        <div class="landing-foot">Made by Sama</div>
      </div>
    </section>
  `;
}

function renderDashboard(){
  const a = state.analysis;
  const badge = strengthBadge(a.scores.total);
  const riskWidth = `${a.risk.value}%`;
  const riskBarColor = a.risk.level === 'High' ? '#d45b5b' : a.risk.level === 'Medium' ? '#df8d32' : '#2db36d';
  const sideHistory = state.history.length ? state.history.map(item => `
    <div class="result-history-item">
      <div>
        <div class="result-history-title">${item.idea.length > 34 ? item.idea.slice(0,34)+'…' : item.idea}</div>
        <div class="small-muted">${item.type}</div>
      </div>
      <button data-reopen="${item.id}">${item.total}</button>
    </div>`).join('') : `<div class="small-muted">No saved ideas yet.</div>`;

  return `
    <div class="app-shell result-shell">
      <div class="result-layout">
        <aside class="result-sidebar glass">
          <div class="result-brand">
            <div class="result-brand-mark">◆</div>
            <div>
              <h2>BuildKorbo</h2>
              <p>Bangladesh Startup Validator</p>
            </div>
          </div>

          <button class="result-primary-btn" id="backBtn">＋ New idea</button>

          <div class="result-side-card">
            <div class="result-side-head">
              <h3>Idea snapshot</h3>
              <button class="result-edit-btn">Edit</button>
            </div>
            <div class="result-idea-title">${a.rule.subtype} in Bangladesh</div>
            <div class="result-meta-list">
              <div><span>Business type</span><strong>${a.rule.subtype}</strong></div>
              <div><span>Founder</span><strong>${a.founder.label}</strong></div>
              <div><span>Context</span><strong>${a.context.label}</strong></div>
              <div><span>Budget</span><strong>${a.budget}</strong></div>
              <div><span>District</span><strong>${a.city.name}</strong></div>
              <div><span>University</span><strong>${a.uni ? a.uni.name : 'General market context'}</strong></div>
            </div>
          </div>

          <div class="result-side-card">
            <div class="result-side-head">
              <h3>Recent history</h3>
              <span class="small-muted">${state.history.length ? 'Saved ideas' : 'Empty'}</span>
            </div>
            <div class="result-history-list">${sideHistory}</div>
          </div>

          <div class="result-side-note">
            <strong>Your idea stays local</strong>
            <span>Snapshots are stored in your browser history for quick reopen.</span>
          </div>
        </aside>

        <main class="result-main">
          <div class="result-status glass">
            <div class="result-status-left">
              <div class="result-status-icon">✓</div>
              <div>
                <strong>Validation completed</strong>
                <span>Analyzed using district, founder, budget, and category signals</span>
              </div>
            </div>
            <div class="result-top-actions">
              <button class="secondary-btn" id="saveBtn">Save snapshot</button>
              <button class="secondary-btn" id="printBtn">Export report</button>
            </div>
          </div>

          <section class="result-hero glass">
            <div class="result-score-panel">
              <div class="result-score-label">Overall Score</div>
              <div class="score-ring-wrap result-score-ring" style="--deg:${a.scores.total * 3.6}deg">
                <div class="score-core"><strong>${a.scores.total}</strong><span>/100</span></div>
              </div>
              <div class="result-score-badge">${badge}</div>
            </div>

            <div class="result-hero-main">
              <div class="result-title-row">
                <h1>${a.rule.subtype} in Bangladesh</h1>
                <span class="result-category-pill">${a.rule.type}</span>
              </div>
              <p class="result-summary">${a.improvedIdea}</p>
              <div class="result-facts-row">
                <div><span>Market</span><strong>${a.city.name}</strong></div>
                <div><span>Founder Type</span><strong>${a.founder.label}</strong></div>
                <div><span>Budget Level</span><strong>${a.budget}</strong></div>
                <div><span>Complexity</span><strong>${a.scale}</strong></div>
              </div>
            </div>

            <div class="result-verdict-panel">
              <h3>Quick business reality</h3>
              <p>${a.investor.note}</p>
              <div class="result-mini-stats">
                <div><span>Cost estimate</span><strong>${moneyRange(a.finance.costLow, a.finance.costHigh)}</strong></div>
                <div><span>Daily income</span><strong>${moneyRange(a.finance.dailyLow, a.finance.dailyHigh)}</strong></div>
                <div><span>Monthly range</span><strong>${moneyRange(a.finance.monthlyLow, a.finance.monthlyHigh)}</strong></div>
                <div><span>Launch estimate</span><strong>${a.launch.mvp} MVP</strong></div>
              </div>
            </div>
          </section>

          <section class="result-metrics-grid">
            ${metricCard('Market Fit', a.scores.marketFit, 'Demand and repeat need in real Bangladesh context.')}
            ${metricCard('Bangladesh Fit', a.scores.bdFit, 'How naturally this matches local buying behavior.')}
            ${metricCard('Monetization', a.scores.monetization, 'How easy it is to charge early or often.')}
            ${metricCard('Feasibility', a.scores.feasibility, 'How realistic this is to launch with your context.')}
            ${metricCard('Founder Fit', a.scores.founderFit, 'How well the idea matches your likely founder profile.')}
            ${metricCard('Idea Clarity', a.scores.clarity, 'Sharper ideas are easier to test and market.')}
            ${metricCard('Competition', a.scores.competition, 'Higher means stronger competition around you.')}
            ${metricCard('Trust Barrier', a.scores.trustBarrier, 'Higher means people need more proof before buying.')}
          </section>

          <section class="result-two-col">
            <div class="result-card result-large-card">
              <div class="result-card-head">
                <h3>Why this score</h3>
                <span>Key factors behind the score</span>
              </div>
              <ul class="result-check-list">${a.extras.why.map(x => `<li>${x}</li>`).join('')}</ul>
              <div class="result-inline-note"><strong>Best first niche:</strong> ${a.bestNiche}</div>
            </div>

            <div class="result-card result-large-card">
              <div class="result-card-head">
                <h3>District / university insight</h3>
                <span>${a.uni ? `${a.uni.name} • ${a.uni.tier}` : 'District-based Bangladesh context'}</span>
              </div>
              <div class="result-chip-grid">
                <div><span>Crowd</span><strong>${a.uni ? a.uni.crowd : a.city.demand}</strong></div>
                <div><span>Spending power</span><strong>${a.uni ? a.uni.spend : a.city.spend}</strong></div>
                <div><span>Execution zone</span><strong>${a.context.label}</strong></div>
                <div><span>Ops context</span><strong>${a.city.ops}</strong></div>
              </div>
              <div class="result-inline-note"><strong>Best fit:</strong> ${a.uni ? a.uni.fit : a.city.fit}</div>
              <div class="result-inline-note"><strong>Fastest way to earn:</strong> ${a.earnFast}</div>
              <div class="result-inline-note"><strong>District idea lane:</strong> ${districtIdeas(a.city).join(' • ')}</div>
            </div>
          </section>

          <section class="result-four-col">
            <div class="result-card">
              <div class="result-card-head green"><h3>Strengths</h3></div>
              <ul class="result-dot-list">${a.extras.strengths.map(x => `<li>${x}</li>`).join('') || '<li>Needs more niche clarity to unlock clear strengths.</li>'}</ul>
            </div>
            <div class="result-card">
              <div class="result-card-head amber"><h3>Reality check</h3></div>
              <ul class="result-dot-list">${a.reality.map(x => `<li>${x}</li>`).join('')}</ul>
            </div>
            <div class="result-card">
              <div class="result-card-head orange"><h3>Risk meter</h3></div>
              <span class="warning-severity ${riskColor(a.risk.level)}">${a.risk.level} risk • ${a.risk.value}/100</span>
              <div class="risk-meter"><div class="risk-bar" style="width:${riskWidth}; background:${riskBarColor}"></div></div>
              <p class="section-sub result-small-copy">Risk comes mostly from competition, trust barrier, and execution difficulty.</p>
              ${a.extras.warnings.length ? `<div class="result-warning-stack">${a.extras.warnings.map(w => `<div class="result-warning-item"><span class="warning-severity ${riskColor(w.level)}">${titleCase(w.level)}</span><div class="metric-note">${w.text}</div></div>`).join('')}</div>` : `<div class="result-inline-note">No critical red flags. Still validate manually before scaling.</div>`}
            </div>
            <div class="result-card">
              <div class="result-card-head blue"><h3>First move</h3></div>
              <ul class="result-dot-list">${a.extras.testPlan.slice(0,4).map(x => `<li>${x}</li>`).join('')}</ul>
              <div class="result-inline-note"><strong>Investor verdict:</strong> ${a.investor.verdict}</div>
            </div>
          </section>

          <section class="result-four-col">
            <div class="result-card">
              <div class="result-card-head"><h3>MVP / first build plan</h3></div>
              <ul class="result-dot-list">${a.extras.mvp.map(x => `<li>${x}</li>`).join('')}</ul>
              <div class="result-inline-note"><strong>Full version:</strong> ${a.launch.full}</div>
            </div>
            <div class="result-card">
              <div class="result-card-head"><h3>First 100 users</h3></div>
              <ul class="result-dot-list">${a.extras.firstUsers.map(x => `<li>${x}</li>`).join('')}</ul>
            </div>
            <div class="result-card">
              <div class="result-card-head"><h3>Tech / ops stack</h3></div>
              <ul class="result-dot-list">${a.stack.map(x => `<li>${x}</li>`).join('')}</ul>
              <div class="result-inline-note"><strong>Alternative angles:</strong> ${a.extras.alternatives.join(' • ')}</div>
            </div>
            <div class="result-card">
              <div class="result-card-head"><h3>Compare with saved idea</h3><span>Choose a saved idea</span></div>
              <div class="compare-list">${renderCompareOptions()}</div>
              <div id="compareResult">${renderCompareResult()}</div>
            </div>
          </section>

          <section class="result-bottom-grid">
            <div class="result-card result-chart-card">
              <div class="result-card-head"><h3>Score breakdown chart</h3></div>
              <div class="canvas-wrap"><canvas id="radarChart"></canvas></div>
            </div>
            <div class="result-card result-note-card">
              <div class="result-card-head"><h3>Remember</h3></div>
              <p class="section-sub">This is a validation aid, not a guarantee. Real-world execution, pricing, location, trust, and repeat demand matter most.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  `;
}

function metricCard(label, value, note){
  return `<div class="metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div><div class="metric-note">${note}</div></div>`;
}

function renderCompareOptions(){
  if(!state.history.length) return `<div class="small-muted" style="margin-top:12px;">Save at least one other idea to compare.</div>`;
  return state.history.map(item => `
    <div class="compare-item">
      <div>
        <div style="font-weight:700">${item.idea.length > 48 ? item.idea.slice(0,48)+'…' : item.idea}</div>
        <div class="small-muted">${item.total}/100 • ${item.type}</div>
      </div>
      <button data-compare="${item.id}">Compare</button>
    </div>
  `).join('');
}

function renderCompareResult(){
  if(!state.compareTarget) return `<div class="small-muted" style="margin-top:14px;">No comparison selected yet.</div>`;
  const target = state.history.find(x => x.id === state.compareTarget);
  if(!target || !state.analysis) return '';
  const current = state.analysis.scores.total;
  const winner = current === target.total ? 'Tie' : current > target.total ? 'Current idea leads' : 'Saved idea leads';
  return `
    <div style="margin-top:14px" class="info-card">
      <h3 class="section-title">Comparison verdict</h3>
      <div class="kv">
        <div><span>Current idea</span><strong>${current}/100</strong></div>
        <div><span>Saved idea</span><strong>${target.total}/100</strong></div>
      </div>
      <div class="insight"><strong>${winner}.</strong> Difference: ${Math.abs(current - target.total)} points.</div>
    </div>
  `;
}

function renderChart(analysis){
  const ctx = document.getElementById('radarChart');
  if(!ctx || !window.Chart) return;
  if(window.__radarChart) window.__radarChart.destroy();
  window.__radarChart = new Chart(ctx, {
    type:'radar',
    data:{
      labels:['Market','BD Fit','Money','Feasible','Founder','Clarity','Low Competition','Low Trust Barrier'],
      datasets:[{
        label:'Score profile',
        data:[analysis.scores.marketFit, analysis.scores.bdFit, analysis.scores.monetization, analysis.scores.feasibility, analysis.scores.founderFit, analysis.scores.clarity, 100-analysis.scores.competition, 100-analysis.scores.trustBarrier],
        fill:true,
        backgroundColor:'rgba(45,179,109,.16)',
        borderColor:'#1f8f55',
        pointBackgroundColor:'#1f8f55',
        pointBorderColor:'#fff',
        pointHoverRadius:4
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      scales:{
        r:{
          angleLines:{ color:'rgba(95,120,104,.18)' },
          grid:{ color:'rgba(95,120,104,.18)' },
          pointLabels:{ color:'#284534', font:{ size:12, family:'Inter' } },
          suggestedMin:0,
          suggestedMax:100,
          ticks:{ display:false }
        }
      },
      plugins:{ legend:{ display:false } }
    }
  });
}

function attachEvents(){
  const ideaInput = document.getElementById('ideaInput');
  const count = document.getElementById('charCount');
  if(ideaInput){
    ideaInput.addEventListener('input', () => count.textContent = ideaInput.value.length);
  }
  const analyzeBtn = document.getElementById('analyzeBtn');
  if(analyzeBtn){ analyzeBtn.addEventListener('click', handleAnalyze); }
  const randomBtn = document.getElementById('randomBtn');
  if(randomBtn){ randomBtn.addEventListener('click', () => {
    const pick = PRESET_IDEAS[Math.floor(Math.random() * PRESET_IDEAS.length)];
    ideaInput.value = pick;
    count.textContent = pick.length;
  }); }
  document.querySelectorAll('[data-preset]').forEach(btn => btn.addEventListener('click', () => {
    const value = PRESET_IDEAS[Number(btn.dataset.preset)] || '';
    ideaInput.value = value;
    count.textContent = value.length;
  }));
  document.querySelectorAll('[data-sample]').forEach(btn => btn.addEventListener('click', () => {
    const value = btn.dataset.sample || '';
    ideaInput.value = value;
    count.textContent = value.length;
    ideaInput.focus();
  }));

  const backBtn = document.getElementById('backBtn');
  if(backBtn) backBtn.addEventListener('click', () => { state.screen = 'landing'; render(); });
  const saveBtn = document.getElementById('saveBtn');
  if(saveBtn) saveBtn.addEventListener('click', () => { if(state.analysis){ pushHistory(state.analysis); render(); } });
  const printBtn = document.getElementById('printBtn');
  if(printBtn) printBtn.addEventListener('click', () => window.print());
  document.querySelectorAll('[data-reopen]').forEach(btn => btn.addEventListener('click', () => {
    const item = state.history.find(x => x.id === Number(btn.dataset.reopen));
    if(item){ state.idea = item.idea; state.analysis = buildAnalysis(item.idea); state.screen='dashboard'; render(); }
  }));
  document.querySelectorAll('[data-compare]').forEach(btn => btn.addEventListener('click', () => {
    state.compareTarget = Number(btn.dataset.compare);
    render();
  }));
}

function handleAnalyze(){
  const input = document.getElementById('ideaInput');
  const idea = (input?.value || '').trim();
  if(!idea){ alert('Please type your idea first.'); return; }
  if(idea.length < 10){ alert('Write a little more detail so the analysis can be smarter.'); return; }
  state.idea = idea;
  state.analysis = buildAnalysis(idea);
  state.screen = 'dashboard';
  pushHistory(state.analysis);
  render();
}

document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && e.ctrlKey && state.screen === 'landing') handleAnalyze();
});

render();
