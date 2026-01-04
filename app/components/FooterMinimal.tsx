import Image from "next/image";
import { FiInstagram, FiMessageSquare } from "react-icons/fi";
import { FaTelegram, FaVk } from "react-icons/fa";

export default function FooterMinimal() {
  const socialIcons = [
    {
      icon: <FiInstagram size={18} />,
      href: "https://instagram.com/setedi.ru",
      label: "Instagram",
    },
    {
      icon: <FaTelegram size={18} />,
      href: "https://t.me/setedi_support",
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
    <footer className="border-t border-gray-800 mt-auto">
      <div className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Лого и адрес */}
            <div className="text-left">
              <div className="mb-4">
                <Image
                  src="/logo/logo.svg"
                  alt="Sétedi"
                  width={100}
                  height={30}
                  className="w-full h-[30px]"
                  style={{ width: "auto", height: "30px" }}
                  priority
                />
              </div>
              <p className="text-gray-400 text-sm tracking-widest leading-relaxed">
                ЕКАТЕРИНБУРГ, ОТЕЛЬ FREEDOM
                <br />
                КОМВУЗОВСКАЯ 21В
              </p>
            </div>

            {/* Контакты */}
            <div className="space-y-2">
              <p className="text-sm tracking-widest text-gray-400">КОНТАКТЫ</p>
              {/*<a
                href="tel:+79999999999"
                className="block font-mono text-lg hover:text-lavender transition-colors"
              >
                +7 999 999-99-99
              </a>*/}
              <a
                href="mailto:hello@setedi.ru"
                className="block font-mono text-sm text-gray-400 hover:text-white transition-colors"
              >
                welcome@setedi.ru
              </a>
            </div>

            {/* Соцсети */}
            <div>
              <p className="text-sm tracking-widest text-gray-400 mb-4">
                СОЦИАЛЬНЫЕ СЕТИ
              </p>
              <div className="flex gap-6">
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
            </div>
          </div>

          {/* Копирайт */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-xs tracking-widest text-gray-500">
              © SÉTEDI 2025 - 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
