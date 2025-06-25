import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { getContactContent } from "@/helpers/contact.helpers";
import { ContactFormData } from "@/interface/types";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Contact = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const t = getContactContent(language);

  const showSuccessAlert = () => {
    MySwal.fire({
      title: language === "en" ? "Success!" : "Succes!",
      text: t.form.success,
      icon: 'success',
      confirmButtonColor: '#e67e22', // epe-orange
      background: '#f5f5dc', // epe-beige
      iconColor: '#a0583a' // epe-brown
    });
  };

  const showErrorAlert = (message: string) => {
    MySwal.fire({
      title: language === "en" ? "Error!" : "Fout!",
      text: message,
      icon: 'error',
      confirmButtonColor: '#e67e22', // epe-orange
      background: '#f5f5dc', // epe-beige
      iconColor: '#a0583a' // epe-brown
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Crear el mensaje completo con todos los datos
    const fullMessage = `
      Contact Form Submission:
      Name: ${formData.name}
      Email: ${formData.email}
      Subject: ${formData.subject}
      
      Message:
      ${formData.message}
    `;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: fullMessage, // Todos los datos importantes aquí
      to_name: "EPE Team"
    };

    emailjs.send(
      "service_14shih4", // Reemplaza con tu Service ID
      "template_pgpao1n", // Reemplaza con tu Template ID
      templateParams,
      "8phFAjNKAgrAM4U6A" // Reemplaza con tu User ID
    )
    .then(() => {
      showSuccessAlert();
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch(() => {
      showErrorAlert(
        language === "en" 
          ? "Failed to send message. Please try again later." 
          : "Bericht verzenden mislukt. Probeer het later opnieuw."
      );
    })
    .finally(() => setLoading(false));
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
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === "en" ? "Sending..." : "Verzenden..."}
                    </span>
                  ) : (
                    t.form.send
                  )}
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
              </div>
              
              <div className="mt-8 h-64 bg-gray-200 rounded-lg">
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