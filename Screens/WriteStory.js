import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the name of the author here"
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Write your story here"
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    backgroundColor: '#fa8469',
  },
  headerText: {
    color: '#39b39c',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: 300,
    height: 20,
    backgroundColor: 'white',
    padding: 17,
    marginLeft: 15,
    marginTop: 10,
    fontSize: 15,
  },
  authorBox: {
    width: 300,
    height: 20,
    backgroundColor: 'white',
    padding: 17,
    marginLeft: 15,
    marginTop: 10,
    fontSize: 15,
  },
  storyBox: {
    width: 300,
    height: 225,
    backgroundColor: 'white',
    padding: 17,
    marginLeft: 15,
    marginTop: 10,
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'orange',
    width: 166,
    height: 40,
    marginTop: 10,
    marginLeft: 80,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30
  },
});
