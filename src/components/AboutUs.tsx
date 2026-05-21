import { motion } from 'motion/react';
import { Award, Heart, Sparkles, BookOpen } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';

export default function AboutUs() {
  const values = [
    {
      icon: <Award className="text-gold-500" size={20} />,
      title: 'Meisterliches Handwerk',
      desc: 'Ständige Fortbildungen des Teams in Paris und Mailand sorgen für absolute Perfektion bei Schnitt & Farbe.',
    },
    {
      icon: <Heart className="text-gold-500" size={20} />,
      title: 'Individuelle Empathie',
      desc: 'Keine Abhandlung im Akkord. Wir nehmen uns pro Termin viel Zeit, hören intensiv zu und verwöhnen Sie rundum.',
    },
    {
      icon: <Sparkles className="text-gold-500" size={20} />,
      title: 'Premium Wirkstoffe',
      desc: 'Nur das Beste fürs Haar: Wir vertrauen ausschließlich auf gesundheitlich unbedenkliche High-End Kosmetik.',
    },
    {
      icon: <BookOpen className="text-gold-500" size={20} />,
      title: 'Typ- & Stilberatung',
      desc: 'Nicht jeder Trend passt zu jedem Typ. Wir entwickeln Styles, die Ihre Persönlichkeit ideal unterstreichen.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Photos split column left */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute inset-0 bg-gold-200 rounded-2xl transform translate-x-3 translate-y-3" />
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=700&q=80"
                alt="Almaz Haarstudio Atmosphäre"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white aspect-[4/5] z-10"
                loading="lazy"
              />
            </div>
          </div>

          {/* Story Copy side column right */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold text-center lg:text-left">Unsere Philosophie</span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 tracking-tight leading-tight text-center lg:text-left">
              Wo Leidenschaft zur <br />
              <span className="italic font-normal text-gold-500">Haarkunst verschmilzt</span>
            </h2>
            <div className="h-0.5 w-16 bg-gold-400 mx-auto lg:mx-0" />

            <p className="text-sm text-charcoal-450 leading-relaxed text-charcoal-500 font-light">
              Gegründet aus dem Traum, einen Wohlfühlort zu schaffen, der meisterhafte Friseurkunst mit dem 
              entspannenden Gefühl eines High-End-Spas verbindet, steht Almaz Friseursalon heute für luxuriöse Ästhetik in Herne. 
              Wir betrachten Haargestaltung nicht als mechanischen Ablauf, sondern als personalisierte Form von Kunst und Selbstdarstellung.
            </p>

            <p className="text-sm text-charcoal-450 leading-relaxed text-charcoal-500 font-light">
              Unter der Leitung von Salon-Inhaber Khalil vereinen wir zeitlose Eleganz mit den neuesten Balayage- 
              und Colorationstechniken aus aller Welt. Unser Anspruch ist ganz einfach: Sie sollen unseren Salon 
              nicht nur fantastisch aussehend verlassen, sondern sich auch tiefgehend erholt und gestärkt fühlen.
            </p>

            {/* Core Pillars Value List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="about-core-values">
              {values.map((val, idx) => (
                <div key={idx} className="flex space-x-3 items-start">
                  <div className="shrink-0 p-2 bg-white rounded border border-gold-100 shadow-sm">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-900">{val.title}</h4>
                    <p className="text-[11px] text-charcoal-405 text-charcoal-400 font-light mt-1 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Team Section */}
        <div className="pt-12 border-t border-cream-200">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">Das Team</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-charcoal-900 tracking-tight mt-1">Ihr Style in besten Händen</h3>
            <p className="text-xs text-charcoal-400 font-light mt-2">Unsere qualifizierten Expertinnen widmen sich Ihrem Haar mit vollkommener Hingabe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto" id="about-team-grid">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-xl overflow-hidden border border-cream-100 shadow-sm flex flex-col md:flex-row group hover:shadow-md transition-shadow"
              >
                {/* Image layout column */}
                <div className="md:w-2/5 aspect-[4/5] overflow-hidden bg-cream-50 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform groupby:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Details list column */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-charcoal-950">{member.name}</h4>
                    <p className="text-[10px] uppercase tracking-wider text-gold-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-xs text-charcoal-400 font-light leading-relaxed mb-4">{member.description}</p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-charcoal-500 font-bold mb-1.5 border-b border-cream-100 pb-1">Spezialisiert auf:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((spec, sIdx) => (
                        <span key={sIdx} className="text-[9px] bg-gold-50 text-gold-700 px-2 py-0.5 rounded font-medium border border-gold-100/50">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
