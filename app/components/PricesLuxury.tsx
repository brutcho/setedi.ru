// app/components/PricesLuxury.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const priceCategories = [
  {
    id: "massage",
    title: "МАССАЖИ",
    description: "Классические и специализированные техники",
  },
  {
    id: "signature",
    title: "СИГНАТУРНЫЕ ПРОЦЕДУРЫ",
    description: "Уникальные программы Sétedi",
  },
  {
    id: "combo",
    title: "КОМБИНАЦИИ",
    description: "Специальные предложения",
  },
];

const massageServices = [
  {
    name: "КЛАССИЧЕСКИЙ",
    description: "Общий или зональный массаж",
    durations: [
      { time: "30 мин", price: "2 100 ₽" },
      { time: "60 мин", price: "3 150 ₽", popular: true },
      { time: "90 мин", price: "4 500 ₽" },
      { time: "120 мин", price: "5 640 ₽" },
    ],
  },
  {
    name: "ЛИМФОДРЕНАЖНЫЙ",
    description: "Коррекция фигуры, работа с отёками",
    durations: [
      { time: "60 мин", price: "3 500 ₽" },
      { time: "90 мин", price: "4 900 ₽" },
      { time: "120 мин", price: "6 200 ₽" },
    ],
  },
  {
    name: "РЕЛАКС",
    description: "С аромамаслами, глубокое расслабление",
    durations: [
      { time: "60 мин", price: "3 800 ₽", popular: true },
      { time: "90 мин", price: "5 200 ₽" },
      { time: "120 мин", price: "6 600 ₽" },
    ],
  },
  {
    name: "СПОРТИВНЫЙ",
    description: "Интенсивная проработка мышц",
    durations: [
      { time: "60 мин", price: "4 000 ₽" },
      { time: "90 мин", price: "5 500 ₽" },
    ],
  },
];

const signatureServices = [
  {
    name: "SÉTEDI SIGNATURE",
    description: "Огненный массаж + камни + ароматерапия",
    duration: "120 мин",
    price: "6 700 ₽",
    details: "Полное погружение в релакс",
    popular: true,
  },
  {
    name: "СИЛУЭТ",
    description: "Антицеллюлитный + моделирующий + обертывание",
    duration: "80 мин",
    price: "4 900 ₽",
    details: "Курс 5 процедур — 23 275 ₽",
    popular: true,
  },
  {
    name: "ТИШИНА ТЕЛА",
    description: "Краниосакральная + звуковая терапия",
    duration: "90 мин",
    price: "5 500 ₽",
    details: "Работа с глубокими блоками",
  },
];

const comboServices = [
  {
    name: "РЕЛАКС + ОБЕРТЫВАНИЕ",
    description: "Полное обновление",
    duration: "120 мин",
    price: "4 900 ₽",
    badge: "Популярно",
  },
  {
    name: "МАССАЖ + ПАРАФИН",
    description: "Для рук и ног",
    duration: "130 мин",
    price: "6 600 ₽",
    badge: "Комфорт",
  },
  {
    name: "ПОЛНЫЙ УХОД",
    description: "Массаж + скраб + обертывание + маски",
    duration: "150 мин",
    price: "7 990 ₽",
    badge: "Премиум",
    featured: true,
  },
];

export default function PricesLuxury() {
  const [activeCategory, setActiveCategory] = useState("massage");

  return (
    <section className="py-32 px-6 relative">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lavender/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-lavender" />
            <span className="text-lavender tracking-widest text-sm">ЦЕНЫ</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-lavender" />
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl tracking-wide mb-6">
            ИНВЕСТИЦИЯ
            <br />
            <span className="text-lavender">В СЕБЯ</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto tracking-wide">
            Каждая процедура — это диалог с телом, проводимый опытными мастерами
            с использованием премиальной косметики
          </p>
        </motion.div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {priceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-8 py-3 rounded-full transition-all duration-500 ${
                activeCategory === category.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="relative z-10 tracking-widest text-sm">
                {category.title}
              </span>

              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-lavender/20 to-lavender/10 rounded-full border border-lavender/30"
                />
              )}
            </button>
          ))}
        </div>

        {/* Контент */}
        <div className="min-h-[600px]">
          {/* Массажи */}
          {activeCategory === "massage" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center mb-12">
                <p className="text-gray-400 tracking-widest text-sm">
                  БЛОК ИЗ 5 ПРОЦЕДУР — СКИДКА 5% | БЛОК ИЗ 10 — СКИДКА 10%
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {massageServices.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-lavender/30 transition-all group"
                  >
                    <h3 className="font-playfair text-xl tracking-wide mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 tracking-wider">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      {service.durations.map((duration, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-white tracking-wider">
                              {duration.time}
                            </span>
                            {duration.popular && (
                              <span className="text-xs text-amber tracking-wider">
                                ★
                              </span>
                            )}
                          </div>
                          <span className="text-lavender font-medium tracking-wider">
                            {duration.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://n1912623.yclients.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-8 py-3 border border-lavender/30 rounded-full text-lavender tracking-widest text-sm hover:bg-lavender/10 transition-colors inline-flex justify-center items-center"
                    >
                      ЗАПИСАТЬСЯ
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Сигнатурные процедуры */}
          {activeCategory === "signature" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {signatureServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden group ${
                    service.popular
                      ? "border border-lavender/30"
                      : "border border-gray-800"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-gradient-to-r from-lavender to-purple-600 text-white text-xs tracking-widest rounded-full">
                        ПОПУЛЯРНО
                      </span>
                    </div>
                  )}

                  <div className="p-8 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                    <h3 className="font-playfair text-2xl tracking-wide mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 tracking-wider">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm tracking-wider">
                          ВРЕМЯ
                        </span>
                        <span className="text-white tracking-wider">
                          {service.duration}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm tracking-wider">
                          СТОИМОСТЬ
                        </span>
                        <span className="text-lavender text-xl tracking-wider">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {service.details && (
                      <p className="text-gray-300 text-sm mb-6 tracking-wider">
                        {service.details}
                      </p>
                    )}
                    <a
                      href="https://n1912623.yclients.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-8 py-3 border border-lavender/30 rounded-full text-lavender tracking-widest text-sm hover:bg-lavender/10 transition-colors inline-flex justify-center items-center"
                    >
                      ВЫБРАТЬ ПРОЦЕДУРУ
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Комбинации */}
          {activeCategory === "combo" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {comboServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden group ${
                    service.featured
                      ? "border-2 border-amber/30"
                      : "border border-gray-800"
                  }`}
                >
                  {service.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className={`px-3 py-1 text-white text-xs tracking-widest rounded-full ${
                          service.featured
                            ? "bg-gradient-to-r from-amber to-orange-600"
                            : "bg-gradient-to-r from-lavender to-purple-600"
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <div
                    className={`p-8 h-full ${
                      service.featured
                        ? "bg-gradient-to-b from-[#1a1a1a] to-[#111]"
                        : "bg-gradient-to-b from-[#111] to-[#0a0a0a]"
                    }`}
                  >
                    <h3 className="font-playfair text-2xl tracking-wide mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 tracking-wider">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm tracking-wider">
                          ДЛИТЕЛЬНОСТЬ
                        </span>
                        <span className="text-white tracking-wider">
                          {service.duration}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm tracking-wider">
                          ИТОГОВАЯ ЦЕНА
                        </span>
                        <span
                          className={`text-xl tracking-wider ${
                            service.featured ? "text-amber" : "text-lavender"
                          }`}
                        >
                          {service.price}
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://n1912623.yclients.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-3 rounded-full tracking-widest text-sm transition-all ${
                        service.featured
                          ? "bg-gradient-to-r from-amber/20 to-amber/10 border border-amber/30 text-amber hover:from-amber/30 hover:to-amber/20"
                          : "bg-gradient-to-r from-lavender/20 to-lavender/10 border border-lavender/30 text-lavender hover:from-lavender/30 hover:to-lavender/20"
                      }`}
                    >
                      ВЫБРАТЬ КОМБО
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Футер секции */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm tracking-widest mb-4">
            КАЖДАЯ ПРОЦЕДУРА НАЧИНАЕТСЯ С ОМОВЕНИЯ НОГ
          </p>
          <p className="text-gray-500 text-xs tracking-wider">
            Все цены указаны за один сеанс. Возможна оплата блоками со скидкой.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
