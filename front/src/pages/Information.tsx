import { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useOutletContext, useParams } from 'react-router-dom';
import { getUpcomingEvents } from '@/helpers/upcomingEvent';

const Information = () => {
  const { language } = useOutletContext<{ language: "nl" | "en" }>();
  const { id } = useParams<{ id: string }>();
  const sliderRef = useRef<Slider>(null);

  const redirectKomGenieten = () => {
    window.location.href = '/komgenieten'
  }
  
  // Obtener todos los eventos y filtrar por ID
  const events = getUpcomingEvents(language);
  const currentEvent = events.find(event => event.id === parseInt(id || '0'));

  // Si no se encuentra el evento, mostrar un mensaje de error
  if (!currentEvent) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-epe-beige">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-epe-brown mb-4">
            {language === 'nl' ? 'Evenement niet gevonden' : 'Event not found'}
          </h1>
          <button 
            onClick={redirectKomGenieten}
            className="bg-epe-orange hover:bg-epe-brown text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            {language === 'nl' ? 'Terug naar evenementen' : 'Back to events'}
          </button>
        </div>
      </div>
    );
  }
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <div className='flex flex-col mmd:flex-row bg-epe-beige min-h-screen'>
      {/* Sección de texto - Usando datos del evento */}
      <section className='w-full mmd:w-[50%] p-8 md:p-12 lg:p-16 mmd:overflow-y-auto mmd:h-[35.5rem] pb-10'>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-epe-brown mb-6">
            {currentEvent.title}
          </h1>
          
          {/* Información básica del evento */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-4 text-sm text-epe-brown mb-4">
              <span className="bg-epe-orange/20 px-3 py-1 rounded-full">
                {currentEvent.country} - {currentEvent.cuisine}
              </span>
              <span className="bg-epe-orange/20 px-3 py-1 rounded-full">
                {currentEvent.food}
              </span>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-epe-brown mb-2">
                {language === 'nl' ? 'Chef-koks:' : 'Chefs:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentEvent.chefs.map((chef, index) => (
                  <span
                    key={index}
                    className="text-sm bg-epe-beige border border-epe-orange px-3 py-1 rounded-full text-epe-brown"
                  >
                    {chef}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Historia del evento */}
          <div className="space-y-6 text-epe-brown mb-8">
            {currentEvent.story.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <blockquote className="border-l-4 border-epe-orange pl-6 py-3 my-8 italic text-xl text-epe-brown">
            "{currentEvent.story.quote}"
          </blockquote>

          <div className="flex space-x-4 mt-12">
            <button 
              onClick={redirectKomGenieten}
              className="bg-epe-orange hover:bg-epe-brown text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              {language === 'nl' ? 'Kom Genieten' : 'Come Enjoy'}
            </button>
          </div>
        </div>
      </section>

      {/* Carrusel con flechas personalizadas */}
      <section className='w-full mmd:w-[50%] top-0 h-screen relative mt-8 mmd:mt-0'>
        <Slider {...sliderSettings} ref={sliderRef} className="bottom-10">
          {currentEvent.story.images.map((img, index) => (
            <div key={index} className="relative h-screen">
              <img 
                src={img.url} 
                alt={`${currentEvent.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <h3 className="text-2xl font-serif mt-1">
                  {img.title}
                </h3>
                <p className="text-sm mt-2 opacity-90">
                  {currentEvent.country} - {currentEvent.cuisine}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Flechas personalizadas */}
        <button 
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Information;