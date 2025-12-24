import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Введите ваше имя";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Некорректный номер телефона";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: "", phone: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || "Ошибка отправки. Попробуйте еще раз.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Ошибка сети. Проверьте соединение.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contacts"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-lg max-w-3xl mx-auto text-white/80">
            Свяжитесь с нами или запишитесь на процедуру
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Как нас найти</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span>📍</span> Адрес:
                </p>
                <p className="text-white/80">
                  г. Екатеринбург, ул. Комвузовская, 21В
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span>📞</span> Телефон:
                </p>
                <a
                  href="tel:+79120312266"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-lg"
                >
                  +7 (912) 031-22-66
                </a>
              </div>
              <div>
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <span>🕐</span> Режим работы:
                </p>
                <p className="text-white/80">Ежедневно с 10:00 до 22:00</p>
              </div>
              <div className="pt-4">
                <p className="font-semibold mb-3">Мы в социальных сетях:</p>
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
              </div>
            </div>

            {/* Яндекс Карта с React компонентом */}
            <div className="mt-8 rounded-lg overflow-hidden border border-purple-900/30">
              <YMaps
                query={{
                  apikey: "dcea805a-9699-402c-a9c2-76fd6c8e9ecc",
                  lang: "ru_RU",
                }}
              >
                <Map
                  defaultState={{
                    center: [56.838927, 60.619732], // Точные координаты
                    zoom: 17, // Увеличенный zoom для точного позиционирования
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                  width="100%"
                  height={400}
                  options={{ suppressMapOpenBlock: true }}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                  <Placemark
                    geometry={[56.838927, 60.619732]}
                    modules={["geoObject.addon.balloon"]}
                    properties={{
                      balloonContentHeader: "Sétedi Spa",
                      balloonContentBody:
                        "Спа-салон и телесные практики. Искусство баланса четырёх стихий.",
                      hintContent: "Sétedi Spa",
                    }}
                    options={{
                      iconLayout: "default#image",
                      preset: "islands#violetDotIcon",
                      // iconImageHref: "/map-marker.svg", // Ваш кастомный маркер
                      // iconImageSize: [40, 40],
                      // iconImageOffset: [-20, -40],
                    }}
                  />
                </Map>
              </YMaps>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Онлайн запись</h3>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-purple-600/20 border border-purple-500 rounded-lg text-center"
              >
                <p className="text-lg font-semibold text-purple-400">
                  Спасибо! Ваша заявка отправлена.
                </p>
                <p className="text-white/80 mt-2">
                  Мы свяжемся с вами в ближайшее время.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white/20 focus:border-purple-500 focus:ring-purple-500"
                    }`}
                    style={{ color: "#FFFFFF" }}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white/20 focus:border-purple-500 focus:ring-purple-500"
                    }`}
                    style={{ color: "#FFFFFF" }}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Сообщение (необязательно)"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500 resize-none transition-all"
                    style={{ color: "#FFFFFF" }}
                  ></textarea>
                </div>
                {/* Статус отправки */}
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg ${submitStatus.success ? "bg-green-900/30 text-green-300" : "bg-red-900/30 text-red-300"}`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={
                    !isSubmitting
                      ? {
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                        }
                      : {}
                  }
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full px-6 py-3 font-semibold rounded-lg text-white transition-all ${
                    isSubmitting
                      ? "bg-purple-800 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
