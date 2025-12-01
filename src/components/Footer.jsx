import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-purple-400 mb-1">
                S<span className="relative inline-block">
                  <span className="text-yellow-400 absolute -top-1 left-0.5 text-xs leading-none">´</span>e
                </span>tedi
              </h3>
              <p className="text-xs text-purple-300 font-normal">SPA | HEALTH | RELAX</p>
            </div>
            <p className="text-white/80 mb-4">
              Профессиональный массаж и SPA-уход в Екатеринбурге
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Быстрые ссылки
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-purple-400 transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-white/80 hover:text-purple-400 transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#prices" className="text-white/80 hover:text-purple-400 transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-white/80 hover:text-purple-400 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Социальные сети
            </h4>
            <div className="flex gap-4">
              <motion.a
                href="https://vk.com/setedee"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                VK
              </motion.a>
              <motion.a
                href="https://instagram.com/dzenzone"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Instagram
              </motion.a>
              <motion.a
                href="https://t.me/dzenzone"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Telegram
              </motion.a>
              <motion.a
                href="https://wa.me/79120312266"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                WhatsApp
              </motion.a>
            </div>
            <div className="mt-6">
              <p className="text-white/80 mb-2">Телефон:</p>
              <a href="tel:+79120312266" className="text-purple-400 hover:text-purple-300 transition-colors">
                +7 (912) 031-22-66
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Setedi. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
