
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import type { Event } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Events = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const content = {
    nl: {
      title: "Onze Evenementen",
      subtitle: "Ontdek Culturele Ervaringen in Epe",
      description:
        "Blader door onze aankomende diners en culturele evenementen. Van Syrische feesten tot Eritrese tradities, we bieden een verscheidenheid aan culturele ervaringen en gerechten.",
      filters: {
        all: "Alle",
        middleEast: "Midden-Oosten",
        africa: "Afrika",
        asia: "Azië",
      },
      noEvents: "Geen evenementen gevonden voor deze selectie.",
    },
    en: {
      title: "Our Events",
      subtitle: "Discover Cultural Experiences in Epe",
      description:
        "Browse our upcoming dinners and cultural events. From Syrian feasts to Eritrean traditions, we offer a variety of cultural experiences and cuisines.",
      filters: {
        all: "All",
        middleEast: "Middle East",
        africa: "Africa",
        asia: "Asia",
      },
      noEvents: "No events found for this selection.",
    },
  };

  const t = content[language];

  // Sample events data
  const allEvents: Event[] = [
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
    {
      id: 4,
      date: "2025-06-22",
      title: language === "nl" ? "Marokkaanse Smaken" : "Moroccan Flavors",
      country: language === "nl" ? "Marokko" : "Morocco",
      cuisine: language === "nl" ? "Noord-Afrikaans" : "North African",
      chefs: ["Yasmine", "Karim"],
      location: "Kulturhus Epe",
      imageUrl: "https://images.unsplash.com/photo-1541518763069-e7f6216e8da5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 5,
      date: "2025-07-05",
      title: language === "nl" ? "Iraakse Tradities" : "Iraqi Traditions",
      country: language === "nl" ? "Irak" : "Iraq",
      cuisine: language === "nl" ? "Mesopotamisch" : "Mesopotamian",
      chefs: ["Zainab", "Ahmed"],
      location: "Gemeentehuis Epe",
      imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 6,
      date: "2025-07-18",
      title: language === "nl" ? "Somalische Specialiteiten" : "Somali Specialties",
      country: language === "nl" ? "Somalië" : "Somalia",
      cuisine: language === "nl" ? "Oost-Afrikaans" : "East African",
      chefs: ["Ayan", "Omar"],
      location: "Kulturhus Epe",
      imageUrl: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
  ];

  // Filter events based on region
  const filteredEvents = (() => {
    if (activeFilter === "all") return allEvents;
    
    const regionMap: Record<string, string[]> = {
      middleEast: ["Syria", "Iraq", "Afghanistan", "Syrië", "Irak", "Afghanistan"],
      africa: ["Eritrea", "Morocco", "Somalia", "Marokko", "Somalië"],
      asia: ["Afghanistan"],
    };
    
    return allEvents.filter(event => regionMap[activeFilter]?.includes(event.country));
  })();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-epe-beige py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-epe-brown mb-4">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl font-serif mb-6 text-epe-brown/80">
              {t.subtitle}
            </p>
            <p className="text-gray-600 mb-8">{t.description}</p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              className={activeFilter === "all" ? "bg-epe-orange hover:bg-epe-brown" : ""}
              onClick={() => setActiveFilter("all")}
            >
              <Filter className="mr-2 h-4 w-4" />
              {t.filters.all}
            </Button>
            <Button
              variant={activeFilter === "middleEast" ? "default" : "outline"}
              className={activeFilter === "middleEast" ? "bg-epe-orange hover:bg-epe-brown" : ""}
              onClick={() => setActiveFilter("middleEast")}
            >
              {t.filters.middleEast}
            </Button>
            <Button
              variant={activeFilter === "africa" ? "default" : "outline"}
              className={activeFilter === "africa" ? "bg-epe-orange hover:bg-epe-brown" : ""}
              onClick={() => setActiveFilter("africa")}
            >
              {t.filters.africa}
            </Button>
            <Button
              variant={activeFilter === "asia" ? "default" : "outline"}
              className={activeFilter === "asia" ? "bg-epe-orange hover:bg-epe-brown" : ""}
              onClick={() => setActiveFilter("asia")}
            >
              {t.filters.asia}
            </Button>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} language={language} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">{t.noEvents}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
