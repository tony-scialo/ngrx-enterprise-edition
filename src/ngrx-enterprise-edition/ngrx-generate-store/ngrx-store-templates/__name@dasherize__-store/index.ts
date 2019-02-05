import * as <%= classify(name) %>Actions from './actions';
import * as <%= classify(name) %>Selectors from './selectors';
import * as <%= classify(name) %>State from './state';

export { <%= classify(name) %>StoreModule } from './<%= decamelize(name) %>-store.module';

export { <%= classify(name) %>Actions, <%= classify(name) %>Selectors, <%= classify(name) %>State };
