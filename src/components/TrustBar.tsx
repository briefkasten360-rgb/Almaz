import { motion } from 'motion/react';
import { Star, Shield, Users, Clock } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      icon: <Users className="text-gold-500" size={24} />,
      value: '2.500+',
      label: 'Glückliche Kunden',
      description: 'Zufriedene Gäste in Herne & Umgebung',
    },
    {
      icon: <Clock className="text-gold-500" size={24} />,
      value: '12+ Jahre',
      label: 'Berufserfahrung',
      description: 'Premium Salonerfahrung & Handwerk',
    },
    {
      icon: <Star className="text-gold-500" size={24} fill="currentColor" stroke="none" />,
      value: '4.9 Sterne',
      label: '240+ Google-Reviews',
      description: 'Höchste Kundenzufriedenheit',
    },
    {
      icon: <Shield className="text-gold-500" size={24} />,
      value: '100%',
      label: 'Qualitäts-Garantie',
      description: 'Ausschließlich Premium-Wirkstoffe',
    },
  ];

  return (
    <div className="bg-white border-y border-cream-200 py-10 relative z-25" id="trust-bar-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-cream-100">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center text-center px-4 ${
                i % 2 === 0 ? 'pt-0' : 'pt-6 sm:pt-0'
              } lg:pt-0`}
            >
              <div className="mb-3 p-2 bg-gold-50 rounded-full">{stat.icon}</div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-900 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold-600 font-semibold mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-charcoal-405 text-charcoal-400 font-light mt-1 max-w-[200px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
