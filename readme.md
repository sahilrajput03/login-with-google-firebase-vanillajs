# Reaedm

## Serving the project

`firebase serve` or `firebase emulators:start`

## Deploy

`firebase deploy`

## Database

Firebase provides two nosql databases: Realtime Database and Firestore.

Firestore is more useful in most usecases.

## Some code

```js
const {serverTimestamp} = firebase.firestore.FieldValue;

thingsCollection = db.collection('things')
thingsCollection.add({
 uid: user.id,
 name: faker.commerce.productName(),
//  createAt: Date.now(),
 createAt: serverTimestamp(), // that ensures consistent time across all devices.
})
```
