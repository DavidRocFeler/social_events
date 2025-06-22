
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const content = {
    nl: {
      title: "Contact",
      subtitle: "Neem Contact Met Ons Op",
      description:
        "Heeft u vragen over onze evenementen, wilt u samenwerken of doneren? Vul het onderstaande formulier in of gebruik de contactgegevens om direct contact met ons op te nemen.",
      form: {
        name: "Naam",
        email: "E-mailadres",
        subject: "Onderwerp",
        subjectOptions: [
          { value: "general", label: "Algemene Vraag" },
          { value: "events", label: "Evenementen" },
          { value: "sponsor", label: "Ik wil sponsor worden" },
          { value: "donation", label: "Donaties" },
        ],
        message: "Bericht",
        send: "Verstuur Bericht",
        success: "Bedankt! Uw bericht is verzonden. We nemen zo snel mogelijk contact met u op.",
      },
      info: {
        title: "Contactgegevens",
        address: "Hoofdstraat 46, 8162 AK Epe",
        email: "info@epesocialeevenementen.nl",
        phone: "+31 6 12345678",
      },
    },
    en: {
      title: "Contact",
      subtitle: "Get In Touch With Us",
      description:
        "Do you have questions about our events, want to collaborate or donate? Fill out the form below or use the contact details to get in touch with us directly.",
      form: {
        name: "Name",
        email: "Email Address",
        subject: "Subject",
        subjectOptions: [
          { value: "general", label: "General Inquiry" },
          { value: "events", label: "Events" },
          { value: "sponsor", label: "I want to be a sponsorr" },
          { value: "donation", label: "Donations" },
        ],
        message: "Message",
        send: "Send Message",
        success: "Thank you! Your message has been sent. We will get back to you as soon as possible.",
      },
      info: {
        title: "Contact Information",
        address: "Hoofdstraat 46, 8162 AK Epe",
        email: "info@epesocialevents.nl",
        phone: "+31 6 12345678",
      },
    },
  };

  const t = content[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: language === "nl" ? "Bericht Verzonden" : "Message Sent",
      description: t.form.success,
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
            <p className="text-gray-600">{t.description}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.form.name}*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.form.email}*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t.form.subject}*
                  </label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={handleSubjectChange}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t.form.subject} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.form.subjectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.form.message}*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-epe-orange hover:bg-epe-brown"
                >
                  {t.form.send}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-medium mb-6 text-epe-brown">
                {t.info.title}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-epe-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "nl" ? "Adres" : "Address"}
                    </h3>
                    <p className="text-gray-600">{t.info.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-epe-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "nl" ? "E-mail" : "Email"}
                    </h3>
                    <p className="text-gray-600">{t.info.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-epe-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "nl" ? "Telefoon" : "Phone"}
                    </h3>
                    <p className="text-gray-600">{t.info.phone}</p>
                  </div>
                </div>
{/*                 
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-epe-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">
                      {language === "nl" ? "Openingstijden" : "Opening Hours"}
                    </h3>
                    <p className="text-gray-600">{t.info.hours}</p>
                  </div>
                </div> */}
              </div>
              
              <div className="mt-8 h-64 bg-gray-200 rounded-lg">
                {/* Map placeholder - In a real implementation, integrate with Google Maps or similar */}
                <div className="bg-[url(/MapEpe.png)] w-full h-full flex items-center justify-center text-gray-500">
                  {language === "nl" ? "Kaart van Epe" : "Map of Epe"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
