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

const SIMPLE_STRUCT = [
  {
    name: 'SpecSampleFuncReturnType',
    object: {
      type: 'ObjectTypeAnnotation',
      properties: [
        {
          optional: false,
          name: 'a',
          typeAnnotation: {
            type: 'BooleanTypeAnnotation',
          },
        },
        {
          optional: false,
          name: 'b',
          typeAnnotation: {
            type: 'NumberTypeAnnotation',
          },
        },
        {
          optional: false,
          name: 'c',
          typeAnnotation: {
            type: 'StringTypeAnnotation',
          },
        },
        {
          optional: false,
          name: 'd',
          typeAnnotation: {
            type: 'ObjectTypeAnnotation',
            properties: [
              {
                optional: false,
                name: 'e',
                typeAnnotation: {
                  type: 'BooleanTypeAnnotation',
                },
              },
              {
                optional: false,
                name: 'f',
                typeAnnotation: {
                  type: 'NumberTypeAnnotation',
                },
              },
              {
                optional: false,
                name: 'g',
                typeAnnotation: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      optional: false,
                      name: 'h',
                      typeAnnotation: {
                        type: 'BooleanTypeAnnotation',
                      },
                    },
                    {
                      optional: false,
                      name: 'i',
                      typeAnnotation: {
                        type: 'NumberTypeAnnotation',
                      },
                    },
                    {
                      optional: false,
                      name: 'j',
                      typeAnnotation: {
                        type: 'StringTypeAnnotation',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          optional: false,
          name: 'k',
          typeAnnotation: {
            type: 'ReservedFunctionValueTypeAnnotation',
            name: 'RootTag',
          },
        },
      ],
    },
  },
];
const SIMPLE_CONSTANTS = [
  {
    name: 'SpecGetConstantsReturnType',
    object: {
      type: 'ObjectTypeAnnotation',
      properties: [
        {
          optional: false,
          name: 'a',
          typeAnnotation: {
            type: 'BooleanTypeAnnotation',
          },
        },
        {
          optional: false,
          name: 'b',
          typeAnnotation: {
            type: 'NumberTypeAnnotation',
          },
        },
        {
          optional: false,
          name: 'c',
          typeAnnotation: {
            type: 'StringTypeAnnotation',
          },
        },
        {
          optional: false,
          name: 'd',
          typeAnnotation: {
            type: 'ObjectTypeAnnotation',
            properties: [
              {
                optional: false,
                name: 'e',
                typeAnnotation: {
                  type: 'BooleanTypeAnnotation',
                },
              },
              {
                optional: false,
                name: 'f',
                typeAnnotation: {
                  type: 'NumberTypeAnnotation',
                },
              },
              {
                optional: false,
                name: 'g',
                typeAnnotation: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      optional: false,
                      name: 'h',
                      typeAnnotation: {
                        type: 'BooleanTypeAnnotation',
                      },
                    },
                    {
                      optional: false,
                      name: 'i',
                      typeAnnotation: {
                        type: 'NumberTypeAnnotation',
                      },
                    },
                    {
                      optional: false,
                      name: 'j',
                      typeAnnotation: {
                        type: 'StringTypeAnnotation',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          optional: false,
          name: 'k',
          typeAnnotation: {
            type: 'ReservedFunctionValueTypeAnnotation',
            name: 'RootTag',
          },
        },
      ],
    },
  },
];
module.exports = {
  SIMPLE_STRUCT,
  SIMPLE_CONSTANTS,
};
