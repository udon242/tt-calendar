import { createEvents } from 'ics';

import { schedules } from '@tt-calendar/data/tt-saitama';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = 'T.T彩たま 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getTTSaitamaSchedule = () => value;
