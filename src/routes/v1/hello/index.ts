import { Response, Request } from 'express';
import { expressRouter } from '../../../utils';

expressRouter.get('/', (req: Request, res: Response) => res.send('Hello World!'));

export default expressRouter;