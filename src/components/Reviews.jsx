import { motion } from "framer-motion";

const reviews = [
  {
    name: "Екатерина",
    text: "Отличный спа-центр! Очень расслабляющая атмосфера и профессиональные мастера. Обязательно вернусь еще раз.",
    rating: 5,
    date: "15.01.2024"
  },
  {
    name: "Дмитрий",
    text: "Прекрасное место для отдыха. После массажа чувствую себя полностью обновленным. Рекомендую!",
    rating: 5,
    date: "10.01.2024"
  },
  {
    name: "Ольга",
    text: "Замечательный сервис и внимательное отношение к клиентам. Очень довольна результатом.",
    rating: 5,
    date: "05.01.2024"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Отзывы
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Что говорят наши клиенты
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 border border-purple-900/30 p-6 rounded-lg hover:shadow-xl hover:border-purple-600/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="mb-4 text-gray-300 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-white">
                  — {review.name}
                </p>
                <p className="text-sm text-gray-400">
                  {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
