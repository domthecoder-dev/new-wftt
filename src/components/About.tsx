import { Check, Heart, Shield, Users, Globe, AlertCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Why I Started the Travel Tribe */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-6 text-center md:text-left">
            Why I Started the Travel Tribe
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-olive-700 mb-4">
                Hi, I’m Nicky — I started this movement as a mother, a solo traveller, and a woman who spent years living in both South Africa and Tanzania. I’ve raised children in both places. I’ve travelled alone in places that felt breathtaking, exhilarating — and sometimes unpredictable.
              </p>
              <p className="text-lg text-olive-700 mb-4">
                For years, I worked in <span className="font-semibold">counter–human trafficking</span>, supporting women and young people in vulnerable, high-risk situations. I learned how quickly things can go wrong, but I also learned something beautiful: <span className="text-maroon-600 font-semibold">Having the right person to call changes everything.</span>
              </p>
              <p className="text-lg text-olive-700">
                A calm voice. A human who cares. Someone who understands the place you’re standing in — literally and emotionally.
              </p>
              <p className="text-lg text-olive-700 mt-4 font-medium">
                Wild & Free Travel Tribe was born so travellers can feel <span className="italic">seen, supported, and safe</span> — without losing their sense of freedom or wonder.
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-beige-200 border-2 border-dashed border-olive-300 rounded-xl w-90 h-80 flex items-center justify-center text-olive-500 text-2xl font-semibold">
                <img src="/assets/Nicky.jpeg" className="bg-beige-200 border-2 border-dashed border-olive-300 rounded-xl w-90 h-80 " />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Meet the Safety Moms */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-olive-800 mb-6 text-center">
            Meet the Safety Moms
          </h2>
          <p className="text-xl text-olive-700 text-center mb-8 font-medium">
            Real Women. Real Support. Real Peace of Mind.
          </p>
          <p className="text-lg text-olive-700 text-center mb-8">
            A Safety Mom is your personal support circle while travelling.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              'Mature, grounded women of strong character',
              'Many with experience in ministry, counselling, social work, travel, or caregiving',
              'Emotionally steady, calm, and compassionate',
              'Trained to respond in emergencies',
              'Located across Africa — expanding as our Tribe grows',
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <Check className="text-maroon-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-olive-700">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-olive-700 italic">
            Their job is simple: To be the person you can message when something feels off, when you need to share your driver details, or when you just want someone safe to know where you are.
          </p>
          <p className="text-center text-lg text-olive-700 font-medium mt-4">
            You travel. They watch over you. No judgment. No panic. <span className="text-maroon-600">Just care.</span>
          </p>
        </div>

        {/* 3. How Travel Tribe Keeps You Safe */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-olive-800 mb-6 text-center">
            How Travel Tribe Keeps You Safe
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-olive-700 text-center mb-8 italic">
              We don’t track you. We don’t monitor your movements. We don’t invade your privacy.
            </p>
            <p className="text-lg text-olive-700 text-center mb-8">
              You stay in control. We’re simply the <span className="font-bold">safety net</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Twice-weekly check-ins',
                'Real-time support when something feels wrong',
                'A human to receive your location or driver details',
                'Emergency assistance & connection to local contacts',
                'Peace of mind for parents back home',
                'A “Mom” with you — even when you’re thousands of miles away',
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <Heart className="text-maroon-600 mr-3" size={24} />
                  <p className="text-olive-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-olive-700 mt-8 font-medium">
              This is the first <span className="underline">human-centered travel safety service designed for Africa</span> — and it’s created by moms, travellers, and women who understand what real peace of mind looks like.
            </p>
          </div>
        </div>

        {/* 4. Born in Tanzania & South Africa */}
        <div className="mb-16 bg-gradient-to-r from-olive-100 to-beige-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-olive-800 mb-6 text-center">
            Born in Tanzania & South Africa — Growing Across Africa
          </h2>
          <p className="text-lg text-olive-700 text-center mb-6">
            Starting in the countries I know and love deeply, we are expanding into a <span className="font-bold">continent-wide network</span> supporting travellers across Africa.
          </p>
          <p className="text-lg text-olive-700 text-center mb-6">
            Our mission is simple and powerful: To become <span className="italic">Africa’s most trusted, woman-led safety companion</span> and future travel safety App.
          </p>
          <p className="text-center text-xl font-bold text-maroon-600">
            Wherever you go, there will always be a mom — a real human — who has your back.
          </p>
        </div>

        {/* 5. Real Situations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-olive-800 mb-8 text-center">
            Real Situations Where Safety Moms Step In
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                icon: <AlertCircle className="text-maroon-600" size={28} />,
                title: 'The Late-Night Taxi Screen',
                text: 'You arrive in Zanzibar at 11 PM and feel unsure about your arranged pick-up. You send your Safety Mom the driver’s details. She stays online until you reach your hotel safely.',
              },
              {
                icon: <Shield className="text-maroon-600" size={28} />,
                title: 'The “Something Isn’t Right” Feeling',
                text: 'You’re on a tour in Cape Town and suddenly feel uncomfortable. Your Safety Mom talks you through your options, helps you exit safely, and stays with you virtually until you’re home.',
              },
              {
                icon: <Users className="text-maroon-600" size={28} />,
                title: 'The Meetup Scenario',
                text: 'Going on a date? Planning to meet up with someone unknown like a Marketplace or fellow traveller connection? You can send a screenshot of the person\'s online profile, the name of the meeting place or any info that you have to share — there is no such thing as overreacting, this is preventative, and we will do nothing with this information unless it is needed by authorities in an effort to find you.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-olive-800 mb-2">{item.title}</h3>
                  <p className="text-olive-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-olive-700 mt-8 font-medium italic">
            It’s not about fear. It’s about <span className="text-maroon-600">freedom through support</span>.
          </p>
        </div>

        {/* 6. Why Our Experience Sets Us Apart */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-olive-800 mb-6 text-center">
            Why Our Experience Sets Us Apart
          </h2>
          <p className="text-lg text-olive-700 text-center mb-8">
            With real-world experience in:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              'Anti-human trafficking work',
              'Local safety networks and crisis support',
              'Raising kids in South Africa and Tanzania',
              'Supporting solo female travelers and young adults',
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <Check className="text-maroon-600 mr-3" size={24} />
                <p className="text-olive-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-olive-700">
            …we understand Africa not just as a destination, but as a <span className="font-bold">living, breathing place</span> with real challenges and real beauty.
          </p>
          <p className="text-center text-lg text-olive-700 mt-4">
            We know the signs. We know the shortcuts. We know the right people to call. This is safety powered by <span className="italic">empathy, intuition, and lived experience</span>.
          </p>
        </div>

        {/* 7. Who We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-olive-800 mb-8 text-center">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Solo female travellers exploring Africa',
              'Teen and young adult travellers (18–25)',
              'Moms traveling with children',
              'Backpackers and digital nomads',
              'First-time travellers anxious about safety',
              'Families wanting reassurance while their loved ones travel',
            ].map((item, i) => (
              <div key={i} className="bg-beige-100 rounded-xl p-6 text-center">
                <Globe className="text-maroon-600 mx-auto mb-3" size={32} />
                <p className="text-olive-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl text-olive-800 mt-10 font-semibold">
            If you want to travel Africa with <span className="text-maroon-600">courage, confidence, and care</span>, you’re in the right place.
          </p>
        </div>

      </div>
    </section>
  );
}