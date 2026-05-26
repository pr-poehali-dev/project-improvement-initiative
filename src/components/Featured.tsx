import { useState } from "react";

const BioModal = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <div
      className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-10 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-neutral-400 hover:text-black transition-colors text-xs uppercase tracking-widest"
      >
        Закрыть ✕
      </button>
      <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Биография</p>
      <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 leading-tight">Raf Simons</h2>
      <div className="space-y-4 text-neutral-600 text-sm leading-relaxed">
        <p>
          Раф Симонс родился 12 января 1968 года в Непелте, Бельгия. Изучал промышленный дизайн в Королевской академии изящных искусств в Антверпене. В начале карьеры работал дизайнером мебели в студии Мартина Маржелы.
        </p>
        <p>
          В 1995 году основал собственный бренд Raf Simons, дебютировав с мужской коллекцией одежды. Его ранние работы вдохновлены молодёжными субкультурами, панк-роком и постиндустриальной эстетикой — Joy Division, New Order, питтсбургская сцена.
        </p>
        <p>
          В 2001 году Симонс начал легендарное сотрудничество с adidas, создав серию кроссовок, переосмысляющих архивные силуэты бренда. Ozweego, Stan Smith, Response Trail — каждая модель стала культовой и перевернула представление о «дизайнерских кроссовках».
        </p>
        <p>
          С 2005 по 2012 год — творческий директор Jil Sander. В 2012–2015 — творческий директор Christian Dior, где создал одни из самых обсуждаемых кутюрных коллекций десятилетия. В 2016–2018 — творческий директор Calvin Klein.
        </p>
        <p>
          В 2020 году Симонс стал содиректором Prada совместно с Миуччей Прадой. Это партнёрство стало событием в мире моды — два равноправных творческих голоса одного из крупнейших домов.
        </p>
        <p>
          Параллельно Raf Simons продолжает развивать собственный бренд с коллекциями одежды и кроссовками — Cylon, Antei, Pharaxus, Ultrasceptre и другими моделями, ставшими объектами культа у коллекционеров по всему миру.
        </p>
      </div>
    </div>
  </div>
);

const sneakers = [
  { name: "Raf Simons x adidas Ozweego", year: "2001", note: "Первая культовая коллаборация" },
  { name: "Raf Simons x adidas Stan Smith", year: "2013", note: "Минимализм переосмысленный" },
  { name: "Raf Simons x adidas Response Trail", year: "2015", note: "Futuretech силуэт" },
  { name: "Raf Simons x adidas Spirit High", year: "2017", note: "Техно-эстетика 90-х" },
  { name: "Raf Simons Cylon", year: "2018", note: "Собственная марка" },
  { name: "Raf Simons Antei", year: "2019", note: "Минималистичный силуэт" },
  { name: "Raf Simons Pharaxus", year: "2020", note: "Архивные формы" },
  { name: "Raf Simons x Eastpak Sleek", year: "2021", note: "Urban коллаб" },
  { name: "Raf Simons Ultrasceptre", year: "2022", note: "Гиперструктурный дизайн" },
  { name: "Raf Simons Raf Orion", year: "2023", note: "Космическая эстетика" },
];

export default function Featured() {
  const [bioOpen, setBioOpen] = useState(false);
  return (
    <div id="history" className="bg-white">
      {bioOpen && <BioModal onClose={() => setBioOpen(false)} />}
      {/* История */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
        <div className="flex-1 h-[300px] lg:h-[500px] mb-8 lg:mb-0 lg:order-2 flex items-center justify-center">
          <img
            src="https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/15fe6ab3-72ec-401d-b382-4acd285e95ce.png"
            alt="Adidas x Raf Simons Ozweego"
            className="w-full max-w-lg h-full object-contain"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">История / 1968–наши дни</h3>
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
            Раф Симонс родился в Бельгии, учился промышленному дизайну. В 1995 году — первая коллекция одежды. Потом Jil Sander, Christian Dior, Calvin Klein, Prada.
          </p>
          <p className="text-base text-neutral-500 mb-8 max-w-lg leading-relaxed">
            Его эстетика — это столкновение подростковой субкультуры с высокой модой. Joy Division, панк-рок и архитектурный крой в одном пространстве.
          </p>
          <button
            onClick={() => setBioOpen(true)}
            className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest"
          >
            Читать биографию
          </button>
        </div>
      </div>

      {/* Коллаборации */}
      <div id="collabs" className="bg-neutral-950 px-6 py-20 lg:py-32">
        <h2 className="text-white uppercase tracking-widest text-sm mb-12">Коллаборации</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800">
          {[
            { brand: "adidas", years: "2001–2022", desc: "Революционные переосмысления Ozweego, Stan Smith, Spirit — спорт встречает концептуальное мышление" },
            { brand: "Christian Dior", years: "2012–2015", desc: "Творческий директор Dior — переосмысление ДНК дома через призму молодёжной культуры" },
            { brand: "Calvin Klein", years: "2016–2018", desc: "Возрождение американского минимализма с европейской концептуальностью" },
            { brand: "Eastpak", years: "2006–2023", desc: "Культовые рюкзаки и сумки в авангардных конструкциях сезон за сезоном" },
            { brand: "Prada", years: "2020–наст.", desc: "Содиректор — синтез итальянского наследия и северной холодности" },
            { brand: "Fred Perry", years: "2008–2015", desc: "Британский дух переосмыслен через субкультурный код Симонса" },
          ].map((c) => (
            <div key={c.brand} className="bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors duration-300">
              <h3 className="text-white text-xl font-bold mb-1 uppercase tracking-tight">{c.brand}</h3>
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">{c.years}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Фото кроссовок */}
      <div className="bg-white px-6 py-20 lg:py-32">
        <h2 className="uppercase tracking-widest text-sm text-neutral-500 mb-12">Iconic Sneakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {[
            {
              name: "Replicant Ozweego",
              colorway: "Red / White",
              year: "2018",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/a75f3296-c4f9-4b89-8e04-91bf16b9b56c.png",
            },
            {
              name: "Replicant Ozweego",
              colorway: "Teal / Black",
              year: "2018",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/b81e0148-de31-4582-a184-c9401921da9d.png",
            },
            {
              name: "Replicant Ozweego",
              colorway: "White / Black",
              year: "2018",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/6b01d54a-16d0-4e01-869f-2fa1431041e5.png",
            },
            {
              name: "Replicant Ozweego",
              colorway: "Yellow / Sand",
              year: "2018",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/82812831-b25a-434e-a5a6-18b597409b70.png",
            },
            {
              name: "Replicant Ozweego",
              colorway: "Black / Yellow",
              year: "2018",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/ab608cef-81d9-4755-8fd4-59e9771590c2.png",
            },
          ].map((s) => (
            <div key={s.colorway} className="group cursor-default">
              <div className="overflow-hidden bg-neutral-100 mb-3 aspect-square">
                <img
                  src={s.img}
                  alt={`${s.name} ${s.colorway}`}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-neutral-900 font-semibold uppercase tracking-tight text-sm">{s.name}</p>
              <p className="text-neutral-400 text-xs tracking-widest mt-0.5">{s.colorway} · {s.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Кроссовки */}
      <div id="sneakers" className="bg-white px-6 py-20 lg:py-32 border-t border-neutral-100">
        <h2 className="uppercase tracking-widest text-sm text-neutral-500 mb-12">Кроссовки · Хронология</h2>
        <div className="divide-y divide-neutral-200">
          {sneakers.map((s) => (
            <div key={s.name} className="flex items-baseline justify-between py-5 group cursor-default">
              <div className="flex items-baseline gap-6">
                <span className="text-neutral-300 font-bold text-2xl lg:text-4xl w-16 shrink-0">{s.year}</span>
                <div>
                  <p className="text-neutral-900 font-semibold text-base lg:text-lg uppercase tracking-tight group-hover:text-black transition-colors">{s.name}</p>
                  <p className="text-neutral-400 text-sm mt-0.5">{s.note}</p>
                </div>
              </div>
              <span className="text-neutral-300 text-xs uppercase tracking-widest hidden md:block">Sneaker</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}