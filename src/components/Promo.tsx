import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const seasons = [
  {
    year: "1995",
    season: "FW95",
    title: "First Collection",
    description: "Дебют. Оверсайз-куртки и грубые ботинки — манифест поколения аутсайдеров.",
  },
  {
    year: "2001",
    season: "SS01",
    title: "Riot Riot Riot",
    description: "Панк-эстетика на подиуме. Узкие брюки, кожа и провокация как язык.",
  },
  {
    year: "2002",
    season: "FW02",
    title: "Woe Onto Those...",
    description: "Мрачный романтизм: длинные пальто, монохром, религиозные отсылки.",
  },
  {
    year: "2003",
    season: "SS03",
    title: "Violence & Perfection",
    description: "Лёгкие ткани и деструктивные детали — красота через разрушение.",
  },
  {
    year: "2009",
    season: "FW09",
    title: "Radioactivity",
    description: "Космическая эра: металлизированные поверхности, футуризм и объём.",
  },
  {
    year: "2014",
    season: "SS14",
    title: "Isolated Heroes",
    description: "Печворк и архивные принты. Молодёжь как герои собственных историй.",
  },
  {
    year: "2017",
    season: "FW17",
    title: "Age of Terror",
    description: "Реакция на мировой хаос: слоистые образы, бронежилеты, тревога в крое.",
  },
  {
    year: "2020",
    season: "SS20",
    title: "Redux",
    description: "Возврат к истокам. Деним, рабочая одежда и архивные силуэты переосмыслены.",
  },
  {
    year: "2022",
    season: "FW22",
    title: "Stereo Stasis",
    description: "Дуализм: мягкость и жёсткость, прошлое и будущее в одном образе.",
  },
  {
    year: "2024",
    season: "SS24",
    title: "Teenage Dreams",
    description: "Последняя коллекция эпохи. Письмо подросткам, которые никогда не повзрослеют.",
  },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/files/7fd85652-1ffd-41bd-93d7-6ac50174d369.jpg"
              alt="Raf Simons runway"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-black/50 z-0" />
        <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
          Одежда · Сезоны
        </h3>

        <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 leading-tight">
          Оверсайз-куртки, джинсы с патчами, пальто и рубашки — каждая коллекция это письмо молодёжи, которая никогда не взрослеет.
        </p>
      </div>

      <section className="bg-neutral-950 px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <p className="uppercase tracking-widest text-neutral-500 text-xs mb-3">Архив</p>
              <h2 className="text-white text-4xl lg:text-6xl font-bold tracking-tight uppercase leading-none">
                Коллекции<br />по годам
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
              Почти 30 лет на подиуме. Каждый сезон — отдельный манифест.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-neutral-800 hidden md:block" />

            <div className="flex flex-col gap-0">
              {seasons.map((s, i) => (
                <motion.div
                  key={s.season}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex gap-6 md:gap-10 group"
                >
                  <div className="flex flex-col items-center md:items-end md:w-[72px] shrink-0 pt-1">
                    <span className="text-neutral-600 text-xs tracking-widest font-mono group-hover:text-neutral-400 transition-colors">
                      {s.year}
                    </span>
                  </div>

                  <div className="hidden md:flex flex-col items-center shrink-0 relative">
                    <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-white transition-colors duration-300 mt-1.5 z-10" />
                  </div>

                  <div className="flex-1 pb-10 border-b border-neutral-900 group-hover:border-neutral-700 transition-colors">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">{s.season}</span>
                    </div>
                    <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-neutral-200 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
