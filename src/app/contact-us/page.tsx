import { Metadata } from 'next';
import ContactUsClient from './ContactUsClient';

export const metadata: Metadata = {
  title: "Contact Us | Amazon Van Lines - Professional Movers in Canada",
  description: "Get in touch with Amazon Van Lines for reliable and stress-free moving services across Canada. Contact our relocation specialists for a free quote today.",
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
