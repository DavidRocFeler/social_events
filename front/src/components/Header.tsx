
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className="h-10 w-10 rounded-full bg-epe-orange flex items-center justify-center text-white font-serif text-xl">
              E
            </div>
            <span className="font-serif text-xl font-medium">
              {language === "nl" ? "Epe Sociale Evenementen" : "Epe Social Events"}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
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
              className="ml-2"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-sm font-medium">
                {language === "nl" ? "EN" : "NL"}
              </span>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
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
          <div className="md:hidden py-4 bg-white animate-fade-in">
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
