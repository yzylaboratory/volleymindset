"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  ChecklistIcon,
  CommunityIcon,
  DownloadIcon,
  DropIcon,
  InstagramIcon,
  NextBallIcon,
  TargetIcon,
  TikTokIcon,
  YouTubeIcon,
  ChevronIcon,
} from "@/components/icons";
import {
  COMMUNITY_PILLS,
  HERO_TAGS,
  MENTAL_SKILLS,
  PILLARS,
  RESOURCES,
  SERVICES,
  TESTIMONIALS,
} from "@/lib/content";
import Image from "next/image";

type DownloadState = "idle" | "loading" | "success" | "error";

function ResourceDownloadButton({
  file,
  title,
}: {
  file: string;
  title: string;
}) {
  const [state, setState] = useState<DownloadState>("idle");

  async function handleDownload() {
    setState("loading");
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error("download failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title.toLowerCase().replace(/\s+/g, "-")}.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setState("success");
      window.setTimeout(() => setState("idle"), 2200);
    } catch {
      setState("error");
      window.setTimeout(() => setState("idle"), 2800);
    }
  }

  const label =
    state === "loading"
      ? "Descargando…"
      : state === "success"
        ? "Listo"
        : state === "error"
          ? "Error — reintentar"
          : "Descargar gratis";

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={state === "loading"}
      className="vm-btn-outline inline-flex w-full items-center justify-center gap-2 px-5 py-[13px] text-[13px] font-bold uppercase tracking-[0.04em] disabled:opacity-60"
      aria-live="polite"
    >
      {label}
      {state === "idle" || state === "error" ? <DownloadIcon /> : null}
    </button>
  );
}

function JoinCommunityButton({ className }: { className?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "joined" | "error">(
    "idle",
  );

  async function handleJoin() {
    setState("loading");
    try {
      await new Promise((r) => setTimeout(r, 700));
      setState("joined");
    } catch {
      setState("error");
    }
  }

  if (state === "joined") {
    return (
      <p
        className="mx-auto max-w-md text-[15px] font-semibold text-vm-ink"
        role="status"
      >
        Estás en la lista. Pronto recibirás novedades de la comunidad.
      </p>
    );
  }

  return (
    <button
      type="button"
      onClick={handleJoin}
      disabled={state === "loading"}
      className={className}
      aria-live="polite"
    >
      {state === "loading"
        ? "Uniendo…"
        : state === "error"
          ? "Error — reintentar"
          : "Únete a la comunidad"}
      {state === "idle" || state === "error" ? <ArrowRightIcon /> : null}
    </button>
  );
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="flex min-h-[calc(100vh-84px)] items-stretch max-[1180px]:flex-col">
        <div className="relative z-2 flex w-[46%] max-w-[620px] flex-col justify-center gap-7 py-10 pl-16 max-[1180px]:w-full max-[1180px]:max-w-none max-[1180px]:px-10 max-[1180px]:pt-14 max-[1180px]:pb-10">
          <div className="flex items-center gap-2.5">
            <span className="size-2 bg-vm-red" />
            <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-ink">
              Volleyball • Mindset • Growth
            </span>
          </div>
          <h1 className="text-[clamp(38px,4.6vw,66px)] font-extrabold leading-[1.03]">
            More than a game.
          </h1>
          <p className="font-[family-name:var(--font-manrope)] text-[clamp(19px,1.9vw,25px)] font-bold leading-[1.3] text-vm-red">
            Build the athlete. Develop the person.
          </p>
          <p className="max-w-[480px] text-[17px] font-medium leading-[1.6] text-vm-muted">
            Una comunidad bilingüe enfocada en desarrollar al atleta dentro y
            fuera de la cancha: voleibol, mentalidad, disciplina, educación y
            comunidad.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#comunidad"
              className="vm-btn-primary inline-flex items-center gap-2.5 px-[30px] py-[17px] text-sm font-bold uppercase tracking-[0.05em]"
            >
              Join the community
              <ArrowRightIcon />
            </a>
            <a
              href="#recursos"
              className="vm-btn-outline inline-flex items-center gap-2.5 px-7 py-[17px] text-sm font-bold uppercase tracking-[0.05em]"
            >
              Explore resources
            </a>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-[22px] border-t border-vm-border pt-5">
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#111]"
              >
                <i className="inline-block size-1.5 bg-vm-pink" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-[54%] overflow-hidden [clip-path:polygon(9%_0,100%_0,100%_100%,0%_100%)] max-[1180px]:h-[460px] max-[1180px]:w-full max-[1180px]:[clip-path:none]">
          <Image
            src="/images/coach-vi.jpg"
            alt="Coach Vi, fundadora de Volley Mindset"
            fill
            priority
            className="object-cover object-[50%_18%]"
            sizes="(max-width: 1180px) 100vw, 54vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[rgba(17,17,17,0.82)]" />
          <div className="absolute bottom-[72px] left-16 max-w-[260px] bg-white px-[26px] py-[22px] shadow-[10px_10px_0_rgba(17,17,17,0.85)] max-[1180px]:bottom-8 max-[1180px]:left-10">
            <div className="mb-2 flex items-center gap-2">
              <span className="size-[7px] bg-vm-pink" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-vm-red">
                Fundadora
              </span>
            </div>
            <p className="mb-0.5 text-[15px] font-bold text-[#111]">Coach Vi</p>
            <p className="text-[13px] font-medium leading-[1.4] text-vm-muted">
              Jugadora, coach y estudiante del juego.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntroSection() {
  return (
    <section className="bg-white py-[120px]">
      <div className="vm-container">
        <div className="mb-[88px] flex flex-wrap items-end justify-between gap-10">
          <h2 className="max-w-[700px] text-[clamp(30px,3.4vw,48px)] font-extrabold leading-[1.08]">
            Tu rendimiento comienza antes del primer saque.
          </h2>
          <p className="max-w-[340px] text-[17px] font-medium leading-[1.6] text-vm-muted">
            La preparación mental, física y personal ocurre mucho antes de
            pisar la cancha. Volley Mindset trabaja las tres al mismo tiempo,
            no por separado.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-0 max-[1180px]:grid-cols-1">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.num}
              className={
                i === 0
                  ? "border-r border-vm-border py-0 pr-10 max-[1180px]:border-r-0 max-[1180px]:border-b max-[1180px]:pb-10 max-[1180px]:pr-0"
                  : i === 1
                    ? "border-r border-vm-border px-10 max-[1180px]:border-r-0 max-[1180px]:border-b max-[1180px]:px-0 max-[1180px]:py-10"
                    : "pl-10 max-[1180px]:pl-0 max-[1180px]:pt-10"
              }
            >
              <span className="vm-stroke-num block font-[family-name:var(--font-manrope)] text-[clamp(64px,6.4vw,108px)] font-extrabold leading-[0.85]">
                {pillar.num}
              </span>
              <h3 className="mt-7 mb-3.5 text-[23px] font-bold">{pillar.title}</h3>
              <p className="text-base font-medium leading-[1.6] text-vm-muted">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MentalidadSection() {
  return (
    <section id="mentalidad" className="bg-white pb-[140px]">
      <div className="flex items-stretch max-[1180px]:flex-col">
        <div className="flex w-1/2 flex-col justify-center gap-9 py-0 pr-10 pl-16 max-[1180px]:w-full max-[1180px]:px-10 max-[1180px]:pb-12">
          <div>
            <div className="mb-[18px] flex items-center gap-2.5">
              <span className="size-2 bg-vm-red" />
              <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-red">
                Preparación mental
              </span>
            </div>
            <h2 className="mb-2.5 max-w-[480px] text-[clamp(30px,3.2vw,46px)] font-extrabold leading-[1.08]">
              Entrena tu mente como entrenas tu cuerpo.
            </h2>
            <p className="text-[16.5px] font-semibold text-vm-muted">
              El partido también se juega en tu cabeza.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-7 max-sm:grid-cols-1">
            {MENTAL_SKILLS.map((skill) => (
              <div key={skill.num}>
                <span className="text-[13px] font-extrabold text-vm-red">
                  {skill.num}
                </span>
                <h4 className="my-1.5 text-[16.5px] font-bold">{skill.title}</h4>
                <p className="text-[14.5px] font-medium leading-[1.55] text-vm-muted">
                  {skill.body}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#nosotros"
            className="vm-btn-outline inline-flex w-fit items-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-[0.04em]"
          >
            Explorar entrenamiento mental
            <ArrowRightIcon size={14} />
          </a>
        </div>
        <div className="relative min-h-[620px] w-1/2 overflow-hidden bg-vm-ink max-[1180px]:w-full max-[1180px]:min-h-[420px]">
          <span className="absolute top-0 right-0 size-16 bg-vm-pink [clip-path:polygon(100%_0,0_0,100%_100%)]" />
          <TargetIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/14" />
          <div className="absolute top-10 left-10 flex items-center gap-2">
            <span className="size-[7px] bg-vm-pink" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
              Antes de competir
            </span>
          </div>
          <div className="absolute bottom-10 left-10 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
            Fotografía · concentración prepartido
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiciosSection() {
  return (
    <section id="servicios" className="bg-vm-ink py-[120px] text-white">
      <div className="vm-container">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-10">
          <div>
            <div className="mb-[18px] flex items-center gap-2.5">
              <span className="size-2 bg-vm-pink" />
              <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-pink">
                Nuestros servicios
              </span>
            </div>
            <h2 className="max-w-[620px] text-[clamp(30px,3.2vw,48px)] font-extrabold leading-[1.08]">
              Esto es lo que estamos construyendo.
            </h2>
          </div>
          <a
            href="#comunidad"
            className="vm-btn-ghost-light inline-flex shrink-0 items-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-[0.04em]"
          >
            Conocer más
            <ArrowRightIcon size={14} />
          </a>
        </div>
        <p className="mb-14 max-w-[620px] text-[15.5px] font-medium leading-[1.6] text-white/60">
          Presentamos estas áreas de forma transparente: son las que Volley
          Mindset está desarrollando activamente, no todas operan todavía.
        </p>
        <div className="grid grid-cols-3 gap-x-12 max-[1180px]:grid-cols-1">
          {SERVICES.map((service, i) => (
            <div
              key={service}
              className={`vm-service-row border-t border-white/14 py-7 ${
                i >= 3 ? "border-b border-white/14" : ""
              }`}
            >
              <span className="text-xs font-extrabold text-white/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="my-2.5 text-[17px] font-bold">{service}</h4>
              <span className="inline-block border border-[rgba(231,161,173,0.5)] px-2.5 py-[5px] text-[10.5px] font-bold uppercase tracking-[0.08em] text-vm-pink">
                En desarrollo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RecursosSection() {
  return (
    <section id="recursos" className="bg-vm-warm py-[130px]">
      <div className="vm-container">
        <div className="mx-auto mb-[72px] max-w-[620px] text-center">
          <div className="mb-[18px] flex items-center justify-center gap-2.5">
            <span className="size-2 bg-vm-red" />
            <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-red">
              Gratis para ti
            </span>
          </div>
          <h2 className="mb-4 text-[clamp(30px,3.2vw,46px)] font-extrabold leading-[1.08]">
            Recursos para mejorar tu juego
          </h2>
          <p className="text-[17px] font-medium leading-[1.6] text-vm-muted">
            Descárgalos, imprímelos y empieza a usarlos hoy mismo.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 max-[1180px]:grid-cols-1">
          {RESOURCES.map((resource) => (
            <div
              key={resource.id}
              className="vm-resource border border-vm-border bg-white p-7"
            >
              <div
                className={`vm-resource-cover relative mb-6 aspect-4/5 overflow-hidden ${
                  resource.cover === "ink"
                    ? "bg-vm-ink"
                    : resource.cover === "red"
                      ? "bg-vm-red"
                      : "bg-vm-sand"
                }`}
              >
                <span
                  className={`absolute top-0 right-0 size-[34px] [clip-path:polygon(100%_0,0_0,100%_100%)] ${
                    resource.cover === "sand" ? "bg-vm-red" : "bg-vm-pink"
                  }`}
                />
                <div
                  className={`absolute top-7 left-7 ${
                    resource.cover === "sand" ? "text-vm-ink" : "text-white"
                  }`}
                >
                  {resource.cover === "ink" ? (
                    <ChecklistIcon />
                  ) : resource.cover === "red" ? (
                    <DropIcon />
                  ) : (
                    <NextBallIcon />
                  )}
                </div>
                <span
                  className={`absolute bottom-6 left-7 max-w-[82%] font-[family-name:var(--font-manrope)] text-xl font-extrabold leading-[1.15] ${
                    resource.cover === "sand" ? "text-vm-ink" : "text-white"
                  }`}
                >
                  {resource.title}
                </span>
              </div>
              <span className="mb-3.5 inline-block bg-[rgba(166,63,75,0.08)] px-2.5 py-[5px] text-[11px] font-bold uppercase tracking-[0.1em] text-vm-red">
                {resource.tag}
              </span>
              <h3 className="mb-2.5 text-[19px] font-bold">{resource.title}</h3>
              <p className="mb-[22px] text-[14.5px] font-medium leading-[1.55] text-vm-muted">
                {resource.description}
              </p>
              <ResourceDownloadButton file={resource.file} title={resource.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NosotrosSection() {
  return (
    <section id="nosotros" className="bg-white pt-[130px]">
      <div className="vm-container">
        <div className="mb-24 flex items-center gap-[72px] max-[1180px]:flex-col max-[1180px]:gap-12">
          <div className="relative aspect-4/5 w-[42%] shrink-0 overflow-hidden max-[1180px]:w-full">
            <Image
              src="/images/coach-vi.jpg"
              alt="Coach Vi sosteniendo un reconocimiento All-American"
              fill
              className="object-cover object-[50%_16%]"
              sizes="(max-width: 1180px) 100vw, 42vw"
            />
            <span className="absolute top-5 left-5 inline-block bg-vm-pink px-3 py-[7px] text-[10.5px] font-bold uppercase tracking-[0.1em] text-vm-ink">
              All-American
            </span>
          </div>
          <div className="flex-1">
            <div className="mb-[18px] flex items-center gap-2.5">
              <span className="size-2 bg-vm-red" />
              <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-red">
                Sobre la fundadora
              </span>
            </div>
            <h2 className="mb-2.5 max-w-[520px] text-[clamp(28px,3vw,42px)] font-extrabold leading-[1.1]">
              Meet Coach Vi.
            </h2>
            <p className="mb-[26px] text-[15px] font-bold text-vm-muted">
              Jugadora de voleibol · Acomodadora zurda · Coach · Estudiante del
              juego
            </p>
            <div className="flex max-w-[520px] flex-col gap-3.5">
              <p className="text-base font-medium leading-[1.65] text-[#333]">
                El voleibol ha formado parte de mi vida desde la niñez. A
                través de años de competencia he aprendido mucho más que
                técnica: disciplina, liderazgo, resiliencia, trabajo en equipo
                y la importancia de cuidar al atleta dentro y fuera de la
                cancha.
              </p>
              <p className="text-base font-medium leading-[1.65] text-[#333]">
                Actualmente continúo jugando mientras desarrollo mi experiencia
                como coach y avanzo en mi formación académica relacionada con{" "}
                <strong className="text-[#111]">
                  Exercise Science, rendimiento humano y salud del atleta
                </strong>
                .
              </p>
              <p className="text-base font-medium leading-[1.65] text-[#333]">
                Volley Mindset es mi manera de transformar todo lo que el
                deporte continúa enseñándome en una comunidad que pueda aportar
                a la próxima generación de atletas.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[900px] border-t border-vm-border py-[72px]">
          <p className="mb-8 text-center text-base font-medium leading-[1.7] text-vm-muted">
            Volley Mindset nació de una vida alrededor del voleibol: después de
            más de una década jugando, compitiendo y atravesando distintas
            etapas como atleta, nació la idea de crear un espacio que hablara
            de algo más grande que ganar un partido.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            {(["Player", "Coach", "Education"] as const).map((step) => (
              <span key={step} className="flex items-center gap-3.5">
                <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-vm-ink">
                  {step}
                </span>
                <ChevronIcon className="shrink-0 text-vm-pink" />
              </span>
            ))}
            <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-vm-red">
              Community
            </span>
          </div>
        </div>

        <div className="border-t border-vm-border py-[72px] text-center">
          <span className="relative top-[18px] font-[family-name:var(--font-manrope)] text-[64px] font-extrabold leading-none text-vm-pink">
            “
          </span>
          <p className="mx-auto max-w-[780px] font-[family-name:var(--font-manrope)] text-[clamp(20px,2.2vw,30px)] font-bold leading-[1.35] text-[#111]">
            No se trata solo de jugar mejor. Se trata de construir al atleta
            que quieres llegar a ser.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ComunidadSection() {
  return (
    <section id="comunidad" className="bg-vm-sand py-[130px] text-[#111]">
      <div className="mx-auto max-w-[1120px] px-16 text-center max-[1180px]:px-10">
        <div className="mb-[22px] flex items-center justify-center gap-2.5">
          <span className="size-2 bg-vm-red" />
          <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-red">
            Comunidad
          </span>
        </div>
        <h2 className="mb-[22px] text-[clamp(32px,4vw,58px)] font-extrabold leading-[1.05]">
          No entrenes solo.
        </h2>
        <p className="mx-auto mb-11 max-w-[560px] text-lg font-medium leading-[1.6] text-vm-muted">
          Conecta con atletas y entrenadores que están trabajando en los mismos
          objetivos que tú.
        </p>
        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {COMMUNITY_PILLS.map((pill) => (
            <span
              key={pill}
              className="vm-pill-light px-[18px] py-2.5 text-[13px] font-semibold"
            >
              {pill}
            </span>
          ))}
        </div>
        <div className="relative mb-11 aspect-21/8 overflow-hidden bg-vm-ink">
          <CommunityIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/22" />
          <span className="absolute bottom-[18px] left-6 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
            Fotografía · equipo real
          </span>
        </div>
        <JoinCommunityButton className="vm-btn-primary inline-flex items-center gap-2.5 px-8 py-[17px] text-[14.5px] font-bold uppercase tracking-[0.04em]" />
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-[130px]">
      <div className="vm-container">
        <div className="mx-auto mb-16 max-w-[560px] text-center">
          <div className="mb-[18px] flex items-center justify-center gap-2.5">
            <span className="size-2 bg-vm-pink" />
            <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-red">
              Lo que dicen
            </span>
          </div>
          <h2 className="text-[clamp(28px,3vw,42px)] font-extrabold leading-[1.1]">
            Atletas que ya están entrenando su mentalidad.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-7 max-[1180px]:grid-cols-1">
          {TESTIMONIALS.map((t) => (
            <div key={t.role} className="border border-vm-border p-8">
              <span className="mb-3.5 block font-[family-name:var(--font-manrope)] text-4xl font-extrabold leading-none text-vm-pink">
                “
              </span>
              <p className="mb-[26px] text-[15.5px] font-medium leading-[1.6] text-[#333] italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-11 shrink-0 items-center justify-center font-[family-name:var(--font-manrope)] text-sm font-bold ${
                    t.avatar === "ink"
                      ? "bg-vm-ink text-white"
                      : t.avatar === "red"
                        ? "bg-vm-red text-white"
                        : "bg-vm-pink text-[#111]"
                  }`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14.5px] font-bold">{t.name}</p>
                  <p className="text-[12.5px] font-medium text-[#858585]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="bg-vm-red py-[130px] text-center text-white">
      <div className="mx-auto max-w-[780px] px-16 max-[1180px]:px-10">
        <p className="mb-[22px] text-[12.5px] font-bold uppercase tracking-[0.16em] text-white/78">
          Same sport. Bigger purpose.
        </p>
        <h2 className="mb-[22px] text-[clamp(32px,4.2vw,60px)] font-extrabold leading-[1.05]">
          Tu próximo nivel empieza hoy.
        </h2>
        <p className="mb-11 text-lg font-medium leading-[1.6] text-white/90">
          Entrena tu mente, mejora tu rendimiento y conviértete en un atleta
          más completo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#comunidad"
            className="vm-btn-white inline-flex items-center gap-2.5 px-[34px] py-[18px] text-[15px] font-bold uppercase tracking-[0.04em]"
          >
            Join the community
          </a>
          <a
            href="#recursos"
            className="vm-btn-ghost-light inline-flex items-center gap-2.5 px-8 py-[18px] text-[15px] font-bold uppercase tracking-[0.04em]"
          >
            Explore resources
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-vm-red bg-[#111] text-white">
      <div className="vm-container pt-20 pb-10">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-14 max-[1180px]:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <Image
              src="/images/logo-light.png"
              alt="Volley Mindset"
              width={140}
              height={34}
              className="mb-3.5 h-[34px] w-auto"
            />
            <p className="mb-[18px] text-[11px] font-bold uppercase tracking-[0.1em] text-vm-pink">
              Same sport. Bigger purpose.
            </p>
            <p className="mb-[22px] max-w-[260px] text-sm font-medium leading-[1.6] text-white/55">
              Mentalidad, rendimiento y comunidad para jugadores de voleibol
              que quieren llegar más lejos.
            </p>
            <div className="flex items-center gap-[18px]">
              <a
                href="https://instagram.com"
                className="vm-social text-white/70 transition-colors duration-160"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com"
                className="vm-social text-white/70 transition-colors duration-160"
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://youtube.com"
                className="vm-social text-white/70 transition-colors duration-160"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <div>
            <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.1em] text-white/40">
              Plataforma
            </p>
            <ul className="flex flex-col gap-3">
              {[
                ["#mentalidad", "Mentalidad"],
                ["#servicios", "Servicios"],
                ["#recursos", "Recursos"],
                ["#comunidad", "Comunidad"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[14.5px] font-medium text-white/80"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.1em] text-white/40">
              Compañía
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#nosotros"
                  className="text-[14.5px] font-medium text-white/80"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@volleymindset.com"
                  className="text-[14.5px] font-medium text-white/80"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-[18px] text-xs font-bold uppercase tracking-[0.1em] text-white/40">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/privacidad" className="text-[14.5px] font-medium text-white/80">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="text-[14.5px] font-medium text-white/80">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/12 pt-7">
          <p className="text-[13px] font-medium text-white/40">
            © 2026 Volley Mindset. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
