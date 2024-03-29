import dayjs from 'dayjs';

import { Team } from '@tt-calendar/schema';

dayjs.locale('ja');

export const extractDate = (rawDate: string) => {
  const date = dayjs(
    rawDate
      .replace(' ', '')
      .replace(/[^0-9]/g, '')
      .slice(0, 12),
    'YYYYMMDDHHss'
  );
  return date.format('YYYYMMDDHHss');
};

export const extractStartTime = (rawData: string) => {
  if (rawData === '未定') {
    return '';
  }
  return rawData.split('\n')[0].replace(':', '');
};

const extractScore = (rawData: string): string[] | undefined => {
  return rawData
    .match(/[0-9] - [0-9]/)?.[0]
    .replace(/ /g, '')
    .split('-');
};

export const extractHomeScore = (rawData: string): number | undefined => {
  const score = extractScore(rawData);
  return score ? Number(score[0]) : undefined;
};

export const extractAwayScore = (rawData: string): number | undefined => {
  const score = extractScore(rawData);
  return score ? Number(score[1]) : undefined;
};

export const convertTeamName = (rawTeamName: string): Team | string => {
  const teamNameMap: { [key in string]: Team } = {
    TT彩たま: 'tt-saitama',
    KM東京: 'km-tokyo',
    岡山: 'okayama',
    琉球: 'ryukyu',
    静岡: 'shizuoka',
    金沢: 'kanazawa',
    KA神奈川: 'ka-kanagawa',
    トップ: 'top-nagoya',
    京都: 'kyoto',
    日本生命: 'red-elf',
    ニッペM: 'np-mallets',
    九州: 'kyusyu',
    RS1位: 'undecided',
    RS2位: 'undecided',
    RS3位: 'undecided',
    SF勝者: 'undecided',
  };
  const teamNameKey = Object.keys(teamNameMap).find((key) =>
    rawTeamName.includes(key)
  );
  return teamNameKey ? teamNameMap[teamNameKey] : 'undecided';
};
