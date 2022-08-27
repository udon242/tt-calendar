import { createEvents } from 'ics';

import { schedules } from '../data/red-elf';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = '日本ペイントマレッツ 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getNPMalletsSchedule = () => value;
