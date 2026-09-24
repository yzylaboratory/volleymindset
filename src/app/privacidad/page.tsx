import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-2xl px-8 py-20">
      <p className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.16em] text-vm-red">
        Legal
      </p>
      <h1 className="mb-6 text-4xl font-extrabold">Política de privacidad</h1>
      <p className="mb-4 text-base font-medium leading-relaxed text-vm-muted">
        Volley Mindset recopila únicamente la información que compartes al
        unirte a la comunidad o al contactarnos (por ejemplo, tu nombre y
        correo). No vendemos datos personales.
      </p>
      <p className="mb-8 text-base font-medium leading-relaxed text-vm-muted">
        Si tienes preguntas sobre tus datos, escribe a{" "}
        <a href="mailto:hello@volleymindset.com" className="underline">
          hello@volleymindset.com
        </a>
        .
      </p>
      <Link href="/" className="vm-btn-outline inline-flex px-6 py-3 text-sm font-bold uppercase tracking-[0.04em]">
        Volver al inicio
      </Link>
    </main>
  );
}
