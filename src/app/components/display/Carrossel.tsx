'use client'
import Image, { StaticImageData } from "next/image";
import useSlide from "@/app/hooks/useSlide";

interface PropsCarrossel {
  images: (StaticImageData | string)[];
}

export default function Carrossel({ images }: PropsCarrossel) {
  const currentIndex = useSlide({images})
  return (
    <section
      aria-label="Carrossel de imagens do projeto"
      className="relative lg:w-full overflow-hidden lg:my-3"
    >
      <div
        className={`flex ease-in duration-500 transition-slide`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-full lg:max-h-[250px] flex justify-center items-center"
            aria-hidden={index !== currentIndex}
          >
            <Image
              quality={100}
              src={src}
              alt={`Imagem ${index + 1} de ${images.length}`}
              width={400}
              height={230}
              className="w-full h-auto object-contain shadow-lg"
              loading={index === 0 ? "eager" : "lazy"}
              role="img"
            />
          </div>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Exibindo imagem {currentIndex + 1} de {images.length}
      </p>
    </section>
  );
}
