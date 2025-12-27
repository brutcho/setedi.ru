"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const masters = [
  {
    id: 1,
    name: "Артём",
    experience: "12 ЛЕТ",
    specialization: ["КЛАССИЧЕСКИЙ МАССАЖ", "РЕЛАКС ТЕРАПИЯ"],
    image: "/images/team/master1.png",
  },
  {
    id: 2,
    name: "Сергей",
    experience: "8 ЛЕТ",
    specialization: ["СПОРТИВНЫЙ МАССАЖ", "КРАНИОСАКРАЛЬНАЯ"],
    image: "/images/team/master2.png",
  },
];

export default function MastersGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-600" />
            <h2 className="font-playfair text-4xl tracking-widest">
              НАШИ МАСТЕРА
            </h2>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {masters.map((master) => (
            <motion.div
              key={master.id}
              onMouseEnter={() => setHoveredId(master.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative aspect-[3/4] bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Изображение мастера */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <img
                  src={master.image}
                  alt={master.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
              </div>

              {/* Карточка */}
              <div className="absolute inset-0 flex flex-col px-8 pt-10 z-20">
                {/* Имя */}
                <div className="mt-auto">
                  <h3 className="font-playfair text-2xl tracking-wider mb-2 text-white">
                    {master.name}
                  </h3>

                  {/* Стаж */}
                  <div className="mb-4">
                    <span className="text-gradient-amber text-sm tracking-widest">
                      {master.experience}
                    </span>
                  </div>

                  {/* Специализация */}
                  <div className="space-y-2">
                    {master.specialization.map((spec, idx) => (
                      <p
                        key={idx}
                        className="text-gray-200 text-sm tracking-widest"
                      >
                        {spec}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Кнопка подробнее */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: hoveredId === master.id ? 1 : 0,
                    x: hoveredId === master.id ? 0 : 20,
                  }}
                  className="mt-8"
                >
                  <span className="text-lavender text-sm tracking-widest inline-flex items-center gap-2">
                    подробнее →
                  </span>
                </motion.div>
              </div>

              {/* Эффект свечения */}
              {hoveredId === master.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 border border-lavender/30 border-glow z-30"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
