const { EntitySchema } = require('typeorm');

const ActivityCategory = new EntitySchema({
  name: 'ActivityCategory',
  tableName: 'activity_categories',
  columns: {
    id: {
      type: 'bigint',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
      length: 100,
      nullable: false,
    }, 
    created_at: {
      type: 'timestamp',
      createDate: true,
    },
    updated_at: {
      type: 'timestamp',
      updateDate: true,
    },
  },
  relations: {
    activities: {
      target: 'TripActivity',
      type: 'one-to-many',
      inverseSide: 'category',
    },
  },
});

module.exports = { ActivityCategory };
