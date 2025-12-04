import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-purple-900/30 shadow-sm"
      style={{ backgroundColor: "#49225b90" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Логотип */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-wide text-purple-400 flex flex-col items-center"
        >
          <span className="text-2xl relative">
            <img
              src="/images/logo.svg"
              alt=""
              style={{ width: "100%", height: "30px" }}
            />
          </span>
        </motion.a>

        {/* Навигация для десктопа */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-8"
        >
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#benefits"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Преимущества
            </a>
            <a
              href="#prices"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Галерея
            </a>
            <a
              href="#team"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Команда
            </a>
            <a
              href="#reviews"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Отзывы
            </a>
            <a
              href="#contacts"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Контакты
            </a>
          </div>

          <div className="flex items-center gap-3 ml-6 border-l border-purple-900/30 pl-6">
            <motion.a
              href="https://vk.com/setedee"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="VK"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.785 16.241s.288-.03.436-.184c.136-.14.132-.401.132-.401s-.02-1.123.58-1.288c.592-.17 1.35.112 2.12.81.61.55 1.07.99 1.07.99s.19.13.325.02c.13-.11.09-.33.09-.33s-.16-1.05.07-2.18c.22-1.05-.07-1.18-.07-1.18s-.05-.11.02-.17c.07-.06.16-.04.16-.04l2.18.01s.32-.02.44.1c.11.1.08.31.08.31s-.08.78-.35 1.5c-.35.9-.5 1.05-.46 1.18.03.1.1.13.1.13s.9.52 1.25.8c.12.1.2.22.15.35-.05.13-.15.1-.15.1l-1.7-.01c-.11 0-.15.05-.15.1s.03.2.1.3c.1.15.35.45.8.87 1.1 1.05 1.29 1.55 1.2 1.8-.05.15-.15.11-.15.11l-1.25-.07c-.11 0-.2.02-.27-.05-.07-.07-.5-.6-1.05-1.2-.15-.15-.1-.22.05-.35.1-.1.5-.6.7-.8.15-.2.2-.3.1-.45-.1-.15-.2-.1-.2-.1l-1.7.1c-.18.01-.3-.05-.35.1-.05.1-.05.3-.05.3s.02.6-.1.9c-.1.3-.3.35-.3.35l-.85-.01z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://instagram.com/dzenzone"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://t.me/dzenzone"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Telegram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 1.858-.896 6.375-1.262 8.453-.152.855-.45 1.139-.739 1.168-.631.058-1.11-.417-1.722-.817-.955-.64-1.496-1.038-2.424-1.662-1.03-.699-.362-1.084.224-1.712.155-.163 2.812-2.58 2.866-2.8.006-.027.011-.125-.047-.177-.058-.052-.144-.034-.207-.02-.088.018-1.494.95-4.216 2.788-.399.238-.761.354-1.085.348-.357-.007-1.043-.201-1.52-.367-.613-.212-1.099-.324-1.058-.685.023-.203.321-.411.886-.622 3.48-1.523 5.808-2.525 7.055-3.11 3.35-1.58 4.043-1.856 4.5-1.872.1-.003.321.023.465.14.118.097.151.228.167.32.021.12.045.394.024.607z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://wa.me/79120312266"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </motion.a>
          </div>

          {/* Кнопка записи */}
          <motion.a
            href="#contacts"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 font-semibold rounded-lg transition-all ml-4 glow-effect bg-purple-600 text-white"
          >
            Онлайн запись
          </motion.a>
        </motion.div>

        {/* Мобильное меню */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a
              href="https://vk.com/setedee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.785 16.241s.288-.03.436-.184c.136-.14.132-.401.132-.401s-.02-1.123.58-1.288c.592-.17 1.35.112 2.12.81.61.55 1.07.99 1.07.99s.19.13.325.02c.13-.11.09-.33.09-.33s-.16-1.05.07-2.18c.22-1.05-.07-1.18-.07-1.18s-.05-.11.02-.17c.07-.06.16-.04.16-.04l2.18.01s.32-.02.44.1c.11.1.08.31.08.31s-.08.78-.35 1.5c-.35.9-.5 1.05-.46 1.18.03.1.1.13.1.13s.9.52 1.25.8c.12.1.2.22.15.35-.05.13-.15.1-.15.1l-1.7-.01c-.11 0-.15.05-.15.1s.03.2.1.3c.1.15.35.45.8.87 1.1 1.05 1.29 1.55 1.2 1.8-.05.15-.15.11-.15.11l-1.25-.07c-.11 0-.2.02-.27-.05-.07-.07-.5-.6-1.05-1.2-.15-.15-.1-.22.05-.35.1-.1.5-.6.7-.8.15-.2.2-.3.1-.45-.1-.15-.2-.1-.2-.1l-1.7.1c-.18.01-.3-.05-.35.1-.05.1-.05.3-.05.3s.02.6-.1.9c-.1.3-.3.35-.3.35l-.85-.01z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/setedi.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://t.me/dzenzone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 1.858-.896 6.375-1.262 8.453-.152.855-.45 1.139-.739 1.168-.631.058-1.11-.417-1.722-.817-.955-.64-1.496-1.038-2.424-1.662-1.03-.699-.362-1.084.224-1.712.155-.163 2.812-2.58 2.866-2.8.006-.027.011-.125-.047-.177-.058-.052-.144-.034-.207-.02-.088.018-1.494.95-4.216 2.788-.399.238-.761.354-1.085.348-.357-.007-1.043-.201-1.52-.367-.613-.212-1.099-.324-1.058-.685.023-.203.321-.411.886-.622 3.48-1.523 5.808-2.525 7.055-3.11 3.35-1.58 4.043-1.856 4.5-1.872.1-.003.321.023.465.14.118.097.151.228.167.32.021.12.045.394.024.607z" />
              </svg>
            </a>
            <a
              href="https://wa.me/79120312266"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-white"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Мобильное меню выпадающее */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-t border-purple-900/30 px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="#benefits"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#prices"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Галерея
            </a>
            <a
              href="#team"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Команда
            </a>
            <a
              href="#reviews"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contacts"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Контакты
            </a>
            <a
              href="#contacts"
              className="px-6 py-2 text-center font-semibold mt-2 rounded-lg text-white bg-purple-600"
            >
              Онлайн запись
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
