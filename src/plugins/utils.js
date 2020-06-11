import get from 'lodash/get';
import set from 'lodash/set';


export {
  get,
  set,
};

export default {
  install(Vue) {
    const utils = {
      get,
      set,
    };

    set(Vue, 'prototype.$_', utils);
  },
};
