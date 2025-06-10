
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [language, setLanguage] = useState<"nl" | "en">("nl");
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === "nl" ? "en" : "nl");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main className="flex-grow">
        <Outlet context={{ language }} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Layout;
