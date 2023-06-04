export const AnotationsSchema = {
  name: 'Anotation',
  properties: {
    _id: "string",
    title: "string",
    anotation: "string",
    created_at: "date",
    type: "string",
  },
  primaryKey: '_id',
}