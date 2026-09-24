# Volley Mindset

Sitio web de **Volley Mindset** — comunidad bilingüe de voleibol enfocada en mentalidad, rendimiento y desarrollo del atleta dentro y fuera de la cancha.

> *More than a game. Build the athlete. Develop the person.*

La UI replica el mockup de diseño en `design-reference/` (colores, tipografía Archivo + Manrope, espaciado y copy en español/inglés del arteboard).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui (primitivos)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en el puerto **43127** |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build en el puerto **43127** |
| `npm run lint` | ESLint |

## Diseño de referencia

El folder `design-reference/` es el export del Design Canvas. No uses `support.js` / `vendor/` en producción — solo como referencia visual.

## Producción

Dominio objetivo: [https://volleymindset.yzylabs.com](https://volleymindset.yzylabs.com)
