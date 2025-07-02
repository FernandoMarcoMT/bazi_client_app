import Image from "next/image";
import { CloudDecoration } from "./cloudDecoration";

interface ContentSectionProps {
  id: string;
  title: string;
  imagePlaceholder: string;
  position: "left" | "right";
  content: string;
}

export function ContentSection({ id, title, imagePlaceholder, position, content }: ContentSectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center py-16 md:py-20 overflow-hidden bg-gray-900 w-full"
      aria-labelledby={`${id}-title`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
            position === "right" ? "" : "md:grid-flow-dense"
          }`}
        >
          <div className={`space-y-6 ${position === "right" ? "md:order-1" : "md:order-2"}`}>
            <h2
              id={`${id}-title`}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-400 tracking-tight"
            >
              {title}
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {content}
            </p>
            <button
              className="bg-transparent hover:bg-amber-400/20 text-amber-400 border border-amber-400 font-semibold py-2 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Learn more about this section"
            >
              Learn More
            </button>
          </div>

          <div
            className={`flex justify-center ${position === "right" ? "md:order-2" : "md:order-1"}`}
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-blue-900/30 rounded-lg"></div>
              <Image
                src={imagePlaceholder || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={position === "right"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <CloudDecoration
        className={`absolute ${
          position === "right" ? "top-1/4 -left-20" : "bottom-1/4 -right-20"
        } w-48 h-auto text-amber-400/20 transform ${
          position === "right" ? "rotate-180" : "rotate-0"
        } hidden md:block`}
      />

      {/* Background decorative lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-amber-400/50"
            style={{
              left: 0,
              right: 0,
              top: `${30 + i * 20}%`,
              transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)`,
            }}
          />
        ))}
      </div>
    </section>
  );
}