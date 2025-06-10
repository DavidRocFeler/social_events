
import { useOutletContext } from "react-router-dom";

const About = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();

  const content = {
    nl: {
      title: "Over Ons",
      subtitle: "Onze Missie & Visie",
      story: {
        title: "Ons Verhaal",
        paragraphs: [
          "Epe Sociale Evenementen begon in 2023 als een klein initiatief van een groep vrienden die hun liefde voor eten en cultuur wilden delen. We zagen dat er in onze gemeente Epe veel vluchtelingen waren die moeite hadden om zich te integreren in de lokale gemeenschap.",
          "We geloofden dat eten een universele taal is die mensen kan verbinden, ongeacht hun achtergrond. Door samen te koken en te eten, kunnen we culturele barrières doorbreken en betekenisvolle connecties opbouwen.",
          "Wat begon als een klein diner voor tien mensen is uitgegroeid tot een reeks maandelijkse evenementen die honderden mensen samenbrengen. Onze chefs, afkomstig uit diverse landen zoals Syrië, Eritrea en Afghanistan, delen niet alleen hun traditionele gerechten, maar ook hun verhalen en cultuur.",
        ],
      },
      mission: {
        title: "Onze Missie",
        text: "Bij Epe Sociale Evenementen streven we ernaar om een inclusieve gemeenschap te creëren waar iedereen zich welkom voelt. We gebruiken de kracht van gedeelde maaltijden om mensen samen te brengen, wederzijds begrip te bevorderen en culturele uitwisseling te faciliteren.",
      },
      vision: {
        title: "Onze Visie",
        text: "We dromen van een Epe waar culturele diversiteit wordt gevierd, waar nieuwkomers zich thuis voelen en waar iedereen de kans krijgt om zijn talenten en verhalen te delen. We geloven dat door samen te eten, we samen kunnen groeien als gemeenschap.",
      },
      values: {
        title: "Onze Waarden",
        list: [
          {
            title: "Inclusiviteit",
            description: "We verwelkomen iedereen, ongeacht achtergrond of overtuiging",
          },
          {
            title: "Authenticiteit",
            description: "We waarderen oprechte verhalen en ervaringen",
          },
          {
            title: "Samenwerking",
            description: "We geloven in de kracht van samenwerken voor een groter doel",
          },
          {
            title: "Respect",
            description: "We respecteren de unieke bijdrage van elk individu",
          },
        ],
      },
      team: {
        title: "Ons Team",
        description: "Epe Sociale Evenementen wordt geleid door een toegewijd team van vrijwilligers en professionals met een passie voor culturele verbinding.",
        members: [
          {
            name: "Maria de Vries",
            role: "Oprichter & Coördinator",
            bio: "Maria heeft een achtergrond in gemeenschapsontwikkeling en is de drijvende kracht achter onze evenementen.",
          },
          {
            name: "Ahmed Al-Sayid",
            role: "Hoofdchef",
            bio: "Ahmed is een ervaren chef-kok uit Syrië die nu zijn culinaire vaardigheden en kennis deelt in Epe.",
          },
          {
            name: "Johan Bakker",
            role: "Vrijwilligerscoördinator",
            bio: "Johan zorgt ervoor dat onze vrijwilligers de juiste ondersteuning krijgen om onze evenementen tot een succes te maken.",
          },
        ],
      },
    },
    en: {
      title: "About Us",
      subtitle: "Our Mission & Vision",
      story: {
        title: "Our Story",
        paragraphs: [
          "Epe Social Events began in 2023 as a small initiative by a group of friends who wanted to share their love for food and culture. We saw that there were many refugees in our municipality of Epe who struggled to integrate into the local community.",
          "We believed that food is a universal language that can connect people, regardless of their background. By cooking and eating together, we can break down cultural barriers and build meaningful connections.",
          "What started as a small dinner for ten people has grown into a series of monthly events that bring together hundreds of people. Our chefs, from diverse countries such as Syria, Eritrea, and Afghanistan, share not only their traditional dishes but also their stories and culture.",
        ],
      },
      mission: {
        title: "Our Mission",
        text: "At Epe Social Events, we strive to create an inclusive community where everyone feels welcome. We use the power of shared meals to bring people together, promote mutual understanding, and facilitate cultural exchange.",
      },
      vision: {
        title: "Our Vision",
        text: "We dream of an Epe where cultural diversity is celebrated, where newcomers feel at home, and where everyone has the opportunity to share their talents and stories. We believe that by eating together, we can grow together as a community.",
      },
      values: {
        title: "Our Values",
        list: [
          {
            title: "Inclusivity",
            description: "We welcome everyone, regardless of background or belief",
          },
          {
            title: "Authenticity",
            description: "We value genuine stories and experiences",
          },
          {
            title: "Collaboration",
            description: "We believe in the power of working together for a greater purpose",
          },
          {
            title: "Respect",
            description: "We respect the unique contribution of each individual",
          },
        ],
      },
      team: {
        title: "Our Team",
        description: "Epe Social Events is led by a dedicated team of volunteers and professionals with a passion for cultural connection.",
        members: [
          {
            name: "Maria de Vries",
            role: "Founder & Coordinator",
            bio: "Maria has a background in community development and is the driving force behind our events.",
          },
          {
            name: "Ahmed Al-Sayid",
            role: "Head Chef",
            bio: "Ahmed is an experienced chef from Syria who now shares his culinary skills and knowledge in Epe.",
          },
          {
            name: "Johan Bakker",
            role: "Volunteer Coordinator",
            bio: "Johan ensures that our volunteers receive the right support to make our events a success.",
          },
        ],
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
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">{t.story.title}</h2>
              <div className="space-y-4">
                {t.story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="People sharing a meal together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-epe-beige">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-medium mb-4 text-epe-brown">
                {t.mission.title}
              </h2>
              <p className="text-gray-600">{t.mission.text}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-medium mb-4 text-epe-brown">
                {t.vision.title}
              </h2>
              <p className="text-gray-600">{t.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.values.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.list.map((value, index) => (
              <div key={index} className="bg-epe-beige p-6 rounded-lg">
                <h3 className="text-xl font-serif font-medium mb-3 text-epe-brown">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-epe-beige">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.team.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t.team.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.team.members.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-epe-orange/20 flex items-center justify-center text-epe-orange">
                  <span className="text-2xl font-serif">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-serif font-medium mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-epe-orange mb-3 text-center">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
