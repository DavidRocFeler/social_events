// src/pages/Home.tsx
import { useOutletContext } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import EventCard from "@/components/EventCard";
import { homeContent } from "@/helpers/homeContent";
import { getUpcomingEvents } from "@/helpers/upcomingEvent";

const Home = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();
  const t = homeContent[language];
  const upcomingEvents = getUpcomingEvents(language);

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
            {upcomingEvents
            .filter(({id}) => [1, 2, 3].includes(id))
            .map((event) => (
              <EventCard key={event.id} event={event} language={language} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-epe-orange hover:bg-epe-brown">
              <Link to="/evenementen"
              onClick={() => window.scrollTo(0, 0)}
              >
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
              <Link 
              onClick={() => window.scrollTo(0, 0)}
              to="/samenwerken">{t.join.cta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;