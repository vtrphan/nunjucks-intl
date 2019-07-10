/* jshint esnext: true */

import IntlMessageFormat from 'intl-messageformat';
import IntlRelativeFormat from '@formatjs/intl-relativetimeformat/polyfill';

import {registerWith} from './helpers.js';
import defaultLocale from './en.js';

export {registerWith};

export function __addLocaleData(data) {
    IntlMessageFormat.__addLocaleData(data);
    IntlRelativeFormat.__addLocaleData(data);
}

__addLocaleData(defaultLocale);
