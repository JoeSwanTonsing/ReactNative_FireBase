# ReactNative_FireBase
React Native With Firebase 2020 - Dated: 29 November 2020

Basic React Native App with Firebase Integration to showcase how to use firebase products in react-native apps. The examples are, in no way perfect, and doest not have examples for every scenario, but will help you kickstart you development. This project covers only the basic usage of each product. Refer to the official documentation from the React Native Firebase website (links provided below) for more usage and examples.


### Getting Started:

- To get started visit: https://rnfirebase.io

## Firebase Features in this Project:
**1. Authentication**\
⚠️ with Email and Password only\
‼️ more authentication methods to be done\
Docs: https://rnfirebase.io/auth/usage\
✔️ 1.1. Sign Up - Provide Email and Password\
✔️ 1.2. Sign In - Using registered Email and Password\
✔️ 1.3. Logout - Logout signed in user\

**2. Realtime Database:**
Docs: https://rnfirebase.io/database/usage
✔️ 2.1. Write data to Realtime Database
✔️ 2.2. Read data from Realtime Database
✔️ 2.3. Modify/Edit data in Realtime Database
✔️ 2.4. Delete All Records in Realtime Database
✔️ 2.5. Delete Specific Record from Realtime Database

3. **Cloud Firestore:**

- Docs: https://rnfirebase.io/firestore/usage
- 👉🏻 Check addUser() and addUserMod() methods for the below:
-  ✔️ 3.1. Write data to Cloud Firestore
-  ✔️ 3.1.a. using ".add"
-  ✔️ 3.1.b. using ".set"
-  ✔️ 3.2. Update data in Cloud Firestore
-  ✔️ 3.2.a. using ".set" - overrides existing data
-  ✔️ 3.2.b. using ".update" - update only the passed parameter
- 👉🏻 Check deleteUser() for the below:
- ✔️ 3.3 Delete data using a document ID
- 👉🏻 Basics completed. Check the official RNFirebase site for more https://rnfirebase.io/firestore/usage


4. **Cloud Storage:**
- Docs: https://rnfirebase.io/storage/usage
- Example here shows how to deal with image(base64) file
- ✔️ 4.1. Upload File
- ✔️ 4.2. Get file url
- ✔️ 4.3 Add uploaded file to storage bucket and save the url to Realtime Database
- 👉🏻 Basics completed. Check the official RNFirebase site for more https://rnfirebase.io/storage/usage


## Dependencies : Versions used in this project:
1. react-native-cli: 2.0.1

2. @react-native-community/masked-view: ^0.1.10
3. @react-native-firebase/app: ^10.1.0
4. @react-native-firebase/auth: ^10.1.0
5. @react-native-firebase/database: ^10.1.0
6. @react-navigation/native: ^5.8.10
7. @react-navigation/stack: ^5.12.8
8. react: 16.13.1
9. react-native: 0.63.3
10. react-native-gesture-handler: ^1.9.0
11. react-native-reanimated: ^1.13.2
12. react-native-safe-area-context: ^3.1.9
13. react-native-screens: ^2.15.0
14. @react-native-firebase/firestore: ^10.1.0
15. @react-native-firebase/storage: ^10.1.0
