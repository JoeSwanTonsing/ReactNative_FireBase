import * as React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import ListItem from '../src/components/ListItem';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ListItem
          title="Authentication"
          onPress={() => navigation.navigate('Auth')}
        />
        {/*<ListItem
          title="Realtime Database"
          onPress={() => navigation.navigate('Auth')}
        />
        <ListItem
          title="Cloud Firestore"
          onPress={() => navigation.navigate('Auth')}
        />
        <ListItem
          title="Cloud Storage"
          onPress={() => navigation.navigate('Auth')}
        />
        <ListItem
          title="Ad Mob"
          onPress={() => navigation.navigate('Auth')}
        />
        <ListItem
          title="Push Notifications"
          onPress={() => navigation.navigate('Auth')}
        />*/}
      </ScrollView>
    </SafeAreaView>
  );
}
