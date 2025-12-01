import { motion } from "framer-motion";

const benefits = [
  {
    icon: "💆",
    title: "Релаксация",
    description: "Полное расслабление тела и разума"
  },
  {
    icon: "🌿",
    title: "Натуральные средства",
    description: "Используем только органические продукты"
  },
  {
    icon: "✨",
    title: "Восстановление",
    description: "Восстановление после стресса и усталости"
  },
  {
    icon: "🎯",
    title: "Индивидуальный подход",
    description: "Персональная программа для каждого клиента"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Преимущества
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Почему выбирают Setedi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-900 rounded-lg border border-purple-900/30 hover:shadow-xl hover:border-purple-600/50 transition-all"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
