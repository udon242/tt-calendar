import { EventAttributes } from 'ics';

import { Schedule } from '../types/schedule';
import * as calendarUtil from '../util/calendar';

const scheduleAdapter = {
  schedulesToEvents: (
    calName: string,
    schedules: Schedule[]
  ): EventAttributes[] =>
    schedules.map((schedule) => ({
      calName,
      title: schedule.title,
      start: calendarUtil.isAllDayEvent(schedule.start)
        ? calendarUtil.convertAllDayEventDate(schedule.start)
        : calendarUtil.convertEventDate(schedule.start),
      end: calendarUtil.isAllDayEvent(schedule.start)
        ? calendarUtil.convertAllDayEventDate(schedule.start)
        : calendarUtil.convertEventEndDate(schedule.start),
      location: schedule.location,
    })),
};
export default scheduleAdapter;
