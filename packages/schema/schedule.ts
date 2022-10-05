export type Team =
  | 'tt-saitama'
  | 'km-tokyo'
  | 'okayama'
  | 'ryukyu'
  | 'ka-kanagawa'
  | 'top-nagoya'
  | 'kyoto'
  | 'red-elf'
  | 'np-mallets'
  | 'kyusyu';

export type Schedule = {
  start: string;
  location: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore?: 0 | 1 | 2 | 3 | 4;
  awayScore?: 0 | 1 | 2 | 3 | 4;
};
