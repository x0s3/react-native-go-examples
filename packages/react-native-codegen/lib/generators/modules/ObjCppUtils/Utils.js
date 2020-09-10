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

const _require = require('../Utils'),
  getTypeAliasTypeAnnotation = _require.getTypeAliasTypeAnnotation;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function flatObjects(annotations, forConstants = false, aliases) {
  let objectTypesToFlatten = annotations
    .map(annotation => {
      if (annotation.object.type === 'TypeAliasTypeAnnotation') {
        const alias = getTypeAliasTypeAnnotation(annotation.name, aliases);
        return {
          name: annotation.name,
          properties: alias.properties,
        };
      }

      return {
        name: annotation.name,
        properties: annotation.object.properties,
      };
    })
    .filter(
      annotation =>
        (annotation.name === 'SpecGetConstantsReturnType') === forConstants,
    )
    .filter(
      annotation =>
        annotation.name !== 'SpecGetConstantsReturnType' ||
        annotation.properties.length > 0,
    );
  let flattenObjects = [];

  while (objectTypesToFlatten.length !== 0) {
    const oldObjectTypesToFlatten = objectTypesToFlatten;
    objectTypesToFlatten = [];
    flattenObjects = flattenObjects.concat(
      oldObjectTypesToFlatten.map(object => {
        const properties = object.properties;

        if (properties !== undefined) {
          objectTypesToFlatten = objectTypesToFlatten.concat(
            properties.reduce((acc, curr) => {
              if (
                curr.typeAnnotation &&
                curr.typeAnnotation.type === 'ObjectTypeAnnotation' &&
                curr.typeAnnotation.properties
              ) {
                return acc.concat({
                  properties: curr.typeAnnotation.properties,
                  name: object.name + capitalizeFirstLetter(curr.name),
                });
              }

              return acc;
            }, []),
          );
        }

        return object;
      }),
    );
  }

  return flattenObjects;
}

function getSafePropertyName(property) {
  if (property.name === 'id') {
    return `${property.name}_`;
  }

  return property.name;
}

module.exports = {
  flatObjects,
  capitalizeFirstLetter,
  getSafePropertyName,
};
