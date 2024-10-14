import app from './app';
import {AppDataSource} from './data_source';


const connection = AppDataSource.initialize()
  .then(() => {
    

    app.listen(3000, () => {
      console.log('Server is runnng');
    });
  })
  .catch(err => {
    console.log(err);
  });
