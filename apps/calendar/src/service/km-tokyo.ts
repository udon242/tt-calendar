import { createEvents } from 'ics';

import { schedules } from '../data/km-tokyo';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = '木下マイスター東京 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getKMTokyoSchedule = () => value;
