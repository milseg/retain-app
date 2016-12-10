export {App} from './app';
export {routes} from './routes';
import {Store} from './store';
import * as services from './services';
const mapValuesToArray = obj => Object.keys(obj).map(key => obj[key]);

export const providers = [,
  //Question why is Store being imported?
  //Isnt importing StoreHelper in the components enougth?
  Store, //Answer: We need it injected on store-helper and on notes container also
  ...mapValuesToArray(services)
]
