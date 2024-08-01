import { expressRouter } from '../../utils';
import helloRoutes from './hello';

expressRouter.use('/hello', helloRoutes);

export default expressRouter;