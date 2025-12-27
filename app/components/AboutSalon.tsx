// app/components/AboutSalon.tsx
"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const principles = [
  {
    title: "ТОЧНОСТЬ",
    description:
      "Каждое движение мастера выверено до миллиметра. Нет лишних прикосновений — только необходимые.",
  },
  {
    title: "ТИШИНА",
    description:
      "Мы создали пространство, где внешний шум отсечён. Диалог ведётся только на языке тела.",
  },
  {
    title: "МАТЕРИАЛЫ",
    description:
      "Используем масла холодного отжима и инструменты ручной работы. Ничего массового.",
  },
  {
    title: "ВРЕМЯ",
    description:
      "Сеанс не ограничен минутами. Процедура завершается тогда, когда тело говорит «достаточно».",
  },
];

const features = [
  "Абсолютная конфиденциальность",
  "Индивидуальный подход к каждому клиенту",
  "Мастера с опытом от 8 лет",
  "Использование премиальной косметики",
  "Персональная подготовка программы",
  "Последующая поддержка",
];

export default function AboutSalon() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lavender/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-lavender/5 rounded-full blur-3xl" />

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
            <span className="text-lavender tracking-widest text-sm">САЛОН</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-lavender" />
          </div>

          <h1 className="font-playfair text-4xl md:text-6xl tracking-wide mb-8">
            SÉTEDI — находим источник
            <br />
            <span className="text-lavender">отключаем боль.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto tracking-wide leading-relaxed">
            Это пространство, где телесные практики возведены в ранг искусства.
            Где мастер — целитеть и проводник. Каждое прикосновение имеет
            значение.
          </p>
        </motion.div>

        {/* Основной блок */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Левая колонка */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-playfair text-3xl tracking-wide">
              ФИЛОСОФИЯ
              <br />
              <span className="text-lavender">ПРИКОСНОВЕНИЯ</span>
            </h2>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
                Мы отвергаем механистичный подход. В Sétedi массаж — это диалог.
                Мастер «слушает» тело через руки и отвечает ему движением,
                которое не просто расслабляет, а перестраивает.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
                Наш салон расположен в отеле Freedom не случайно. Это
                символичный выбор: свобода от напряжения, свобода движения,
                свобода быть в гармонии с собой.
              </p>
            </div>

            {/* Особенности */}
            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-white text-lg tracking-widest mb-6">
                ЧТО МЫ ГАРАНТИРУЕМ:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <FiCheck className="text-lavender" />
                    </div>
                    <span className="text-gray-300 text-sm tracking-wider">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Правая колонка - фото */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-800">
              <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-lavender/0 via-lavender to-lavender/0 mx-auto mb-6" />
                  <p className="text-gray-400 tracking-widest text-sm">
                    ИНТЕРЬЕР SÉTEDI
                  </p>
                  <p className="text-gray-500 text-xs mt-2 tracking-wider">
                    Отель Freedom, Екатеринбург
                  </p>
                </div>
              </div>
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-lavender/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber/5 rounded-full blur-xl" />
          </motion.div>
        </div>

        {/* Принципы */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl tracking-wide mb-6">
              ЧЕТЫРЕ СТОЛПА
              <br />
              <span className="text-lavender">НАШЕГО ПОДХОДА</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto tracking-wide">
              То, что отличает Sétedi от обычных массажных салонов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8 h-full group-hover:border-lavender/30 transition-all duration-300">
                  <div className="mb-6">
                    <span className="text-5xl text-lavender/30 font-playfair">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-playfair tracking-wide mb-4">
                    {principle.title}
                  </h3>

                  <p className="text-gray-400 text-sm tracking-wider leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Цитата */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative py-20"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-lavender/30 to-transparent" />
          </div>

          <div className="relative text-center">
            <div className="mb-8">
              <span className="text-amber text-6xl">"</span>
            </div>

            <blockquote className="font-playfair text-2xl md:text-3xl tracking-wide leading-relaxed max-w-4xl mx-auto mb-8">
              Тело помнит всё. Наша задача — помочь ему забыть напряжение и
              вспомнить состояние целостности.
            </blockquote>

            <div className="text-gray-400 tracking-widest text-sm">
              — ОСНОВАТЕЛЬ SÉTEDI
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pt-16 border-t border-gray-800"
        >
          <h3 className="font-playfair text-2xl tracking-wide mb-6">
            ГОТОВЫ ИСПЫТАТЬ
            <br />
            <span className="text-lavender">ДРУГОЙ УРОВЕНЬ МАССАЖА?</span>
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Первая кнопка */}
            <a
              href="https://n1912623.yclients.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-lavender/20 to-lavender/10 border border-lavender/30 rounded-full text-lavender tracking-widest text-sm hover:from-lavender/30 hover:to-lavender/20 transition-all inline-flex items-center justify-center"
            >
              ЗАПИСАТЬСЯ НА СЕАНС
            </a>

            <a
              href="#contacts"
              className="px-8 py-4 border border-gray-700 rounded-full text-gray-300 tracking-widest text-sm hover:border-lavender/50 hover:text-white transition-all inline-flex items-center justify-center"
            >
              ПРОКОНСУЛЬТИРОВАТЬСЯ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
