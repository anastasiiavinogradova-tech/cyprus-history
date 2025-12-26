export interface Place {
  id: string;
  name: {
    ru: string;
    en: string;
    gr: string;
  };
  description: {
    ru: string;
    en: string;
    gr: string;
  };
  location: string;
  type: 'museum' | 'archaeological' | 'church' | 'castle' | 'natural';
  image: string;
  coordinates: [number, number];
  website?: string;
}

export const places: Place[] = [
  {
    id: 'petra-tou-romiou',
    name: {
      ru: 'Петра-ту-Ромиу (Скала Афродиты)',
      en: 'Petra tou Romiou (Aphrodite\'s Rock)',
      gr: 'Πέτρα του Ρωμιού',
    },
    description: {
      ru: 'Легендарное место рождения богини Афродиты из морской пены. Живописный скалистый пляж с кристально чистой водой.',
      en: 'Legendary birthplace of goddess Aphrodite from sea foam. Picturesque rocky beach with crystal clear water.',
      gr: 'Ο θρυλικός τόπος γέννησης της θεάς Αφροδίτης από τον αφρό της θάλασσας.',
    },
    location: 'Пафос',
    type: 'natural',
    image: '/images/themes/ancient-myths.png',
    coordinates: [34.6639, 32.6278],
    website: 'https://www.visitcyprus.com',
  },
  {
    id: 'kourion',
    name: {
      ru: 'Древний Курион',
      en: 'Ancient Kourion',
      gr: 'Αρχαίο Κούριο',
    },
    description: {
      ru: 'Один из самых впечатляющих археологических памятников Кипра. Греко-римский амфитеатр с видом на море.',
      en: 'One of the most impressive archaeological sites in Cyprus. Greco-Roman amphitheater overlooking the sea.',
      gr: 'Ένας από τους πιο εντυπωσιακούς αρχαιολογικούς χώρους της Κύπρου.',
    },
    location: 'Лимассол',
    type: 'archaeological',
    image: '/images/themes/bronze-age.png',
    coordinates: [34.6692, 32.8761],
  },
  {
    id: 'archaeological-museum',
    name: {
      ru: 'Кипрский археологический музей',
      en: 'Cyprus Archaeological Museum',
      gr: 'Αρχαιολογικό Μουσείο Κύπρου',
    },
    description: {
      ru: 'Крупнейший и старейший археологический музей Кипра. Коллекция артефактов от неолита до римского периода.',
      en: 'The largest and oldest archaeological museum in Cyprus. Collection of artifacts from Neolithic to Roman period.',
      gr: 'Το μεγαλύτερο και παλαιότερο αρχαιολογικό μουσείο της Κύπρου.',
    },
    location: 'Никосия',
    type: 'museum',
    image: '/images/themes/ancient-myths-pottery.png',
    coordinates: [35.1735, 33.3602],
    website: 'http://www.mcw.gov.cy/mcw/da/da.nsf/home_en/home_en',
  },
  {
    id: 'kykkos-monastery',
    name: {
      ru: 'Монастырь Киккос',
      en: 'Kykkos Monastery',
      gr: 'Ιερά Μονή Κύκκου',
    },
    description: {
      ru: 'Самый богатый и известный монастырь Кипра. Основан в XI веке, хранит икону Богородицы работы апостола Луки.',
      en: 'The richest and most famous monastery in Cyprus. Founded in 11th century, houses an icon of Virgin Mary by St. Luke.',
      gr: 'Η πλουσιότερη και πιο διάσημη μονή της Κύπρου.',
    },
    location: 'Горы Троодос',
    type: 'church',
    image: '/images/themes/byzantine-legacy.png',
    coordinates: [34.9825, 32.7419],
    website: 'http://www.kykkos-monastery.cy.net/',
  },
  {
    id: 'paphos-castle',
    name: {
      ru: 'Замок Пафоса',
      en: 'Paphos Castle',
      gr: 'Κάστρο της Πάφου',
    },
    description: {
      ru: 'Византийская крепость в гавани Пафоса, перестроенная османами. Символ города и популярное место для фотографий.',
      en: 'Byzantine fort in Paphos harbor, rebuilt by Ottomans. City symbol and popular photo spot.',
      gr: 'Βυζαντινό φρούριο στο λιμάνι της Πάφου.',
    },
    location: 'Пафос',
    type: 'castle',
    image: '/images/themes/venetian-fortresses.png',
    coordinates: [34.7564, 32.4073],
  },
  {
    id: 'limassol-castle',
    name: {
      ru: 'Замок Лимассола',
      en: 'Limassol Castle',
      gr: 'Κάστρο Λεμεσού',
    },
    description: {
      ru: 'Средневековый замок, где в 1191 году Ричард Львиное Сердце венчался с Беренгарией Наваррской. Сейчас здесь музей.',
      en: 'Medieval castle where Richard the Lionheart married Berengaria of Navarre in 1191. Now houses a museum.',
      gr: 'Μεσαιωνικό κάστρο όπου ο Ριχάρδος ο Λεοντόκαρδος παντρεύτηκε τη Βερεγγάρια.',
    },
    location: 'Лимассол',
    type: 'castle',
    image: '/images/themes/crusader-kingdoms.png',
    coordinates: [34.6738, 33.0429],
  },
  {
    id: 'tombs-of-the-kings',
    name: {
      ru: 'Гробницы Королей',
      en: 'Tombs of the Kings',
      gr: 'Τάφοι των Βασιλέων',
    },
    description: {
      ru: 'Некрополь III века до н.э. Монументальные подземные гробницы высеченные в скале. Объект Всемирного наследия ЮНЕСКО.',
      en: '3rd century BC necropolis. Monumental underground tombs carved into rock. UNESCO World Heritage Site.',
      gr: 'Νεκρόπολη του 3ου αιώνα π.Χ. Μνημειώδεις υπόγειοι τάφοι.',
    },
    location: 'Пафос',
    type: 'archaeological',
    image: '/images/themes/bronze-age.png',
    coordinates: [34.7756, 32.4244],
  },
  {
    id: 'bellapais-abbey',
    name: {
      ru: 'Аббатство Беллапаис',
      en: 'Bellapais Abbey',
      gr: 'Αββαείο Μπελλαπαΐς',
    },
    description: {
      ru: 'Готический монастырь XIII века с потрясающим видом на Кирению. Один из лучших примеров готической архитектуры на Кипре.',
      en: '13th century Gothic monastery with stunning views of Kyrenia. One of the finest examples of Gothic architecture in Cyprus.',
      gr: 'Γοτθική μονή του 13ου αιώνα με εκπληκτική θέα στην Κερύνεια.',
    },
    location: 'Кирения',
    type: 'church',
    image: '/images/themes/byzantine-legacy.png',
    coordinates: [35.3031, 33.3581],
  },
  {
    id: 'cape-greco',
    name: {
      ru: 'Мыс Греко',
      en: 'Cape Greco',
      gr: 'Κάβο Γκρέκο',
    },
    description: {
      ru: 'Национальный лесной парк с живописными скалами, морскими пещерами и кристально чистой водой. Популярное место для дайвинга.',
      en: 'National forest park with picturesque cliffs, sea caves and crystal clear water. Popular diving spot.',
      gr: 'Εθνικό δασικό πάρκο με γραφικούς βράχους και θαλάσσιες σπηλιές.',
    },
    location: 'Айя-Напа',
    type: 'natural',
    image: '/images/themes/modern-cyprus.png',
    coordinates: [34.9639, 34.0764],
  },
  {
    id: 'leventis-museum',
    name: {
      ru: 'Музей Левентиса',
      en: 'Leventis Municipal Museum',
      gr: 'Δημοτικό Μουσείο Λεβέντη',
    },
    description: {
      ru: 'Музей истории Никосии от древности до наших дней. Интерактивные экспозиции о жизни города через века.',
      en: 'Museum of Nicosia history from antiquity to present day. Interactive exhibitions about city life through the ages.',
      gr: 'Μουσείο ιστορίας της Λευκωσίας από την αρχαιότητα μέχρι σήμερα.',
    },
    location: 'Никосия',
    type: 'museum',
    image: '/images/themes/british-colonial.png',
    coordinates: [35.1667, 33.3667],
    website: 'http://www.leventismuseum.org.cy/',
  },
];


