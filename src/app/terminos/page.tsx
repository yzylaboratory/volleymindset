import Link from "next/link";

export default function TerminosPage() {
  return (
    <main className="mx-auto max-w-2xl px-8 py-20">
      <p className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-red">
        Legal
      </p>
      <h1 className="mb-6 text-4xl font-extrabold">Términos</h1>
      <p className="mb-4 text-base font-medium leading-relaxed text-vm-muted">
        El contenido de Volley Mindset es educativo y de desarrollo atlético.
        No sustituye consejo médico, psicológico o de entrenamiento
        profesional personalizado.
      </p>
      <p className="mb-8 text-base font-medium leading-relaxed text-vm-muted">
        Al usar este sitio aceptas utilizar los recursos de forma responsable
        y respetar la propiedad intelectual de Volley Mindset.
      </p>
      <Link href="/" className="vm-btn-outline inline-flex px-6 py-3 text-sm font-bold uppercase tracking-[0.04em]">
        Volver al inicio
      </Link>
    </main>
  );
}
