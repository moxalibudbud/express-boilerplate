import * as cron from 'cron';

export default () => {
  console.log('Scheduled tasks started');
  const dt = cron.sendAt('0 0 * * *');
  console.log(`The job would run at: ${dt.toISO()}`);
};