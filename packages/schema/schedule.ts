import { z } from 'zod';

export const Team = z.enum([
  'tt-saitama',
  'km-tokyo',
  'okayama',
  'ryukyu',
  'ka-kanagawa',
  'top-nagoya',
  'kyoto',
  'red-elf',
  'np-mallets',
  'kyusyu',
  'undecided',
]);
export type Team = z.infer<typeof Team>;

export const Schedule = z.object({
  start: z.string(),
  location: z.string(),
  homeTeam: Team,
  awayTeam: Team,
  homeScore: z.number().min(0).max(4).optional(),
  awayScore: z.number().min(0).max(4).optional(),
});
export type Schedule = z.infer<typeof Schedule>;
