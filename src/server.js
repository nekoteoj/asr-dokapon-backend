import restify from 'restify';
import pino from 'restify-pino-logger';
import router from './router';
import { port, serverName } from './config';

const server = restify.createServer({
  name: serverName,
});

server.use(pino());
server.use(restify.plugins.queryParser({ mapParams: false }));
server.use(restify.plugins.bodyParser({ mapParams: false }));

router.applyRoutes(server);

server.listen(port, () => {
  console.log(`${server.name} is listening at ${server.url}`);
});
