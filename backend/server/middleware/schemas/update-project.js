// checks request body using something like ajv
module.exports = {
  title: 'update project',
  type: 'object',
  additionalProperties: false,
  properties: {
    children: {
      type: 'object',
      properties: {
        remove: {
          type: 'array',
          items: { pattern: 'id' }
        },
        add: {
          type: 'array',
          items: { pattern: 'id' }
        }
      }
    },
    parent: {
      type: 'object',
      properties: {
        remove: {
          type: 'string',
          pattern: 'id'
        },
        add: {
          type: 'string',
          pattern: 'id'
        }
      }
    }
  }
};
