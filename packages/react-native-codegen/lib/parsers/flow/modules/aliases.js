/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 */
'use strict';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const _require = require('./properties'),
  getObjectProperties = _require.getObjectProperties; // $FlowFixMe there's no flowtype for ASTs

function getAliases(typeDefinition, types) {
  const aliases = {};
  typeDefinition.map(moduleAlias => {
    const aliasName = Object.keys(moduleAlias)[0];
    const typeAnnotation = moduleAlias[Object.keys(moduleAlias)[0]];

    switch (typeAnnotation.type) {
      case 'ObjectTypeAnnotation':
        aliases[aliasName] = _objectSpread(
          {
            type: 'ObjectTypeAnnotation',
          },
          typeAnnotation.properties && {
            properties: getObjectProperties(
              aliasName,
              {
                properties: typeAnnotation.properties,
              },
              aliasName,
              types,
            ),
          },
        );
        return;

      case 'GenericTypeAnnotation':
        if (typeAnnotation.id.name && typeAnnotation.id.name !== '') {
          aliases[aliasName] = {
            type: 'TypeAliasTypeAnnotation',
            name: typeAnnotation.id.name,
          };
          return;
        } else {
          throw new Error(
            `Cannot use "${typeAnnotation.type}" type annotation for "${aliasName}": must specify a type alias name`,
          );
        }

      default:
        // TODO (T65847278): Figure out why this does not work.
        // (typeAnnotation.type: empty);
        throw new Error(
          `Unknown prop type, found "${typeAnnotation.type}" in "${aliasName}"`,
        );
    }
  });
  return aliases;
}

module.exports = {
  getAliases,
};
