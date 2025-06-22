// src/pages/Events.tsx
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { eventsContent } from "@/helpers/eventContent";
import { getEventsData } from "@/helpers/eventData";
import { getUpcomingEvents } from "@/helpers/upcomingEvent";

const Events = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const t = eventsContent[language];
  const allEvents = getUpcomingEvents(language);

  // Filter events based on food type
  const filteredEvents = (() => {
    if (activeFilter === "all") return allEvents;
    return allEvents.filter(event => 
      event.food.toLowerCase() === activeFilter.toLowerCase()
    );
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
              variant={activeFilter === "starter" ? "default" : "outline"}
              className={activeFilter === "starter" ? "bg-epe-orange hover:bg-epe-brown" : ""}
              onClick={() => setActiveFilter("starter")}
            >
              {t.filters.starter}
            </Button>
            <Button
              variant={activeFilter === "dinner" ? "default" : "outline"}
              className={activeFilter === "dinner" ? "bg-epe-orange hover:bg-epe-brown" : ""}
              onClick={() => setActiveFilter("dinner")}
            >
              {t.filters.dinner}
            </Button>
            <Button
              variant={activeFilter === "dessert" ? "default" : "outline"}
              className={activeFilter === "dessert" ? "bg-epe-orange hover:bg-epe-brown" : ""}
              onClick={() => setActiveFilter("dessert")}
            >
              {t.filters.dessert}
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