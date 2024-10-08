import {Router} from 'express';
import {SayHi} from '../controllers/myControl';

const router: Router = Router();

router.route('/').get(SayHi);

export default router;
