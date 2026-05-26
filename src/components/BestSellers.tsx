const pairs = [
  {
    name: "Raf Simons Cylon-21",
    colorway: "Grey / Cream",
    year: "2022",
    tag: "#1 Best Seller",
    img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/1e3d89f7-cb02-4c56-a338-36e8f691ffd4.png",
  },
  {
    name: "adidas x Raf Simons Replicant Ozweego",
    colorway: "Cream / Ice Blue",
    year: "2018",
    tag: "Iconic Collab",
    img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/66759ff6-99ab-4b09-9a74-cfe1f15090c8.png",
  },
  {
    name: "adidas x Raf Simons Ozweego III",
    colorway: "Grey / Green",
    year: "2014",
    tag: "Archive Drop",
    img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/6d4e73b5-0dd5-4530-b79a-e2a04aee6919.png",
  },
  {
    name: "adidas x Raf Simons Response Trail",
    colorway: "Red / Blue",
    year: "2015",
    tag: "Cult Classic",
    img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/fd50da44-823c-4c0a-a989-c034d2945e52.png",
  },
  {
    name: "Raf Simons Cylon",
    colorway: "Black / Blue",
    year: "2021",
    tag: "Fan Favourite",
    img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/41083e2b-bf7a-4ac1-aa87-55aa5220b172.png",
  },
  {
    name: "Raf Simons Yellow & Pink Pharaxus",
    colorway: "Yellow / Pink",
    year: "2019",
    tag: "Drop of the Year",
    img: "https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/bucket/093b20ef-a80f-4174-bf5a-ba0518d0e40c.png",
  },
];

export default function BestSellers() {
  return (
    <section id="bestsellers" className="bg-neutral-950 px-6 py-20 lg:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
        <div>
          <p className="uppercase tracking-widest text-neutral-500 text-xs mb-3">Рейтинг</p>
          <h2 className="text-white text-4xl lg:text-6xl font-bold tracking-tight uppercase leading-none">
            Самые<br />Желаемые
          </h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
          Самые культовые и востребованные пары за всё время. От архивных коллабораций с adidas до собственной марки.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
        {pairs.map((p, i) => (
          <div
            key={p.colorway}
            className={`bg-neutral-950 p-8 group hover:bg-neutral-900 transition-colors duration-300 flex flex-col ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-neutral-600 font-bold text-5xl leading-none">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xs uppercase tracking-widest text-neutral-500 border border-neutral-700 px-2 py-1">
                {p.tag}
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center py-6 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full max-h-52 object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-6 border-t border-neutral-800 pt-5">
              <p className="text-white font-semibold uppercase tracking-tight text-base leading-tight mb-1">{p.name}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-neutral-500 text-xs tracking-widest uppercase">{p.colorway}</span>
                <span className="text-neutral-600 text-xs tracking-widest">{p.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}