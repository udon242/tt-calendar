import { createEvents } from 'ics';

import { Schedule } from '../types/schedule';
import {
  convertAllDayEventDate,
  convertEventDate,
  convertEventEndDate,
} from '../util/calendar';

const schedules: Schedule[] = [
  {
    title: 'KM東京 - 彩たま',
    start: '202209101400',
    location: '大田区総合体育館',
  },
  {
    title: '琉球 - KM東京',
    start: '202209171600',
    location: '那覇市民体育館',
  },
  {
    start: '202209231830',
    title: 'KM東京 - 琉球',
    location: 'アリーナ立川立飛',
  },
  {
    start: '202209241700',
    title: 'KM東京 - 岡山',
    location: 'アリーナ立川立飛',
  },
  {
    start: '202209251700',
    title: 'KM東京 - 彩たま',
    location: 'アリーナ立川立飛',
  },
  {
    start: '202210081200',
    title: '琉球 - KM東京',
    location: 'アクシオン福岡',
  },
  {
    start: '202210221400',
    title: 'KM東京 - 岡山',
    location: 'カルッツかわさき',
  },
  {
    start: '202210231200',
    title: 'KM東京 - 琉球',
    location: 'カルッツかわさき',
  },
  {
    start: '20221119',
    undecided: true,
    title: 'KM東京 - TT彩たま',
    location: '仙台市宮城野体育館',
  },
  {
    start: '20221120',
    undecided: true,
    title: 'KM東京 - 琉球',
    location: '仙台市宮城野体育館',
  },
  {
    start: '20221216',
    undecided: true,
    title: '岡山 - KM東京',
    location: '鳴門・大塚スポーツパーク アミノバリューホール',
  },
  {
    start: '20221218',
    undecided: true,
    title: '琉球 - KM東京',
    location: '那覇市民体育館',
  },
  {
    start: '20221223',
    undecided: true,
    title: 'TT彩たま - KM東京',
    location: '和光市民文化センターサンアゼリア',
  },
  {
    start: '20221225',
    undecided: true,
    title: 'TT彩たま - KM東京',
    location: '和光市民文化センターサンアゼリア',
  },
  {
    start: '20230109',
    undecided: true,
    title: '岡山 - KM東京',
    location: '岡山シンフォニーホール',
  },
  {
    start: '20230205',
    undecided: true,
    title: '岡山 - KM東京',
    location: '福田公園体育館',
  },
  {
    start: '20230211',
    undecided: true,
    title: 'KM東京 - TT彩たま',
    location: 'カルッツかわさき',
  },
  {
    start: '20230212',
    undecided: true,
    title: 'KM東京 - 岡山',
    location: 'カルッツかわさき',
  },
  {
    start: '20230218',
    undecided: true,
    title: '琉球 - KM東京',
    location: 'あいハウジングアリーナ松元',
  },
  {
    start: '20230222',
    undecided: true,
    title: '岡山 - KM東京',
    location: '津山総合体育館',
  },
  {
    start: '20230226',
    undecided: true,
    title: 'TT彩たま - KM東京',
    location: '久喜市総合体育館',
  },
];

const CALENDAR_NAME = 'T.T彩たま 日程';

const { value } = createEvents(
  schedules.map((schedule) => ({
    calName: CALENDAR_NAME,
    title: schedule.title,
    start: schedule.undecided
      ? convertAllDayEventDate(schedule.start)
      : convertEventDate(schedule.start),
    end: schedule.undecided
      ? convertAllDayEventDate(schedule.start)
      : convertEventEndDate(schedule.start),
    location: schedule.location,
  }))
);

export const getKMTokyoSchedule = () => {
  return value;
};
