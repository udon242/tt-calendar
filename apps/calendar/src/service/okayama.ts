import { createEvents } from 'ics';

import { schedules } from '@tt-calendar/data/okayama';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = '岡山リベッツ 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getOkayamaSchedule = () => value;
