"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiInstagram, FiMessageSquare } from "react-icons/fi";
import { FaTelegram, FaVk } from "react-icons/fa";
import Link from "next/link";

export default function NavLuxury() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems = [
    { label: "О САЛОНЕ", href: "/about" },
    { label: "МАСТЕРА", href: "/masters" },
    { label: "УСЛУГИ", href: "/prices" },
    { label: "КОНТАКТЫ", href: "/contacts" },
  ];

  const socialIcons = [
    {
      icon: <FiInstagram size={18} />,
      href: "https://instagram.com/setedi.ru",
      label: "Instagram",
    },
    {
      icon: <FaTelegram size={18} />,
      href: "https://t.me/setedispa",
      label: "Telegram",
    },
    {
      icon: <FaVk size={18} />,
      href: "https://vk.com/setedee",
      label: "VKontakte",
    },
    // {
    //   icon: <FiMessageSquare size={18} />,
    //   href: "https://wa.me/79999999999",
    //   label: "WhatsApp",
    // },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Полупрозрачная подложка с размытием */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Градиентная нижняя граница */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/30 to-transparent" />

      <div className="relative px-12 py-4">
        {" "}
        {/* Добавь relative */}
        <div className="flex items-center justify-between">
          {/* Логотип */}
          {isHomePage ? (
            // На главной - не кликабельный span
            <span className="flex items-center gap-2 cursor-default">
              <Image
                src="/logo/logo.svg"
                alt="Sétedi"
                width={100}
                height={30}
                className="w-full h-[30px]"
                style={{ width: "100%", height: "30px" }}
                priority
              />
            </span>
          ) : (
            // На других страницах - кликабельная ссылка на главную
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/logo/logo.svg"
                alt="Sétedi"
                width={100}
                height={30}
                className="w-full h-[30px]"
                style={{ width: "100%", height: "30px" }}
                priority
              />
            </Link>
          )}

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest text-gray-300 hover:text-white transition-all duration-300 hover:tracking-widest relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-lavender to-amber group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Правая часть */}
          <div className="flex items-center gap-6">
            {/* Соцсети (десктоп) */}
            <div className="hidden md:flex items-center gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender hover:text-lavender/80 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Кнопка записи */}
            <a
              href="https://n1912623.yclients.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2 overflow-hidden group inline-block"
            >
              <span className="absolute inset-0 border border-lavender rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-lavender/0 via-lavender to-lavender/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative text-sm tracking-widest">ЗАПИСЬ</span>
            </a>

            {/* Бургер-меню */}
            <button
              className="md:hidden flex flex-col gap-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              <div className="w-6 h-px bg-white" />
              <div className="w-6 h-px bg-white" />
            </button>
          </div>
        </div>
        {/* Мобильное меню */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-6 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-lg tracking-widest text-gray-300 hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Соцсети в мобильном меню */}
            <div className="pt-4 border-t border-gray-800">
              <div className="flex gap-6 mb-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lavender hover:text-lavender/80 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <a
                href="tel:+79999999999"
                className="text-lg tracking-widest text-amber"
              >
                +7 999 999-99-99
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
