
import { CalendarDays, MapPin, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Event {
  id: number;
  date: string;
  title: string;
  country: string;
  cuisine: string;
  chefs: string[];
  location: string;
  imageUrl: string;
}

interface EventCardProps {
  event: Event;
  language: "nl" | "en";
}

const EventCard = ({ event, language }: EventCardProps) => {
  const t = {
    nl: {
      chefs: "Chefs",
      location: "Locatie",
      moreInfo: "Meer Informatie",
      register: "Aanmelden",
    },
    en: {
      chefs: "Chefs",
      location: "Location",
      moreInfo: "More Information",
      register: "Register",
    },
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === "nl"
      ? date.toLocaleDateString("nl-NL", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
  };

  return (
    <div className="event-card flex flex-col h-full">
      <div className="relative h-48">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-white py-1 px-3 font-medium text-epe-brown">
          {formatDate(event.date)}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-serif font-medium mb-2">{event.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Utensils size={16} className="mr-1" />
          <span>
            {event.country} - {event.cuisine}
          </span>
        </div>
        <div className="mt-2">
          <p className="text-sm font-medium">{t[language].chefs}:</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {event.chefs.map((chef, index) => (
              <span
                key={index}
                className="text-xs bg-epe-beige px-2 py-1 rounded"
              >
                {chef}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            {t[language].moreInfo}
          </Button>
          <Button className="flex-1 bg-epe-orange hover:bg-epe-brown" size="sm">
            {t[language].register}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
