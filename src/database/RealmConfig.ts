import { Realm, createRealmContext } from '@realm/react'
import { AnotationsSchema } from './schemas';

export const RealmContext = createRealmContext({
  schema: [AnotationsSchema],
  inMemory: true,
});

export const getRealm = async () => await Realm.open({
  path: 'Anotations.realm',
  schema: [AnotationsSchema],
  inMemory: true,
})