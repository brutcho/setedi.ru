export default function WhoWeAre() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl tracking-wide mb-16">
          ПРОСТРАНСТВО SÉTEDI
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Фото */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] overflow-hidden relative">
              <img
                src="/images/image-1.jpg" // путь к фото
                alt="Мастер Sétedi"
                className="object-cover opacity-90"
              />
              {/* Наложение градиента для атмосферы */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

              {/* Можно оставить текст поверх или убрать */}
              <div className="absolute bottom-8 left-0 right-0 text-center z-10">
                <div className="w-16 h-1 bg-gradient-to-r from-lavender/0 via-lavender to-lavender/0 mx-auto mb-4" />
                <p className="text-gray-200 tracking-widest text-sm">
                  ПОРТРЕТ МАСТЕРА
                </p>
              </div>
            </div>
          </div>

          {/* Текст */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="relative">
              {/*<span className="font-playfair text-6xl text-lavender absolute -left-6 -top-4">
                S
              </span>*/}
              <p className="text-lg leading-relaxed tracking-wide pl-8 pt-8">
                Sétedi — место поиска гармонии. Интервал между движением и
                покоем. Наши мастера — не просто специалисты, а переводчики
                тишины. Каждый сеанс — это диалог на языке прикосновений, где
                любая нота должна быть точной.
              </p>
            </div>

            {/* Разделитель */}
            <div className="mt-16 pt-8 border-t border-gradient-to-r from-lavender/0 via-lavender to-lavender/0">
              <p className="text-gray-400 text-sm tracking-widest">
                ОТЕЛЬ FREEDOM, КОМВУЗОВСКАЯ 21В
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
