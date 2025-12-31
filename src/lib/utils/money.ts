const getHideCurrencySetting = () => false;

/**
 * Форматирует числовую строку в удобочитаемый формат с разделителями тысяч и символом рубля
 * @param {string} priceString - Строка с числом для форматирования
 * @param {string} [currencySymbol='₽'] - Символ валюты (по умолчанию '₽')
 * @returns {string} Отформатированная строка (например "1 000₽")
 */
export function formatMoney(priceString: string, currencySymbol: string = '₽'): string {
  if (!priceString || priceString.trim() === '') {
    return getHideCurrencySetting() ? '0' : `0${currencySymbol}`;
  }

  const numericString = priceString.replace(/[^\d-]/g, '');

  if (!numericString || numericString === '-' || numericString === '') {
    return getHideCurrencySetting() ? '0' : `0${currencySymbol}`;
  }

  const number = parseInt(numericString, 10);

  if (isNaN(number)) {
    return getHideCurrencySetting() ? '0' : `0${currencySymbol}`;
  }

  const formattedNumber = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);

  const shouldShowCurrency = !getHideCurrencySetting();

  return shouldShowCurrency ? `${formattedNumber}${currencySymbol}` : formattedNumber;
}

export function parseMoney(priceString: string): number {
  if (!priceString) return 0;
  const numericString = priceString.replace(/\D/g, '');

  return parseInt(numericString, 10);
}
