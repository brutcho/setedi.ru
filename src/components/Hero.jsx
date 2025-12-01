import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 text-purple-400 text-center">
            S<span className="relative inline-block">
              <span className="text-yellow-400 absolute -top-1 md:-top-2 lg:-top-3 left-0.5 md:left-1 lg:left-1.5 text-lg md:text-2xl lg:text-3xl leading-none">´</span>e
            </span>tedi
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-purple-300 font-normal text-center">SPA | HEALTH | RELAX</p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-4 font-medium text-white"
        >
          Профессиональный массаж и SPA-уход
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300"
        >
          Окунитесь в мир релаксации, восстановления и гармонии
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contacts"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 font-semibold text-lg rounded-lg text-white glow-effect bg-purple-600"
          >
            Записаться онлайн
          </motion.a>
          <motion.a
            href="#benefits"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 font-semibold text-lg border-2 rounded-lg transition-colors border-purple-500 text-purple-400"
          >
            Узнать больше
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
