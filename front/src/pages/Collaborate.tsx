
import { useOutletContext } from "react-router-dom";
import { Baby, Bike, Gift, Handshake, HeartHandshake, ShoppingBag, Utensils, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Collaborate = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();

  const handleRedirectContact = () => {
    window.location.href = '/contact'
  }

  const content = {
    nl: {
      title: "Samenwerken",
      subtitle: "Manieren om bij te dragen",
      description:
        "Er zijn verschillende manieren waarop je kunt bijdragen aan onze missie om culturele integratie te bevorderen. Of je nu tijd, vaardigheden of middelen hebt om te delen, elke bijdrage maakt een verschil in onze gemeenschap.",
      donate: {
        title: "Doneren",
        description:
          "Uw donaties helpen nieuwkomers om een nieuwe start te maken in Epe. We verzamelen verschillende items die essentieel zijn voor dagelijks gebruik.",
        items: [
          {
            icon: <Bike className="h-8 w-8" />,
            name: "Fietsen",
            description: "Werkende fietsen voor volwassenen en kinderen",
          },
          {
            icon: <ShoppingBag className="h-8 w-8" />,
            name: "Kleding",
            description: "Schone, draagbare kleding voor alle leeftijden",
          },
          {
            icon: <Baby className="h-8 w-8" />,
            name: "Babyspullen",
            description: "Kinderwagens, speelgoed en kinderkleding",
          },
          {
            icon: <Gift className="h-8 w-8" />,
            name: "Huishoudelijke Artikelen",
            description: "Keukengerei, handdoeken en beddengoed",
          },
        ],
        cta: "Neem Contact Op Voor Donaties",
      },
      talent: {
        title: "Verbind met Talent",
        description:
          "Veel van onze nieuwkomers hebben waardevolle vaardigheden en ervaring. Als werkgever of mentor kun je een belangrijke rol spelen in hun integratie.",
        options: [
          {
            icon: <Handshake className="h-8 w-8" />,
            title: "Werkgevers",
            description:
              "Bied stage- of werkplekken aan voor nieuwkomers met professionele ervaring",
            cta: "Contact Als Werkgever",
          },
          {
            icon: <HeartHandshake className="h-8 w-8" />,
            title: "Mentoren",
            description:
              "Deel je kennis en netwerk als mentor voor nieuwkomers die een carrière in jouw vakgebied nastreven",
            cta: "Word Mentor",
          },
        ],
      },
      volunteer: {
        title: "Vrijwilligerswerk",
        description:
          "Onze evenementen draaien op de inzet van vrijwilligers. Help ons bij het voorbereiden en serveren van maaltijden, of deel jouw unieke vaardigheden.",
        options: [
          {
            icon: <Utensils className="h-8 w-8" />,
            title: "Keukenassistentie",
            description: "Help onze chefs met voorbereiden en serveren",
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Gastvrijheid",
            description: "Ontvang gasten en zorg voor een welkome sfeer",
          },
        ],
        cta: "Aanmelden Als Vrijwilliger",
      },
    },
    en: {
      title: "Collaborate",
      subtitle: "Ways to Contribute",
      description:
        "There are various ways you can contribute to our mission of promoting cultural integration. Whether you have time, skills, or resources to share, every contribution makes a difference in our community.",
      donate: {
        title: "Donate",
        description:
          "Your donations help newcomers establish a new beginning in Epe. We collect various items that are essential for daily use.",
        items: [
          {
            icon: <Bike className="h-8 w-8" />,
            name: "Bicycles",
            description: "Working bicycles for adults and children",
          },
          {
            icon: <ShoppingBag className="h-8 w-8" />,
            name: "Clothing",
            description: "Clean, wearable clothing for all ages",
          },
          {
            icon: <Baby className="h-8 w-8" />,
            name: "Baby Supplies",
            description: "Strollers, toys, and children's clothing",
          },
          {
            icon: <Gift className="h-8 w-8" />,
            name: "Household Items",
            description: "Kitchen utensils, towels, and bedding",
          },
        ],
        cta: "Contact Us for Donations",
      },
      talent: {
        title: "Connect with Talent",
        description:
          "Many of our newcomers have valuable skills and experience. As an employer or mentor, you can play a crucial role in their integration.",
        options: [
          {
            icon: <Handshake className="h-8 w-8" />,
            title: "Employers",
            description:
              "Offer internships or job opportunities for newcomers with professional experience",
            cta: "Contact as Employer",
          },
          {
            icon: <HeartHandshake className="h-8 w-8" />,
            title: "Mentors",
            description:
              "Share your knowledge and network as a mentor for newcomers pursuing a career in your field",
            cta: "Become a Mentor",
          },
        ],
      },
      volunteer: {
        title: "Volunteer",
        description:
          "Our events run on the dedication of volunteers. Help us prepare and serve meals, or share your unique skills.",
        options: [
          {
            icon: <Utensils className="h-8 w-8" />,
            title: "Kitchen Assistance",
            description: "Help our chefs with preparation and serving",
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Hospitality",
            description: "Welcome guests and create a welcoming atmosphere",
          },
        ],
        cta: "Sign Up as Volunteer",
      },
    },
  };

  const t = content[language];

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

      {/* Donate Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.donate.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t.donate.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.donate.items.map((item, index) => (
              <div key={index} className="bg-epe-beige p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4 text-epe-orange">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
            onClick={handleRedirectContact}
            className="bg-epe-orange hover:bg-epe-brown">
              {t.donate.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Connect with Talent Section */}
      {/* <section className="py-16 bg-epe-beige">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.talent.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t.talent.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.talent.options.map((option, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg text-center shadow-sm"
              >
                <div className="flex justify-center mb-4 text-epe-orange">
                  {option.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">{option.description}</p>
                <Button variant="outline" className="border-epe-orange text-epe-orange hover:bg-epe-orange hover:text-white">
                  {option.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Volunteer Section */}
      {/* <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.volunteer.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t.volunteer.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {t.volunteer.options.map((option, index) => (
              <div
                key={index}
                className="bg-epe-beige p-6 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4 text-epe-orange">
                  {option.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-epe-orange hover:bg-epe-brown">
              {t.volunteer.cta}
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Collaborate;
