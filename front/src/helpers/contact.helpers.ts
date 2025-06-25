import { ContactContent } from "@/interface/types";

export const contactContent = {
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
        { value: "sponsor", label: "I want to be a sponsor" },
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
} satisfies Record<string, ContactContent>;

export const getContactContent = (language: "nl" | "en") => contactContent[language];