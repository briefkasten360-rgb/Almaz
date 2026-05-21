import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = 'https://images.unsplash.com/photo-1620331702824-b2b0830950b4?auto=format&fit=crop&w=800&q=80'; // Dull/damaged hair washes
  const afterImage = 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'; // Brilliant Waves Balayage

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handlePointerMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden" id="before-after-section">
      <div className="absolute inset-0 bg-[radial-gradient(#d6bf7b_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text descriptions and conversion text */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">Ergebnisse, die bewegen</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900 tracking-tight leading-tight">
              Die Magie einer <br />
              <span className="italic font-normal text-gold-500">Luxus-Transformation</span>
            </h2>
            <div className="h-0.5 w-16 bg-gold-400 mx-auto lg:mx-0" />
            
            <p className="text-sm text-charcoal-500 font-light leading-relaxed">
              Erleben Sie den Unterschied unserer professionellen Ansatz- und Veredelungstechniken. 
              Hier sehen Sie die Transformation einer glanzlosen, unregelmäßigen Ausgangsfarbe 
              zu unserer legendären <strong className="text-charcoal-900 font-semibold">Honey Beach-Waves Balayage</strong> mit tiefenrekonstruierendem Olaplex™-Finish.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Keine harten Kanten oder Flecken',
                'Gesunde, geschmeidig glänzende Faserstruktur',
                'Fließende Verläufe für sanftes Rauswachsen (bis 6 Monate Halt)',
                'Individuelle Anpassung an Augenfarbe & Hautton'
              ].map((item, id) => (
                <div key={id} className="flex items-center space-x-3 justify-center lg:justify-start">
                  <div className="p-1 rounded-full bg-gold-100 text-gold-600">
                    <CheckCircle2 size={13} />
                  </div>
                  <span className="text-xs text-charcoal-600 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-charcoal-400 italic pt-2">
              *Tippen Sie auf den Schieberegler und ziehen Sie ihn nach links oder rechts, um das Ergebnis zu enthüllen.
            </p>
          </div>

          {/* Interactive slider element */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full max-w-xl aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-[6px] border-white select-none cursor-ew-resize"
              id="before-after-slider-container"
            >
              {/* BEFORE IMAGE (Always Behind) */}
              <div className="absolute inset-0">
                <img
                  src={beforeImage}
                  alt="Haarstudio Almaz Vorher"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 bg-charcoal-900/85 backdrop-blur px-3 py-1 rounded text-[10px] tracking-widest uppercase font-bold text-white z-10 border border-white/10">
                  Vorher
                </div>
              </div>

              {/* AFTER IMAGE (Slices over BEFORE image) */}
              <div
                className="absolute inset-y-0 left-0 right-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={afterImage}
                  alt="Haarstudio Almaz Nachher"
                  className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  draggable={false}
                />
                <div className="absolute top-4 right-4 bg-gold-600/90 backdrop-blur px-3 py-1 rounded text-[10px] tracking-widest uppercase font-bold text-white z-10 border border-gold-200/20">
                  Nachher
                </div>
              </div>

              {/* Interactive Handle and Divider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Trigger Circle handle */}
                <div
                  onMouseDown={() => setIsDragging(true)}
                  onTouchStart={() => setIsDragging(true)}
                  className="absolute p-2 bg-white rounded-full shadow-2xl border border-gold-400 text-gold-600 hover:scale-110 active:scale-95 transition-transform pointer-events-auto cursor-pointer"
                >
                  <ArrowLeftRight size={18} />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
