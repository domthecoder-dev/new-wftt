import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, Download, MessageCircle, Heart, MapPin } from 'lucide-react';

// Google Forms (unchanged)
const FORM_ACTION_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGQxmJsGOOPnVsUNj2GbEMJbdzSKw98zMA6taoZeT-lRT-5g/formResponse';
const NAME_ENTRY_ID = 'entry.969956669';
const EMAIL_ENTRY_ID = 'entry.1635358047';
const PDF_URL = '/assets/WildandFreeWelcome.pdf';
const PDF_FILENAME = 'Welcome-Packet.pdf';

// Zod schema
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});
type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const payload = new URLSearchParams();
    payload.append(NAME_ENTRY_ID, data.name);
    payload.append(EMAIL_ENTRY_ID, data.email);

    try {
      await fetch(FORM_ACTION_URL, {
        method: 'POST',
        body: payload,
        mode: 'no-cors',
      });
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong – please try again.');
    }
  };

  return (
    <section id="signup" className="py-20 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-800">
            Join the Tribe — You’re Never Really Alone
          </h2>
        </div>

        {/* Emotional Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {[
            {
              icon: <MessageCircle className="text-maroon-600" size={32} />,
              title: 'Real humans who genuinely care',
              text: 'A warm, trusted Safety Mom is always one message away — the heart of our Africa travel safety support.',
            },
            {
              icon: <Heart className="text-maroon-600" size={32} />,
              title: 'Peace of mind for you and the people who love you',
              text: 'Share your plans or location only when you choose, and travel with confidence knowing someone is watching over you.',
            },
            {
              icon: <MapPin className="text-maroon-600" size={32} />,
              title: 'Local insight that keeps you safer',
              text: 'With on-the-ground knowledge in South Africa and Tanzania, your Safety Mom helps you navigate Africa with calm, clarity, and trusted connections.',
            },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-olive-800 mb-3">{card.title}</h3>
              <p className="text-olive-700">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

            <h3 className="text-2xl font-bold text-olive-800 text-center mb-8">
              Get to Know the Tribe
            </h3>
            <p className="text-center text-olive-700 mb-8">
              Leave your details to access the Welcome Packet!
            </p>

            {sent ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-olive-100 rounded-full mb-4">
                  <Check className="text-olive-700" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-olive-800 mb-2">Thank you!</h4>
                <p className="text-olive-700 mb-4">Download your packet:</p>
                <a
                  href={PDF_URL}
                  download={PDF_FILENAME}
                  className="inline-flex items-center text-maroon-600 hover:text-maroon-700 font-semibold"
                >
                  <Download className="mr-2" size={20} />
                  Welcome Pack
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-olive-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 border border-olive-300 rounded-lg focus:ring-2 focus:ring-maroon-600 focus:border-transparent"
                    placeholder="Enter your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1 text-sm text-maroon-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-olive-700 font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-olive-300 rounded-lg focus:ring-2 focus:ring-maroon-600 focus:border-transparent"
                    placeholder="Enter your email"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1 text-sm text-maroon-600">{errors.email.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-maroon-600 text-beige-50 py-4 rounded-lg font-semibold hover:bg-maroon-700 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending…' : 'Get My Welcome Packet'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}