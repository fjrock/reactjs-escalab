/** Códigos que no son países útiles para buscar ligas (uniones, pseudo-regiones, etc.). */
const EXCLUDE_REGION_CODES = new Set(['EU', 'UN', 'QO', 'XA', 'XB']);

/**
 * Lista amplia de países/territorios en inglés (mismo estilo que name_en de TheSportsDB).
 * La clave gratuita solo devuelve 50 filas en all_countries.php.
 */
function intlFallbackCountries() {
  if (typeof Intl === 'undefined' || typeof Intl.DisplayNames !== 'function') {
    return [];
  }
  const dn = new Intl.DisplayNames(['en'], { type: 'region' });
  const out = [];
  for (let i = 0; i < 26; i += 1) {
    for (let j = 0; j < 26; j += 1) {
      const code = String.fromCharCode(65 + i) + String.fromCharCode(65 + j);
      if (EXCLUDE_REGION_CODES.has(code)) continue;
      let name;
      try {
        name = dn.of(code);
      } catch {
        continue;
      }
      if (!name || name === code || name === 'Unknown Region') continue;
      if (name.includes('Pseudo')) continue;
      out.push({ name_en: name, flag_url_32: null });
    }
  }
  return out;
}

function asCountryArray(raw) {
  if (raw == null) return [];
  return Array.isArray(raw) ? raw : [raw];
}

/**
 * Une países de la API (con banderas) con el catálogo derivado de Intl; sin duplicados por nombre.
 */
export function mergeCountryOptions(apiCountries) {
  const api = asCountryArray(apiCountries).filter((c) => c && c.name_en);
  const byKey = new Map();
  for (const c of api) {
    const key = String(c.name_en).trim().toLowerCase();
    if (!key) continue;
    byKey.set(key, { ...c, name_en: String(c.name_en).trim() });
  }
  for (const c of intlFallbackCountries()) {
    const key = String(c.name_en).trim().toLowerCase();
    if (!byKey.has(key)) byKey.set(key, c);
  }
  return [...byKey.values()].sort((a, b) =>
    a.name_en.localeCompare(b.name_en, 'en', { sensitivity: 'base' })
  );
}
