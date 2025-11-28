import React from "react";
import { ChannelCardProps } from "./components/channelCard/types";
import { FaRegEnvelope, FaWhatsapp, FaRegQuestionCircle } from "react-icons/fa";
import { FaqAccordionProps } from "./components/faqAccordion";

export const SUPPORT_CHANNELS: Array<ChannelCardProps> = [
  {
    id: "1",
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours",
    action: "Send Email",
    icon: <FaRegEnvelope />,
    onClick: () => {
      window.location.href = "mailto:support@mbst.com"; 
    }
  },
  {
    id: "2",
    title: "WhatsApp",
    description: "Speak with us directly for urgent matters or immediate assistance.",
    action: "Contact Now",
    icon: <FaWhatsapp />,
    onClick: () => {
      window.open("https://wa.me/+521234567890", "_blank"); 
    }
  },
  {
    id: "3",
    title: "FAQ Section",
    description: "Browse our most common questions and answers",
    action: "Browse FAQs",
    icon: <FaRegQuestionCircle />,
    onClick: () => {
      const el = document.getElementById("faq-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
];

export const FAQS: Array<FaqAccordionProps> = [
  {
    id: "faq-1",
    title: "How long does it take to ship my order?",
    description: "We ship worldwide. Orders placed before 2pm ship same day. Standard shipping is free over €50 and typically takes 5-7 business days. Express shipping options are available.",
  },
  {
    id: "faq-2",
    title: "What is your return policy?",
    description: "We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it for a full refund or exchange.",
  },
  {
    id: "faq-3",
    title: "Do all phones come with warranty?",
    description: "Yes, all phones come with a 1-year warranty. If you have any issues with your phone, please contact us and we will assist you.",
  },
  {
    id: "faq-4",
    title: "How secure are your payments?",
    description: "We use industry-standard encryption for all transactions. We accept credit cards, PayPal, and Stripe. Your data is never stored on our servers.",
  },
  {
    id: "faq-5",
    title: "Can I track my order?",
    description: "Yes, you can track your order by logging into your account and clicking on the 'Track Order' button. You will receive an email with a tracking number once your order ships.",
  },
  {
    id: "faq-6",
    title: "What if my phone arrives damaged?",
    description: "If your phone arrives damaged, please contact us immediately. We will assist you with any issues and ensure you receive a replacement or refund.",
  },
  {
    id: "faq-7",
    title: "Do you offer international shipping?",
    description: "Yes, we offer international shipping to most countries. Please contact us for shipping rates and estimated delivery times.",
  },
  {
    id: "faq-8",
    title: "How do I contact customer support?",
    description: "You can contact us by email at support@mbst.com or by phone at +1 (234) 567-8901. We are available Monday to Friday from 9am to 5pm EST.",
  }
];
