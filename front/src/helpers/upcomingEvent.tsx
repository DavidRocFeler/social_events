// src/helpers/upcomingEvents.ts
import { IEvent } from "@/interface/types";

export const getUpcomingEvents = (language: "nl" | "en"): IEvent[] => [
  {
    id: 1,
    date: "2025-07-01",
    title: language === "nl" ? "Syrische Avond" : "Syrian Evening",
    country: language === "nl" ? "Syrië" : "Syria",
    cuisine: language === "nl" ? "Levantijns" : "Levantine",
    chefs: ["Amira", "Bassam"],
    food: "Starter",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    story: {
      images: [
        "/syrian-chef.jpg",
        "/aleppo-market.jpg",
        "/syrian-team.jpg",
        "/syrian-dishes.jpg",
        "/syrian-spices.jpg"
      ],
      content: language === "nl" ? [
        "Amira vluchtte uit Aleppo na het verlies van haar familie restaurant dat drie generaties standhield. Haar gerechten zijn een levend herinnering aan haar verloren thuis.",
        "Bassam, een voormalige geschiedenisleraar, combineert traditionele Syrische smaken met verhalen over het oude Aleppo.",
        "Hun samenwerking begon in een vluchtelingenkamp in Libanon, waar ze maaltijden bereidden voor andere ontheemden.",
        "Elke hap vertelt een verhaal van veerkracht - van de beroemde Aleppo-kruiden tot de subtiele smaken van gedroogde vruchten.",
        "Het menu van deze avond is gebaseerd op Amira's familie receptenboek dat ze kon redden tijdens haar vlucht."
      ] : [
        "Amira fled Aleppo after losing her family restaurant that stood for three generations. Her dishes are a living memory of her lost home.",
        "Bassam, a former history teacher, combines traditional Syrian flavors with tales of ancient Aleppo.",
        "Their collaboration began in a Lebanese refugee camp where they cooked meals for other displaced people.",
        "Every bite tells a story of resilience - from famous Aleppo spices to subtle flavors of dried fruits.",
        "Tonight's menu is based on Amira's family recipe book she managed to save during her escape."
      ],
      quote: language === "nl" 
        ? "Onze keuken is ons thuis - we nemen je mee naar Aleppo via smaken en geuren" 
        : "Our kitchen is our home - we take you to Aleppo through flavors and scents"
    },
    paymentInfo: {
      note: language === "nl" 
        ? "Voer je E-mail of WhatsApp in en zodra je de betaling hebt voltooid, klik je op 'Betaling bevestigd'" 
        : "Enter your E-mail or WhatsApp and once you complete the payment, click on 'Payment confirmed'",
      nameLabel: language === "nl" ? "Voornaam" : "First name",
      lastNameLabel: language === "nl" ? "Achternaam" : "Last name",
      emailLabel: language === "nl" ? "E-mailadres" : "Email address",
      wspLabel: language === "nl" ? "WhatsApp-nummer" : "WhatsApp number",
      paymentRefLabel: language === "nl" ? "Betalingsreferentie" : "Payment reference",
      buttonText: language === "nl" ? "Betaling bevestigd" : "Payment confirmed",
      placeholders: {
        wsp: language === "nl" ? "Bijv: +31 123456789" : "E.g: +31 123456789",
        name: language === "nl" ? "Voer je voornaam in" : "Enter your first name",
        lastName: language === "nl" ? "Voer je achternaam in" : "Enter your last name",
        email: language === "nl" ? "Voer je e-mail in" : "Enter your email",
        paymentRef: language === "nl" ? "Voer referentie in" : "Enter reference"
      }
    }
  },
  {
    id: 2,
    date: "2025-07-01",
    title: language === "nl" ? "Eritrees Feest" : "Eritrean Feast",
    country: language === "nl" ? "Eritrea" : "Eritrea",
    cuisine: language === "nl" ? "Oost-Afrikaans" : "East African",
    chefs: ["Senait", "Tekle"],
    food: "Dinner",
    imageUrl: "https://images.unsplash.com/photo-1567360425618-1594206637d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    story: {
      images: [
        "/eritrean-chef.jpg",
        "/eritrean-coffee.jpg",
        "/eritrean-dishes.jpg",
        "/eritrean-spices.jpg",
        "/eritrean-tradition.jpg"
      ],
      content: language === "nl" ? [
        "Senait bracht haar koffieceremonie tradities mee uit de hooglanden van Eritrea, waar koffie een heilig ritueel is.",
        "Tekle's familie was eigenaar van een beroemd restaurant in Asmara dat gespecialiseerd was in zeevruchten uit de Rode Zee.",
        "Hun culinaire reis begon toen ze elkaar ontmoetten in een opvangkamp in Soedan, waar ze samen een gemeenschapskeuken runden.",
        "Het injera-brood dat ze serveren wordt nog steeds gemaakt volgens de methode van Tekle's grootmoeder, met 72 uur fermentatie.",
        "Elke maaltijd eindigt met Senait's traditionele koffieceremonie, een viering van gemeenschap en veerkracht."
      ] : [
        "Senait brought her coffee ceremony traditions from the Eritrean highlands, where coffee is a sacred ritual.",
        "Tekle's family owned a famous seafood restaurant in Asmara specializing in Red Sea delicacies.",
        "Their culinary journey began when they met in a Sudanese refugee camp where they ran a community kitchen.",
        "The injera bread they serve is still made using Tekle's grandmother's method, with 72-hour fermentation.",
        "Every meal ends with Senait's traditional coffee ceremony, a celebration of community and resilience."
      ],
      quote: language === "nl" 
        ? "Onze gerechten zijn onze stem - ze zingen het lied van ons land dat we missen" 
        : "Our dishes are our voice - they sing the song of the homeland we miss"
    },
    paymentInfo: {
      note: language === "nl" 
        ? "Voer je E-mail of WhatsApp in en zodra je de betaling hebt voltooid, klik je op 'Betaling bevestigd'" 
        : "Enter your E-mail or WhatsApp and once you complete the payment, click on 'Payment confirmed'",
      nameLabel: language === "nl" ? "Voornaam" : "First name",
      lastNameLabel: language === "nl" ? "Achternaam" : "Last name",
      emailLabel: language === "nl" ? "E-mailadres" : "Email address",
      wspLabel: language === "nl" ? "WhatsApp-nummer" : "WhatsApp number",
      paymentRefLabel: language === "nl" ? "Betalingsreferentie" : "Payment reference",
      buttonText: language === "nl" ? "Betaling bevestigd" : "Payment confirmed",
      placeholders: {
        wsp: language === "nl" ? "Bijv: +31 123456789" : "E.g: +31 123456789",
        name: language === "nl" ? "Voer je voornaam in" : "Enter your first name",
        lastName: language === "nl" ? "Voer je achternaam in" : "Enter your last name",
        email: language === "nl" ? "Voer je e-mail in" : "Enter your email",
        paymentRef: language === "nl" ? "Voer referentie in" : "Enter reference"
      }
    }
  },
  {
    id: 3,
    date: "2025-07-01",
    title: language === "nl" ? "Afghaanse Keuken" : "Afghan Kitchen",
    country: language === "nl" ? "Afghanistan" : "Afghanistan",
    cuisine: language === "nl" ? "Centraal-Aziatisch" : "Central Asian",
    chefs: ["Fatima", "Omar"],
    food: "Dessert",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    story: {
      images: [
        "/afghan-chef.jpg",
        "/kabul-kitchen.jpg",
        "/afghan-spices.jpg",
        "/afghan-bread.jpg",
        "/afghan-family.jpg"
      ],
      content: language === "nl" ? [
        "Fatima was de chef-kok van een prestigieus hotel in Kabul voordat ze gedwongen werd te vluchten vanwege de politieke onrust.",
        "Omar, een voormalige bakker, specialiseerde zich in het maken van traditioneel naan-brood in de beroemde ovens van de Kabul bazaar.",
        "Samen herontdekten ze hun passie voor koken in een vluchtelingenkamp in Pakistan, waar ze maaltijden bereidden voor duizenden ontheemden.",
        "Hun gerechten weerspiegelen de rijke geschiedenis van Afghanistan - een kruispunt van smaken uit Perzië, India en Centraal-Azië.",
        "Het menu van vanavond bevat Fatima's beroemde mantu (dumplings) en Omar's perfecte pulao rijst, recepten doorgegeven door generaties."
      ] : [
        "Fatima was head chef at a prestigious Kabul hotel before being forced to flee due to political unrest.",
        "Omar, a former baker, specialized in making traditional naan bread in the famous ovens of Kabul's bazaar.",
        "Together they rediscovered their passion for cooking in a Pakistani refugee camp, preparing meals for thousands of displaced people.",
        "Their dishes reflect Afghanistan's rich history - a crossroads of flavors from Persia, India, and Central Asia.",
        "Tonight's menu features Fatima's famous mantu dumplings and Omar's perfect pulao rice, recipes passed down through generations."
      ],
      quote: language === "nl" 
        ? "Elke maaltijd is een brug naar huis - we delen de warmte van Afghaanse gastvrijheid" 
        : "Every meal is a bridge to home - we share the warmth of Afghan hospitality"
    },
    paymentInfo: {
      note: language === "nl" 
        ? "Voer je E-mail of WhatsApp in en zodra je de betaling hebt voltooid, klik je op 'Betaling bevestigd'" 
        : "Enter your E-mail or WhatsApp and once you complete the payment, click on 'Payment confirmed'",
      nameLabel: language === "nl" ? "Voornaam" : "First name",
      lastNameLabel: language === "nl" ? "Achternaam" : "Last name",
      emailLabel: language === "nl" ? "E-mailadres" : "Email address",
      wspLabel: language === "nl" ? "WhatsApp-nummer" : "WhatsApp number",
      paymentRefLabel: language === "nl" ? "Betalingsreferentie" : "Payment reference",
      buttonText: language === "nl" ? "Betaling bevestigd" : "Payment confirmed",
      placeholders: {
        wsp: language === "nl" ? "Bijv: +31 123456789" : "E.g: +31 123456789",
        name: language === "nl" ? "Voer je voornaam in" : "Enter your first name",
        lastName: language === "nl" ? "Voer je achternaam in" : "Enter your last name",
        email: language === "nl" ? "Voer je e-mail in" : "Enter your email",
        paymentRef: language === "nl" ? "Voer referentie in" : "Enter reference"
      }
    }
  },
  {
    id: 4,
    date: "2025-08-05",
    title: language === "nl" ? "Marokkaanse Smaken" : "Moroccan Flavors",
    country: language === "nl" ? "Marokko" : "Morocco",
    cuisine: language === "nl" ? "Noord-Afrikaans" : "North African",
    chefs: ["Aicha", "Youssef"],
    food: "Starter",
    imageUrl: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    story: {
      images: [
        "/moroccan-chef.jpg",
        "/marrakech-souk.jpg",
        "/moroccan-tagine.jpg",
        "/moroccan-pastries.jpg",
        "/moroccan-mint-tea.jpg"
      ],
      content: language === "nl" ? [
        "Aicha erfde haar kennis van traditionele Marokkaanse patisserie van haar grootmoeder, die een beroemde banketbakkerij had in Marrakech.",
        "Youssef was eigenaar van een riad in de medina van Fez, waar hij gasten betoverde met zijn verfijnde tagines en aromatische theeceremonie.",
        "Hun culinaire partnerschap ontstond in een gemeenschapscentrum in Casablanca, waar ze kookworkshops gaven aan jongeren.",
        "Ze brengen de geheimen van ras el hanout kruimelmix en de kunst van perfect gestoomde couscous naar Europa.",
        "Hun dessertavond eindigt altijd met de traditionele Marokkaanse muntthee ceremonie, geserveerd met verse baklava en chebakia."
      ] : [
        "Aicha inherited her knowledge of traditional Moroccan pastry from her grandmother, who owned a famous bakery in Marrakech.",
        "Youssef owned a riad in Fez's medina, where he enchanted guests with his refined tagines and aromatic tea ceremony.",
        "Their culinary partnership began at a Casablanca community center where they taught cooking workshops to young people.",
        "They bring the secrets of ras el hanout spice blend and the art of perfectly steamed couscous to Europe.",
        "Their dessert evening always ends with the traditional Moroccan mint tea ceremony, served with fresh baklava and chebakia."
      ],
      quote: language === "nl" 
        ? "Onze desserts zijn gedichten van zoetheit - ze vertellen verhalen van Andalusische tuinen en woestijnoases" 
        : "Our desserts are poems of sweetness - they tell stories of Andalusian gardens and desert oases"
    },
    paymentInfo: {
      note: language === "nl" 
        ? "Voer je E-mail of WhatsApp in en zodra je de betaling hebt voltooid, klik je op 'Betaling bevestigd'" 
        : "Enter your E-mail or WhatsApp and once you complete the payment, click on 'Payment confirmed'",
      nameLabel: language === "nl" ? "Voornaam" : "First name",
      lastNameLabel: language === "nl" ? "Achternaam" : "Last name",
      emailLabel: language === "nl" ? "E-mailadres" : "Email address",
      wspLabel: language === "nl" ? "WhatsApp-nummer" : "WhatsApp number",
      paymentRefLabel: language === "nl" ? "Betalingsreferentie" : "Payment reference",
      buttonText: language === "nl" ? "Betaling bevestigd" : "Payment confirmed",
      placeholders: {
        wsp: language === "nl" ? "Bijv: +31 123456789" : "E.g: +31 123456789",
        name: language === "nl" ? "Voer je voornaam in" : "Enter your first name",
        lastName: language === "nl" ? "Voer je achternaam in" : "Enter your last name",
        email: language === "nl" ? "Voer je e-mail in" : "Enter your email",
        paymentRef: language === "nl" ? "Voer referentie in" : "Enter reference"
      }
    }
  },
  {
    id: 5,
    date: "2025-08-05",
    title: language === "nl" ? "Iraakse Tradities" : "Iraqi Traditions",
    country: language === "nl" ? "Irak" : "Iraq",
    cuisine: language === "nl" ? "Mesopotamisch" : "Mesopotamian",
    chefs: ["Zeinab", "Hakim"],
    food: "Dinner",
    imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    story: {
      images: [
        "/iraqi-chef.jpg",
        "/baghdad-river.jpg",
        "/iraqi-masgouf.jpg",
        "/iraqi-spices.jpg",
        "/iraqi-hospitality.jpg"
      ],
      content: language === "nl" ? [
        "Zeinab was chef-kok in een familie restaurant aan de Tigris rivier in Bagdad, beroemd om haar masgouf (gegrilde karper) bereiding.",
        "Hakim, een voormalige archeoloog, combineert zijn kennis van oude Mesopotamische keuken met moderne culinaire technieken.",
        "Hun samenwerking begon in een opvangcentrum in Jordanië, waar ze samen maaltijden bereidden die herinneringen aan thuis opriepen.",
        "Ze brengen de authentieke smaken van dolma, kubba en biryani naar Europa, bereid met traditionele Iraakse kruiden.",
        "Hun gerechten eren de rijke culinaire geschiedenis van Mesopotamië - de wieg van de beschaving en de landbouw."
      ] : [
        "Zeinab was head chef at a family restaurant on Baghdad's Tigris River, famous for her masgouf (grilled carp) preparation.",
        "Hakim, a former archaeologist, combines his knowledge of ancient Mesopotamian cuisine with modern culinary techniques.",
        "Their collaboration began at a Jordanian refugee center where they cooked meals that evoked memories of home.",
        "They bring authentic flavors of dolma, kubba, and biryani to Europe, prepared with traditional Iraqi spices.",
        "Their dishes honor the rich culinary history of Mesopotamia - the cradle of civilization and agriculture."
      ],
      quote: language === "nl" 
        ? "Onze keuken draagt de wijsheid van duizenden jaren - elke gerecht vertelt het verhaal van onze voorouders" 
        : "Our cuisine carries the wisdom of thousands of years - every dish tells the story of our ancestors"
    },
    paymentInfo: {
      note: language === "nl" 
        ? "Voer je E-mail of WhatsApp in en zodra je de betaling hebt voltooid, klik je op 'Betaling bevestigd'" 
        : "Enter your E-mail or WhatsApp and once you complete the payment, click on 'Payment confirmed'",
      nameLabel: language === "nl" ? "Voornaam" : "First name",
      lastNameLabel: language === "nl" ? "Achternaam" : "Last name",
      emailLabel: language === "nl" ? "E-mailadres" : "Email address",
      wspLabel: language === "nl" ? "WhatsApp-nummer" : "WhatsApp number",
      paymentRefLabel: language === "nl" ? "Betalingsreferentie" : "Payment reference",
      buttonText: language === "nl" ? "Betaling bevestigd" : "Payment confirmed",
      placeholders: {
        wsp: language === "nl" ? "Bijv: +31 123456789" : "E.g: +31 123456789",
        name: language === "nl" ? "Voer je voornaam in" : "Enter your first name",
        lastName: language === "nl" ? "Voer je achternaam in" : "Enter your last name",
        email: language === "nl" ? "Voer je e-mail in" : "Enter your email",
        paymentRef: language === "nl" ? "Voer referentie in" : "Enter reference"
      }
    }
  },
  {
    id: 6,
    date: "2025-08-05",
    title: language === "nl" ? "Somalische Specialiteiten" : "Somali Specialties",
    country: language === "nl" ? "Somalië" : "Somalia",
    cuisine: language === "nl" ? "Hoorn van Afrika" : "Horn of Africa",
    chefs: ["Khadija", "Ahmed"],
    food: "Dessert",
    imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    story: {
      images: [
        "/somali-chef.jpg",
        "/mogadishu-market.jpg",
        "/somali-anjero.jpg",
        "/somali-spices.jpg",
        "/somali-community.jpg"
      ],
      content: language === "nl" ? [
        "Khadija was eigenaar van een populair restaurant in Mogadishu, bekend om haar perfecte anjero (sourdough pannenkoeken) en aromatische pasta gerechten.",
        "Ahmed, een voormalige handelaar, bracht zijn kennis van specerijen en handelsroutes mee uit de haven van Berbera.",
        "Hun culinaire reis begon in een vluchtelingenkamp in Kenia, waar ze de gemeenschap samenbrachten door het delen van traditionele maaltijden.",
        "Ze kombineren Somalische tradities met Italiaanse invloeden - een erfenis van de koloniale geschiedenis die unieke fusion gerechten creëert.",
        "Hun menu bevat authentieke sambusas, suqaar (gekruide vlees), en de beroemde Somalische banaan rijst combinaties."
      ] : [
        "Khadija owned a popular restaurant in Mogadishu, known for her perfect anjero (sourdough pancakes) and aromatic pasta dishes.",
        "Ahmed, a former trader, brought his knowledge of spices and trade routes from the port of Berbera.",
        "Their culinary journey began in a Kenyan refugee camp where they brought the community together by sharing traditional meals.",
        "They combine Somali traditions with Italian influences - a legacy of colonial history that creates unique fusion dishes.",
        "Their menu features authentic sambusas, suqaar (spiced meat), and the famous Somali banana-rice combinations."
      ],
      quote: language === "nl" 
        ? "Ons eten verbindt oceanen en culturen - we brengen de smaken van de Indische Oceaan naar jullie tafel" 
        : "Our food connects oceans and cultures - we bring the flavors of the Indian Ocean to your table"
    },
    paymentInfo: {
      note: language === "nl" 
        ? "Voer je E-mail of WhatsApp in en zodra je de betaling hebt voltooid, klik je op 'Betaling bevestigd'" 
        : "Enter your E-mail or WhatsApp and once you complete the payment, click on 'Payment confirmed'",
      nameLabel: language === "nl" ? "Voornaam" : "First name",
      lastNameLabel: language === "nl" ? "Achternaam" : "Last name",
      emailLabel: language === "nl" ? "E-mailadres" : "Email address",
      wspLabel: language === "nl" ? "WhatsApp-nummer" : "WhatsApp number",
      paymentRefLabel: language === "nl" ? "Betalingsreferentie" : "Payment reference",
      buttonText: language === "nl" ? "Betaling bevestigd" : "Payment confirmed",
      placeholders: {
        wsp: language === "nl" ? "Bijv: +31 123456789" : "E.g: +31 123456789",
        name: language === "nl" ? "Voer je voornaam in" : "Enter your first name",
        lastName: language === "nl" ? "Voer je achternaam in" : "Enter your last name",
        email: language === "nl" ? "Voer je e-mail in" : "Enter your email",
        paymentRef: language === "nl" ? "Voer referentie in" : "Enter reference"
      }
    }
  }
];