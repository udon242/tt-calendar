import { createEvents } from 'ics';

import { schedules } from '@tt-calendar/data/ka-kanagawa';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = '木下アビエル神奈川 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getKAKanagawaSchedule = () => value;
