import { module } from 'angular';
import router from './router.config';
import translate from './translate.config';
import satellizer from './satellizer.config';

const Config = module('app.config', [])
  .config(router)
  .config(translate)
  .config(satellizer)
  .constant('Config', {
    API_URL: 'http://163.17.136.83:8080/api',
  });

export default Config.name;
