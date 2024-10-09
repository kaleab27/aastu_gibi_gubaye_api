'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const express_1 = __importDefault(require('express'));
const dummyRoute_1 = __importDefault(require('./routes/dummyRoute'));
const data_source_1 = require('./data_source');
const connection = data_source_1.AppDataSource.initialize()
  .then(() => {
    const app = (0, express_1.default)();
    app.use('/', dummyRoute_1.default);
    // this is a comment
    app.listen(3000, () => {
      console.log('Server is runnng');
    });
  })
  .catch(err => {
    console.log(err);
  });
//# sourceMappingURL=server.js.map
