/**
 * Генерирует цвет на основе строки (чтобы один и тот же текст давал один и тот же цвет)
 */
export const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 60%, 60%)`; // HSL для более приятных цветов
};

/**
 * Генерирует инициалы из ФИО (например, "Иван Фёдоров" → "ИФ")
 */
export const getInitials = (name?: string | null): string => {
  if (!name || !name.trim()) return '?';

  const parts = name.split(' ').filter((part) => part.length > 0);
  const initials = parts.map((part) => part[0].toUpperCase()).join('');

  return initials.slice(0, 2) || '?'; // Берём максимум 2 буквы
};

/**
 * Генерирует DataURL для аватара (можно вставить в img src="...">)
 */
export const generateAvatar = (initials: string, size = 100): string => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (!ctx) return '';

  const bgColor = stringToColor(initials);
  ctx.fillStyle = bgColor;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  const fontSize = size / 2;
  ctx.font = `bold ${fontSize}px "Manrope", Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const verticalOffset = fontSize * 0.1;

  ctx.fillText(initials, size / 2, size / 2 + verticalOffset);

  return canvas.toDataURL('image/png');
};
