import { createEvents } from 'ics';

import { allSchedules } from '@tt-calendar/data/all';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = 'Tリーグ 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, allSchedules)
);
export const getAllSchedule = () => value;
