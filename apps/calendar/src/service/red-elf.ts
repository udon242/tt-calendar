import { createEvents } from 'ics';

import { schedules } from '@tt-calendar/data/red-elf';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = '日本生命レッドエルフ 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getRedElfSchedule = () => value;
