import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {firestore} from '../Setup';
import Spinner from '../src/components/Spinner';

export default function CloudFireStoreScreen({navigation}) {
  const usersCollection = firestore().collection('Users');

  const addUser = () => {
    // ID/Key is automatically generated
    usersCollection.add({
      //can use state variables too
      Name: 'John Smith',
      Position: 'Sales',
      Age: 30,
      Location: new firestore.GeoPoint(53.483959, -2.244644),
      Date_Added: firestore.FieldValue.serverTimestamp(),
    });
  };

  const addUserMod = () => {
    // To Manually generate ID or key, use .doc and provide the key,
    //then use .set instead of .add
    // also it can be used to update
    //.set overwrites all data - deletes existing fields for that ID and writes
    //new data using the parameters passed
    // to perform update, use .update instead and pass necessary parameters
    usersCollection.doc('123456').set({
      //can use state variables too
      Name: 'Yohan Smith',
      Position: 'Sales',
      Age: 30,
    });
  };

  const deleteUser = () => {
    usersCollection
      .doc('apdNDqih1zvL7Fso6sue')
      .delete()
      .then(() => {
        alert('Deleted');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.introText}>CloudFirestore Usage examples</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => addUser()}>
          <Text style={styles.buttonText}>Save Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => deleteUser()}>
          <Text style={styles.buttonText}>Delete Data Based on ID</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    margin: 10,
    padding: 15,
  },
  introText: {
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 15,
  },
  buttonStyle: {
    borderRadius: 3,
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
};
