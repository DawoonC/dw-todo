import orderBy from 'lodash/orderBy';
import keyBy from 'lodash/keyBy';
import omit from 'lodash/omit';
import get from 'lodash/get';
import set from 'lodash/set';


export {
  orderBy,
  keyBy,
  omit,
  get,
  set,
};

export default {
  install(Vue) {
    const utils = {
      orderBy,
      keyBy,
      omit,
      get,
      set,
    };

    set(Vue, 'prototype.$utils', utils);
  },
};
