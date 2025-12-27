import { useEffect } from "react";

const YandexMetrika = () => {
  useEffect(() => {
    // Проверяем, что код выполняется только на клиенте
    if (typeof window !== "undefined") {
      // Функция загрузки метрики
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        ((k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]));
        k.async = 1;
        k.src = r;
        a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym",
      );

      // Инициализация счетчика (ЗАМЕНИТЕ 105682930 на ваш реальный ID)
      window.ym(105682930, "init", {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true,
      });
    }
  }, []); // Пустой массив зависимостей = выполнится один раз при монтировании

  // Для тега noscript (если отключен JS)
  const noscriptStyle = {
    position: "absolute",
    left: "-9999px",
  };

  return (
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/105682930" // ЗАМЕНИТЕ ID
          style={noscriptStyle}
          alt="Yandex Metrika"
        />
      </div>
    </noscript>
  );
};

export default YandexMetrika;
