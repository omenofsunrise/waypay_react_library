export const formatDate = (dateString: string | Date): string => {
  if (!dateString) return '';

  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

  if (isNaN(date.getTime())) return '';

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export function parseDateInput(dateString: string): Date {
  return new Date(dateString);
}

export const formatRelativeTime = (date: Date | string | number): string => {
  let parsedDate: Date;

  try {
    if (date instanceof Date) {
      parsedDate = date;
    } else if (typeof date === 'string' || typeof date === 'number') {
      parsedDate = new Date(date);
    } else {
      throw new Error('Неподдерживаемый тип данных');
    }

    if (isNaN(parsedDate.getTime())) {
      return 'неверная дата';
    }

    const now = new Date();

    if (parsedDate > now) {
      const futureDiff = Math.floor((parsedDate.getTime() - now.getTime()) / 1000);
      const futureMinutes = Math.floor(futureDiff / 60);
      const futureHours = Math.floor(futureMinutes / 60);
      const futureDays = Math.floor(futureHours / 24);

      if (futureDiff < 10) return 'скоро';
      if (futureDiff < 60) return `через ${futureDiff} секунд`;
      if (futureMinutes === 1) return 'через минуту';
      if (futureMinutes < 60) return `через ${futureMinutes} минут`;
      if (futureHours === 1) return 'через час';
      if (futureHours < 24) return `через ${futureHours} часов`;
      if (futureDays === 1) return 'завтра';
      if (futureDays < 7) return `через ${futureDays} дней`;
      return `в будущем`;
    }

    const diffInSeconds = Math.floor((now.getTime() - parsedDate.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInSeconds < 10) {
      return 'только что';
    }

    if (diffInSeconds < 60) {
      const seconds = Math.max(1, diffInSeconds);
      if (seconds === 1) return 'секунду назад';
      if (seconds < 5) return `${seconds} секунды назад`;
      return `${seconds} секунд назад`;
    }

    if (diffInMinutes < 60) {
      if (diffInMinutes === 1) return 'минуту назад';
      if (diffInMinutes < 5) return `${diffInMinutes} минуты назад`;
      return `${diffInMinutes} минут назад`;
    }

    if (diffInHours < 24) {
      if (diffInHours === 1) return 'час назад';
      if (diffInHours < 5) return `${diffInHours} часа назад`;
      return `${diffInHours} часов назад`;
    }

    if (diffInDays < 7) {
      if (diffInDays === 1) return 'вчера';
      if (diffInDays === 2) return 'позавчера';
      return `${diffInDays} дня назад`;
    }

    if (diffInWeeks < 4) {
      if (diffInWeeks === 1) return 'неделю назад';
      if (diffInWeeks < 5) return `${diffInWeeks} недели назад`;
      return `${diffInWeeks} недель назад`;
    }

    if (diffInMonths < 12) {
      if (diffInMonths === 1) return 'месяц назад';
      if (diffInMonths < 5) return `${diffInMonths} месяца назад`;
      return `${diffInMonths} месяцев назад`;
    }

    if (diffInYears === 1) {
      return 'год назад';
    } else if (diffInYears < 5) {
      return `${diffInYears} года назад`;
    } else {
      return `${diffInYears} лет назад`;
    }
  } catch (error) {
    console.error('Ошибка форматирования относительного времени:', error);
    return 'ошибка даты';
  }
};

export const formatExactDate = (date: Date): string => {
  try {
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return 'неверная дата';
  }
};

export const formatRelativeTimeExtended = (
  date: Date | string | number,
  options: {
    useExactAfterMonths?: number;
    includeTime?: boolean;
  } = {},
): string => {
  const { useExactAfterMonths = 6, includeTime = true } = options;

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
  }

  const now = new Date();
  const diffInMonths = Math.floor((now.getTime() - parsedDate.getTime()) / (1000 * 60 * 60 * 24 * 30));

  if (diffInMonths >= useExactAfterMonths) {
    if (includeTime) {
      return formatExactDate(parsedDate);
    }
    return parsedDate.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  }

  return formatRelativeTime(parsedDate);
};
