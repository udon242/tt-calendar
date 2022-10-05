import { EventAttributes } from 'ics';

import { Schedule } from '@tt-calendar/schema';
import * as calendarUtil from '../util/calendar';
import { Team } from '@tt-calendar/schema/schedule';

const teamNameMap: { [key in Team]: string } = {
  'tt-saitama': 'TT彩たま',
  'km-tokyo': 'KM東京',
  okayama: '岡山',
  ryukyu: '琉球',
  'ka-kanagawa': 'KA神奈川',
  'top-nagoya': '名古屋',
  kyoto: '京都',
  'red-elf': '日本生命',
  'np-mallets': 'ニッペM',
  kyusyu: '九州',
};

const scheduleAdapter = {
  schedulesToEvents: (
    calName: string,
    schedules: Schedule[]
  ): EventAttributes[] =>
    schedules.map((schedule) => ({
      calName,
      title: scheduleAdapter.createTitle(schedule),
      start: calendarUtil.isAllDayEvent(schedule.start)
        ? calendarUtil.convertAllDayEventDate(schedule.start)
        : calendarUtil.convertEventDate(schedule.start),
      end: calendarUtil.isAllDayEvent(schedule.start)
        ? calendarUtil.convertAllDayEventDate(schedule.start)
        : calendarUtil.convertEventEndDate(schedule.start),
      location: schedule.location,
    })),
  createTitle: (schedule: Schedule): string => {
    const homeTeam = teamNameMap[schedule.homeTeam];
    const awayTeam = teamNameMap[schedule.awayTeam];
    const homeScore = scheduleAdapter.createScore(schedule.homeScore);
    const awayScore = scheduleAdapter.createScore(schedule.awayScore);
    return `${homeTeam} ${homeScore}-${awayScore} ${awayTeam}`;
  },
  createScore: (score: number | undefined): string => {
    if (score === 0) {
      return String(score);
    }
    return String(score || '');
  },
};
export default scheduleAdapter;
