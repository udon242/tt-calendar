import { createEvents } from 'ics';

import { schedules } from '../data/ryukyu';
import scheduleAdapter from '../adapter/scheduleAdapter';

const CALENDAR_NAME = '琉球アスティーダ 日程';
const { value } = createEvents(
  scheduleAdapter.schedulesToEvents(CALENDAR_NAME, schedules)
);
export const getRyukyuSchedule = () => value;
