import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';

import { getTTSaitamaSchedule } from './service/tt-saitama';

const server: FastifyInstance = Fastify({});
const opts: RouteShorthandOptions = {
  schema: {
    // headers: {
    //   'Content-type': 'text/calendar; charset=utf-8',
    // },
  },
};

server.get('/ttsaitama', opts, async () => {
  return getTTSaitamaSchedule();
});

const start = async () => {
  try {
    await server.listen(8080, '0.0.0.0');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
