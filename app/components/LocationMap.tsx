// app/components/LocationMap.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ymaps: any;
  }
}

export default function LocationMap() {
  useEffect(() => {
    // Загрузка API Яндекс.Карт
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=c529953b-e5e4-4aee-9a07-bfe1cd426796&lang=ru_RU";
    script.async = true;

    script.onload = () => {
      window.ymaps.ready(initMap);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const map = new window.ymaps.Map("map", {
      center: [56.833211, 60.643158], // Широта, долгота
      zoom: 17,
      controls: ["zoomControl", "fullscreenControl"],
    });

    // Стилизация карты (темная тема)
    map.setType("yandex#darkMap");

    // Кастомный маркер
    const placemark = new window.ymaps.Placemark(
      [56.833211, 60.643158],
      {
        hintContent: "Sétedi | Массажный салон",
        balloonContent: `
          <div style="padding: 12px; color: white;">
            <strong style="color: #7b52b9;">SÉTEDI</strong><br/>
            Отель Freedom<br/>
            ул. Комвузовская, 21В
          </div>
        `,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "/images/map-marker.svg", // твой кастомный маркер
        iconImageSize: [48, 48],
        iconImageOffset: [-24, -48],
      },
    );

    map.geoObjects.add(placemark);
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Фоновая текстура */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Левая колонка - Информация */}
          <div className="space-y-8">
            {/* Бэджик */}
            <div className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-lavender to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative px-8 py-3 bg-black rounded-full border border-lavender/30">
                  <span className="text-lavender tracking-widest text-sm font-medium">
                    ЕКАТЕРИНБУРГ
                  </span>
                </div>
              </div>
            </div>

            {/* Заголовок */}
            <h2 className="font-playfair text-4xl md:text-5xl tracking-wide">
              КАК НАС
              <br />
              <span className="text-lavender">НАЙТИ</span>
            </h2>

            {/* Описание */}
            <div className="space-y-6 max-w-lg">
              <p className="text-gray-300 text-lg leading-relaxed tracking-wide">
                Sétedi расположен в отеле Freedom — месте, где архитектурный
                минимализм встречается с тишиной. Это не просто адрес, а
                сознательный выбор удаленности от суеты.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-lavender/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-lavender" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium tracking-wider mb-1">
                      ОТЕЛЬ FREEDOM
                    </h4>
                    <p className="text-gray-400 text-sm tracking-wider">
                      ул. Комвузовская, 21В
                      <br />
                      Вход отдельный, цокольный этаж
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-lavender/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-lavender" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium tracking-wider mb-1">
                      ВРЕМЯ РАБОТЫ
                    </h4>
                    <p className="text-gray-400 text-sm tracking-wider">
                      Ежедневно 10:00—22:00
                      <br />
                      Предварительная запись
                    </p>
                  </div>
                </div>
              </div>

              {/* Кнопка маршрута */}
              <a
                href="https://yandex.ru/maps/?pt=60.643158,56.833211&z=17&l=map"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 border border-lavender/50 rounded-full hover:bg-lavender/10 transition-all group"
              >
                <span className="text-lavender tracking-widest text-sm">
                  ПОСТРОИТЬ МАРШРУТ
                </span>
                <span className="text-lavender group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Правая колонка - Карта */}
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-lavender/20">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=60.665784,56.855535&z=17&l=map&pt=60.665784,56.855535,pm2vvl"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} // темная тема
                title="Sétedi на карте"
              />
            </div>

            {/* Декоративный элемент */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-lavender/10 to-transparent rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
