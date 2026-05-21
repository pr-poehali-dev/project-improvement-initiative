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
  return (
    <div id="history" className="bg-white">
      {/* История */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/files/45f41c39-0ab1-44dc-b2d2-6391f086c5a2.jpg"
            alt="Raf Simons sneakers"
            className="w-full h-full object-cover"
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
          <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              name: "adidas Ozweego",
              year: "2001",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/files/d3183f33-92c3-4c53-84bb-e0b8b7395f73.jpg",
            },
            {
              name: "adidas Replicant",
              year: "2016",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/files/98bbad3a-bc3f-47cb-b293-80658e9a27b7.jpg",
            },
            {
              name: "Raf Simons Antei",
              year: "2019",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/files/8239686d-50e9-4009-ab83-4a42ce03ed02.jpg",
            },
            {
              name: "Raf Simons Cylon",
              year: "2018",
              img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/files/b2cac151-04a6-4d5a-a039-c6a547f98b68.jpg",
            },
          ].map((s) => (
            <div key={s.name} className="group cursor-default">
              <div className="overflow-hidden bg-neutral-100 mb-3 aspect-square">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-neutral-900 font-semibold uppercase tracking-tight text-sm">{s.name}</p>
              <p className="text-neutral-400 text-xs tracking-widest">{s.year}</p>
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