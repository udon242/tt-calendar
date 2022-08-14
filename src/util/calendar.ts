import dayjs from 'dayjs';

export const convertEventDate = (
  dateStr: string
): [number, number, number, number, number] => {
  const date = dayjs(dateStr).add(-9, 'hour');
  return [date.year(), date.month(), date.day(), date.hour(), date.minute()];
};
