
import { useOutletContext } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, Heart, Handshake, Utensils } from "lucide-react";
import EventCard from "@/components/EventCard";
import type { Event } from "@/components/EventCard";

const Home = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();

  const content = {
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
          title: "Gemeenschapsondersteuning",
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
            "Help newcomers integrate into our community by supporting them with donations and mentorship.",
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

  const t = content[language];

  // Sample upcoming events data
  const upcomingEvents: Event[] = [
    {
      id: 1,
      date: "2025-05-15",
      title: language === "nl" ? "Syrische Avond" : "Syrian Evening",
      country: language === "nl" ? "Syrië" : "Syria",
      cuisine: language === "nl" ? "Levantijns" : "Levantine",
      chefs: ["Amira", "Bassam"],
      location: "Kulturhus Epe",
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 2,
      date: "2025-05-28",
      title: language === "nl" ? "Eritrees Feest" : "Eritrean Feast",
      country: language === "nl" ? "Eritrea" : "Eritrea",
      cuisine: language === "nl" ? "Oost-Afrikaans" : "East African",
      chefs: ["Senait", "Tekle"],
      location: "Gemeentehuis Epe",
      imageUrl: "https://images.unsplash.com/photo-1567360425618-1594206637d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 3,
      date: "2025-06-10",
      title: language === "nl" ? "Afghaanse Keuken" : "Afghan Kitchen",
      country: language === "nl" ? "Afghanistan" : "Afghanistan",
      cuisine: language === "nl" ? "Centraal-Aziatisch" : "Central Asian",
      chefs: ["Farid", "Laila"],
      location: "Kulturhus Epe",
      imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
  ];

  return (
    <div>
      <Hero language={language} />
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">{t.welcome.title}</h2>
            <p className="section-subtitle text-epe-brown/80">{t.welcome.subtitle}</p>
            <p className="mb-8 text-gray-600">{t.welcome.description}</p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {t.features.map((feature, index) => (
                <div key={index} className="bg-epe-beige p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-serif font-medium mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-epe-beige">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.upcomingEvents.title}</h2>
            <p className="section-subtitle text-epe-brown/80">{t.upcomingEvents.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} language={language} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-epe-orange hover:bg-epe-brown">
              <Link to="/evenementen">
                <CalendarDays className="mr-2 h-4 w-4" />
                {t.upcomingEvents.viewAll}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Join & Impact Section */}
      <section className="py-16 bg-epe-brown text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t.join.title}</h2>
            <p className="mb-8">{t.join.description}</p>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Link to="/samenwerken">{t.join.cta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
