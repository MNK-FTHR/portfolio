/**
 * Eclaircit ou assombrit une couleur.
 * @param {string} color - La couleur en format hexadécimal (e.g. #RRGGBB).
 * @param {number} percent - Le pourcentage pour éclaircir ou assombrir (-100 à 100).
 * @return {string} - La nouvelle couleur en format hexadécimal.
 */
function lightenDarkenColor(color: string, percent: number) {
  // Convertir la couleur hexadécimale en RGB
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5, 7), 16);

  // Ajuster chaque composant de la couleur
  r = Math.min(255, Math.max(0, r + (r * percent) / 100));
  g = Math.min(255, Math.max(0, g + (g * percent) / 100));
  b = Math.min(255, Math.max(0, b + (b * percent) / 100));

  // Convertir les valeurs RGB ajustées en couleur hexadécimale
  const newColor = `#${(
    (1 << 24) +
    (Math.round(r) << 16) +
    (Math.round(g) << 8) +
    Math.round(b)
  )
    .toString(16)
    .slice(1)}`;

  return newColor;
}
export { lightenDarkenColor };
