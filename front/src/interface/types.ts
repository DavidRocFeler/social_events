export interface IEvent {
  id: number;
  date: string;
  title: string;
  country: string;
  cuisine: string;
  chefs: string[];
  food: string;
  imageUrl: string;
  
  // Nuevos campos para la información extendida
  story?: {
    images: string[];
    content: string[];
    quote: string;
  };
  
  paymentInfo?: {
    note: string;
    nameLabel: string;
    lastNameLabel: string;
    emailLabel: string;
    wspLabel: string;
    paymentRefLabel: string;
    buttonText: string;
    placeholders: {
      wsp: string;
      name: string;
      lastName: string;
      email: string;
      paymentRef: string;
    };
  };
}
  
export interface IEventCardProps {
    event: IEvent;
    language: "nl" | "en";
    hideButtons?: boolean; 
  }
export interface IKomGenieten {
  title: string;
  note: string;
  nameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  wspLabel: string;
  paymentRefLabel: string;
  buttonText: string;
  wspPlaceholder: string;
  namePlaceholder: string;
  lastNamePlaceholder: string;
  emailPlaceholder: string;
  paymentRefPlaceholder: string;
}

export interface IKomGenietenTranslations {
  nl: IKomGenieten;
  en: IKomGenieten;
}