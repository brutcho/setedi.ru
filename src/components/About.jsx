import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            О нас
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Setedi — это место, где встречаются профессионализм и забота о вашем здоровье
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Наша миссия
            </h3>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Мы создали Setedi как пространство для полного расслабления и восстановления. 
              Наша команда профессионалов поможет вам снять стресс, восстановить силы и 
              почувствовать гармонию тела и духа.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Каждая процедура подбирается индивидуально с учетом ваших потребностей и 
              пожеланий. Мы используем только качественные средства и проверенные техники.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              className="p-6 bg-gray-900 border border-purple-900/30 rounded-lg hover:shadow-lg hover:border-purple-600/50 transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-white">
                Опытные мастера
              </h4>
              <p className="text-gray-300">
                Все наши специалисты имеют профессиональное образование и многолетний опыт работы
              </p>
            </motion.div>
            <motion.div 
              className="p-6 bg-gray-900 border border-purple-900/30 rounded-lg hover:shadow-lg hover:border-purple-600/50 transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-white">
                Индивидуальный подход
              </h4>
              <p className="text-gray-300">
                Каждая процедура адаптируется под ваши потребности и предпочтения
              </p>
            </motion.div>
            <motion.div 
              className="p-6 bg-gray-900 border border-purple-900/30 rounded-lg hover:shadow-lg hover:border-purple-600/50 transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-semibold mb-2 text-white">
                Премиум качество
              </h4>
              <p className="text-gray-300">
                Используем только сертифицированные средства и оборудование
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
