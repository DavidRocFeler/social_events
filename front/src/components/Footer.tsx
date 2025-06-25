
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  language: "nl" | "en";
}

const Footer = ({ language }: FooterProps) => {
  const translations = {
    nl: {
      title: "Epe Sociale Evenementen",
      subtitle: "Samen Verbinden door Cultuur",
      links: "Snelle Links",
      contact: "Contact",
      address: "Hoofdstraat 23, 8162 AB Epe",
      rights: "© 2025 Epe Sociale Evenementen. Alle rechten voorbehouden.",
    },
    en: {
      title: "Epe Social Events",
      subtitle: "Connecting Through Culture",
      links: "Quick Links",
      contact: "Contact",
      address: "Main Street 23, 8162 AB Epe",
      rights: "© 2025 Epe Social Events. All rights reserved.",
    },
  };

  const t = translations[language];

  const navLinks = {
    nl: [
      { name: "Home", href: "/" },
      { name: "Evenementen", href: "/evenementen" },
      { name: "Samenwerken", href: "/samenwerken" },
      { name: "Over Ons", href: "/over-ons" },
      { name: "Contact", href: "/contact" },
    ],
    en: [
      { name: "Home", href: "/" },
      { name: "Events", href: "/evenementen" },
      { name: "Collaborate", href: "/samenwerken" },
      { name: "About Us", href: "/over-ons" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-epe-brown text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">{t.title}</h3>
            <p className="mb-4">{t.subtitle}</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-epe-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-epe-orange transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="hover:text-epe-orange transition-colors">
                <Mail size={20} />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">{t.links}</h3>
            <ul className="space-y-2">
              {navLinks[language].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="hover:text-epe-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">{t.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span>+31 6 12345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@epesocialeevenementen.nl</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
