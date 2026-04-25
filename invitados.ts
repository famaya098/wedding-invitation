/**
 * Lista de invitados para la boda de Freddy & Zoila
 * ─────────────────────────────────────────────────
 * Cómo usar:
 *   1. Edita el array INVITADOS con el nombre y cupos de cada persona/familia.
 *   2. Cambia BASE_URL por la URL real de tu sitio en Vercel cuando lo publiques.
 *   3. Ejecuta:  npx ts-node --skip-project invitados.ts
 *   4. Copia los links generados y envíalos por WhatsApp a cada invitado.
 */

const BASE_URL = 'https://tu-boda.vercel.app'; // ← cambia esto al publicar

interface Invitado {
  nombre: string; // nombre que aparecerá en la invitación
  cupos: number;  // cantidad máxima de asistentes que puede confirmar
}

const INVITADOS: Invitado[] = [
  // ── Familia ──────────────────────────────────────────────
  { nombre: 'Mamá y Papá',          cupos: 2 },
  { nombre: 'Familia García',       cupos: 4 },

  // ── Amigos ───────────────────────────────────────────────
  { nombre: 'Carlos Pérez',         cupos: 2 },
  { nombre: 'Ana López',            cupos: 1 },
  { nombre: 'Juan y María Rodríguez', cupos: 2 },

  // ── Compañeros de trabajo ────────────────────────────────
  { nombre: 'Equipo del trabajo',   cupos: 3 },
];

// ─── Generación de links ─────────────────────────────────────────────────────

function generarLink(invitado: Invitado): string {
  const params = new URLSearchParams({
    to: invitado.nombre,
    cupos: String(invitado.cupos),
  });
  return `${BASE_URL}?${params.toString()}`;
}

function generarMensajeWhatsApp(invitado: Invitado): string {
  const link = generarLink(invitado);
  const cuposTexto = invitado.cupos === 1
    ? 'tienes 1 lugar reservado'
    : `tienes ${invitado.cupos} lugares reservados`;

  return (
    `Hola ${invitado.nombre} 💛\n` +
    `Nos complace invitarte a nuestra boda — ${cuposTexto}.\n` +
    `Aquí está tu invitación personal:\n${link}`
  );
}

// ─── Salida ───────────────────────────────────────────────────────────────────

console.log('\n════════════════════════════════════════════════════');
console.log('  INVITACIONES BODA FREDDY & ZOILA — 24 Mayo 2026');
console.log('════════════════════════════════════════════════════\n');

INVITADOS.forEach((inv, i) => {
  console.log(`[${i + 1}] ${inv.nombre} (${inv.cupos} cupo${inv.cupos > 1 ? 's' : ''})`);
  console.log(`    Link: ${generarLink(inv)}`);
  console.log(`    ─ Mensaje WhatsApp ─────────────────────────────`);
  generarMensajeWhatsApp(inv).split('\n').forEach(l => console.log(`    ${l}`));
  console.log('');
});

console.log(`Total de invitados: ${INVITADOS.length}`);
console.log(`Total de cupos: ${INVITADOS.reduce((s, i) => s + i.cupos, 0)}\n`);
