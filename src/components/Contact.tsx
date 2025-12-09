import { useState, useEffect } from 'react';
import { Phone, Mail, Heart, Users, MapPin, Shield, MessageCircle } from 'lucide-react';

const quotes = [
  { icon: <Users className="text-maroon-600" size={28} />, text: 'They feel connected, not alone' },
  { icon: <MapPin className="text-maroon-600" size={28} />, text: 'They gain local knowledge, not fear' },
  { icon: <Shield className="text-maroon-600" size={28} />, text: 'They experience Africa through confidence, not anxiety' },
  { icon: <Heart className="text-maroon-600" size={28} />, text: 'Their families back home finally relax' },
  { icon: <MessageCircle className="text-maroon-600" size={28} />, text: 'They get “mom energy” — even thousands of kilometers away' },
  { icon: <Users className="text-maroon-600" size={28} />, text: 'This isn’t just a service. It’s a community. A sisterhood. A safety movement.' },
];

export default function Contact() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Emotional Closer */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-800 mb-6">
            📞 You’re Never Really Alone When You Travel With Us
          </h2>
          <p className="text-2xl text-olive-700 font-medium mb-2">
            Wild & Free Travel Tribe
          </p>
          <p className="text-xl text-maroon-600 mb-4">
            Safety + Sisterhood + Local Support
          </p>
          <p className="text-lg text-olive-700 max-w-3xl mx-auto leading-relaxed">
            A human on the line. A heart that cares. A movement that empowers.
          </p>
        </div>

        {/* Quote Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-olive-800 text-center mb-10">
            Why Travellers Love the Travel Tribe
          </h3>
          <div className="relative max-w-2xl mx-auto h-32 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentQuote * 100}%)` }}
            >
              {quotes.map((quote, i) => (
                <div key={i} className="w-full flex-shrink-0 flex items-center justify-center px-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">{quote.icon}</div>
                    <p className="text-xl text-olive-700 italic">"{quote.text}"</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQuote(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentQuote ? 'bg-maroon-600' : 'bg-olive-300'
                  }`}
                  aria-label={`Go to quote ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-md mx-auto text-center">
          <p className="text-xl text-olive-700 mb-8">Have questions? We’re here.</p>
          <div className="space-y-6">
            <a
              href="https://wa.me/27827174772"
              className="flex items-center justify-center text-olive-700 hover:text-maroon-600 transition-colors"
            >
              <Phone className="mr-3" size={24} />
              <span className="text-lg">WhatsApp: +27 82 717 4772</span>
            </a>
            <a
              href="mailto:traveltribe@wildandfreezanzibar.com"
              className="flex items-center justify-center text-olive-700 hover:text-maroon-600 transition-colors"
            >
              <Mail className="mr-3" size={24} />
              <span className="text-lg">Email: traveltribe@wildandfreezanzibar.com</span>
            </a>
          </div>
          <br/>
          <div className="mt-12 bg-white rounded-xl p-6 shadow-md">
            <p className="text-olive-700 text-sm">
              Wild and Free Travel Tribe in partnership with
            </p>
            <p className="text-xl font-bold text-olive-800 mt-1">
              TANZANIA TOURISM SECTOR SAFETY AND PROTECTION
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}