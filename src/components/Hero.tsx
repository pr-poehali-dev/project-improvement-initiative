import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/cd649764-e8a7-4ac7-9225-09a4663fb23a/files/aece7caf-45a3-4ecc-9519-ac3700a5e437.jpg"
          alt="Raf Simons"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.4em] text-sm md:text-base mb-6 opacity-80">
          Антверпен · 1968
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight mb-6 leading-none">
          RAF<br />SIMONS
        </h1>
        <p className="text-base md:text-xl max-w-xl mx-auto opacity-80 font-light tracking-wide">
          Дизайнер, который изменил язык моды. От Антверпена до Dior — история иконы
        </p>
      </div>
    </div>
  );
}