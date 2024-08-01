import app from './app';
import { config  } from './config';

app.listen(config.PORT, () => {
  console.info(`Listening to port ${config.PORT}`);
});