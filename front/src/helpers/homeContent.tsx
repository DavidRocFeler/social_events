// src/helpers/homeContent.ts
import { CalendarDays, Heart, Handshake, Utensils } from "lucide-react";

export const homeContent = {
  nl: {
    welcome: {
      title: "Welkom bij Epe Sociale Evenementen",
      subtitle: "Waar Culturen Samenkomen",
      description:
        "Wij geloven in de kracht van gedeelde maaltijden om verschillen te overbruggen en gemeenschappen te verbinden. Onze evenementen brengen inwoners van Epe samen met nieuwkomers uit het Midden-Oosten en Afrika voor een unieke culturele uitwisseling.",
    },
    features: [
      {
        icon: <Utensils className="h-10 w-10 text-epe-orange" />,
        title: "Authentieke Cuisine",
        description:
          "Ontdek de rijke smaken en tradities van internationale keukens, bereid door talentvolle vluchtelingchefs.",
      },
      {
        icon: <Heart className="h-10 w-10 text-epe-orange" />,
        title: "Betekenisvolle Connecties",
        description:
          "Bouw relaties op die culturele grenzen overstijgen en wederzijds begrip bevorderen.",
      },
      {
        icon: <Handshake className="h-10 w-10 text-epe-orange" />,
        title: "Gemeenschap",
        description:
          "Help nieuwkomers integreren in onze gemeenschap door hen te ondersteunen met donaties en mentorschap.",
      },
    ],
    upcomingEvents: {
      title: "Aankomende Evenementen",
      subtitle: "Proef de Wereld in Epe",
      viewAll: "Bekijk Alle Evenementen",
    },
    join: {
      title: "Doe Mee & Maak Impact",
      description:
        "Er zijn verschillende manieren waarop je kunt bijdragen aan onze missie. Doneer bruikbare items, deel je expertise, of kom gewoon genieten van een heerlijke maaltijd met nieuwe vrienden.",
      cta: "Ontdek Hoe Je Kunt Helpen",
    },
  },
  en: {
    welcome: {
      title: "Welcome to Epe Social Events",
      subtitle: "Where Cultures Unite",
      description:
        "We believe in the power of shared meals to bridge differences and connect communities. Our events bring together residents of Epe with newcomers from the Middle East and Africa for a unique cultural exchange.",
    },
    features: [
      {
        icon: <Utensils className="h-10 w-10 text-epe-orange" />,
        title: "Authentic Cuisine",
        description:
          "Discover the rich flavors and traditions of international kitchens, prepared by talented refugee chefs.",
      },
      {
        icon: <Heart className="h-10 w-10 text-epe-orange" />,
        title: "Meaningful Connections",
        description:
          "Build relationships that transcend cultural boundaries and foster mutual understanding.",
      },
      {
        icon: <Handshake className="h-10 w-10 text-epe-orange" />,
        title: "Community Support",
        description:
          "Help nieuwkomers integreren in onze gemeenschap door hen te ondersteunen met een donatie of hen te leren over de Nederlandse cultuur.",
      },
    ],
    upcomingEvents: {
      title: "Upcoming Events",
      subtitle: "Taste the World in Epe",
      viewAll: "View All Events",
    },
    join: {
      title: "Join & Make an Impact",
      description:
        "There are various ways you can contribute to our mission. Donate useful items, share your expertise, or simply come enjoy a delicious meal with new friends.",
      cta: "Discover How You Can Help",
    },
  },
};