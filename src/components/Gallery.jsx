import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, placeholder: "Интерьер салона", size: "w-48 h-48 md:w-56 md:h-56", x: "0%", y: "0%" },
  { id: 3, placeholder: "Релакс-зона", size: "w-40 h-40 md:w-48 md:h-48", x: "25%", y: "15%" },
  { id: 4, placeholder: "SPA-процедуры", size: "w-44 h-44 md:w-52 md:h-52", x: "60%", y: "5%" },
  { id: 6, placeholder: "Зона ожидания", size: "w-40 h-40 md:w-44 md:h-44", x: "15%", y: "50%" },
  { id: 5, placeholder: "Массажные кабинеты", size: "w-52 h-52 md:w-60 md:h-60", x: "50%", y: "45%" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Галерея
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Окунитесь в атмосферу нашего спа-центра
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8 lg:gap-10 py-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${item.size} bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-900/30 rounded-full overflow-hidden group cursor-pointer flex items-center justify-center`}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)" }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-purple-500/20 group-hover:from-purple-600/30 group-hover:to-purple-500/30 transition-all rounded-full">
                <span className="text-gray-300 group-hover:text-white font-medium text-center px-4 text-xs md:text-sm lg:text-base">
                  {item.placeholder}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
