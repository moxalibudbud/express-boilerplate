import app from './app';
import { config  } from '../config';

export default () => {
  app.listen(config.PORT, () => {
    console.info(`Listening to port ${config.PORT}`);
  });
}