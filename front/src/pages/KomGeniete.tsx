import EventCard from '@/components/EventCard'
import { getUpcomingEvents } from '@/helpers/upcomingEvent'
import { komGenietenTexts } from '@/helpers/komGenieten.helpers'
import { useOutletContext } from 'react-router-dom'

const KomGeniete = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();
  const upLoadingEvents = getUpcomingEvents(language)
  const texts = komGenietenTexts[language]
  
  return (
    <div className='py-5 px-5 flex flex-col mmd:flex-row bg-epe-beige'>
      <section className='bg-epe-beige w-full mmd:w-[50%] py-5 px-5 mb-5 md:mb-0'>
        <div className="w-[90%] mx-auto">
          <h2 className="text-2xl font-bold text-epe-brown mb-4">
            {texts.title}
          </h2>

          <div className="space-y-4 mb-6">
            {/* Fila para Nombre y Apellido */}
            <div className="md:flex md:items-center md:space-x-4">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {texts.nameLabel}
                </label>
                <input
                  type="text"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-epe-orange"
                  placeholder={texts.lastNamePlaceholder}
                />
              </div>
            </div>

            {/* Fila para Correo y WhatsApp */}
            <div className="md:flex md:items-center md:space-x-4">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {texts.emailLabel}
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-epe-orange"
                  placeholder={texts.emailPlaceholder}
                />
              </div>
              
              <div className="md:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {texts.wspLabel}
                </label>
                <input
                  type="tel"
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
              className="h-[15rem] object-contain"
            />
          </div>

          <p className="text-gray-600 mb-6">
            {texts.note}
          </p>

          {/* Botón Confirmar pago */}
          <button className="w-full bg-epe-orange hover:bg-epe-brown text-white font-bold py-3 px-4 rounded-md transition duration-300">
            {texts.buttonText}
          </button>
        </div>
      </section>

      {/* Sección de eventos (se mantiene igual) */}
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