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
    images?: Array<{
      url: string;
      title: string;
    }>;
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

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SubjectOption {
  value: string;
  label: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  description: string;
  form: {
    name: string;
    email: string;
    subject: string;
    subjectOptions: SubjectOption[];
    message: string;
    send: string;
    success: string;
  };
  info: {
    title: string;
    address: string;
    email: string;
    phone: string;
  };
}