import { Check, AlertCircle, Shield, Users } from 'lucide-react';

const situations = [
  {
    icon: <AlertCircle className="text-maroon-600" size={24} />,
    title: 'Late-Night Taxi Screen',
    text: 'Arrive in Zanzibar at 11 PM and unsure about your pick-up? Send driver details — your Safety Mom stays online until you’re safe.',
  },
  {
    icon: <Shield className="text-maroon-600" size={24} />,
    title: '“Something Isn’t Right” Feeling',
    text: 'On a tour in Cape Town and uncomfortable? Your Safety Mom guides you out safely and stays with you virtually.',
  },
  {
    icon: <Users className="text-maroon-600" size={24} />,
    title: 'Meetup Safety Check',
    text: 'Meeting someone new? Share profile, location, or plans. We hold the info — only used if authorities need it.',
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-800 mb-4">
            Choose Your Safety Net
          </h2>
          <p className="text-xl text-olive-700 max-w-3xl mx-auto">
            Every tier includes a real Safety Mom — because support should fit your journey.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {/* Tier 1: $25 – 1 Day */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-olive-800">$25</p>
              <p className="text-xl text-olive-700">1 Day Package</p>
            </div>
            <ul className="space-y-3 mb-8 text-olive-700">
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> WhatsApp live location monitoring (up to two 8-hour shares)</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Share driver & vehicle details with your Safety Mom</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Instant peace of mind for short trips or arrivals</li>
            </ul>
            <div className="bg-beige-100 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                {situations[0].icon}
                <div>
                  <p className="font-semibold text-olive-800 text-sm">{situations[0].title}</p>
                  <p className="text-xs text-olive-700 mt-1">{situations[0].text}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Tier 2: $75 – 1 Week (MOST POPULAR) */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl ring-4 ring-maroon-600 ring-offset-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-maroon-600 text-beige-50 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-olive-800">$75</p>
              <p className="text-xl text-olive-700">1 Week Package</p>
            </div>
            <ul className="space-y-3 mb-8 text-olive-700">
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> 7 days in a private Life360 circle (live tracking, location history, crash detection)</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Two WhatsApp wellness check-ins</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Share driver & vehicle details anytime</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Perfect for week-long adventures or multi-city hops</li>
            </ul>
            <div className="bg-beige-100 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                {situations[1].icon}
                <div>
                  <p className="font-semibold text-olive-800 text-sm">{situations[1].title}</p>
                  <p className="text-xs text-olive-700 mt-1">{situations[1].text}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Tier 3: $150 – 1 Month */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-olive-800">$150</p>
              <p className="text-xl text-olive-700">1 Month Package</p>
            </div>
            <ul className="space-y-3 mb-8 text-olive-700">
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> 30 days in a private Life360 circle (live tracking, location history, crash detection)</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Optional shared circles with nearby Tribe members</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Twice-weekly WhatsApp wellness check-ins</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Share driver & vehicle details as needed</li>
              <li className="flex items-start"><Check className="text-olive-600 mr-2 mt-0.5 flex-shrink-0" size={20} /> Ideal for extended travel, digital nomads, or full-month explorations</li>
            </ul>
            <div className="bg-beige-100 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                {situations[2].icon}
                <div>
                  <p className="font-semibold text-olive-800 text-sm">{situations[2].title}</p>
                  <p className="text-xs text-olive-700 mt-1">{situations[2].text}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}