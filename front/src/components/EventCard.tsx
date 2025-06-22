// src/components/EventCard.tsx
import { MapPin, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IEventCardProps } from "@/interface/types";
import { eventCardContent } from "@/helpers/eventCardContent";
import React from "react";

const EventCard: React.FC<IEventCardProps> = ({ event, language, hideButtons }) => {
  const t = eventCardContent[language];

  const handleRedirectionKom = () => {
    window.location.href = '/komgenieten'
  }

  const handleRedirectionInfo = () => {
    window.location.href = `/information/${event.id}`
  }

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
          <Utensils size={16} className="mr-1" />
          <span>{event.food}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span>
            {event.country} - {event.cuisine}
          </span>
        </div>
        <div className="mt-2">
          <p className="text-sm font-medium">{t.chefs}:</p>
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
        {!hideButtons && (
        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
          <Button 
          onClick={handleRedirectionInfo}
          variant="outline" size="sm" className="flex-1">
            {t.moreInfo}
          </Button>
          <Button 
          onClick={handleRedirectionKom}
          className="flex-1 bg-epe-orange hover:bg-epe-brown" size="sm">
            {t.register}
          </Button>
        </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;