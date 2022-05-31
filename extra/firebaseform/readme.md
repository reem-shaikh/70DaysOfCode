#### How to store form data in real time firebase database 
Hook teh contact for with firebase backend to store submissions in a firebase database. (firebase - cloud service for database and authentication)

1. go to firebase -> create a new project -> write the project name -> naviagte to `</>` to integrate firebase with our app -> give a nickname to app -> add firebase sdk -> click on `use a <script> tag` -> copy the firebase config information
```bash
  apiKey: "AIzaSyDbrazNQRPx3xhDGD2Zqn82AP3zRmFCjL8",
  authDomain: "contactform-511d8.firebaseapp.com",
  databaseURL: "https://contactform-511d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contactform-511d8",
  storageBucket: "contactform-511d8.appspot.com",
  messagingSenderId: "972073534913",
  appId: "1:972073534913:web:7901463ebe08312663db40"

```
- to use the script tag you need to import the CDN link for firebase into your project first
```bash
 <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>
```

1. In firebase, you cant enter data in database unless your authenticated. go to realtime  database -> create a database  -> choose the nearest database server -> start in locked mode -> navigate to rules (you'll see you have this snippet)
```bash
{
  "rules": {
    ".read": false,
    ".write": false
  }
}
```
> convert it to true and click on publish 
![](1.PNG)

3. Navigate to firestore database -> create database ->start in production mode -> choose firebase location or leave it as default -> enable -> it creates a cloud store for your database 
- navigate to rules -> change `allow read, write: if false;` to `allow read, write: if true;`, here's how the final snippet looks like -> click on publish 
```bash
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

```


