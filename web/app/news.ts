import type { Locale } from "./content";

export const titfStory = {
  slug: "mecca-hotel-tashkent-international-tourism-fair",
  image: "/images/news/titf-conference-handshake.webp",
  video: "/videos/news/titf-handover.mp4",
};

export function newsPath(locale: Locale, slug?: string) {
  return `/${locale}/news${slug ? `/${slug}` : ""}`;
}

type NewsCopy = {
  nav: string; eyebrow: string; title: string; intro: string;
  featured: string; category: string; location: string; format: string;
  read: string; back: string; videoTitle: string; videoIntro: string;
  watch: string; videoFallback: string;
  article: {
    title: string; excerpt: string; alt: string; caption: string;
    lead: string; sections: { title: string; paragraphs: string[] }[];
    filmCaption: string;
  };
};

export const newsCopy: Record<Locale, NewsCopy> = {
  en: {
    nav: "News", eyebrow: "The Mecca journal", title: "Stories & perspectives",
    intro: "News, partnerships and moments from Mecca Boutique Hotel, shared through words and film.",
    featured: "Featured story", category: "Partnerships", location: "Tashkent, Uzbekistan",
    format: "Article & video", read: "Read the story", back: "All news",
    videoTitle: "In focus: the official handover",
    videoIntro: "A closer look at the signing and appointment, captured on film at TITF.",
    watch: "Watch the event film", videoFallback: "Open the event video",
    article: {
      title: "Mecca Hotel appointed an official participant at TITF",
      excerpt: "An official handover and signing alongside Mr. Riskulov Akbar Tolibjonovich mark a new step in tourism and hospitality cooperation between Indonesia and Uzbekistan.",
      alt: "Representatives shake hands during the official handover at the Tashkent International Tourism Fair",
      caption: "The official handover and signing at the Tashkent International Tourism Fair (TITF).",
      lead: "Mecca Hotel has marked its appointment as an official participant at the Tashkent International Tourism Fair (TITF), following an official handover and signing alongside Mr. Riskulov Akbar Tolibjonovich. The occasion represents a significant step in the hotel’s engagement with the international tourism and hospitality community.",
      sections: [
        { title: "A platform for international cooperation", paragraphs: [
          "The appointment places Mecca Hotel within a forum for dialogue and exchange across the tourism sector. Participation at TITF provides an opportunity to introduce the hotel to international industry partners and build relationships around the shared priorities of tourism and hospitality.",
          "The formal handover reflects EGI Resources’ commitment to international collaboration and to developing its presence in global markets. For Mecca Hotel, it offers a foundation for further conversations with partners seeking closer connections with Uzbekistan."
        ] },
        { title: "Strengthening links between Indonesia and Uzbekistan", paragraphs: [
          "The partnership brings an Indonesia–Uzbekistan perspective to the hotel’s international engagement. It highlights the role hospitality can play in connecting people, businesses and destinations, while creating space for the exchange of ideas and experience.",
          "Mecca Hotel’s participation at TITF is a step towards stronger professional relationships across both markets. The focus is on building those connections through sustained dialogue, mutual understanding and a shared commitment to welcoming international travellers."
        ] }
      ],
      filmCaption: "Event film documenting the official handover and signing at TITF."
    }
  },
  ru: {
    nav: "Новости", eyebrow: "Журнал Mecca", title: "События и истории",
    intro: "Новости, партнёрства и важные моменты Mecca Boutique Hotel — в статьях и видео.",
    featured: "Главная история", category: "Партнёрство", location: "Ташкент, Узбекистан",
    format: "Статья и видео", read: "Читать статью", back: "Все новости",
    videoTitle: "В фокусе: официальная церемония",
    videoIntro: "Видеорепортаж о подписании и официальном назначении на TITF.",
    watch: "Смотреть видео события", videoFallback: "Открыть видео события",
    article: {
      title: "Mecca Hotel стал официальным участником TITF",
      excerpt: "Официальная церемония и подписание с участием господина Рискулова Акбара Толибжоновича стали новым шагом в сотрудничестве Индонезии и Узбекистана в сфере туризма и гостеприимства.",
      alt: "Рукопожатие представителей на официальной церемонии Ташкентской международной туристической ярмарки",
      caption: "Официальная церемония и подписание на Ташкентской международной туристической ярмарке (TITF).",
      lead: "Mecca Hotel получил статус официального участника Ташкентской международной туристической ярмарки (TITF). Назначение было отмечено официальной церемонией и подписанием с участием господина Рискулова Акбара Толибжоновича. Это событие стало важным шагом в развитии связей отеля с международным туристическим и гостиничным сообществом.",
      sections: [
        { title: "Площадка для международного сотрудничества", paragraphs: [
          "Участие в TITF открывает для Mecca Hotel возможности для профессионального диалога и обмена опытом в туристической отрасли. Ярмарка позволяет представить отель международным партнёрам и выстраивать отношения на основе общих интересов в сфере туризма и гостеприимства.",
          "Официальная церемония отражает приверженность EGI Resources международному сотрудничеству и развитию своего присутствия на мировых рынках. Для Mecca Hotel это основа для дальнейшего диалога с партнёрами, заинтересованными в укреплении связей с Узбекистаном."
        ] },
        { title: "Укрепление связей между Индонезией и Узбекистаном", paragraphs: [
          "Партнёрство придаёт международной деятельности отеля особое индонезийско-узбекское направление. Оно подчёркивает роль гостеприимства в сближении людей, компаний и туристических направлений, создавая пространство для обмена идеями и опытом.",
          "Участие Mecca Hotel в TITF — шаг к укреплению профессиональных отношений между двумя рынками. В центре внимания — последовательный диалог, взаимопонимание и общее стремление радушно принимать международных путешественников."
        ] }
      ],
      filmCaption: "Видео официальной церемонии и подписания на TITF."
    }
  },
  uz: {
    nav: "Yangiliklar", eyebrow: "Mecca jurnali", title: "Voqealar va hikoyalar",
    intro: "Mecca Boutique Hotel yangiliklari, hamkorliklari va muhim lahzalari — maqolalar va videolarda.",
    featured: "Asosiy maqola", category: "Hamkorlik", location: "Toshkent, O‘zbekiston",
    format: "Maqola va video", read: "Maqolani o‘qish", back: "Barcha yangiliklar",
    videoTitle: "Diqqat markazida: rasmiy topshirish marosimi",
    videoIntro: "TITF doirasidagi imzolash va rasmiy tayinlov marosimidan videolavha.",
    watch: "Tadbir videosini ko‘rish", videoFallback: "Tadbir videosini ochish",
    article: {
      title: "Mecca Hotel TITFning rasmiy ishtirokchisi etib tayinlandi",
      excerpt: "Janob Riskulov Akbar Tolibjonovich ishtirokidagi rasmiy topshirish va imzolash marosimi Indoneziya va O‘zbekiston o‘rtasidagi turizm hamda mehmondo‘stlik hamkorligida yangi qadam bo‘ldi.",
      alt: "Toshkent xalqaro turizm yarmarkasidagi rasmiy topshirish marosimida vakillar qo‘l siqishmoqda",
      caption: "Toshkent xalqaro turizm yarmarkasi (TITF) doirasidagi rasmiy topshirish va imzolash marosimi.",
      lead: "Mecca Hotel Toshkent xalqaro turizm yarmarkasining (TITF) rasmiy ishtirokchisi etib tayinlandi. Ushbu tayinlov janob Riskulov Akbar Tolibjonovich ishtirokidagi rasmiy topshirish va imzolash marosimi bilan nishonlandi. Bu voqea mehmonxonaning xalqaro turizm va mehmondo‘stlik hamjamiyati bilan aloqalarini rivojlantirishda muhim qadam bo‘ldi.",
      sections: [
        { title: "Xalqaro hamkorlik uchun maydon", paragraphs: [
          "TITFdagi ishtirok Mecca Hotel uchun turizm sohasi vakillari bilan muloqot qilish va tajriba almashish imkoniyatini yaratadi. Yarmarka mehmonxonani xalqaro hamkorlarga tanishtirish hamda turizm va mehmondo‘stlikdagi umumiy manfaatlar asosida aloqalar o‘rnatish uchun maydon bo‘lib xizmat qiladi.",
          "Rasmiy topshirish marosimi EGI Resources kompaniyasining xalqaro hamkorlik va jahon bozorlaridagi ishtirokini kengaytirishga sodiqligini aks ettiradi. Mecca Hotel uchun esa bu O‘zbekiston bilan yanada yaqin aloqalar o‘rnatishga intilayotgan hamkorlar bilan keyingi muloqotlar uchun asosdir."
        ] },
        { title: "Indoneziya va O‘zbekiston o‘rtasidagi aloqalarni mustahkamlash", paragraphs: [
          "Hamkorlik mehmonxonaning xalqaro faoliyatida Indoneziya–O‘zbekiston yo‘nalishiga alohida e’tibor qaratadi. U mehmondo‘stlikning insonlar, biznes vakillari va sayohat yo‘nalishlarini bog‘lashdagi o‘rnini ko‘rsatib, g‘oya va tajriba almashish uchun imkoniyat yaratadi.",
          "Mecca Hotelning TITFdagi ishtiroki ikki bozor o‘rtasidagi professional munosabatlarni mustahkamlash sari qo‘yilgan qadamdir. Bunda izchil muloqot, o‘zaro anglashuv va xalqaro sayohatchilarni samimiy kutib olishga bo‘lgan umumiy intilish asosiy o‘rinda turadi."
        ] }
      ],
      filmCaption: "TITF doirasidagi rasmiy topshirish va imzolash marosimi aks etgan videolavha."
    }
  }
};
