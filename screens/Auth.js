import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {auth} from '../Setup';
import {SignupUser, SigninUser, SignOutUser} from '../apiService';

import ListItem from '../src/components/ListItem';
import Spinner from '../src/components/Spinner';

export default function AuthScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    emailAddress: '',
    password: '',
  });

  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signup = () => {
    setIsLoading(true);
    SignupUser(state.emailAddress, state.password)
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signin = () => {
    setIsLoading(true);
    SigninUser(state.emailAddress, state.password)
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signout = () => {
    setIsLoading(true);
    SignOutUser()
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function renderScreen() {
    return (
      <ScrollView>
        {user && (
          <TouchableOpacity style={styles.button} onPress={() => signout()}>
            <Text style={styles.buttonText}>You are Signed In. Sign Out?</Text>
          </TouchableOpacity>
        )}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Signup</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Set Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Set Email"
              keyboardType="email-address"
              value={state.emailAddress}
              onChangeText={(text) => setState({...state, emailAddress: text})}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Set Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Set Password"
              secureTextEntry={true}
              autoCorrect={false}
              value={state.password}
              onChangeText={(pass) => setState({...state, password: pass})}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => signup()}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Sign In</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Set Email"
              keyboardType="email-address"
              value={state.emailAddress}
              onChangeText={(text) => setState({...state, emailAddress: text})}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Set Password"
              secureTextEntry={true}
              autoCorrect={false}
              value={state.password}
              onChangeText={(pass) => setState({...state, password: pass})}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => signin()}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <Spinner
            color="#264653"
            spinnerText="Logging You In. Please Wait. . . "
          />
        </View>
      ) : (
        renderScreen()
      )}
    </SafeAreaView>
  );
}

const styles = {
  form: {
    marginVertical: 15,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderBottomColor: 'grey',
  },
  button: {
    padding: 15,
    margin: 7,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    padding: 10,
    backgroundColor: '#d1d1d1',
  },
  label: {
    marginBottom: 7,
    fontSize: 14,
    color: 'grey',
  },
  inputContainer: {
    marginBottom: 15,
  },
  formTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
};
