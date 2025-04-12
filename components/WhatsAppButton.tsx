import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }
  export default WhatsAppButton