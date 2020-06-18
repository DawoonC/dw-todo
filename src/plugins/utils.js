import orderBy from 'lodash/orderBy';
import omit from 'lodash/omit';
import get from 'lodash/get';
import set from 'lodash/set';


export {
  orderBy,
  omit,
  get,
  set,
};

export default {
  install(Vue) {
    const utils = {
      orderBy,
      omit,
      get,
      set,
    };

    set(Vue, 'prototype.$utils', utils);
  },
};
