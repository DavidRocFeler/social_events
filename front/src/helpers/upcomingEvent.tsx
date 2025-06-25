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
    title: language === "nl" ? "Causa Asevichada" : "Causa Asevichada",
    country: language === "nl" ? "Peru" : "Peru",
    cuisine: language === "nl" ? "Zuid-Amerika" : "South America",
    chefs: ["Claudia"],
    food: "Dinner",
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
    id: 3,
    date: "2025-07-01",
    title: language === "nl" ? "Afghaanse Keuken" : "Afghan Kitchen",
    country: language === "nl" ? "Afghanistan" : "Afghanistan",
    cuisine: language === "nl" ? "Centraal-Aziatisch" : "Central Asian",
    chefs: ["Fatima", "Omar"],
    food: "Dessert",
    imageUrl: "https://madridmenblog.wordpress.com/wp-content/uploads/2017/09/kabuli.jpg?w=1080",
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
        {
          url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          title: "Causa Acevichada"
        },
        {
          url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          title: "Causa"
        },
        {
          url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          title: "Ceviche"
        },
        {
          url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          title: "Machu Picchu"
        },
        {
          url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
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
  }
];