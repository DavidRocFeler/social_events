import EventCard from '@/components/EventCard'
import { getUpcomingEvents } from '@/helpers/upcomingEvent'
import { komGenietenTexts } from '@/helpers/komGenieten.helpers'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const KomGeniete = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();
  const upLoadingEvents = getUpcomingEvents(language)
  const texts = komGenietenTexts[language]
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    whatsapp: "",
    paymentRef: ""
  });
  const [loading, setLoading] = useState(false);

  const showSuccessAlert = () => {
    MySwal.fire({
      title: language === "en" ? "Success!" : "Succes!",
      text: language === "en" 
        ? "Your information has been sent successfully" 
        : "Uw gegevens zijn succesvol verzonden",
      icon: 'success',
      confirmButtonColor: '#e67e22', // epe-orange
      background: '#f5f5dc', // epe-beige
      iconColor: '#a0583a' // epe-brown
    })
  }

  const showErrorAlert = (message: string) => {
    MySwal.fire({
      title: language === "en" ? "Error!" : "Fout!",
      text: message,
      icon: 'error',
      confirmButtonColor: '#e67e22', // epe-orange
      background: '#f5f5dc', // epe-beige
      iconColor: '#a0583a' // epe-brown
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validación: al menos email o whatsapp
    if (!formData.email && !formData.whatsapp) {
      showErrorAlert(
        language === "en" 
          ? "Please provide at least an email or WhatsApp number" 
          : "Geef minimaal een e-mail of WhatsApp-nummer op"
      );
      return;
    }
  
    setLoading(true);
  
    // Crear el mensaje que incluye todos los datos importantes
    const fullMessage = `
      Contact Details:
      Name: ${formData.name} ${formData.lastName}
      Email: ${formData.email || "Not provided"}
      WhatsApp: ${formData.whatsapp || "Not provided"}
      Payment Reference: ${formData.paymentRef || "Not provided"}
    `;
  
    const templateParams = {
      from_name: `${formData.name} ${formData.lastName}`,
      from_email: formData.email || "no-email@provided.com", // EmailJS requiere este campo
      message: fullMessage, // Todos los datos importantes aquí
      to_name: "lieve team"
    };
  
    emailjs.send(
      "service_14shih4",
      "template_pgpao1n",
      templateParams,
      "8phFAjNKAgrAM4U6A"
    )
    .then(() => {
      showSuccessAlert();
      setFormData({
        name: "",
        lastName: "",
        email: "",
        whatsapp: "",
        paymentRef: ""
      });
    })
    .catch(() => {
      showErrorAlert(
        language === "en" 
          ? "Failed to send. Please try again later." 
          : "Verzenden mislukt. Probeer het later opnieuw."
      );
    })
    .finally(() => setLoading(false));
  };

  return (
    <div className='py-5 px-5 flex flex-col mmd:flex-row bg-epe-beige'>
      <section className='bg-epe-beige w-full mmd:w-[50%] py-5 px-5 mb-5 md:mb-0'>
        <div className="w-[90%] mx-auto">
          <h2 className="text-2xl font-bold text-epe-brown mb-4">
            {texts.title}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              {/* Fila para Nombre y Apellido */}
              <div className="md:flex md:items-center md:space-x-4">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {texts.nameLabel} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-epe-orange"
                    placeholder={texts.namePlaceholder}
                  />
                </div>
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {texts.lastNameLabel}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-epe-orange"
                    placeholder={texts.lastNamePlaceholder}
                  />
                </div>
              </div>

              {/* Fila para Correo y WhatsApp */}
              <div className="md:flex md:items-center md:space-x-4">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {texts.emailLabel} {!formData.whatsapp && '*'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-epe-orange"
                    placeholder={texts.emailPlaceholder}
                  />
                </div>
                
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {texts.wspLabel} {!formData.email && '*'}
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-epe-orange"
                    placeholder={texts.wspPlaceholder}
                  />
                </div>
              </div>

              {/* Input de referencia */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {texts.paymentRefLabel}
                </label>
                <input
                  type="text"
                  name="paymentRef"
                  value={formData.paymentRef}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-epe-orange"
                  placeholder={texts.paymentRefPlaceholder}
                />
              </div>
            </div>

            {/* Imagen de iDEAL */}
            <div className="mb-6 flex justify-center">
              <img 
                src="/ideal.png" 
                alt="iDEAL payment method" 
                className="h-[15rem] object-contain rounded-xl"
              />
            </div>

            <p className="text-gray-600 mb-6">
              {texts.note}
            </p>

            {/* Botón Confirmar pago */}
            <button 
              type="submit"
              className="w-full bg-epe-orange hover:bg-epe-brown text-white font-bold py-3 px-4 rounded-md transition duration-300 flex justify-center items-center"
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
                texts.buttonText
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Sección de eventos */}
      <section className='py-5 px-5 w-full mmd:w-[50%] bg-[url(/vanOut.jpg)] bg-cover bg-center bg-no-repeat relative'>
        <div className="absolute inset-0 backdrop-blur-sm bg-white/10 shadow-lg flex items-center justify-center">
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full mx-auto max-w-4xl'>
          {upLoadingEvents
            .filter(({id}) => [1, 2, 3].includes(id))
            .map((event, index) => (
              <div 
                key={event.id}
                className={`${index === 2 ? 'md:col-span-2 md:mx-auto md:w-1/2 z-10' : 'z-10'}`}
              >
                <EventCard 
                  event={event} 
                  language={language} 
                  hideButtons={true} 
                />
              </div>
            ))}
        </div>
      </section>  
    </div>
  )
}

export default KomGeniete