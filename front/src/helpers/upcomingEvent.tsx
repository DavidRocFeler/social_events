// src/helpers/upcomingEvents.ts
import { IEvent } from "@/interface/types";

export const getUpcomingEvents = (language: "nl" | "en"): IEvent[] => [

  {
    id: 1,
    date: "2025-07-01",
    title: language === "nl" ? "Causa Asevichada" : "Causa Asevichada",
    country: language === "nl" ? "Peru" : "Peru",
    cuisine: language === "nl" ? "Zuid-Amerika" : "South America",
    chefs: ["Claudia"],
    food: "Starter",
    imageUrl: "https://dondefreddys.com/wp-content/uploads/2024/11/3-donde-freddys-causa-acevichada_11zon.webp",
    story: {
      images: [
        {
          url: "https://dondefreddys.com/wp-content/uploads/2024/11/3-donde-freddys-causa-acevichada_11zon.webp",
          title: "Causa Acevichada"
        },
        {
          url: "https://terandes.com/wp-content/uploads/2022/10/Causa-Limena-900x599.webp",
          title: "Causa"
        },
        {
          url: "https://perucomidas.com/wp-content/uploads/2024/04/ceviche.png",
          title: "Ceviche"
        },
        {
          url: "https://revistasoyviajero.com/wp-content/uploads/2022/05/Lugares-para-visitar-en-Peru.jpg",
          title: "Machu Picchu"
        },
        {
          url: "https://thumbs.dreamstime.com/b/acantilados-en-la-costa-del-océano-pacífico-cerca-de-miraflores-lima-al-atardecer-perú-362403464.jpg",
          title: language === "nl" ? "Miraflores Klifpad" : "Miraflores Cliffside Walk"
        }
      ],
    content: language === "nl" ? [
      "Stel je een perfecte harmonie voor tussen twee iconen van de Peruaanse gastronomie: de klassieke Causa limeña en de levendige Ceviche. Dit gerecht is niet zomaar een lekkernij, het is een culinair meesterwerk dat zowel smaakpapillen als blikken verovert. In de straten van Lima, waar de lucht naar zee en limoen ruikt, werd een verboden liefde geboren: de ontmoeting van twee Peruaanse legendes—de nederige maar edele Causa en de verleidelijke Ceviche. Een verhaal dat begon in de tijd van de onderkoningen, toen pre-Columbiaanse vissers hun vis marineerden met tumbo-fruit, en Andesvrouwen gele aardappelen kneedden met ají-pepers. Gescheiden door traditie bracht het lot hen eeuwen later samen in een huwelijk van smaken dat de wereld nu doet watertanden. De eerste hap verrast altijd. De frisse zachtheid van gele aardappelpuree—diezelfde die rijken voedde—omarmt de stevige textuur van ceviche vers 'gekookt' in limoen. Een contrast dat niet zou moeten werken, maar het doet het. Meesterlijk. Dit is het wonder van causa acevichada: de onmogelijke ontmoeting tussen twee Peruaanse klassiekers waar de wereld nu jaloers op is. Het verhaal begint op de markten van Lima in de 21e eeuw, waar een anonieme genie de regels besloot te breken. Waarom scheiden wat het lot wilde verenigen? Ze namen de limeña causa—geboren in koloniale keukens als een mix van voorouderlijke aardappelen en gouden ají—en vulden het met ceviche, dat kustgerecht dat vissers bereidden met de vangst van de dag en limoen gebracht door de Spanjaarden. Het resultaat was een gastronomische revolutie. Vandaag serveren de beste restaurants van Peru het als een meesterwerk: lagen van intense gele puree die gemarineerde visstukjes verbergen, gekroond met tijgermelk veranderd in schuim en knapperige zoete-aardappelchips. Foodies staan in de rij om het te fotograferen; buitenlandse chefs reizen naar Lima alleen om zijn magie te ontcijferen. Want causa acevichada is geen simpele fusie: het is het bewijs dat de Peruaanse keuken zijn erfenis blijft heruitvinden. Wanneer de vork door de lagen gaat en het hart van het gerecht bereikt, begrijp je waarom deze smaak smaakpapillen verovert: het draagt de ziel van Peru in zich. Het land in de aardappel, de zee in de ceviche, en die vonk van creativiteit die deze keuken tot een van de meest bewonderde ter wereld maakt. Eén hap is genoeg om te weten dat hier iets buitengewoons is geboren."
    ] : [
     "Imagine a perfect harmony between two icons of Peruvian gastronomy: the classic Causa limeña and the vibrant Ceviche. This dish is not just a delight, it's a culinary masterpiece that conquers palates and gazes alike. In the streets of Lima, where the air smells of sea and lime, a forbidden love was born: the encounter of two Peruvian legends—the humble yet noble Causa and the seductive Ceviche. A story that began in the time of the viceroys, when pre-Columbian fishermen marinated their fish with tumbo fruit, and Andean women kneaded yellow potatoes with ají peppers. Separated by tradition, destiny united them centuries later in a marriage of flavors that now drives the world wild. The first bite always surprises. The fresh smoothness of yellow potato purée—the very one that nourished empires—embraces the firm texture of ceviche freshly 'cooked' in lime. A contrast that shouldn't work, but it does. Masterfully. This is the miracle of causa acevichada: the impossible encounter between two Peruvian classics that the world now envies. Its story begins in Lima's 21st century markets, where some anonymous genius decided to break the rules. Why separate what destiny wanted to unite? They took the limeña causa—born in colonial kitchens as a mix of ancestral potatoes and golden ají—and stuffed it with ceviche, that coastal dish fishermen prepared with the day's catch and lime brought by the Spaniards. The result was a gastronomic revolution. Today, Peru's finest restaurants serve it as a masterpiece: layers of intense yellow purée hiding marinated fish pieces, crowned with tiger's milk turned into foam and crispy sweet potato chips. Foodies line up to photograph it; foreign chefs travel to Lima just to decipher its magic. Because causa acevichada isn't simple fusion: it's proof that Peruvian cuisine keeps reinventing its legacy. When the fork pierces through the layers and reaches the heart of the dish, you understand why this flavor conquers palates: it carries Peru's soul. The land in the potato, the sea in the ceviche, and that spark of creativity that makes this cuisine one of the most admired in the world. One bite is enough to know something extraordinary was born here."
    ],
    quote: language === "nl" 
      ? "Het verhaal van een land dat culturen, smaken en trots vermengt. Want elke hap is tegelijk erfgoed en culinair vernuft."
      : "The story of a country that blends cultures, flavors, and pride. Because every bite is both heritage and culinary innovation.",
    },
  },
  {
    id: 2,
    date: "2025-07-01",
    title: language === "nl" ? "Iraakse Biryani" : "Iraqi Biryani",
    country: language === "nl" ? "Irak" : "Irak",
    cuisine: language === "nl" ? "Midden-Oosten" : "Middle East",
    chefs: ["Amira", "Bassam"],
    food: "Dinner",
    imageUrl: "/irakiFood.png",
    story: {
      images: [
        {
          url: "https://visitiraqnow.com/products/product-4212f76c-1cfa-47c0-966a-a51c590766df-1727690990860-cover.webp",
          title: "Iraqi Biryani"
        },
        {
          url: "https://www.islamicspain.tv/wp-content/uploads/sites/271/2019/10/spice-souq-750x502.jpg",
          title: "Baghdad Spice market"
        },
        {
          url: "https://content-historia.nationalgeographic.com.es/medio/2020/01/16/persepolis-alejandro-magno_dd68ae11_1280x720.jpg",
          title: "Persian influence"
        },
        {
          url: "https://ucarecdn.com/2145046f-df0a-41f1-a59e-f6ad4235b5be/-/crop/999x1350/1%2C0/-/preview/-/scale_crop/496x670/-/quality/smart/-/format/preserve/",
          title: "Iraqi Biryani"
        },
        {
          url: "https://www.goodfoodforgoodhealth.com.au/app/uploads/2023/02/iraqi-biryani.jpg",
          title: "Iraqi Biryani"
        }
      ],
    content: language === "nl" ? [
      "In the heart of Mesopotamia, where the Tigris and Euphrates rivers cradle ancient civilizations, Iraqi Biryani was born—not just as a dish, but as a testament to Iraq’s rich cultural tapestry. Unlike its South Asian counterparts, this biryani carries the legacy of Baghdad’s spice markets, Persian influences, and the hearty flavors of Arab hospitality. The story begins centuries ago, when trade routes connected Iraq to India and Persia, bringing cardamom, cinnamon, and basmati rice to its bustling bazaars. Iraqi cooks, masters of slow-cooked meats and aromatic stews, adapted these spices to their own traditions. Instead of the layered biryanis of the East, they crafted a hearty, one-pot dish—tender lamb or chicken simmered with rice, perfumed with saffron and caramelized onions, and studded with raisins and almonds for a touch of sweetness. What makes Iraqi Biryani unique is its soul. It’s the dish served at weddings, a symbol of generosity; the comfort food shared during Ramadan after a long day of fasting. The golden rice, stained with turmeric and tomato, tells of Ottoman influences, while the generous use of dried fruits and nuts whispers of Persia. Some say the addition of potatoes, a later colonial touch, reflects the adaptability of Iraqi cuisine. This is no ordinary rice dish—it’s a celebration of resilience. Through wars and upheavals, Iraqi Biryani has remained a constant, a fragrant reminder of home for families scattered across the world. Each bite carries the warmth of Iraqi kitchens, where recipes are passed down not with measurements, but with stories. To taste Iraqi Biryani is to taste history—a harmony of empires, trade, and the simple joy of a well-spiced meal shared among loved ones."
    ] : [
      "In het hart van Mesopotamië, waar de Tigris en de Eufraat rivieren oude beschavingen omarmen, werd de Iraakse Biryani geboren—niet alleen als een gerecht, maar als een bewijs van het rijke culturele tapijt van Irak. Anders dan zijn Zuid-Aziatische tegenhangers, draagt deze biryani de erfenis van de specerijenmarkten van Bagdad, Perzische invloeden en de hartige smaken van Arabische gastvrijheid. Het verhaal begint eeuwen geleden, toen handelsroutes Irak verbonden met India en Perzië, waardoor kardemom, kaneel en basmatirijst naar de bruisende bazaars werden gebracht. Iraakse koks, meesters in langzaam gegaard vlees en aromatische stoofschotels, pasten deze specerijen aan hun eigen tradities aan. In plaats van de gelaagde biryani’s van het Oosten, maakten zij een stevig eenpansgerecht—mals lams- of kippenvlees gekookt met rijst, doordrenkt van saffraan en karamelliseren uien, en verrijkt met rozijnen en amandelen voor een vleugje zoetheid. Wat de Iraakse Biryani uniek maakt, is zijn ziel. Het is het gerecht dat op bruiloften wordt geserveerd, een symbool van gulheid; het troostrijke eten dat tijdens Ramadan wordt gedeeld na een lange dag vasten. De gouden rijst, gekleurd door kurkuma en tomaat, vertelt van Ottomaanse invloeden, terwijl het royale gebruik van gedroogd fruit en noten fluistert van Perzië. Sommigen zeggen dat de toevoeging van aardappelen, een latere koloniale touch, de aanpassingsvermogen van de Iraakse keuken weerspiegelt. Dit is geen gewoon rijstgerecht—het is een viering van veerkracht. Door oorlogen en omwentelingen heen is de Iraakse Biryani een constante gebleven, een geurige herinnering aan thuis voor families die over de wereld verspreid zijn. Elke hap draagt de warmte van Iraakse keukens, waar recepten niet met maten worden doorgegeven, maar met verhalen. De Iraakse Biryani proeven is geschiedenis proeven—een harmonie van rijken, handel en het simpele geluk van een goed gekruide maaltijd, gedeeld met geliefden."
          ],
    quote: language === "nl" 
      ? "Het verhaal van een land dat culturen, smaken en trots vermengt. Want elke hap is tegelijk erfgoed en culinair vernuft."
      : "A dish that survived empires, carrying the scent of Baghdad’s alleys and the generosity of its people.",
    },
  },

  {
    id: 3,
    date: "2025-07-01",
    title: language === "nl" ? "Madluoka" : "Madluoka",
    country: language === "nl" ? "Syrië" : "Syria",
    cuisine: language === "nl" ? "Midden-Oosten" : "Middle East",
    chefs: ["Fatima", "Omar"],
    food: "Dessert",
    imageUrl: "/Madlouka.png",
    story: {
      images: [
        {
          url: "/Madlouka.png",
          title: "Syrian Madlouka"
        },
        {
          url: "https://habibahsweets.com/wp-content/uploads/2024/10/Madlouka-with-Cream.webp",
          title: "Syrian Madlouka"
        },
        {
          url: "https://chefindisguise.com/wp-content/uploads/2023/04/madlooka-2.jpg",
          title: "Madlouka ingredients"
        },
        {
          url: "https://cdn.loquis.com/prod/loquis/pictures/6caaf230-bf90-48ee-ab2c-8a61bfde58b5-720.jpg",
          title: "Old Damasco City"
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Citadel_of_Aleppo.jpg",
          title: 'Old Alepo City',
        }
      ],
    content: language === "nl" ? [
      'In de eeuwenoude straatjes van Damascus, waar de geur van bloesems vermengd raakt met het geroezemoes van de soeks, ontstond Madlouka—een nagerecht dat de gulheid van Syrië samenvat. De naam komt van het Arabische "maldar" (omdraaien), wat haar geheim verklapt: een cake van griesmeel en room, die bij het serveren ondersteboven wordt gekeerd om haar gouden, zijdezachte kern te onthullen. Het verhaal begint in de ovens van oude wijken, waar Syrische koks, meesters in het balanceren van eenvoud en verfijning, een zoetigheid wilden maken die overvloed viert zonder pronk. Geïnspireerd door lokale ingrediënten—fijn griesmeel als woestijnzand, melk geparfumeerd met rozenwater, en pistachenoten uit Aleppo—creëerden ze een toetje dat pure alchemie is: simpel van buiten, maar koninklijk van smaak. Madlouka hoort bij intieme vieringen: ze wordt geserveerd op bruiloften om geluk te brengen, en tijdens Ramadan om de vasten te verbreken. Haar textuur—zacht maar stevig—eert de Syrische traditie van contrasten: aards griesmeel tegenover romige melk, knapperige pistachenoten tegen smeltende suiker. Achter haar eenvoud schuilt een eeuwenoude geschiedenis: Het griesmeel, een erfenis van het Ottomaanse Rijk. Het rozenwater, meegebracht via Perzische handelsroutes. De pistachenoten van Aleppo, al sinds de Fenicische tijd beroemd. Vandaag, temidden van Syriës uitdagingen, blijft Madlouka een symbool van veerkracht. Families in diaspora maken het ver van huis, met recepten in oude notitieboekjes. Elke omgekeerde portie is een liefdesdaad—een manier om te zeggen: "wij dragen ons thuisland in elke hap." Proeven is reizen naar een tijdloos Syrië: waar grootmoeders geheimen doorgeven, en waar zoetheid nooit opgeeft—zelfs niet in moeilijke tijden.'    
          ] : [
      'In the ancient alleys of Damascus, where the scent of orange blossoms mingles with the echoes of bustling souks, Madlouka was born—a dessert that embodies Syria’s generous soul. Its name comes from the Arabic word "maldar" (to flip), revealing its essence: a semolina and cream cake turned upside down when served, unveiling its golden, silken heart. The story begins in the ovens of Old City neighborhoods, where Syrian cooks, masters of balancing simplicity and grandeur, sought to create a dessert celebrating abundance without extravagance. Inspired by local ingredients—fine semolina like desert sand, rosewater-infused milk, and Aleppo’s famed pistachios—they crafted a treat that’s pure alchemy: humble in appearance, yet regal in flavor. Madlouka is the dessert of intimate celebrations: served at weddings to bless couples with sweetness, and during Ramadan to break the fast with energy. Its texture—creamy yet firm—pays homage to Syria’s love of contrasts: earthy semolina against fresh cream, crunchy pistachios against melt-in-your-mouth sugar. Behind its simplicity lies centuries of history: The semolina, a legacy of the Ottoman Empire, which brought golden grains to the region. The rosewater, a gift from Persian trade routes. Aleppo’s pistachios, prized across the Middle East since the days of Phoenician merchants. Today, as Syria endures hardships, Madlouka remains a symbol of resilience. Families in diaspora recreate it far from home, using recipes scribbled in trembling handwriting on old notebooks. Every flipped serving is an act of love—a way to whisper, "here, we carry our homeland in every bite." To taste it is to journey to an eternal Syria: where grandmothers pass culinary secrets to their granddaughters, and where sweetness refuses to surrender, even in bitter times.'    
          ],
    quote: language === "nl" 
      ? "Een nagerecht dat het leven weerspiegelt: soms ondersteboven, maar altijd met een gouden kant."
      : "A dessert flipped like life itself, yet always landing golden-side up.",
    },
  },
  // {
  //   id: 4,
  //   date: "2025-08-05",
  //   title: language === "nl" ? "Marokkaanse Smaken" : "Moroccan Flavors",
  //   country: language === "nl" ? "Marokko" : "Morocco",
  //   cuisine: language === "nl" ? "Noord-Afrikaans" : "North African",
  //   chefs: ["Aicha", "Youssef"],
  //   food: "Starter",
  //   imageUrl: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //   story: {
  //     images: [
  //       {
  //         url: "https://dondefreddys.com/wp-content/uploads/2024/11/3-donde-freddys-causa-acevichada_11zon.webp",
  //         title: "Causa Acevichada"
  //       },
  //       {
  //         url: "https://terandes.com/wp-content/uploads/2022/10/Causa-Limena-900x599.webp",
  //         title: "Causa"
  //       },
  //       {
  //         url: "https://perucomidas.com/wp-content/uploads/2024/04/ceviche.png",
  //         title: "Ceviche"
  //       },
  //       {
  //         url: "https://revistasoyviajero.com/wp-content/uploads/2022/05/Lugares-para-visitar-en-Peru.jpg",
  //         title: "Machu Picchu"
  //       },
  //       {
  //         url: "https://thumbs.dreamstime.com/b/acantilados-en-la-costa-del-océano-pacífico-cerca-de-miraflores-lima-al-atardecer-perú-362403464.jpg",
  //         title: language === "nl" ? "Miraflores Klifpad" : "Miraflores Cliffside Walk"
  //       }
  //     ],
  //   content: language === "nl" ? [
  //     "Stel je een perfecte harmonie voor tussen twee iconen van de Peruaanse gastronomie: de klassieke Causa limeña en de levendige Ceviche. Dit gerecht is niet zomaar een lekkernij, het is een culinair meesterwerk dat zowel smaakpapillen als blikken verovert. In de straten van Lima, waar de lucht naar zee en limoen ruikt, werd een verboden liefde geboren: de ontmoeting van twee Peruaanse legendes—de nederige maar edele Causa en de verleidelijke Ceviche. Een verhaal dat begon in de tijd van de onderkoningen, toen pre-Columbiaanse vissers hun vis marineerden met tumbo-fruit, en Andesvrouwen gele aardappelen kneedden met ají-pepers. Gescheiden door traditie bracht het lot hen eeuwen later samen in een huwelijk van smaken dat de wereld nu doet watertanden. De eerste hap verrast altijd. De frisse zachtheid van gele aardappelpuree—diezelfde die rijken voedde—omarmt de stevige textuur van ceviche vers 'gekookt' in limoen. Een contrast dat niet zou moeten werken, maar het doet het. Meesterlijk. Dit is het wonder van causa acevichada: de onmogelijke ontmoeting tussen twee Peruaanse klassiekers waar de wereld nu jaloers op is. Het verhaal begint op de markten van Lima in de 21e eeuw, waar een anonieme genie de regels besloot te breken. Waarom scheiden wat het lot wilde verenigen? Ze namen de limeña causa—geboren in koloniale keukens als een mix van voorouderlijke aardappelen en gouden ají—en vulden het met ceviche, dat kustgerecht dat vissers bereidden met de vangst van de dag en limoen gebracht door de Spanjaarden. Het resultaat was een gastronomische revolutie. Vandaag serveren de beste restaurants van Peru het als een meesterwerk: lagen van intense gele puree die gemarineerde visstukjes verbergen, gekroond met tijgermelk veranderd in schuim en knapperige zoete-aardappelchips. Foodies staan in de rij om het te fotograferen; buitenlandse chefs reizen naar Lima alleen om zijn magie te ontcijferen. Want causa acevichada is geen simpele fusie: het is het bewijs dat de Peruaanse keuken zijn erfenis blijft heruitvinden. Wanneer de vork door de lagen gaat en het hart van het gerecht bereikt, begrijp je waarom deze smaak smaakpapillen verovert: het draagt de ziel van Peru in zich. Het land in de aardappel, de zee in de ceviche, en die vonk van creativiteit die deze keuken tot een van de meest bewonderde ter wereld maakt. Eén hap is genoeg om te weten dat hier iets buitengewoons is geboren."
  //   ] : [
  //    "Imagine a perfect harmony between two icons of Peruvian gastronomy: the classic Causa limeña and the vibrant Ceviche. This dish is not just a delight, it's a culinary masterpiece that conquers palates and gazes alike. In the streets of Lima, where the air smells of sea and lime, a forbidden love was born: the encounter of two Peruvian legends—the humble yet noble Causa and the seductive Ceviche. A story that began in the time of the viceroys, when pre-Columbian fishermen marinated their fish with tumbo fruit, and Andean women kneaded yellow potatoes with ají peppers. Separated by tradition, destiny united them centuries later in a marriage of flavors that now drives the world wild. The first bite always surprises. The fresh smoothness of yellow potato purée—the very one that nourished empires—embraces the firm texture of ceviche freshly 'cooked' in lime. A contrast that shouldn't work, but it does. Masterfully. This is the miracle of causa acevichada: the impossible encounter between two Peruvian classics that the world now envies. Its story begins in Lima's 21st century markets, where some anonymous genius decided to break the rules. Why separate what destiny wanted to unite? They took the limeña causa—born in colonial kitchens as a mix of ancestral potatoes and golden ají—and stuffed it with ceviche, that coastal dish fishermen prepared with the day's catch and lime brought by the Spaniards. The result was a gastronomic revolution. Today, Peru's finest restaurants serve it as a masterpiece: layers of intense yellow purée hiding marinated fish pieces, crowned with tiger's milk turned into foam and crispy sweet potato chips. Foodies line up to photograph it; foreign chefs travel to Lima just to decipher its magic. Because causa acevichada isn't simple fusion: it's proof that Peruvian cuisine keeps reinventing its legacy. When the fork pierces through the layers and reaches the heart of the dish, you understand why this flavor conquers palates: it carries Peru's soul. The land in the potato, the sea in the ceviche, and that spark of creativity that makes this cuisine one of the most admired in the world. One bite is enough to know something extraordinary was born here."
  //   ],
  //   quote: language === "nl" 
  //     ? "Het verhaal van een land dat culturen, smaken en trots vermengt. Want elke hap is tegelijk erfgoed en culinair vernuft."
  //     : "The story of a country that blends cultures, flavors, and pride. Because every bite is both heritage and culinary innovation.",
  //   },
  // },
  // {
  //   id: 5,
  //   date: "2025-08-05",
  //   title: language === "nl" ? "Iraakse Tradities" : "Iraqi Traditions",
  //   country: language === "nl" ? "Irak" : "Iraq",
  //   cuisine: language === "nl" ? "Mesopotamisch" : "Mesopotamian",
  //   chefs: ["Zeinab", "Hakim"],
  //   food: "Dinner",
  //   imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //   story: {
  //     images: [
  //       {
  //         url: "https://dondefreddys.com/wp-content/uploads/2024/11/3-donde-freddys-causa-acevichada_11zon.webp",
  //         title: "Causa Acevichada"
  //       },
  //       {
  //         url: "https://terandes.com/wp-content/uploads/2022/10/Causa-Limena-900x599.webp",
  //         title: "Causa"
  //       },
  //       {
  //         url: "https://perucomidas.com/wp-content/uploads/2024/04/ceviche.png",
  //         title: "Ceviche"
  //       },
  //       {
  //         url: "https://revistasoyviajero.com/wp-content/uploads/2022/05/Lugares-para-visitar-en-Peru.jpg",
  //         title: "Machu Picchu"
  //       },
  //       {
  //         url: "https://thumbs.dreamstime.com/b/acantilados-en-la-costa-del-océano-pacífico-cerca-de-miraflores-lima-al-atardecer-perú-362403464.jpg",
  //         title: language === "nl" ? "Miraflores Klifpad" : "Miraflores Cliffside Walk"
  //       }
  //     ],
  //   content: language === "nl" ? [
  //     "Stel je een perfecte harmonie voor tussen twee iconen van de Peruaanse gastronomie: de klassieke Causa limeña en de levendige Ceviche. Dit gerecht is niet zomaar een lekkernij, het is een culinair meesterwerk dat zowel smaakpapillen als blikken verovert. In de straten van Lima, waar de lucht naar zee en limoen ruikt, werd een verboden liefde geboren: de ontmoeting van twee Peruaanse legendes—de nederige maar edele Causa en de verleidelijke Ceviche. Een verhaal dat begon in de tijd van de onderkoningen, toen pre-Columbiaanse vissers hun vis marineerden met tumbo-fruit, en Andesvrouwen gele aardappelen kneedden met ají-pepers. Gescheiden door traditie bracht het lot hen eeuwen later samen in een huwelijk van smaken dat de wereld nu doet watertanden. De eerste hap verrast altijd. De frisse zachtheid van gele aardappelpuree—diezelfde die rijken voedde—omarmt de stevige textuur van ceviche vers 'gekookt' in limoen. Een contrast dat niet zou moeten werken, maar het doet het. Meesterlijk. Dit is het wonder van causa acevichada: de onmogelijke ontmoeting tussen twee Peruaanse klassiekers waar de wereld nu jaloers op is. Het verhaal begint op de markten van Lima in de 21e eeuw, waar een anonieme genie de regels besloot te breken. Waarom scheiden wat het lot wilde verenigen? Ze namen de limeña causa—geboren in koloniale keukens als een mix van voorouderlijke aardappelen en gouden ají—en vulden het met ceviche, dat kustgerecht dat vissers bereidden met de vangst van de dag en limoen gebracht door de Spanjaarden. Het resultaat was een gastronomische revolutie. Vandaag serveren de beste restaurants van Peru het als een meesterwerk: lagen van intense gele puree die gemarineerde visstukjes verbergen, gekroond met tijgermelk veranderd in schuim en knapperige zoete-aardappelchips. Foodies staan in de rij om het te fotograferen; buitenlandse chefs reizen naar Lima alleen om zijn magie te ontcijferen. Want causa acevichada is geen simpele fusie: het is het bewijs dat de Peruaanse keuken zijn erfenis blijft heruitvinden. Wanneer de vork door de lagen gaat en het hart van het gerecht bereikt, begrijp je waarom deze smaak smaakpapillen verovert: het draagt de ziel van Peru in zich. Het land in de aardappel, de zee in de ceviche, en die vonk van creativiteit die deze keuken tot een van de meest bewonderde ter wereld maakt. Eén hap is genoeg om te weten dat hier iets buitengewoons is geboren."
  //   ] : [
  //    "Imagine a perfect harmony between two icons of Peruvian gastronomy: the classic Causa limeña and the vibrant Ceviche. This dish is not just a delight, it's a culinary masterpiece that conquers palates and gazes alike. In the streets of Lima, where the air smells of sea and lime, a forbidden love was born: the encounter of two Peruvian legends—the humble yet noble Causa and the seductive Ceviche. A story that began in the time of the viceroys, when pre-Columbian fishermen marinated their fish with tumbo fruit, and Andean women kneaded yellow potatoes with ají peppers. Separated by tradition, destiny united them centuries later in a marriage of flavors that now drives the world wild. The first bite always surprises. The fresh smoothness of yellow potato purée—the very one that nourished empires—embraces the firm texture of ceviche freshly 'cooked' in lime. A contrast that shouldn't work, but it does. Masterfully. This is the miracle of causa acevichada: the impossible encounter between two Peruvian classics that the world now envies. Its story begins in Lima's 21st century markets, where some anonymous genius decided to break the rules. Why separate what destiny wanted to unite? They took the limeña causa—born in colonial kitchens as a mix of ancestral potatoes and golden ají—and stuffed it with ceviche, that coastal dish fishermen prepared with the day's catch and lime brought by the Spaniards. The result was a gastronomic revolution. Today, Peru's finest restaurants serve it as a masterpiece: layers of intense yellow purée hiding marinated fish pieces, crowned with tiger's milk turned into foam and crispy sweet potato chips. Foodies line up to photograph it; foreign chefs travel to Lima just to decipher its magic. Because causa acevichada isn't simple fusion: it's proof that Peruvian cuisine keeps reinventing its legacy. When the fork pierces through the layers and reaches the heart of the dish, you understand why this flavor conquers palates: it carries Peru's soul. The land in the potato, the sea in the ceviche, and that spark of creativity that makes this cuisine one of the most admired in the world. One bite is enough to know something extraordinary was born here."
  //   ],
  //   quote: language === "nl" 
  //     ? "Het verhaal van een land dat culturen, smaken en trots vermengt. Want elke hap is tegelijk erfgoed en culinair vernuft."
  //     : "The story of a country that blends cultures, flavors, and pride. Because every bite is both heritage and culinary innovation.",
  //   },
  // },
  // {
  //   id: 6,
  //   date: "2025-08-05",
  //   title: language === "nl" ? "Somalische Specialiteiten" : "Somali Specialties",
  //   country: language === "nl" ? "Somalië" : "Somalia",
  //   cuisine: language === "nl" ? "Hoorn van Afrika" : "Horn of Africa",
  //   chefs: ["Khadija", "Ahmed"],
  //   food: "Dessert",
  //   imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //   story: {
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //         title: "Causa Acevichada"
  //       },
  //       {
  //         url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //         title: "Causa"
  //       },
  //       {
  //         url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //         title: "Ceviche"
  //       },
  //       {
  //         url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //         title: "Machu Picchu"
  //       },
  //       {
  //         url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  //         title: language === "nl" ? "Miraflores Klifpad" : "Miraflores Cliffside Walk"
  //       }
  //     ],
  //   content: language === "nl" ? [
  //     "Stel je een perfecte harmonie voor tussen twee iconen van de Peruaanse gastronomie: de klassieke Causa limeña en de levendige Ceviche. Dit gerecht is niet zomaar een lekkernij, het is een culinair meesterwerk dat zowel smaakpapillen als blikken verovert. In de straten van Lima, waar de lucht naar zee en limoen ruikt, werd een verboden liefde geboren: de ontmoeting van twee Peruaanse legendes—de nederige maar edele Causa en de verleidelijke Ceviche. Een verhaal dat begon in de tijd van de onderkoningen, toen pre-Columbiaanse vissers hun vis marineerden met tumbo-fruit, en Andesvrouwen gele aardappelen kneedden met ají-pepers. Gescheiden door traditie bracht het lot hen eeuwen later samen in een huwelijk van smaken dat de wereld nu doet watertanden. De eerste hap verrast altijd. De frisse zachtheid van gele aardappelpuree—diezelfde die rijken voedde—omarmt de stevige textuur van ceviche vers 'gekookt' in limoen. Een contrast dat niet zou moeten werken, maar het doet het. Meesterlijk. Dit is het wonder van causa acevichada: de onmogelijke ontmoeting tussen twee Peruaanse klassiekers waar de wereld nu jaloers op is. Het verhaal begint op de markten van Lima in de 21e eeuw, waar een anonieme genie de regels besloot te breken. Waarom scheiden wat het lot wilde verenigen? Ze namen de limeña causa—geboren in koloniale keukens als een mix van voorouderlijke aardappelen en gouden ají—en vulden het met ceviche, dat kustgerecht dat vissers bereidden met de vangst van de dag en limoen gebracht door de Spanjaarden. Het resultaat was een gastronomische revolutie. Vandaag serveren de beste restaurants van Peru het als een meesterwerk: lagen van intense gele puree die gemarineerde visstukjes verbergen, gekroond met tijgermelk veranderd in schuim en knapperige zoete-aardappelchips. Foodies staan in de rij om het te fotograferen; buitenlandse chefs reizen naar Lima alleen om zijn magie te ontcijferen. Want causa acevichada is geen simpele fusie: het is het bewijs dat de Peruaanse keuken zijn erfenis blijft heruitvinden. Wanneer de vork door de lagen gaat en het hart van het gerecht bereikt, begrijp je waarom deze smaak smaakpapillen verovert: het draagt de ziel van Peru in zich. Het land in de aardappel, de zee in de ceviche, en die vonk van creativiteit die deze keuken tot een van de meest bewonderde ter wereld maakt. Eén hap is genoeg om te weten dat hier iets buitengewoons is geboren."
  //   ] : [
  //    "Imagine a perfect harmony between two icons of Peruvian gastronomy: the classic Causa limeña and the vibrant Ceviche. This dish is not just a delight, it's a culinary masterpiece that conquers palates and gazes alike. In the streets of Lima, where the air smells of sea and lime, a forbidden love was born: the encounter of two Peruvian legends—the humble yet noble Causa and the seductive Ceviche. A story that began in the time of the viceroys, when pre-Columbian fishermen marinated their fish with tumbo fruit, and Andean women kneaded yellow potatoes with ají peppers. Separated by tradition, destiny united them centuries later in a marriage of flavors that now drives the world wild. The first bite always surprises. The fresh smoothness of yellow potato purée—the very one that nourished empires—embraces the firm texture of ceviche freshly 'cooked' in lime. A contrast that shouldn't work, but it does. Masterfully. This is the miracle of causa acevichada: the impossible encounter between two Peruvian classics that the world now envies. Its story begins in Lima's 21st century markets, where some anonymous genius decided to break the rules. Why separate what destiny wanted to unite? They took the limeña causa—born in colonial kitchens as a mix of ancestral potatoes and golden ají—and stuffed it with ceviche, that coastal dish fishermen prepared with the day's catch and lime brought by the Spaniards. The result was a gastronomic revolution. Today, Peru's finest restaurants serve it as a masterpiece: layers of intense yellow purée hiding marinated fish pieces, crowned with tiger's milk turned into foam and crispy sweet potato chips. Foodies line up to photograph it; foreign chefs travel to Lima just to decipher its magic. Because causa acevichada isn't simple fusion: it's proof that Peruvian cuisine keeps reinventing its legacy. When the fork pierces through the layers and reaches the heart of the dish, you understand why this flavor conquers palates: it carries Peru's soul. The land in the potato, the sea in the ceviche, and that spark of creativity that makes this cuisine one of the most admired in the world. One bite is enough to know something extraordinary was born here."
  //   ],
  //   quote: language === "nl" 
  //     ? "Het verhaal van een land dat culturen, smaken en trots vermengt. Want elke hap is tegelijk erfgoed en culinair vernuft."
  //     : "The story of a country that blends cultures, flavors, and pride. Because every bite is both heritage and culinary innovation.",
  //   },
  // }
];