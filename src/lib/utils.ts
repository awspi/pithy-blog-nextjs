import to from 'await-to-js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc)

export function formatLocalDate(date: dayjs.ConfigType, format: string) {
  return dayjs.utc(date).local().format(format)
}

export { to };

