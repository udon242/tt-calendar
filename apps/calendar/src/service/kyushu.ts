import { createEvents } from 'ics';

import { schedules } from '@tt-calendar/data/kyushu';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = '九州アスティーダ 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getKyushuSchedule = () => value;
