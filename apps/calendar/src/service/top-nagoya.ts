import { createEvents } from 'ics';

import { schedules } from '@tt-calendar/data/top-nagoya';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = 'トップおとめピンポンズ名古屋 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getTopNagoyaSchedule = () => value;
