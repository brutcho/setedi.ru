"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import videoSrc from "@/public/videos/video.mp4";

const slides = [
  {
    id: 1,
    type: "video",
    content: "/videos/video.mp4",
    text: "SÉTEDI / ЕКАТЕРИНБУРГ",
    position: "right",
  },
  {
    id: 2,
    type: "image",
    content: "/images/banner-2.jpg",
    text: "ТОЧНОСТЬ КАК ФИЛОСОФИЯ",
    position: "left",
  },
  {
    id: 3,
    type: "text",
    content: null,
    text: "MASSAGE IS A SILENT LANGUAGE",
    position: "center",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);

      // После завершения анимации разрешаем следующее переключение
      setTimeout(() => setIsAnimating(false), 500);
    }, slideDuration + animationDuration); // 5.5 секунд = 5 сек просмотр + 0.5 сек анимация

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Увеличь длительность показа слайда
  const slideDuration = 12000; // 5 секунд
  const animationDuration = 500; // 0.5 секунд анимация

  return (
    <div className="relative h-screen">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }} // ← уменьши с 1 до 0.5 секунды
                className="absolute inset-0"
              >
                {/* Фон */}
                {slide.type === "video" && (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={slide.content} type="video/mp4" />
                  </video>
                )}

                {slide.type === "image" && (
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.content})` }}
                  />
                )}

                {slide.type === "text" && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
                )}

                {/* Наложение */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

                {/* Текст */}
                <div
                  className={`absolute inset-0 flex items-center justify-${slide.position} p-4 md:p-12`}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={`max-w-[90%] md:max-w-xl ${slide.position === "center" ? "text-center" : ""}`}
                  >
                    <p className="font-playfair text-2xl md:text-5xl tracking-wider text-white leading-tight">
                      {slide.text}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Индикаторы */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="flex items-center gap-2"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-lavender scale-125" : "bg-white/30"}`}
            />
            <span className="text-xs tracking-wider opacity-0 hover:opacity-100 transition-opacity">
              {idx + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
