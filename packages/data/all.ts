import { Schedule } from '@tt-calendar/schema';
import history2022 from './archive/2022.json';
import data from './data.json';

export const allSchedules: Schedule[] = [
  ...(history2022 as Schedule[]),
  ...(data as Schedule[]),
];
