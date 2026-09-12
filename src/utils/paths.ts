/**
 * Genera la URL pública normalizada para cualquier asset estático,
 * garantizando compatibilidad absoluta con subdirectorios de GitHub Pages (/personal-website/)
 * y entornos de desarrollo local (/).
 */
export function assetUrl(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
