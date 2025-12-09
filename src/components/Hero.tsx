export default function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section
      id="home"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden
                 bg-gradient-to-br from-olive-100 to-beige-100"
    >
      {/* Background Shield – Light & Transparent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-x-[5px] md:translate-x-[25px]">
        <img
          src="/assets/ttsheild.svg"
          alt=""
          className="w-full max-w-4xl h-auto opacity-10 brightness-150 drop-shadow-2xl select-none"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Hero Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-olive-800 mb-6">
           Wild & Free Travel Tribe
        </h1>

        {/* Hero Subheadline */}
        <p className="text-xl md:text-2xl text-olive-700 font-medium mb-8 max-w-4xl mx-auto">
          Africa’s First Heart-Led, Human-Centered Safety Support Service for Solo Women & Young Travelers
        </p>

        {/* Hero Tagline / CTA */}
        <p className="text-lg md:text-xl text-olive-600 italic mb-10 max-w-3xl mx-auto leading-relaxed">
          Travel boldly. Explore freely. And know — <span className="font-semibold">truly know</span> — that you are never alone.
        </p>

        {/* Hero Body Teaser */}
        <p className="text-base md:text-lg text-olive-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Wild & Free Travel Tribe is a safety support service designed for solo female travellers, young adults, and moms exploring Africa. With a network of caring, trained Safety Moms in South Africa, Tanzania, and beyond, you travel with confidence knowing there’s always someone warm, wise, and ready to support you on the other end of your phone. Because safety shouldn’t feel clinical, cold, or complicated. It should feel like someone cares.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo('signup')}
          className="bg-maroon-600 text-beige-50 px-8 py-4 rounded-full text-lg font-semibold 
                     hover:bg-maroon-700 transition-colors shadow-lg"
        >
          Join the Tribe
        </button>
      </div>
    </section>
  );
}