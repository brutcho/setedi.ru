import { motion } from "framer-motion";
import { useState } from "react";

const massageTypes = [
  "Классический (общий или зональный)",
  "Лечебно-восстановительный",
  "Лимфодренажный (коррекция фигуры, отёков)",
  "Релакс (с аромамаслами, расслабляющий)",
  "Спорт (интенсивная проработка мышц)",
];

const massagePrices = {
  single: {
    30: "2 100 ₽",
    60: "3 150 ₽",
    90: "4 500 ₽",
    120: "5 640 ₽",
  },
  block5: {
    30: "9 975 ₽",
    60: "14 960 ₽",
    90: "21 375 ₽",
    120: "26 790 ₽",
  },
  block10: {
    30: "18 900 ₽",
    60: "28 350 ₽",
    90: "40 500 ₽",
    120: "50 760 ₽",
  },
};

const specialServices = [
  {
    name: "Огненный массаж",
    description: "Общий + массаж огнем",
    duration: "120 минут",
    single: "6 700 ₽",
    block: "25 400 ₽ (блок из 4 процедур)",
    popular: false,
  },
  {
    name: "Силуэт",
    description: "Антицеллюлитный + моделирующий + обертывание",
    duration: "80 минут",
    single: "4 900 ₽",
    block5: "23 275 ₽ (блок из 5 процедур)",
    block10: "44 100 ₽ (блок из 10 процедур)",
    popular: true,
  },
];

const additionalServices = [
  {
    name: "Парафинотерапия для рук",
    description: "Увлажнение + маска",
    price: "700 ₽",
  },
  {
    name: "Парафинотерапия для ног",
    description: "Смягчение + педикюрный уход",
    price: "700 ₽",
  },
  {
    name: "Обертывание",
    description: "",
    price: "1 700 ₽",
  },
  {
    name: "Скрабирование всего тела",
    description: "",
    price: "990 ₽",
  },
];

const comboServices = [
  {
    name: "Релакс + обертывание",
    duration: "120 минут",
    price: "4 900 ₽",
  },
  {
    name: "Силуэт + парафин для ног",
    duration: "80 минут",
    price: "5 300 ₽",
  },
  {
    name: "Массаж + парафин для рук и ног",
    duration: "130 минут",
    price: "6 600 ₽",
  },
  {
    name: "Парафин для рук и ног",
    duration: "",
    price: "1 100 ₽",
  },
  {
    name: "Массаж + скраб + обертывание + маска для рук и ног",
    duration: "150 минут",
    price: "7 990 ₽",
    popular: true,
  },
];

export default function Prices() {
  const [activeTab, setActiveTab] = useState("massage");

  return (
    <section id="prices" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Прайс-лист
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-2">
            Массажные услуги и SPA-уход
          </p>
          <p className="text-sm text-gray-400">
            Все процедуры проводятся с использованием профессиональной косметики
          </p>
        </motion.div>

        {/* Табы */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: "massage", label: "Массажи" },
            { id: "special", label: "Специальные" },
            { id: "additional", label: "Дополнительно" },
            { id: "combo", label: "Комбо" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white"
                  : "bg-gray-900 text-white border border-purple-900/30 hover:border-purple-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Массажи */}
        {activeTab === "massage" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-900/30">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Виды массажа
              </h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                {massageTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-gray-900 rounded-lg border border-purple-900/30 overflow-hidden">
                <thead className="bg-purple-900/20">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-white">
                      Сеанс
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-white">
                      1 процедура
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-white">
                      Блок из 5
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-white">
                      Блок из 10
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(massagePrices.single).map(
                    ([duration, singlePrice], index) => (
                      <tr
                        key={duration}
                        className={
                          index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                        }
                      >
                        <td className="px-4 py-3 font-medium text-white">
                          {duration} минут
                        </td>
                        <td className="px-4 py-3 text-center text-purple-400 font-semibold">
                          {singlePrice}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          {massagePrices.block5[duration]}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          {massagePrices.block10[duration]}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Специальные услуги */}
        {activeTab === "special" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-900 border rounded-lg p-6 ${
                  service.popular
                    ? "border-purple-600 shadow-lg"
                    : "border-purple-900/30"
                }`}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
                }}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                    Популярно
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.name}
                </h3>
                <p className="text-sm mb-4 text-gray-400">
                  {service.description}
                </p>
                <p className="text-sm mb-4 text-gray-300">{service.duration}</p>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-purple-400">
                    {service.single}
                  </p>
                  {service.block && (
                    <p className="text-sm text-gray-300">{service.block}</p>
                  )}
                  {service.block5 && (
                    <>
                      <p className="text-sm text-gray-300">{service.block5}</p>
                      {service.block10 && (
                        <p className="text-sm text-gray-300">
                          {service.block10}
                        </p>
                      )}
                    </>
                  )}
                </div>
                <motion.a
                  href="#contacts"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block mt-4 text-center px-4 py-2.5 font-semibold rounded-lg text-white transition-all bg-purple-600"
                >
                  Записаться
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Дополнительные услуги */}
        {activeTab === "additional" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 border border-purple-900/30 rounded-lg p-6 hover:shadow-lg hover:border-purple-600/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {service.name}
                </h3>
                {service.description && (
                  <p className="text-sm mb-4 text-gray-400">
                    {service.description}
                  </p>
                )}
                <p className="text-xl font-bold text-purple-400 mb-4">
                  {service.price}
                </p>
                <motion.a
                  href="#contacts"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block text-center px-4 py-2 font-semibold rounded-lg text-white text-sm transition-all bg-purple-600"
                >
                  Записаться
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Комбо-предложения */}
        {activeTab === "combo" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {comboServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gray-900 border rounded-lg p-6 ${
                  service.popular
                    ? "border-purple-500 shadow-lg"
                    : "border-purple-900/30"
                } hover:shadow-xl transition-all`}
                whileHover={{ y: -5 }}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full">
                    Выгодно
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {service.name}
                </h3>
                {service.duration && (
                  <p className="text-sm mb-4 text-gray-400">
                    {service.duration}
                  </p>
                )}
                <p className="text-2xl font-bold text-purple-400 mb-4">
                  {service.price}
                </p>
                <motion.a
                  href="#contacts"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block text-center px-4 py-2.5 font-semibold rounded-lg text-white transition-all bg-purple-600"
                >
                  Записаться
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Примечание */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gray-900 border border-purple-900/30 rounded-lg p-6 text-center"
        >
          <p className="text-gray-300">
            <span className="font-semibold">Примечание:</span> Каждая процедура
            начинается с омовения ног
          </p>
        </motion.div>
      </div>
    </section>
  );
}
