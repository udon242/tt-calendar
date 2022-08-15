import dayjs from 'dayjs';

export const convertEventDate = (
  dateStr: string
): [number, number, number, number, number] => {
  const date = dayjs(dateStr).add(-9, 'hour');
  return [
    date.year(),
    date.month() + 1,
    date.date(),
    date.hour(),
    date.minute(),
  ];
};

export const convertEventEndDate = (
  dateStr: string
): [number, number, number, number, number] => {
  const date = dayjs(dateStr).add(-9, 'hour').add(3, 'hour');
  return [
    date.year(),
    date.month() + 1,
    date.date(),
    date.hour(),
    date.minute(),
  ];
};

export const convertAllDayEventDate = (
  dateStr: string
): [number, number, number] => {
  const date = dayjs(dateStr);
  return [date.year(), date.month() + 1, date.date()];
};
