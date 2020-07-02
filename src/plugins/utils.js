import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import keyBy from 'lodash/keyBy';
import isNil from 'lodash/isNil';
import omit from 'lodash/omit';
import map from 'lodash/map';
import get from 'lodash/get';
import set from 'lodash/set';


export {
  orderBy,
  filter,
  keyBy,
  isNil,
  omit,
  map,
  get,
  set,
};

export default {
  install(Vue) {
    const utils = {
      orderBy,
      filter,
      keyBy,
      isNil,
      omit,
      map,
      get,
      set,
    };

    set(Vue, 'prototype.$utils', utils);
  },
};
