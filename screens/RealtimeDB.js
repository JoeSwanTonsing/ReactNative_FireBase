import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {auth, database} from '../Setup';
import {savePost} from '../apiService';

import Spinner from '../src/components/Spinner';

export default function RealtimeDB() {
  const [id, setId] = useState();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState();
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const makePost = () => {
    setIsLoading(true);
    savePost(id, date, title, message)
      .then((result) => {
        setId(null);
        setTitle('');
        setMessage('');
        alert('Post Saved and Sent');
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const editPost = (item) => {
    setId(item.Id);
    setTitle(item.Title);
    setMessage(item.Message);
    setDate(item.Date);
  };

  const deletePost = (item) => {
    //Add confirmation dialog before deleting
    database()
      .ref('posts/' + item.Id)
      .remove()
      .then(() => {
        alert('Post Deleted');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteAllPost = () => {
    //Add confirmation dialog before deleting
    database()
      .ref('posts')
      .remove()
      .then(() => {
        setPosts([]);
      });
    alert('Delete All Post');
  };

  useEffect(() => {
    setIsLoading(true);
    var dt = new Date().getDate(); //To get the Current Date
    var mth = new Date().getMonth() + 1; //To get the Current Month
    var yr = new Date().getFullYear(); //To get the Current Year
    setDate(dt + '-' + mth + '-' + yr);

    const postRef = database().ref('/posts');
    const onLoadingListener = postRef.on('value', (snapshot) => {
      setPosts([]);
      snapshot.forEach(function (childSnapshot) {
        setPosts((posts) => [...posts, childSnapshot.val()]);
      });
    });
    setIsLoading(false);

    const childRemovedListener = postRef.on('child_removed', (snapshot) => {
      //set Functionality here - like reset state, etc;
      // if deleteAllPosts function was in apiService, you can set setPosts([]); here
      alert('Child Removed');
    });

    const childChangedListener = postRef.on('child_changed', (snapshot) => {
      //set Functionality here - like reset state, etc;
      // if deleteAllPosts function was in apiService, you can set setPosts([]); here
      alert('Child Changed / Updated');
    });

    return () => {
      postRef.off('value', onLoadingListener);
      postRef.off('child_removed', childRemovedListener);
      postRef.off('child_changed', childChangedListener);
    };
  }, []);

  function renderScreen() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.introContainer}>
            <Text style={styles.introTitle}>Realtime Database</Text>
            <Text style={styles.introText}>
              Use the form below to create a post to the FBRDB, Use Title field
              for Title and Post field for body of the post.
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputTitle}
              placeholder="Title"
              autoCapitalize="words"
              autoCompleteType="off"
              autoCorrect={false}
              autoFocus={true}
              multiline={true}
              textAlignVertical="top"
              value={title}
              onChangeText={(titleText) => setTitle(titleText)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputMessage}
              placeholder="Post"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              autoFocus={true}
              multiline={true}
              textAlignVertical="top"
              value={message}
              onChangeText={(messageText) => setMessage(messageText)}
            />
          </View>
          <TouchableOpacity style={styles.postBTN} onPress={() => makePost()}>
            <Text style={styles.btnText}>Post</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.deleteBTN}
            onPress={() => deleteAllPost()}>
            <Text style={styles.btnText}>Delete ALL</Text>
          </TouchableOpacity>

          {posts.map((item, index) => (
            <View style={styles.olderContainer} key={item.Id}>
              <Text style={styles.olderDate} numberOfLines>
                {item.Date}
              </Text>
              <Text style={styles.olderTitle} numberOfLines={1}>
                {item.Title}
              </Text>
              <Text style={styles.olderMessage} numberOfLines={2}>
                {item.Message}
              </Text>
              <TouchableOpacity
                style={styles.deleteBTN}
                onPress={() => editPost(item)}>
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteBTN}
                onPress={() => deletePost(item)}>
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
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
          />
        </View>
      ) : (
        renderScreen()
      )}
    </SafeAreaView>
  );
}

const styles = {
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 10,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  introContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  introTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  introText: {
    marginTop: 15,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputTitle: {
    padding: 15,
    backgroundColor: '#d1d1d1',
    borderRadius: 5,
    //height: 70,
    maxHeight: 65,
  },
  inputMessage: {
    padding: 15,
    backgroundColor: '#d1d1d1',
    borderRadius: 5,
    maxHeight: 200,
  },
  postBTN: {
    padding: 15,
    backgroundColor: '#366dc7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteBTN: {
    padding: 15,
    backgroundColor: '#366dc7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  olderContainer: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 3,
    padding: 5,
  },
  olderDate: {
    color: 'grey',
    marginBottom: 15,
  },
  olderTitle: {
    marginBottom: 7,
  },
  olderMessage: {
    marginBottom: 15,
  },
};
