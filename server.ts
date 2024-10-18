import app from './app';
import {AppDataSource} from './data_source';

try {
  const connection = AppDataSource.initialize()
    .then(() => {
      app.listen(3000, () => {
        console.log('Server is runnng');
      });
    })
    .catch(err => {
      console.log(err);
    });
} catch (err) {
  console.log(err);
  AppDataSource.destroy();
  AppDataSource.initialize()
    .then(() => {
      app.listen(3000, () => {
        console.log('Server is runnng');
      });
    })
    .catch(err => {
      console.log(err);
    });
}
