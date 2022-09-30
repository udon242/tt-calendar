import { createEvents } from 'ics';

import { schedules } from '@tt-calendar/data/kyoto';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = '京都カグヤライズ 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getKyotoSchedule = () => value;
