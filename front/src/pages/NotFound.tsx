
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useOutletContext } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const { language } = useOutletContext<{ language: "nl" | "en" }>();

  const content = {
    nl: {
      title: "404",
      subtitle: "Pagina Niet Gevonden",
      description: "De pagina die u probeert te bereiken bestaat niet of is verplaatst.",
      backHome: "Terug naar Home",
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      description: "The page you are trying to reach does not exist or has been moved.",
      backHome: "Back to Home",
    },
  };

  const t = content[language];

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-epe-beige">
      <div className="text-center p-8">
        <h1 className="text-8xl font-serif font-bold mb-4 text-epe-brown">{t.title}</h1>
        <p className="text-2xl font-serif mb-4 text-epe-brown/80">{t.subtitle}</p>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">{t.description}</p>
        <Button asChild className="bg-epe-orange hover:bg-epe-brown">
          <Link to="/">{t.backHome}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
