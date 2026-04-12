const TRUST_LOGOS = [
  { name: "OCP Group", src: "/images/trust/ocp-group.svg" },
  { name: "Veolia Transport", src: "/images/trust/veolia-transport.svg" },
  { name: "Ministère de l'Intérieur", src: "/images/trust/ministere-interieur.svg" },
  {
    name: "Ministère des Habous et des Affaires Islamiques",
    src: "/images/trust/ministere-habous.svg",
  },
  { name: "Ministère de la Santé", src: "/images/trust/ministere-sante.svg" },
  { name: "ANEP Maroc", src: "/images/trust/anep-maroc.svg" },
  { name: "AREP (MAROC)", src: "/images/trust/arep-maroc.svg" },
  { name: "APDN", src: "/images/trust/apdn.svg" },
  { name: "OFPPT", src: "/images/trust/ofppt.svg" },
  { name: "LASAMIR Maroc", src: "/images/trust/lasamir-maroc.svg" },
] as const;

export function TrustBadge() {
  const loopItems = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <div className="w-full">
      <p className="mb-6 text-center text-sm uppercase tracking-widest text-gray-500">
        Ils nous font confiance
      </p>

      <div className="relative overflow-x-hidden">
        <div className="flex w-max items-center gap-12 md:gap-16 motion-reduce:animate-none animate-marquee">
          {loopItems.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex shrink-0 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain object-center grayscale opacity-50 transition-all duration-300 cursor-pointer hover:grayscale-0 hover:opacity-100 md:h-10 lg:h-12"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
