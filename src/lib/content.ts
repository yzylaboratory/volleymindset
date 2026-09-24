export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#mentalidad", label: "Mentalidad" },
  { href: "#servicios", label: "Servicios" },
  { href: "#recursos", label: "Recursos" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#nosotros", label: "Sobre nosotros" },
] as const;

export const PILLARS = [
  {
    num: "01",
    title: "Mentalidad",
    body: "Desarrolla concentración, confianza, resiliencia y control emocional.",
  },
  {
    num: "02",
    title: "Rendimiento",
    body: "Mejora fuerza, movilidad, salto, recuperación y preparación física.",
  },
  {
    num: "03",
    title: "Comunidad",
    body: "Aprende y crece junto a otros jugadores y entrenadores.",
  },
] as const;

export const MENTAL_SKILLS = [
  {
    num: "01",
    title: "Confianza",
    body: "Creer en tu preparación cuando el marcador aprieta.",
  },
  {
    num: "02",
    title: "Concentración",
    body: "Mantener el foco punto a punto, sin desconectarte.",
  },
  {
    num: "03",
    title: "Visualización",
    body: "Ensayar mentalmente las jugadas antes de ejecutarlas.",
  },
  {
    num: "04",
    title: "Manejo de presión",
    body: "Herramientas para los momentos de mayor tensión.",
  },
  {
    num: "05",
    title: "Después de un error",
    body: "Volver al siguiente punto sin arrastrar el anterior.",
  },
  {
    num: "06",
    title: "Prepartido",
    body: "Rutinas para llegar enfocado al primer saque.",
  },
] as const;

export const SERVICES = [
  "Desarrollo individual de voleibol",
  "Entrenamiento en grupos pequeños",
  "Mindset y confianza del atleta",
  "Desarrollo de setter y otras posiciones",
  "Volleyball IQ y educación",
  "Comunidad y desarrollo del atleta",
] as const;

export const RESOURCES = [
  {
    id: "game-day-checklist",
    title: "Game-Day Checklist",
    tag: "Mindset · Pre-partido",
    description:
      "Preparación y mindset antes de competir: la checklist para llegar enfocado al primer saque.",
    cover: "ink" as const,
    file: "/resources/game-day-checklist.txt",
  },
  {
    id: "athlete-hydration",
    title: "Athlete Hydration Basics",
    tag: "Salud · Hidratación",
    description: "Educación general sobre hidratación para el atleta de voleibol.",
    cover: "red" as const,
    file: "/resources/athlete-hydration-basics.txt",
  },
  {
    id: "next-ball",
    title: "The Next Ball Mentality",
    tag: "Mindset · Mentalidad",
    description:
      "Guía breve para responder a un error y volver al presente, punto a punto.",
    cover: "sand" as const,
    file: "/resources/next-ball-mentality.txt",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Escribe aquí el comentario real de un jugador o jugadora que haya entrenado contigo.",
    initials: "NA",
    name: "Nombre Apellido",
    role: "Posición · Equipo o nivel",
    avatar: "ink" as const,
  },
  {
    quote:
      "Escribe aquí el comentario real de un entrenador o entrenadora sobre el cambio que vio en su equipo.",
    initials: "NA",
    name: "Nombre Apellido",
    role: "Entrenador/a · Club",
    avatar: "red" as const,
  },
  {
    quote:
      "Escribe aquí el comentario real de un padre, madre o atleta universitario.",
    initials: "NA",
    name: "Nombre Apellido",
    role: "Categoría · Nivel",
    avatar: "pink" as const,
  },
] as const;

export const COMMUNITY_PILLS = [
  "Comunidad",
  "Retos",
  "Experiencias",
  "Consejos",
  "Contenido exclusivo",
] as const;

export const HERO_TAGS = [
  "Mentalidad",
  "Rendimiento",
  "Disciplina",
  "Comunidad",
] as const;
