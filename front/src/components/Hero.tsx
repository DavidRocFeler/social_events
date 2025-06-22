
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  language: "nl" | "en";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    nl: {
      title: "Samen aan Tafel",
      subtitle: "Verbinden door Cultuur en Cuisine",
      description:
        "Epe Sociale Evenementen brengt mensen samen rond de eettafel. We bouwen bruggen tussen culturen, creëren begrip en vieren diversiteit door middel van gedeelde maaltijden en verhalen.",
      cta: "Ontdek Onze Evenementen",
      secondaryCta: "Kom Genieten",
    },
    en: {
      title: "Together at the Table",
      subtitle: "Connecting Through Culture and Cuisine",
      description:
        "Epe Social Events brings people together around the dinner table. We build bridges between cultures, create understanding, and celebrate diversity through shared meals and stories.",
      cta: "Discover Our Events",
      secondaryCta: "Come Enjoy",
    },
  };

  const t = content[language];

  return (
    <div className="relative bg-epe-beige overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-epe-brown/40 to-transparent mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Diverse group of people sharing a meal"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-serif mb-6 drop-shadow-md">
            {t.subtitle}
          </p>
          <p className="text-white/80 mb-8 max-w-lg drop-shadow-sm">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
            onClick={() => window.scrollTo(0, 0)}
            asChild size="lg" className="bg-epe-orange hover:bg-epe-brown">
              <Link to="/evenementen">{t.cta}</Link>
            </Button>
            <Button 
            onClick={() => window.scrollTo(0, 0)}
            asChild variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Link to="/komgenieten">{t.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
