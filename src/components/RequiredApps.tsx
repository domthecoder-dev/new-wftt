import { Phone, MapPin } from 'lucide-react';

const apps = [
  {
    name: 'WhatsApp',
    icon: <Phone className="text-green-600" size={48} />,
    ios: 'https://apps.apple.com/app/whatsapp-messenger/id310633997',
    android: 'https://play.google.com/store/apps/details?id=com.whatsapp',
  },
  {
    name: 'Life360',
    icon: <MapPin className="text-blue-600" size={48} />,
    ios: 'https://apps.apple.com/app/life360-stay-connected-safe/id384380985',
    android: 'https://play.google.com/store/apps/details?id=com.life360.android.safetymapd',
  },
];

export default function RequiredApps() {
  return (
    <section className="py-20 bg-beige-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-olive-800 text-center mb-8">Required Apps</h2>
        <p className="text-center text-olive-700 mb-12">
          These are the apps required to use our services.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((a) => (
            <div key={a.name} className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="flex justify-center mb-4">{a.icon}</div>
              <h3 className="text-2xl font-bold text-olive-800 mb-4">{a.name}</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href={a.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon-600 hover:text-maroon-700 font-medium"
                >
                  iOS: Download
                </a>
                <a
                  href={a.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon-600 hover:text-maroon-700 font-medium"
                >
                  Android: Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}