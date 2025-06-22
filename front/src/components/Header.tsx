
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '/LogoSocialE.png'

interface HeaderProps {
  language: "nl" | "en";
  toggleLanguage: () => void;
}

const Header = ({ language, toggleLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = {
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

  const navItems = navigation[language];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} className="w-10 h-auto" alt="" />
            <span className="font-serif text-xl font-medium">
              {language === "nl" ? "Epe Sociale Evenementen" : "Epe Social Events"}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden mmd:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                onClick={() => window.scrollTo(0, 0)}
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                end
              >
                {item.name}
              </NavLink>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="ml-2 w-fit px-3"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-sm font-medium">
                {language === "nl" ? "EN" : "NL"}
              </span>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex mmd:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="mr-2"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle Language</span>
            </Button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-epe-orange focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mmd:hidden py-4 bg-white animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active py-2 block"
                      : "nav-link py-2 block"
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
