import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import type { MiddlewareHandler } from 'hono';

import { getAllSchedule } from './service/all';
import { getTTSaitamaSchedule } from './service/tt-saitama';
import { getKMTokyoSchedule } from './service/km-tokyo';
import { getOkayamaSchedule } from './service/okayama';
import { getRyukyuSchedule } from './service/ryukyu';
import { getKAKanagawaSchedule } from './service/ka-kanagawa';
import { getTopNagoyaSchedule } from './service/top-nagoya';
import { getKyotoSchedule } from './service/kyoto';
import { getRedElfSchedule } from './service/red-elf';
import { getNPMalletsSchedule } from './service/np-mallets';
import { getKyushuSchedule } from './service/kyushu';

const app = new Hono();

// 共通のミドルウェア：Content-typeヘッダーの設定
const setCalendarContentType: MiddlewareHandler = async (c, next) => {
  await next();
  c.header('Content-Type', 'text/calendar; charset=utf-8');
  return c;
};

// ミドルウェアを適用
app.use('*', setCalendarContentType);

// ルートの設定
app.get('/all', (c) => c.body(getAllSchedule(), 200));
app.get('/ttsaitama', (c) => c.body(getTTSaitamaSchedule(), 200));
app.get('/kmtokyo', (c) => c.body(getKMTokyoSchedule(), 200));
app.get('/okayama', (c) => c.body(getOkayamaSchedule(), 200));
app.get('/ryukyu', (c) => c.body(getRyukyuSchedule(), 200));
app.get('/kakanagawa', (c) => c.body(getKAKanagawaSchedule(), 200));
app.get('/topnagoya', (c) => c.body(getTopNagoyaSchedule(), 200));
app.get('/kyoto', (c) => c.body(getKyotoSchedule(), 200));
app.get('/redelf', (c) => c.body(getRedElfSchedule(), 200));
app.get('/npmallets', (c) => c.body(getNPMalletsSchedule(), 200));
app.get('/kyushu', (c) => c.body(getKyushuSchedule(), 200));

// サーバー起動
console.log('Server starting on port 8080...');
serve({
  fetch: app.fetch,
  port: 8080,
  hostname: '0.0.0.0',
}, (info) => {
  console.log(`Server started. port=${info.port}`);
});
