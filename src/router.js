import { Router } from 'restify-router';
import indexController from './controllers/index-controller';
import keyboardController from './controllers/keyboard-controller';

const router = new Router();

router.get('/', indexController.get);
router.post('/keyboard', keyboardController.post);

export default router;
