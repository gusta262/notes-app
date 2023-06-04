import { Realm } from '@realm/react'
import { AnotationsSchema } from './schemas';

export const getRealm = async () => await Realm.open({
  path: 'my-notes.app',
  schema: [AnotationsSchema],
})