export const locales = ["en", "ru", "uz"] as const;
export type Locale = (typeof locales)[number];

export const pageKeys = [
  "home",
  "hotel",
  "rooms",
  "dining",
  "rooftop",
  "events",
  "gallery",
  "location",
] as const;

export type PageKey = (typeof pageKeys)[number];

export type Stat = { value: string; label: string };
export type Feature = { title: string; text: string };
export type ContentSection = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  href?: PageKey;
  linkLabel?: string;
  reverse?: boolean;
  concept?: boolean;
};

export type PageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  primaryCta: string;
  secondaryCta: string;
  leadTitle: string;
  leadBody: string;
  stats: Stat[];
  sections: ContentSection[];
  featuresTitle: string;
  featuresIntro: string;
  features: Feature[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export type Dictionary = {
  localeName: string;
  switchLanguage: string;
  menu: string;
  close: string;
  explore: string;
  learnMore: string;
  nav: Record<PageKey, string>;
  pages: Record<PageKey, PageCopy>;
  gallery: {
    filters: Record<GalleryCategory, string>;
    openImage: string;
    closeImage: string;
    previousImage: string;
    nextImage: string;
  };
  location: {
    locationTitle: string;
    locationText: string;
    airport: string;
    station: string;
    directions: string;
  };
  footer: {
    statement: string;
    discover: string;
    visit: string;
    location: string;
    rights: string;
  };
};

export type GalleryCategory =
  | "all"
  | "exterior"
  | "rooms"
  | "interiors"
  | "dining"
  | "rooftop"
  | "views";

export type GalleryImage = {
  src: string;
  category: Exclude<GalleryCategory, "all">;
  alt: Record<Locale, string>;
  concept?: boolean;
};

const commonHero = "/images/exterior/hero.jpg";

const en: Dictionary = {
  localeName: "English",
  switchLanguage: "Change language",
  menu: "Menu",
  close: "Close",
  explore: "Explore",
  learnMore: "Discover more",
  nav: {
    home: "Home",
    hotel: "The Hotel",
    rooms: "Rooms",
    dining: "Dining",
    rooftop: "Rooftop",
    events: "Events",
    gallery: "Gallery",
    location: "Location",
  },
  pages: {
    home: {
      metaTitle: "Mecca Boutique Hotel & Restaurant | Tashkent",
      metaDescription:
        "A boutique halal hospitality experience opposite the Islamic Civilization Centre in Tashkent.",
      eyebrow: "Boutique halal hospitality · Tashkent",
      title: "A quieter way to experience Tashkent",
      intro:
        "Thirty thoughtfully designed rooms, distinctive dining and a rooftop overlooking one of the city’s defining cultural landmarks.",
      heroImage: commonHero,
      heroAlt: "Illuminated facade of Mecca Boutique Hotel at dusk",
      primaryCta: "Explore the hotel",
      secondaryCta: "View rooms",
      leadTitle: "A stay shaped by place, purpose and genuine care",
      leadBody:
        "Mecca Boutique Hotel & Restaurant brings contemporary comfort together with Uzbek character and considered Islamic hospitality. Set directly opposite the Islamic Civilization Centre, it offers an intimate base for cultural, leisure and business journeys in Tashkent.",
      stats: [
        { value: "30", label: "Rooms inspired by 30 Juz" },
        { value: "3", label: "Distinctive dining venues" },
        { value: "100%", label: "Halal-certified hospitality" },
        { value: "500", label: "Guests for private events" },
      ],
      sections: [
        {
          eyebrow: "Rest with meaning",
          title: "Thirty rooms, one considered experience",
          body:
            "Each approximately 18 m² room is arranged around calm, comfort and purpose, with a queen bed, qibla marker, prayer mat and views towards the Islamic Civilization Centre or the inner garden.",
          image: "/images/rooms/room-bed.jpg",
          alt: "Warm guest room with queen bed and arched window",
          href: "rooms",
          linkLabel: "Explore rooms",
        },
        {
          eyebrow: "Two culinary stories",
          title: "Indonesian warmth meets Italian craft",
          body:
            "From the generous Indonesian Restaurant on the ground floor to the refined Italian Restaurant above, every dining experience follows the hotel’s fully halal standard.",
          image: "/images/dining/italian-1.jpg",
          alt: "Spacious restaurant interior with Uzbek decorative details",
          href: "dining",
          linkLabel: "Discover dining",
          reverse: true,
        },
        {
          eyebrow: "Above the city",
          title: "Golden-hour moments on the rooftop",
          body:
            "A 600.7 m² rooftop cafe and bar frames views of the Islamic Civilization Centre and Tashkent skyline—a relaxed setting for coffee, light meals and intimate celebrations.",
          image: "/images/concept/rooftop-sunset.png",
          alt: "Concept visualization of the rooftop cafe at sunset",
          href: "rooftop",
          linkLabel: "See the rooftop",
          concept: true,
        },
      ],
      featuresTitle: "Hospitality, considered from arrival to rest",
      featuresIntro:
        "Warm public spaces and attentive service support a seamless stay throughout the day.",
      features: [
        { title: "24-hour concierge", text: "Support for arrivals, local guidance and guest needs." },
        { title: "Prayer room", text: "A dedicated, peaceful space within the hotel." },
        { title: "Reading lounge", text: "A calm corner for reflection, conversation and pause." },
        { title: "Multilingual welcome", text: "Front-desk assistance across key international languages." },
      ],
      ctaEyebrow: "Your Tashkent stay",
      ctaTitle: "Begin your journey at Mecca",
      ctaText:
        "Discover a boutique stay where culture, comfort and thoughtful halal hospitality come together.",
      ctaButton: "Explore rooms",
    },
    hotel: {
      metaTitle: "The Hotel | Mecca Boutique Hotel",
      metaDescription:
        "Discover the story, architecture and hospitality philosophy of Mecca Boutique Hotel in Tashkent.",
      eyebrow: "The story of Mecca",
      title: "A stay shaped by meaning",
      intro:
        "Contemporary Uzbek character, spiritual harmony and personal service come together in an intimate boutique setting.",
      heroImage: "/images/exterior/facade-wide.jpg",
      heroAlt: "Full illuminated facade of Mecca Boutique Hotel",
      primaryCta: "Explore rooms",
      secondaryCta: "View gallery",
      leadTitle: "Modern hospitality with a distinctive sense of place",
      leadBody:
        "Mecca is conceived for guests who value culture, calm and purposeful detail. Its modern Islamic architecture interprets Uzbek forms through contemporary proportions, natural tones and crafted decorative elements.",
      stats: [
        { value: "3,000 m²", label: "Site area" },
        { value: "3,038.7 m²", label: "Total built-up area" },
        { value: "3", label: "Floors plus rooftop" },
        { value: "30", label: "Boutique guest rooms" },
      ],
      sections: [
        {
          eyebrow: "Thirty Juz, thirty rooms",
          title: "A concept rooted in peace and completeness",
          body:
            "The hotel’s 30 rooms draw inspiration from the 30 Juz of the Qur’an. The idea is expressed through an atmosphere of balance, peace and spiritual harmony rather than literal decoration.",
          image: "/images/rooms/room-detail.jpg",
          alt: "Guest room details in warm wood and neutral tones",
        },
        {
          eyebrow: "Contemporary Uzbek character",
          title: "Heritage interpreted for today",
          body:
            "Arched openings, patterned screens, brick, timber and textile details create a visual connection to Tashkent while maintaining a calm, modern hospitality experience.",
          image: "/images/concept/terrace.png",
          alt: "Concept visualization with Uzbek textiles and arched brickwork",
          reverse: true,
          concept: true,
        },
      ],
      featuresTitle: "Public spaces with purpose",
      featuresIntro:
        "From arrival to quiet reflection, every shared space has a clear role in the guest experience.",
      features: [
        { title: "Double-height lobby", text: "A generous arrival that establishes the hotel’s architectural identity." },
        { title: "Reading lounge", text: "A comfortable setting for a quiet pause or informal conversation." },
        { title: "Prayer room", text: "A dedicated space supporting the hotel’s halal hospitality promise." },
        { title: "Personal service", text: "A boutique scale that enables attentive and welcoming guest care." },
      ],
      ctaEyebrow: "Stay with us",
      ctaTitle: "Experience Mecca for yourself",
      ctaText: "Explore the rooms and begin planning your time in Tashkent.",
      ctaButton: "View rooms",
    },
    rooms: {
      metaTitle: "Rooms & Accommodation | Mecca Boutique Hotel",
      metaDescription:
        "Explore 30 thoughtfully designed rooms with queen beds, qibla markers and views in Tashkent.",
      eyebrow: "Rooms & accommodation",
      title: "Thirty rooms. One considered experience.",
      intro:
        "Quiet, warm and purposeful spaces designed to support restorative stays in the heart of cultural Tashkent.",
      heroImage: "/images/rooms/room-bed.jpg",
      heroAlt: "Guest room at Mecca Boutique Hotel",
      primaryCta: "View gallery",
      secondaryCta: "Explore the hotel",
      leadTitle: "Everything essential, thoughtfully arranged",
      leadBody:
        "Each of the hotel’s 30 rooms is approximately 18 m² and follows one considered accommodation standard. Warm timber, soft lighting and practical details create a composed environment for leisure, pilgrimage, culture or business travel.",
      stats: [
        { value: "30", label: "Guest rooms" },
        { value: "18 m²", label: "Average room size" },
        { value: "Queen", label: "Bed configuration" },
        { value: "2", label: "View orientations" },
      ],
      sections: [
        {
          eyebrow: "Restful by design",
          title: "Warm materials, calm light and a sense of place",
          body:
            "A restrained palette and Uzbek-inspired details give each room character without compromising rest. Rooms look towards the Islamic Civilization Centre or the hotel’s inner garden.",
          image: "/images/rooms/room-detail.jpg",
          alt: "Desk, refreshments and timber details inside a guest room",
        },
        {
          eyebrow: "Thoughtful essentials",
          title: "Comfort that respects the rhythm of your stay",
          body:
            "Every room includes a qibla marker and prayer mat alongside the practical essentials expected of a contemporary boutique hotel.",
          image: "/images/rooms/room-bath.jpg",
          alt: "Modern guest bathroom with timber finishes",
          reverse: true,
        },
      ],
      featuresTitle: "Room essentials",
      featuresIntro: "A focused collection of details supporting comfort, privacy and spiritual ease.",
      features: [
        { title: "Queen bed", text: "A consistent sleeping arrangement across all 30 rooms." },
        { title: "Qibla marker", text: "Clearly positioned within every guest room." },
        { title: "Prayer mat", text: "Provided as part of the in-room experience." },
        { title: "Two view options", text: "Towards the cultural centre or the inner garden." },
      ],
      ctaEyebrow: "A peaceful base in Tashkent",
      ctaTitle: "Make Mecca part of your journey",
      ctaText: "See where Mecca sits within Tashkent’s cultural district.",
      ctaButton: "View location",
    },
    dining: {
      metaTitle: "Dining | Mecca Boutique Hotel",
      metaDescription:
        "Discover fully halal Indonesian and Italian dining experiences at Mecca Boutique Hotel.",
      eyebrow: "Dining at Mecca",
      title: "Two cuisines, one standard of care",
      intro:
        "Generous spaces, warm service and fully halal culinary experiences bring Indonesian and Italian traditions together under one roof.",
      heroImage: "/images/dining/italian-1.jpg",
      heroAlt: "Dining room at Mecca Boutique Hotel",
      primaryCta: "Explore the venues",
      secondaryCta: "Plan a visit",
      leadTitle: "A culinary destination within the hotel",
      leadBody:
        "Dining at Mecca is designed for hotel guests, local visitors and private groups alike. Each restaurant has its own culinary identity while sharing the same commitment to halal-certified hospitality.",
      stats: [
        { value: "497 m²", label: "Indonesian Restaurant" },
        { value: "452 m²", label: "Italian Restaurant" },
        { value: "2", label: "Restaurant concepts" },
        { value: "100%", label: "Halal-certified experience" },
      ],
      sections: [
        {
          eyebrow: "Ground floor · 497 m²",
          title: "Indonesian Restaurant",
          body:
            "A welcoming restaurant celebrating the depth, warmth and generosity of Indonesian cuisine in a spacious setting shaped by Uzbek decorative character.",
          image: "/images/dining/indonesian-1.jpg",
          alt: "Indonesian Restaurant dining area",
        },
        {
          eyebrow: "Second floor · 452 m²",
          title: "Italian Restaurant",
          body:
            "A refined but relaxed setting for familiar Italian flavours, gatherings and long conversations, delivered within the hotel’s fully halal standard.",
          image: "/images/dining/italian-2.jpg",
          alt: "Italian Restaurant interior and lounge seating",
          reverse: true,
        },
      ],
      featuresTitle: "Made for more than one occasion",
      featuresIntro: "From a quiet meal to a generous gathering, the venues adapt to different rhythms of the day.",
      features: [
        { title: "Hotel breakfast", text: "A comfortable start for resident guests." },
        { title: "Casual dining", text: "Inviting spaces for lunch, dinner and conversation." },
        { title: "Group occasions", text: "Generous floor areas suited to social gatherings." },
        { title: "Halal assurance", text: "One consistent hospitality standard across the experience." },
      ],
      ctaEyebrow: "At the table",
      ctaTitle: "Discover dining with a sense of place",
      ctaText: "Find the hotel opposite the Islamic Civilization Centre.",
      ctaButton: "View location",
    },
    rooftop: {
      metaTitle: "Rooftop & Experiences | Mecca Boutique Hotel",
      metaDescription:
        "Discover a 600.7 m² rooftop cafe with views of the Islamic Civilization Centre and Tashkent skyline.",
      eyebrow: "Rooftop & experiences",
      title: "Tashkent from a different perspective",
      intro:
        "An elevated cafe, terrace and gathering place framed by sunset views and the city’s cultural skyline.",
      heroImage: "/images/concept/rooftop-sunset.png",
      heroAlt: "Concept visualization of Mecca rooftop cafe at sunset",
      primaryCta: "Discover the rooftop",
      secondaryCta: "View gallery",
      leadTitle: "A 600.7 m² destination above the city",
      leadBody:
        "The Rooftop Cafe & Bar is conceived as a relaxed destination for coffee, light meals, shisha and intimate occasions, with direct visual connections to the Islamic Civilization Centre and the wider Tashkent skyline.",
      stats: [
        { value: "600.7 m²", label: "Rooftop area" },
        { value: "360°", label: "Elevated city atmosphere" },
        { value: "Sunset", label: "Signature time of day" },
        { value: "1", label: "Exclusive event setting" },
      ],
      sections: [
        {
          eyebrow: "The setting today",
          title: "An open terrace with a remarkable neighbour",
          body:
            "The rooftop’s position creates uninterrupted moments with the dome and architecture of the Islamic Civilization Centre, especially as the evening light changes across the city.",
          image: "/images/rooftop/view-actual.jpg",
          alt: "Actual rooftop terrace view towards the Islamic Civilization Centre",
        },
        {
          eyebrow: "The envisioned experience",
          title: "Warm light, considered seating and an open skyline",
          body:
            "The design vision brings together comfortable lounge seating, a service counter and atmospheric lighting for unhurried evenings above Tashkent.",
          image: "/images/concept/rooftop-bar.png",
          alt: "Concept visualization of the future rooftop bar",
          reverse: true,
          concept: true,
        },
      ],
      featuresTitle: "One rooftop, many moments",
      featuresIntro: "A flexible experience that moves naturally from daytime pause to evening occasion.",
      features: [
        { title: "Coffee & light meals", text: "A relaxed menu concept for time above the city." },
        { title: "Shisha", text: "Planned as part of the rooftop experience." },
        { title: "Sunset views", text: "A direct perspective over the cultural centre and skyline." },
        { title: "Private occasions", text: "An exclusive atmosphere for selected gatherings." },
      ],
      ctaEyebrow: "Above Tashkent",
      ctaTitle: "Create an evening to remember",
      ctaText: "See the hotel’s setting opposite the Islamic Civilization Centre.",
      ctaButton: "View location",
    },
    events: {
      metaTitle: "Events & Private Functions | Mecca Boutique Hotel",
      metaDescription:
        "Plan weddings, corporate functions and private gatherings for up to 500 guests at Mecca Boutique Hotel.",
      eyebrow: "Events & private functions",
      title: "A setting for meaningful occasions",
      intro:
        "From weddings and religious gatherings to corporate functions and private celebrations, Mecca offers scale with a sense of intimacy.",
      heroImage: "/images/dining/italian-2.jpg",
      heroAlt: "Large flexible hospitality space at Mecca Boutique Hotel",
      primaryCta: "View location",
      secondaryCta: "View spaces",
      leadTitle: "Gatherings shaped around your occasion",
      leadBody:
        "Flexible hospitality areas across the hotel can support occasions for up to 500 guests. The setting combines generous space, distinctive character and a fully halal hospitality environment.",
      stats: [
        { value: "500", label: "Maximum venue capacity" },
        { value: "5", label: "Key occasion types" },
        { value: "3", label: "Dining and rooftop settings" },
        { value: "100%", label: "Halal hospitality" },
      ],
      sections: [
        {
          eyebrow: "Celebrations",
          title: "Weddings, family occasions and religious gatherings",
          body:
            "Warm interiors and generous shared spaces provide a meaningful setting for milestone moments, celebrations and gatherings rooted in community.",
          image: "/images/dining/indonesian-2.jpg",
          alt: "Large restaurant space suitable for gatherings",
        },
        {
          eyebrow: "Business & private use",
          title: "Corporate functions and tailored private events",
          body:
            "The hotel can host professional and private occasions in a hospitality-led environment, with final layouts and service arrangements confirmed directly with the hotel.",
          image: "/images/dining/lounge.jpg",
          alt: "Flexible lounge and gathering area",
          reverse: true,
        },
      ],
      featuresTitle: "Occasions we welcome",
      featuresIntro: "Each space supports a different purpose, scale and atmosphere.",
      features: [
        { title: "Weddings", text: "A culturally resonant setting for a milestone celebration." },
        { title: "Corporate functions", text: "Professional gatherings supported by hotel hospitality." },
        { title: "Religious gatherings", text: "A respectful environment aligned with halal values." },
        { title: "Private celebrations", text: "Flexible spaces for family and social occasions." },
      ],
      ctaEyebrow: "Your occasion",
      ctaTitle: "Let’s shape a meaningful gathering",
      ctaText: "Explore the hotel’s position in the cultural heart of Tashkent.",
      ctaButton: "View location",
    },
    gallery: {
      metaTitle: "Gallery | Mecca Boutique Hotel",
      metaDescription: "Explore a curated visual journey through Mecca Boutique Hotel in Tashkent.",
      eyebrow: "The Mecca gallery",
      title: "A closer look at the experience",
      intro: "Explore the architecture, rooms, dining spaces, rooftop and views that shape a stay at Mecca.",
      heroImage: "/images/exterior/facade-evening.jpg",
      heroAlt: "Evening facade of Mecca Boutique Hotel",
      primaryCta: "Browse the gallery",
      secondaryCta: "Explore the hotel",
      leadTitle: "Curated moments from across the hotel",
      leadBody: "A focused selection of hotel photography and selected concept visualizations.",
      stats: [], sections: [], featuresTitle: "", featuresIntro: "", features: [],
      ctaEyebrow: "See it in person", ctaTitle: "Make Mecca part of your Tashkent story",
      ctaText: "Explore the rooms or find the hotel opposite the Islamic Civilization Centre.", ctaButton: "Explore rooms",
    },
    location: {
      metaTitle: "Location | Mecca Boutique Hotel",
      metaDescription: "Find Mecca Boutique Hotel opposite the Islamic Civilization Centre in Tashkent.",
      eyebrow: "Location",
      title: "At the heart of cultural Tashkent",
      intro: "Directly opposite the Islamic Civilization Centre, with convenient connections to the airport and railway station.",
      heroImage: "/images/exterior/facade-side.jpg",
      heroAlt: "Side facade and entrance of Mecca Boutique Hotel",
      primaryCta: "Find the hotel", secondaryCta: "Explore rooms",
      leadTitle: "A distinctive address for exploring the city",
      leadBody: "The hotel’s location places guests beside a defining cultural destination and within practical reach of Tashkent’s main arrival points.",
      stats: [
        { value: "Opposite", label: "Islamic Civilization Centre" },
        { value: "≈ 30 min", label: "From Tashkent International Airport" },
        { value: "≈ 20 min", label: "From Tashkent Railway Station" },
      ], sections: [], featuresTitle: "", featuresIntro: "", features: [],
      ctaEyebrow: "Discover Mecca", ctaTitle: "Continue exploring the hotel",
      ctaText: "Discover Mecca’s rooms, dining venues and distinctive spaces.", ctaButton: "Explore the hotel",
    },
  },
  gallery: {
    filters: { all: "All", exterior: "Exterior", rooms: "Rooms", interiors: "Interiors", dining: "Dining", rooftop: "Rooftop", views: "Views" },
    openImage: "Open image", closeImage: "Close image", previousImage: "Previous image", nextImage: "Next image",
  },
  location: {
    locationTitle: "Opposite the Islamic Civilization Centre",
    locationText: "Tashkent, Uzbekistan. The full official street address will be added once confirmed by the hotel.",
    airport: "Approximately 30 minutes from Tashkent International Airport",
    station: "Approximately 20 minutes from Tashkent Railway Station",
    directions: "Open map",
  },
  footer: {
    statement: "Contemporary boutique hospitality shaped by Uzbek character, thoughtful comfort and fully halal service.",
    discover: "Discover", visit: "Visit", location: "Opposite the Islamic Civilization Centre, Tashkent", rights: "All rights reserved.",
  },
};

const ru: Dictionary = {
  ...en,
  localeName: "Русский",
  switchLanguage: "Сменить язык",
  menu: "Меню",
  close: "Закрыть",
  explore: "Подробнее",
  learnMore: "Узнать больше",
  nav: { home: "Главная", hotel: "Об отеле", rooms: "Номера", dining: "Рестораны", rooftop: "Терраса", events: "События", gallery: "Галерея", location: "Расположение" },
  pages: {
    home: {
      ...en.pages.home,
      metaTitle: "Mecca Boutique Hotel & Restaurant | Ташкент",
      metaDescription: "Бутик-отель с халяльным гостеприимством напротив Центра исламской цивилизации в Ташкенте.",
      eyebrow: "Бутик-отель · халяльное гостеприимство · Ташкент",
      title: "Тихий и утончённый способ открыть Ташкент",
      intro: "Тридцать продуманных номеров, самобытная кухня и терраса с видом на одну из главных культурных достопримечательностей города.",
      heroAlt: "Подсвеченный фасад Mecca Boutique Hotel в сумерках",
      primaryCta: "Открыть отель", secondaryCta: "Посмотреть номера",
      leadTitle: "Отдых, наполненный местным характером, смыслом и искренней заботой",
      leadBody: "Mecca Boutique Hotel & Restaurant объединяет современный комфорт, узбекский характер и продуманное исламское гостеприимство. Отель расположен прямо напротив Центра исламской цивилизации и станет камерной отправной точкой для культурных, деловых и туристических поездок по Ташкенту.",
      stats: [{ value: "30", label: "Номеров, вдохновлённых 30 джузами" }, { value: "3", label: "Гастрономические площадки" }, { value: "100%", label: "Халяльное гостеприимство" }, { value: "500", label: "Гостей на частных событиях" }],
      sections: [
        { ...en.pages.home.sections[0], eyebrow: "Отдых со смыслом", title: "Тридцать номеров — единый продуманный опыт", body: "Каждый номер площадью около 18 м² создан для спокойствия и комфорта: кровать queen-size, указатель киблы, молитвенный коврик и вид на Центр исламской цивилизации или внутренний сад.", alt: "Тёплый интерьер номера с кроватью и арочным окном", linkLabel: "Посмотреть номера" },
        { ...en.pages.home.sections[1], eyebrow: "Две кулинарные истории", title: "Тепло Индонезии и мастерство Италии", body: "От просторного индонезийского ресторана на первом этаже до изысканного итальянского ресторана выше — всё соответствует полностью халяльному стандарту отеля.", alt: "Просторный ресторан с узбекскими декоративными деталями", linkLabel: "Открыть рестораны" },
        { ...en.pages.home.sections[2], eyebrow: "Над городом", title: "Золотой час на террасе", body: "Кафе-бар на крыше площадью 600,7 м² открывает вид на Центр исламской цивилизации и панораму Ташкента — для кофе, лёгких блюд и камерных торжеств.", alt: "Концептуальная визуализация кафе на крыше на закате", linkLabel: "Посмотреть террасу" },
      ],
      featuresTitle: "Гостеприимство, продуманное от встречи до отдыха",
      featuresIntro: "Тёплые общественные пространства и внимательный сервис делают пребывание цельным и спокойным.",
      features: [{ title: "Консьерж 24/7", text: "Помощь при заезде, рекомендации по городу и забота о гостях." }, { title: "Молитвенная комната", text: "Отдельное тихое пространство внутри отеля." }, { title: "Читальный салон", text: "Спокойное место для чтения, беседы и паузы." }, { title: "Многоязычный приём", text: "Помощь на ключевых международных языках." }],
      ctaEyebrow: "Ваш Ташкент", ctaTitle: "Начните путешествие в Mecca", ctaText: "Бутик-отель, где встречаются культура, комфорт и продуманное халяльное гостеприимство.", ctaButton: "Посмотреть номера",
    },
    hotel: {
      ...en.pages.hotel,
      metaTitle: "Об отеле | Mecca Boutique Hotel", metaDescription: "История, архитектура и философия гостеприимства Mecca Boutique Hotel в Ташкенте.",
      eyebrow: "История Mecca", title: "Отдых, наполненный смыслом", intro: "Современный узбекский характер, духовная гармония и персональный сервис в камерной атмосфере бутик-отеля.", heroAlt: "Полный подсвеченный фасад Mecca Boutique Hotel", primaryCta: "Посмотреть номера", secondaryCta: "Открыть галерею",
      leadTitle: "Современное гостеприимство с ярким чувством места", leadBody: "Mecca создан для гостей, ценящих культуру, спокойствие и продуманные детали. Современная исламская архитектура переосмысливает узбекские формы через актуальные пропорции, природные оттенки и ремесленный декор.",
      stats: [{ value: "3 000 м²", label: "Площадь участка" }, { value: "3 038,7 м²", label: "Общая площадь" }, { value: "3", label: "Этажа и крыша" }, { value: "30", label: "Бутик-номеров" }],
      sections: [
        { ...en.pages.hotel.sections[0], eyebrow: "Тридцать джузов, тридцать номеров", title: "Концепция мира и целостности", body: "Тридцать номеров вдохновлены 30 джузами Корана. Идея выражена в атмосфере равновесия, мира и духовной гармонии, а не в буквальном декоре.", alt: "Детали номера в тёплом дереве и нейтральных оттенках" },
        { ...en.pages.hotel.sections[1], eyebrow: "Современный узбекский характер", title: "Наследие, переосмысленное сегодня", body: "Арочные проёмы, узорные экраны, кирпич, дерево и текстиль создают связь с Ташкентом, сохраняя спокойную современную атмосферу.", alt: "Концептуальная визуализация с узбекским текстилем и арочной кладкой" },
      ],
      featuresTitle: "Общественные пространства со смыслом", featuresIntro: "От прибытия до тихой паузы каждое пространство играет свою роль.",
      features: [{ title: "Двухсветное лобби", text: "Выразительное пространство встречи гостей." }, { title: "Читальный салон", text: "Комфортное место для чтения или беседы." }, { title: "Молитвенная комната", text: "Пространство, поддерживающее халяльную концепцию отеля." }, { title: "Персональный сервис", text: "Камерный формат для внимательной заботы о гостях." }],
      ctaEyebrow: "Остановитесь у нас", ctaTitle: "Познакомьтесь с Mecca лично", ctaText: "Откройте номера и начните планировать пребывание в Ташкенте.", ctaButton: "Посмотреть номера",
    },
    rooms: {
      ...en.pages.rooms,
      metaTitle: "Номера | Mecca Boutique Hotel", metaDescription: "30 продуманных номеров с кроватями queen-size, указателями киблы и видами в Ташкенте.",
      eyebrow: "Номера и размещение", title: "Тридцать номеров. Единый продуманный опыт.", intro: "Тихие, тёплые и функциональные пространства для полноценного отдыха в культурном сердце Ташкента.", heroAlt: "Гостевой номер в Mecca Boutique Hotel", primaryCta: "Открыть галерею", secondaryCta: "Узнать об отеле",
      leadTitle: "Всё необходимое расположено с заботой", leadBody: "Каждый из 30 номеров площадью около 18 м² следует единому стандарту. Тёплое дерево, мягкий свет и практичные детали создают спокойную среду для отдыха, паломничества, культуры или деловой поездки.",
      stats: [{ value: "30", label: "Гостевых номеров" }, { value: "18 м²", label: "Средняя площадь" }, { value: "Queen", label: "Конфигурация кровати" }, { value: "2", label: "Направления вида" }],
      sections: [
        { ...en.pages.rooms.sections[0], eyebrow: "Спокойствие в каждой детали", title: "Тёплые материалы, мягкий свет и чувство места", body: "Сдержанная палитра и узбекские акценты придают характер, не нарушая покоя. Вид открывается на Центр исламской цивилизации или внутренний сад.", alt: "Рабочая зона и деревянные детали номера" },
        { ...en.pages.rooms.sections[1], eyebrow: "Продуманные удобства", title: "Комфорт, уважающий ритм вашего пребывания", body: "В каждом номере есть указатель киблы и молитвенный коврик наряду со всем необходимым для современного бутик-отеля.", alt: "Современная ванная комната с деревянной отделкой" },
      ],
      featuresTitle: "Оснащение номера", featuresIntro: "Продуманные детали для комфорта, приватности и духовного спокойствия.",
      features: [{ title: "Кровать queen-size", text: "Единая конфигурация во всех 30 номерах." }, { title: "Указатель киблы", text: "Понятно расположен в каждом номере." }, { title: "Молитвенный коврик", text: "Предоставляется в каждом номере." }, { title: "Два варианта вида", text: "На культурный центр или внутренний сад." }],
      ctaEyebrow: "Спокойная база в Ташкенте", ctaTitle: "Сделайте Mecca частью путешествия", ctaText: "Посмотрите, где Mecca расположен в культурном районе Ташкента.", ctaButton: "Посмотреть расположение",
    },
    dining: {
      ...en.pages.dining,
      metaTitle: "Рестораны | Mecca Boutique Hotel", metaDescription: "Полностью халяльные индонезийская и итальянская кухни в Mecca Boutique Hotel.",
      eyebrow: "Рестораны Mecca", title: "Две кухни — единый стандарт заботы", intro: "Просторные залы, тёплый сервис и полностью халяльная кухня объединяют традиции Индонезии и Италии.", heroAlt: "Ресторан в Mecca Boutique Hotel", primaryCta: "Открыть рестораны", secondaryCta: "Спланировать визит",
      leadTitle: "Гастрономическое направление внутри отеля", leadBody: "Рестораны Mecca созданы для гостей отеля, жителей города и частных групп. У каждого своя кулинарная история и единая приверженность халяльному гостеприимству.",
      stats: [{ value: "497 м²", label: "Индонезийский ресторан" }, { value: "452 м²", label: "Итальянский ресторан" }, { value: "2", label: "Ресторанные концепции" }, { value: "100%", label: "Халяльный опыт" }],
      sections: [
        { ...en.pages.dining.sections[0], eyebrow: "Первый этаж · 497 м²", title: "Индонезийский ресторан", body: "Гостеприимный ресторан, раскрывающий глубину и щедрость индонезийской кухни в просторном интерьере с узбекским характером.", alt: "Зал индонезийского ресторана" },
        { ...en.pages.dining.sections[1], eyebrow: "Второй этаж · 452 м²", title: "Итальянский ресторан", body: "Изысканное и непринуждённое место для знакомых итальянских вкусов, встреч и долгих разговоров в полностью халяльном формате.", alt: "Интерьер итальянского ресторана и лаунж-зона" },
      ],
      featuresTitle: "Для разных поводов", featuresIntro: "От спокойной трапезы до большой встречи — пространства меняются вместе с ритмом дня.",
      features: [{ title: "Завтрак в отеле", text: "Комфортное начало дня для проживающих гостей." }, { title: "Повседневная кухня", text: "Приветливые залы для обеда, ужина и беседы." }, { title: "Групповые события", text: "Просторные площадки для встреч." }, { title: "Халяльная гарантия", text: "Единый стандарт во всём гастрономическом опыте." }],
      ctaEyebrow: "За столом", ctaTitle: "Откройте кухню с чувством места", ctaText: "Найдите отель напротив Центра исламской цивилизации.", ctaButton: "Посмотреть расположение",
    },
    rooftop: {
      ...en.pages.rooftop,
      metaTitle: "Терраса | Mecca Boutique Hotel", metaDescription: "Кафе на крыше площадью 600,7 м² с видом на Центр исламской цивилизации и Ташкент.",
      eyebrow: "Терраса и впечатления", title: "Ташкент с новой перспективы", intro: "Кафе, терраса и место встреч над городом, обрамлённое закатами и культурным силуэтом Ташкента.", heroAlt: "Концептуальная визуализация кафе на крыше на закате", primaryCta: "Открыть террасу", secondaryCta: "Посмотреть галерею",
      leadTitle: "Площадка 600,7 м² над городом", leadBody: "Rooftop Cafe & Bar задуман для кофе, лёгких блюд, кальяна и камерных событий с прямым видом на Центр исламской цивилизации и панораму Ташкента.",
      stats: [{ value: "600,7 м²", label: "Площадь террасы" }, { value: "360°", label: "Атмосфера над городом" }, { value: "Закат", label: "Главное время дня" }, { value: "1", label: "Эксклюзивная event-площадка" }],
      sections: [
        { ...en.pages.rooftop.sections[0], eyebrow: "Терраса сегодня", title: "Открытое пространство с выдающимся соседом", body: "Положение террасы создаёт прямой вид на купол и архитектуру Центра исламской цивилизации, особенно выразительный в вечернем свете.", alt: "Фактический вид с крыши на Центр исламской цивилизации" },
        { ...en.pages.rooftop.sections[1], eyebrow: "Будущий опыт", title: "Тёплый свет, удобные места и открытый горизонт", body: "Дизайн-концепция объединяет лаунж-зоны, барную стойку и атмосферное освещение для неспешных вечеров над Ташкентом.", alt: "Концептуальная визуализация будущего бара на крыше" },
      ],
      featuresTitle: "Одна крыша — много моментов", featuresIntro: "Гибкое пространство, естественно переходящее от дневной паузы к вечернему событию.",
      features: [{ title: "Кофе и лёгкие блюда", text: "Непринуждённая концепция меню над городом." }, { title: "Кальян", text: "Запланирован как часть rooftop-опыта." }, { title: "Виды на закат", text: "Прямая перспектива на культурный центр и город." }, { title: "Частные события", text: "Эксклюзивная атмосфера для избранных встреч." }],
      ctaEyebrow: "Над Ташкентом", ctaTitle: "Создайте вечер, который запомнится", ctaText: "Посмотрите расположение отеля напротив Центра исламской цивилизации.", ctaButton: "Посмотреть расположение",
    },
    events: {
      ...en.pages.events,
      metaTitle: "События | Mecca Boutique Hotel", metaDescription: "Свадьбы, корпоративные и частные события до 500 гостей в Mecca Boutique Hotel.",
      eyebrow: "События и частные функции", title: "Пространство для значимых событий", intro: "Свадьбы, религиозные встречи, корпоративные функции и семейные торжества — масштаб с камерным ощущением.", heroAlt: "Большое гибкое пространство Mecca Boutique Hotel", primaryCta: "Посмотреть расположение", secondaryCta: "Посмотреть пространства",
      leadTitle: "Встречи, построенные вокруг вашего повода", leadBody: "Гибкие зоны отеля могут принимать до 500 гостей, сочетая простор, характер и полностью халяльную среду гостеприимства.",
      stats: [{ value: "500", label: "Максимальная вместимость" }, { value: "5", label: "Основных типов событий" }, { value: "3", label: "Ресторанные и rooftop-зоны" }, { value: "100%", label: "Халяльное гостеприимство" }],
      sections: [
        { ...en.pages.events.sections[0], eyebrow: "Торжества", title: "Свадьбы, семейные и религиозные встречи", body: "Тёплые интерьеры и просторные общие зоны создают значимую среду для важных моментов, праздников и встреч сообщества.", alt: "Большой ресторанный зал для встреч" },
        { ...en.pages.events.sections[1], eyebrow: "Деловые и частные события", title: "Корпоративные функции и индивидуальные форматы", body: "Отель принимает деловые и частные события; планировка и сервис согласуются напрямую с командой отеля.", alt: "Гибкая лаунж-зона для встреч" },
      ],
      featuresTitle: "События, которым мы рады", featuresIntro: "Каждое пространство поддерживает разный формат, масштаб и атмосферу.",
      features: [{ title: "Свадьбы", text: "Культурно выразительное место для важного торжества." }, { title: "Корпоративные функции", text: "Профессиональные встречи с отельным сервисом." }, { title: "Религиозные встречи", text: "Уважительная среда в соответствии с халяльными ценностями." }, { title: "Частные праздники", text: "Гибкие пространства для семейных и социальных событий." }],
      ctaEyebrow: "Ваше событие", ctaTitle: "Пространство для значимых встреч", ctaText: "Посмотрите расположение отеля в культурном сердце Ташкента.", ctaButton: "Посмотреть расположение",
    },
    gallery: { ...en.pages.gallery, metaTitle: "Галерея | Mecca Boutique Hotel", metaDescription: "Визуальное путешествие по Mecca Boutique Hotel в Ташкенте.", eyebrow: "Галерея Mecca", title: "Взгляд на отель в деталях", intro: "Архитектура, номера, рестораны, терраса и виды, формирующие опыт Mecca.", heroAlt: "Вечерний фасад Mecca Boutique Hotel", primaryCta: "Открыть галерею", secondaryCta: "Узнать об отеле", leadTitle: "Отобранные моменты со всего отеля", leadBody: "Фокусная подборка реальных фотографий и чётко отмеченных концептуальных визуализаций.", ctaEyebrow: "Увидеть лично", ctaTitle: "Сделайте Mecca частью истории о Ташкенте", ctaText: "Откройте номера или найдите отель напротив Центра исламской цивилизации.", ctaButton: "Посмотреть номера" },
    location: { ...en.pages.location, metaTitle: "Расположение | Mecca Boutique Hotel", metaDescription: "Mecca Boutique Hotel напротив Центра исламской цивилизации в Ташкенте.", eyebrow: "Расположение", title: "В культурном сердце Ташкента", intro: "Прямо напротив Центра исламской цивилизации, с удобным доступом к аэропорту и вокзалу.", heroAlt: "Боковой фасад и вход Mecca Boutique Hotel", primaryCta: "Найти отель", secondaryCta: "Посмотреть номера", leadTitle: "Особенный адрес для знакомства с городом", leadBody: "Отель находится рядом с ключевым культурным центром и в удобной доступности от главных точек прибытия в Ташкент.", stats: [{ value: "Напротив", label: "Центра исламской цивилизации" }, { value: "≈ 30 мин", label: "От международного аэропорта" }, { value: "≈ 20 мин", label: "От железнодорожного вокзала" }], ctaEyebrow: "Откройте Mecca", ctaTitle: "Продолжите знакомство с отелем", ctaText: "Познакомьтесь с номерами, ресторанами и пространствами Mecca.", ctaButton: "Открыть отель" },
  },
  gallery: { filters: { all: "Все", exterior: "Экстерьер", rooms: "Номера", interiors: "Интерьеры", dining: "Рестораны", rooftop: "Терраса", views: "Виды" }, openImage: "Открыть изображение", closeImage: "Закрыть", previousImage: "Предыдущее", nextImage: "Следующее" },
  location: { locationTitle: "Напротив Центра исламской цивилизации", locationText: "Ташкент, Узбекистан. Полный официальный адрес будет добавлен после подтверждения отелем.", airport: "Около 30 минут от международного аэропорта Ташкента", station: "Около 20 минут от железнодорожного вокзала Ташкента", directions: "Открыть карту" },
  footer: { statement: "Современное бутик-гостеприимство с узбекским характером, продуманным комфортом и полностью халяльным сервисом.", discover: "Открыть", visit: "Посетить", location: "Напротив Центра исламской цивилизации, Ташкент", rights: "Все права защищены." },
};

const uz: Dictionary = {
  ...en,
  localeName: "O‘zbekcha",
  switchLanguage: "Tilni almashtirish",
  menu: "Menyu",
  close: "Yopish",
  explore: "Batafsil",
  learnMore: "Ko‘proq bilish",
  nav: { home: "Bosh sahifa", hotel: "Mehmonxona", rooms: "Xonalar", dining: "Restoranlar", rooftop: "Rooftop", events: "Tadbirlar", gallery: "Galereya", location: "Manzil" },
  pages: {
    home: {
      ...en.pages.home,
      metaTitle: "Mecca Boutique Hotel & Restaurant | Toshkent", metaDescription: "Toshkentdagi Islom sivilizatsiyasi markazi qarshisida joylashgan butik halol mehmondo‘stlik maskani.",
      eyebrow: "Butik halol mehmondo‘stlik · Toshkent", title: "Toshkentni sokin va nafis his eting", intro: "O‘ttizta puxta o‘ylangan xona, o‘ziga xos taomlar va shaharning muhim madaniy obidasiga qaragan rooftop.", heroAlt: "Shom paytida yoritilgan Mecca Boutique Hotel fasadi", primaryCta: "Mehmonxonani kashf eting", secondaryCta: "Xonalarni ko‘ring",
      leadTitle: "Joy, ma’no va samimiy g‘amxo‘rlik bilan yaratilgan turar joy", leadBody: "Mecca Boutique Hotel & Restaurant zamonaviy qulaylik, o‘zbekona ruh va e’tiborli islomiy mehmondo‘stlikni birlashtiradi. Islom sivilizatsiyasi markazi ro‘parasida joylashgan mehmonxona Toshkentdagi madaniy, hordiq va ish safarlari uchun sokin manzildir.",
      stats: [{ value: "30", label: "30 juzdan ilhomlangan xona" }, { value: "3", label: "O‘ziga xos gastronomik maskan" }, { value: "100%", label: "Halol mehmondo‘stlik" }, { value: "500", label: "Xususiy tadbirlar uchun mehmon" }],
      sections: [
        { ...en.pages.home.sections[0], eyebrow: "Ma’noli hordiq", title: "O‘ttizta xona, yagona puxta tajriba", body: "Taxminan 18 m² bo‘lgan har bir xonada queen krovat, qibla ko‘rsatkichi, joynamoz va Islom sivilizatsiyasi markazi yoki ichki bog‘ga manzara mavjud.", alt: "Arkasimon derazali iliq mehmon xonasi", linkLabel: "Xonalarni kashf eting" },
        { ...en.pages.home.sections[1], eyebrow: "Ikki pazandachilik hikoyasi", title: "Indoneziya iliqligi va Italiya mahorati", body: "Birinchi qavatdagi keng Indoneziya restoranidan yuqoridagi nafis Italiya restoranigacha — barcha tajriba to‘liq halol standartga mos.", alt: "O‘zbek bezaklari bilan keng restoran interyeri", linkLabel: "Restoranlarni kashf eting" },
        { ...en.pages.home.sections[2], eyebrow: "Shahar uzra", title: "Rooftopda oltin shafaq lahzalari", body: "600,7 m² rooftop kafe va bar Islom sivilizatsiyasi markazi hamda Toshkent manzarasini ochadi — qahva, yengil taomlar va yaqin davradagi bayramlar uchun.", alt: "Quyosh botishidagi rooftop kafening konseptual ko‘rinishi", linkLabel: "Rooftopni ko‘ring" },
      ],
      featuresTitle: "Kelishdan hordiqgacha o‘ylangan mehmondo‘stlik", featuresIntro: "Iliq umumiy makonlar va e’tiborli xizmat kun davomida ravon tajriba yaratadi.",
      features: [{ title: "24 soatlik konsyerj", text: "Kelish, shahar bo‘yicha maslahat va mehmon ehtiyojlari uchun yordam." }, { title: "Namozxona", text: "Mehmonxona ichidagi sokin va alohida makon." }, { title: "O‘qish zali", text: "Mutolaa, suhbat va xotirjamlik uchun joy." }, { title: "Ko‘p tilli kutib olish", text: "Asosiy xalqaro tillarda resepshen yordami." }],
      ctaEyebrow: "Toshkentdagi safaringiz", ctaTitle: "Sayohatingizni Meccadan boshlang", ctaText: "Madaniyat, qulaylik va e’tiborli halol mehmondo‘stlik uyg‘unlashgan butik turar joy.", ctaButton: "Xonalarni ko‘ring",
    },
    hotel: {
      ...en.pages.hotel,
      metaTitle: "Mehmonxona haqida | Mecca Boutique Hotel", metaDescription: "Toshkentdagi Mecca Boutique Hotel hikoyasi, me’morchiligi va mehmondo‘stlik falsafasi.", eyebrow: "Mecca hikoyasi", title: "Ma’no bilan yaratilgan turar joy", intro: "Zamonaviy o‘zbekona ruh, ma’naviy uyg‘unlik va shaxsiy xizmat butik muhitda birlashadi.", heroAlt: "Mecca Boutique Hotelning yoritilgan to‘liq fasadi", primaryCta: "Xonalarni ko‘ring", secondaryCta: "Galereyani oching",
      leadTitle: "Joy ruhini aks ettiruvchi zamonaviy mehmondo‘stlik", leadBody: "Mecca madaniyat, sokinlik va mazmunli detallarni qadrlaydigan mehmonlar uchun yaratilgan. Zamonaviy islom me’morchiligi o‘zbek shakllarini bugungi proporsiyalar, tabiiy ranglar va nafis bezaklarda talqin qiladi.",
      stats: [{ value: "3 000 m²", label: "Yer maydoni" }, { value: "3 038,7 m²", label: "Umumiy qurilish maydoni" }, { value: "3", label: "Qavat va rooftop" }, { value: "30", label: "Butik xona" }],
      sections: [
        { ...en.pages.hotel.sections[0], eyebrow: "O‘ttiz juz, o‘ttiz xona", title: "Tinchlik va yaxlitlikka asoslangan konsepsiya", body: "Mehmonxonaning 30 xonasi Qur’onning 30 juzidan ilhomlangan. G‘oya bevosita bezakdan ko‘ra muvozanat, tinchlik va ma’naviy uyg‘unlik muhitida ifodalangan.", alt: "Iliq yog‘och va neytral ranglardagi xona detallari" },
        { ...en.pages.hotel.sections[1], eyebrow: "Zamonaviy o‘zbekona ruh", title: "Bugun uchun qayta talqin qilingan meros", body: "Arkasimon ochilmalar, naqshli panjaralar, g‘isht, yog‘och va mato detallari zamonaviy sokin muhitni saqlagan holda Toshkent bilan bog‘laydi.", alt: "O‘zbek matolari va arkasimon g‘ishtli konseptual ko‘rinish" },
      ],
      featuresTitle: "Maqsadli umumiy makonlar", featuresIntro: "Kelishdan sokin dam olishgacha har bir joy mehmon tajribasida aniq vazifaga ega.",
      features: [{ title: "Ikki balandlikdagi lobby", text: "Mehmonxona me’moriy ruhini tanishtiruvchi keng kirish." }, { title: "O‘qish zali", text: "Mutolaa yoki norasmiy suhbat uchun qulay joy." }, { title: "Namozxona", text: "Halol mehmondo‘stlik va’dasini qo‘llab-quvvatlovchi makon." }, { title: "Shaxsiy xizmat", text: "Butik ko‘lam e’tiborli g‘amxo‘rlik imkonini beradi." }],
      ctaEyebrow: "Biz bilan qoling", ctaTitle: "Meccani shaxsan his eting", ctaText: "Xonalarni ko‘ring va Toshkentdagi safaringizni rejalashtiring.", ctaButton: "Xonalarni ko‘ring",
    },
    rooms: {
      ...en.pages.rooms,
      metaTitle: "Xonalar | Mecca Boutique Hotel", metaDescription: "Queen krovat, qibla ko‘rsatkichi va manzaralarga ega 30 ta puxta o‘ylangan xona.", eyebrow: "Xonalar va joylashuv", title: "O‘ttizta xona. Yagona puxta tajriba.", intro: "Madaniy Toshkent markazida tiklanish uchun yaratilgan sokin, iliq va mazmunli makonlar.", heroAlt: "Mecca Boutique Hoteldagi mehmon xonasi", primaryCta: "Galereyani ko‘ring", secondaryCta: "Mehmonxonani kashf eting",
      leadTitle: "Barcha zarur narsalar puxta joylashtirilgan", leadBody: "30 xonaning har biri taxminan 18 m² va yagona standart asosida yaratilgan. Iliq yog‘och, yumshoq yorug‘lik va amaliy detallar hordiq, ziyorat, madaniy yoki ish safari uchun sokin muhit yaratadi.",
      stats: [{ value: "30", label: "Mehmon xonasi" }, { value: "18 m²", label: "O‘rtacha maydon" }, { value: "Queen", label: "Krovat turi" }, { value: "2", label: "Manzara yo‘nalishi" }],
      sections: [
        { ...en.pages.rooms.sections[0], eyebrow: "Hordiq uchun yaratilgan", title: "Iliq materiallar, sokin yorug‘lik va joy ruhi", body: "Vazmin ranglar va o‘zbekona detallar dam olishga xalal bermasdan xarakter beradi. Xonalar madaniyat markazi yoki ichki bog‘ga qaraydi.", alt: "Mehmon xonasidagi ish joyi va yog‘och detallar" },
        { ...en.pages.rooms.sections[1], eyebrow: "O‘ylangan qulayliklar", title: "Safaringiz ritmini hurmat qiladigan qulaylik", body: "Har bir xonada zamonaviy butik mehmonxona qulayliklari bilan birga qibla ko‘rsatkichi va joynamoz mavjud.", alt: "Yog‘och pardozli zamonaviy hammom" },
      ],
      featuresTitle: "Xona qulayliklari", featuresIntro: "Qulaylik, maxfiylik va ma’naviy xotirjamlik uchun kerakli detallar.",
      features: [{ title: "Queen krovat", text: "Barcha 30 xonada yagona uxlash konfiguratsiyasi." }, { title: "Qibla ko‘rsatkichi", text: "Har bir xonada aniq joylashtirilgan." }, { title: "Joynamoz", text: "Xona tajribasining bir qismi sifatida taqdim etiladi." }, { title: "Ikki xil manzara", text: "Madaniyat markazi yoki ichki bog‘ tomonga." }],
      ctaEyebrow: "Toshkentdagi sokin manzil", ctaTitle: "Meccani safaringizning bir qismiga aylantiring", ctaText: "Meccaning Toshkent madaniy hududidagi manzilini ko‘ring.", ctaButton: "Manzilni ko‘rish",
    },
    dining: {
      ...en.pages.dining,
      metaTitle: "Restoranlar | Mecca Boutique Hotel", metaDescription: "Mecca Boutique Hoteldagi to‘liq halol Indoneziya va Italiya taomlari.", eyebrow: "Meccada taomlanish", title: "Ikki oshxona, yagona g‘amxo‘rlik standarti", intro: "Keng makonlar, iliq xizmat va to‘liq halol tajriba Indoneziya hamda Italiya an’analarini birlashtiradi.", heroAlt: "Mecca Boutique Hotel restorani", primaryCta: "Restoranlarni kashf eting", secondaryCta: "Tashrifni rejalashtiring",
      leadTitle: "Mehmonxona ichidagi gastronomik manzil", leadBody: "Meccadagi restoranlar mehmonlar, mahalliy tashrifchilar va xususiy guruhlar uchun yaratilgan. Har birining o‘z pazandachilik ruhi va yagona halol standarti bor.",
      stats: [{ value: "497 m²", label: "Indoneziya restorani" }, { value: "452 m²", label: "Italiya restorani" }, { value: "2", label: "Restoran konsepsiyasi" }, { value: "100%", label: "Halol tajriba" }],
      sections: [
        { ...en.pages.dining.sections[0], eyebrow: "Birinchi qavat · 497 m²", title: "Indoneziya restorani", body: "O‘zbekona bezaklar bilan keng muhitda Indoneziya oshxonasining iliqligi va boyligini namoyon etuvchi restoran.", alt: "Indoneziya restorani zali" },
        { ...en.pages.dining.sections[1], eyebrow: "Ikkinchi qavat · 452 m²", title: "Italiya restorani", body: "Tanish italyan ta’mlari, uchrashuvlar va uzoq suhbatlar uchun nafis, ammo erkin muhit — to‘liq halol standartda.", alt: "Italiya restorani interyeri va lounge o‘rindiqlari" },
      ],
      featuresTitle: "Turli vaziyatlar uchun", featuresIntro: "Sokin ovqatlanishdan katta uchrashuvgacha makonlar kun ritmiga moslashadi.",
      features: [{ title: "Mehmonxona nonushtasi", text: "Mehmonlar uchun qulay kun boshlanishi." }, { title: "Kundalik taomlanish", text: "Tushlik, kechki ovqat va suhbat uchun iliq muhit." }, { title: "Guruhli uchrashuvlar", text: "Ijtimoiy yig‘inlarga mos keng maydonlar." }, { title: "Halol kafolati", text: "Barcha tajriba bo‘ylab yagona standart." }],
      ctaEyebrow: "Dasturxon atrofida", ctaTitle: "Joy ruhi bilan taomlarni kashf eting", ctaText: "Islom sivilizatsiyasi markazi qarshisidagi mehmonxonani toping.", ctaButton: "Manzilni ko‘rish",
    },
    rooftop: {
      ...en.pages.rooftop,
      metaTitle: "Rooftop | Mecca Boutique Hotel", metaDescription: "Islom sivilizatsiyasi markazi va Toshkent manzarali 600,7 m² rooftop kafe.", eyebrow: "Rooftop va taassurotlar", title: "Toshkentga boshqa nigoh", intro: "Quyosh botishi va shaharning madaniy silueti bilan o‘ralgan baland kafe, terassa va uchrashuv joyi.", heroAlt: "Quyosh botishidagi Mecca rooftop kafesining konseptual ko‘rinishi", primaryCta: "Rooftopni kashf eting", secondaryCta: "Galereyani ko‘ring",
      leadTitle: "Shahar ustidagi 600,7 m² manzil", leadBody: "Rooftop Cafe & Bar qahva, yengil taomlar, shisha va yaqin davradagi tadbirlar uchun, Islom sivilizatsiyasi markazi hamda Toshkent manzarasi bilan yaratilgan.",
      stats: [{ value: "600,7 m²", label: "Rooftop maydoni" }, { value: "360°", label: "Shahar ustidagi muhit" }, { value: "Shafaq", label: "Eng go‘zal vaqt" }, { value: "1", label: "Eksklyuziv tadbir joyi" }],
      sections: [
        { ...en.pages.rooftop.sections[0], eyebrow: "Bugungi terassa", title: "Ajoyib qo‘shniga qaragan ochiq makon", body: "Rooftop joylashuvi Islom sivilizatsiyasi markazi gumbazi va me’morchiligini, ayniqsa oqshom yorug‘ida, to‘siqsiz ko‘rsatadi.", alt: "Rooftopdan Islom sivilizatsiyasi markaziga haqiqiy manzara" },
        { ...en.pages.rooftop.sections[1], eyebrow: "Rejalashtirilgan tajriba", title: "Iliq yorug‘lik, qulay o‘rindiqlar va ochiq ufq", body: "Dizayn konsepsiyasi Toshkent ustidagi sokin oqshomlar uchun lounge o‘rindiqlari, xizmat peshtaxtasi va atmosferali yoritishni birlashtiradi.", alt: "Kelajakdagi rooftop barning konseptual vizualizatsiyasi" },
      ],
      featuresTitle: "Bitta rooftop, ko‘plab lahzalar", featuresIntro: "Kunduzgi damdan oqshom tadbirigacha tabiiy o‘zgaradigan tajriba.",
      features: [{ title: "Qahva va yengil taomlar", text: "Shahar uzra vaqt o‘tkazish uchun erkin menyu konsepsiyasi." }, { title: "Shisha", text: "Rooftop tajribasining bir qismi sifatida rejalashtirilgan." }, { title: "Quyosh botishi", text: "Madaniyat markazi va shahar tomon bevosita manzara." }, { title: "Xususiy tadbirlar", text: "Tanlangan uchrashuvlar uchun eksklyuziv muhit." }],
      ctaEyebrow: "Toshkent uzra", ctaTitle: "Esda qoladigan oqshom yarating", ctaText: "Mehmonxonaning Islom sivilizatsiyasi markazi qarshisidagi manzilini ko‘ring.", ctaButton: "Manzilni ko‘rish",
    },
    events: {
      ...en.pages.events,
      metaTitle: "Tadbirlar | Mecca Boutique Hotel", metaDescription: "Mecca Boutique Hoteldagi 500 kishigacha to‘y, korporativ va xususiy tadbirlar.", eyebrow: "Tadbirlar va xususiy marosimlar", title: "Mazmunli voqealar uchun makon", intro: "To‘ylar, diniy yig‘inlar, korporativ tadbirlar va xususiy bayramlar — keng ko‘lam va yaqin muhit bir joyda.", heroAlt: "Mecca Boutique Hoteldagi katta moslashuvchan makon", primaryCta: "Manzilni ko‘rish", secondaryCta: "Makonlarni ko‘rish",
      leadTitle: "Sizning voqeangiz atrofida yaratilgan yig‘in", leadBody: "Mehmonxonaning moslashuvchan joylari 500 nafargacha mehmonni qabul qiladi va kenglik, o‘ziga xoslik hamda to‘liq halol muhitni birlashtiradi.",
      stats: [{ value: "500", label: "Maksimal sig‘im" }, { value: "5", label: "Asosiy tadbir turi" }, { value: "3", label: "Restoran va rooftop makoni" }, { value: "100%", label: "Halol mehmondo‘stlik" }],
      sections: [
        { ...en.pages.events.sections[0], eyebrow: "Bayramlar", title: "To‘ylar, oilaviy va diniy yig‘inlar", body: "Iliq interyerlar va keng umumiy joylar muhim lahzalar, bayramlar va jamoaviy uchrashuvlar uchun munosib muhit yaratadi.", alt: "Yig‘inlar uchun katta restoran maydoni" },
        { ...en.pages.events.sections[1], eyebrow: "Biznes va xususiy foydalanish", title: "Korporativ va maxsus xususiy tadbirlar", body: "Mehmonxona professional va xususiy tadbirlarni qabul qiladi; yakuniy joylashuv va xizmat shartlari to‘g‘ridan-to‘g‘ri kelishiladi.", alt: "Moslashuvchan lounge va uchrashuv maydoni" },
      ],
      featuresTitle: "Biz kutib oladigan tadbirlar", featuresIntro: "Har bir makon turli maqsad, ko‘lam va muhitni qo‘llab-quvvatlaydi.",
      features: [{ title: "To‘ylar", text: "Muhim bayram uchun madaniy ruhdagi makon." }, { title: "Korporativ tadbirlar", text: "Mehmonxona xizmati bilan professional uchrashuvlar." }, { title: "Diniy yig‘inlar", text: "Halol qadriyatlarga mos hurmatli muhit." }, { title: "Xususiy bayramlar", text: "Oila va ijtimoiy voqealar uchun moslashuvchan joylar." }],
      ctaEyebrow: "Sizning tadbiringiz", ctaTitle: "Mazmunli uchrashuvlar uchun makon", ctaText: "Mehmonxonaning Toshkent madaniy markazidagi manzilini ko‘ring.", ctaButton: "Manzilni ko‘rish",
    },
    gallery: { ...en.pages.gallery, metaTitle: "Galereya | Mecca Boutique Hotel", metaDescription: "Toshkentdagi Mecca Boutique Hotel bo‘ylab vizual sayohat.", eyebrow: "Mecca galereyasi", title: "Tajribaga yaqindan nazar", intro: "Mecca tajribasini shakllantiruvchi tashqi ko‘rinish, xonalar, restoranlar, rooftop va manzaralar.", heroAlt: "Mecca Boutique Hotelning oqshom fasadi", primaryCta: "Galereyani ko‘rish", secondaryCta: "Mehmonxonani kashf etish", leadTitle: "Mehmonxona bo‘ylab saralangan lahzalar", leadBody: "Haqiqiy fotosuratlar va aniq belgilangan konseptual vizualizatsiyalar to‘plami.", ctaEyebrow: "Shaxsan ko‘ring", ctaTitle: "Meccani Toshkent hikoyangizga qo‘shing", ctaText: "Xonalarni ko‘ring yoki Islom sivilizatsiyasi markazi qarshisidagi mehmonxonani toping.", ctaButton: "Xonalarni ko‘ring" },
    location: { ...en.pages.location, metaTitle: "Manzil | Mecca Boutique Hotel", metaDescription: "Toshkentdagi Islom sivilizatsiyasi markazi qarshisidagi Mecca Boutique Hotel.", eyebrow: "Manzil", title: "Madaniy Toshkent markazida", intro: "Islom sivilizatsiyasi markazi ro‘parasida, aeroport va temiryo‘l vokzaliga qulay yo‘l bilan.", heroAlt: "Mecca Boutique Hotelning yon fasadi va kirishi", primaryCta: "Mehmonxonani topish", secondaryCta: "Xonalarni ko‘rish", leadTitle: "Shaharni kashf etish uchun o‘ziga xos manzil", leadBody: "Mehmonxona muhim madaniy manzil yonida va Toshkentning asosiy kirish nuqtalariga amaliy masofada joylashgan.", stats: [{ value: "Ro‘parasida", label: "Islom sivilizatsiyasi markazi" }, { value: "≈ 30 daq", label: "Toshkent xalqaro aeroportidan" }, { value: "≈ 20 daq", label: "Toshkent temiryo‘l vokzalidan" }], ctaEyebrow: "Meccani kashf eting", ctaTitle: "Mehmonxona bilan tanishishni davom ettiring", ctaText: "Meccaning xonalari, restoranlari va makonlarini ko‘ring.", ctaButton: "Mehmonxonani kashf eting" },
  },
  gallery: { filters: { all: "Barchasi", exterior: "Tashqi ko‘rinish", rooms: "Xonalar", interiors: "Interyerlar", dining: "Restoranlar", rooftop: "Rooftop", views: "Manzaralar" }, openImage: "Rasmni ochish", closeImage: "Rasmni yopish", previousImage: "Oldingi rasm", nextImage: "Keyingi rasm" },
  location: { locationTitle: "Islom sivilizatsiyasi markazi ro‘parasida", locationText: "Toshkent, O‘zbekiston. To‘liq rasmiy ko‘cha manzili mehmonxona tasdiqlagach qo‘shiladi.", airport: "Toshkent xalqaro aeroportidan taxminan 30 daqiqa", station: "Toshkent temiryo‘l vokzalidan taxminan 20 daqiqa", directions: "Xaritani ochish" },
  footer: { statement: "O‘zbekona ruh, o‘ylangan qulaylik va to‘liq halol xizmat bilan zamonaviy butik mehmondo‘stlik.", discover: "Kashf eting", visit: "Tashrif", location: "Islom sivilizatsiyasi markazi ro‘parasida, Toshkent", rights: "Barcha huquqlar himoyalangan." },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ru, uz };

export const galleryImages: GalleryImage[] = [
  { src: "/images/exterior/facade-evening.jpg", category: "exterior", alt: { en: "Illuminated hotel facade at dusk", ru: "Подсвеченный фасад отеля в сумерках", uz: "Shom paytidagi yoritilgan mehmonxona fasadi" } },
  { src: "/images/exterior/arcade-detail.jpg", category: "exterior", alt: { en: "Arched exterior arcade and garden", ru: "Арочная наружная галерея и сад", uz: "Arkasimon tashqi galereya va bog‘" } },
  { src: "/images/exterior/entrance-portal.jpg", category: "exterior", alt: { en: "Decorative illuminated entrance portal", ru: "Декоративный подсвеченный входной портал", uz: "Bezakli yoritilgan kirish portali" } },
  { src: "/images/rooms/room-bed.jpg", category: "rooms", alt: { en: "Warm guest room and arched window", ru: "Тёплый номер и арочное окно", uz: "Iliq mehmon xonasi va arkasimon deraza" } },
  { src: "/images/rooms/room-detail.jpg", category: "rooms", alt: { en: "Guest room desk and timber details", ru: "Рабочий стол и деревянные детали номера", uz: "Mehmon xonasidagi stol va yog‘och detallar" } },
  { src: "/images/rooms/room-bath.jpg", category: "rooms", alt: { en: "Contemporary guest bathroom", ru: "Современная ванная комната", uz: "Zamonaviy mehmon hammomi" } },
  { src: "/images/interiors/reception.jpg", category: "interiors", alt: { en: "Reception desk and arrival lobby", ru: "Стойка регистрации и входное лобби", uz: "Qabulxona peshtaxtasi va kirish lobbisi" } },
  { src: "/images/interiors/corridor.jpg", category: "interiors", alt: { en: "Guest floor corridor with decorative doors", ru: "Коридор гостевого этажа с декоративными дверями", uz: "Bezakli eshikli mehmonlar qavati yo‘lagi" } },
  { src: "/images/interiors/decorative-wall.jpg", category: "interiors", alt: { en: "Curated objects in decorative wall niches", ru: "Коллекция предметов в декоративных стенных нишах", uz: "Bezakli devor tokchalaridagi tanlangan buyumlar" } },
  { src: "/images/dining/indonesian-1.jpg", category: "dining", alt: { en: "Indonesian Restaurant seating", ru: "Зал индонезийского ресторана", uz: "Indoneziya restorani o‘rindiqlari" } },
  { src: "/images/dining/italian-1.jpg", category: "dining", alt: { en: "Italian Restaurant dining room", ru: "Зал итальянского ресторана", uz: "Italiya restorani zali" } },
  { src: "/images/dining/lounge.jpg", category: "dining", alt: { en: "Lounge dining and gathering area", ru: "Обеденная лаунж-зона для встреч", uz: "Lounge ovqatlanish va uchrashuv hududi" } },
  { src: "/images/rooftop/terrace-actual.jpg", category: "rooftop", alt: { en: "Actual open rooftop terrace", ru: "Фактическая открытая терраса", uz: "Haqiqiy ochiq rooftop terassasi" } },
  { src: "/images/concept/terrace.png", category: "rooftop", alt: { en: "Decorative rooftop terrace walkway", ru: "Декоративная галерея террасы на крыше", uz: "Bezakli rooftop terassa yo‘lagi" }, concept: true },
  { src: "/images/concept/rooftop-sunset.png", category: "rooftop", alt: { en: "Rooftop sunset concept visualization", ru: "Концептуальная визуализация террасы на закате", uz: "Rooftop shafaq konseptual vizualizatsiyasi" }, concept: true },
  { src: "/images/concept/rooftop-bar.png", category: "rooftop", alt: { en: "Rooftop bar concept visualization", ru: "Концептуальная визуализация бара на крыше", uz: "Rooftop bar konseptual vizualizatsiyasi" }, concept: true },
  { src: "/images/rooftop/view-actual.jpg", category: "views", alt: { en: "View towards the Islamic Civilization Centre", ru: "Вид на Центр исламской цивилизации", uz: "Islom sivilizatsiyasi markaziga manzara" } },
  { src: "/images/rooftop/city-panorama.jpg", category: "views", alt: { en: "Panoramic view across Tashkent", ru: "Панорамный вид на Ташкент", uz: "Toshkent bo‘ylab panoramik manzara" } },
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isPageKey(value: string): value is PageKey {
  return pageKeys.includes(value as PageKey);
}

export function pagePath(locale: Locale, page: PageKey): string {
  return page === "home" ? `/${locale}` : `/${locale}/${page}`;
}
