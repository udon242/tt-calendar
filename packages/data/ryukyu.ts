import { Schedule } from '@tt-calendar/schema';
import { allSchedules } from './all';

const TEAM = 'ryukyu';

export const schedules: Schedule[] = allSchedules.filter(
  (schedule) => schedule.homeTeam === TEAM || schedule.awayTeam === TEAM
);
