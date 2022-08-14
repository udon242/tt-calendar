import { createEvents } from 'ics';
import { convertEventDate } from '../util/calendar';

const CALENDAR_NAME = 'T.T彩たま 日程';

const data = [
  {
    title: 'KM東京 - 彩たま',
    start: '202209101400',
  },
  {
    title: '彩たま - 岡山',
    start: '202209231300',
  },
];

const { value } = createEvents(
  data.map((game) => ({
    calName: CALENDAR_NAME,
    title: game.title,
    start: convertEventDate(game.start),
    duration: { hours: 3 },
  }))
);

export const getTTSaitamaSchedule = () => {
  return value;
};
