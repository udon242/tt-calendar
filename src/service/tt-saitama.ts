import { createEvents } from 'ics';

import { Schedule } from '../types/schedule';
import {
  convertAllDayEventDate,
  convertEventDate,
  convertEventEndDate,
} from '../util/calendar';

const schedules: Schedule[] = [
  {
    title: 'KM東京 - TT彩たま',
    start: '202209101400',
    location: '大田区総合体育館',
  },
  {
    title: 'TT彩たま - 岡山',
    start: '202209231300',
    location: '大田区総合体育館',
  },
  {
    title: 'TT彩たま - 琉球',
    start: '202209241300',
    location: '浦和駒場体育館',
  },
  {
    title: 'KM東京 - TT彩たま',
    start: '202209251700',
    location: 'アリーナ立川立飛',
  },
  {
    title: '岡山 - TT彩たま',
    start: '202210081400',
    location: 'イオンモール岡山',
  },
  {
    title: 'TT彩たま - 琉球',
    start: '202210221400',
    location: '深谷ビッグタートル',
  },
  {
    title: 'TT彩たま - 岡山',
    start: '202210231400',
    location: '深谷ビッグタートル',
  },
  {
    title: '琉球 - 彩たま',
    start: '20221105',
    location: 'SAGAプラザ総合体育館',
    undecided: true,
  },
  {
    title: '岡山 - 彩たま',
    start: '20221126',
    location: '笠岡総合体育館',
    undecided: true,
  },
  {
    title: '琉球 - 彩たま',
    start: '20221217',
    location: '那覇市民体育館',
    undecided: true,
  },
  {
    title: '彩たま - KM東京',
    start: '20221223',
    location: '和光市民文化センターサンアゼリア',
    undecided: true,
  },
  {
    title: '彩たま - 岡山',
    start: '20221224',
    location: '和光市民文化センターサンアゼリア',
    undecided: true,
  },
  {
    title: '彩たま - KM東京',
    start: '20221225',
    location: '和光市民文化センターサンアゼリア',
    undecided: true,
  },
  {
    title: '彩たま - 琉球',
    start: '20230107',
    location: '仙台市宮城野体育館',
    undecided: true,
  },
  {
    title: '岡山 - 彩たま',
    start: '20230204',
    location: '福田公園体育館',
    undecided: true,
  },
  {
    title: 'KM東京 - 彩たま',
    start: '20230211',
    location: 'カルッツかわさき',
    undecided: true,
  },
  {
    title: '琉球 - 彩たま',
    start: '20230212',
    location: '沖縄アリーナ',
    undecided: true,
  },
  {
    title: '彩たま - 岡山',
    start: '20230218',
    location: 'あいハウジングアリーナ松元',
    undecided: true,
  },
  {
    title: '彩たま - 琉球',
    start: '20230225',
    location: '久喜市総合体育館',
    undecided: true,
  },
  {
    title: '彩たま - KM東京',
    start: '20230226',
    location: '久喜市総合体育館',
    undecided: true,
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

export const getTTSaitamaSchedule = () => {
  return value;
};
