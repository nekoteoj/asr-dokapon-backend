import { Router } from 'restify-router';
import indexController from './controllers/index-controller';

const router = new Router();

router.get('/', indexController.get);

export default router;
