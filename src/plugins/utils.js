import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import keyBy from 'lodash/keyBy';
import isNil from 'lodash/isNil';
import split from 'lodash/split';
import join from 'lodash/join';
import omit from 'lodash/omit';
import map from 'lodash/map';
import get from 'lodash/get';
import set from 'lodash/set';


function toTitleCase(str) {
  return join(map(split(str, ' '), (word) => (
    `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
  )), ' ');
}


export {
  toTitleCase,
  orderBy,
  filter,
  keyBy,
  isNil,
  split,
  omit,
  join,
  map,
  get,
  set,
};

export default {
  install(Vue) {
    const utils = {
      toTitleCase,
      orderBy,
      filter,
      keyBy,
      isNil,
      split,
      omit,
      join,
      map,
      get,
      set,
    };

    set(Vue, 'prototype.$utils', utils);
  },
};
