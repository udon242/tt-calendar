import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';

import { getTTSaitamaSchedule } from './service/tt-saitama';
import { getKMTokyoSchedule } from './service/km-tokyo';
import { getOkayamaSchedule } from './service/okayama';
import { getRyukyuSchedule } from './service/ryukyu';
import { getKAKanagawaSchedule } from './service/ka-kanagawa';
import { getTopNagoyaSchedule } from './service/top-nagoya';
import { getKyotoSchedule } from './service/kyoto';

const server: FastifyInstance = Fastify({});
const opts: RouteShorthandOptions = {
  schema: {
    // headers: {
    //   'Content-type': 'text/calendar; charset=utf-8',
    // },
  },
};

server.get('/ttsaitama', opts, async () => getTTSaitamaSchedule());
server.get('/kmtokyo', opts, async () => getKMTokyoSchedule());
server.get('/okayama', opts, async () => getOkayamaSchedule());
server.get('/ryukyu', opts, async () => getRyukyuSchedule());
server.get('/kakanagawa', opts, async () => getKAKanagawaSchedule());
server.get('/topnagoya', opts, async () => getTopNagoyaSchedule());
server.get('/kyoto', opts, async () => getKyotoSchedule());

const start = async () => {
  try {
    await server.listen(8080, '0.0.0.0');
    const address = server.server.address();
    const port = typeof address === 'string' ? address : address?.port;
    server.log.info(`Server started. port=${port}}`);
  } catch (err) {
    server.log.error(`Server launch error. err=${JSON.stringify(err)}`);
    process.exit(1);
  }
};
start();
